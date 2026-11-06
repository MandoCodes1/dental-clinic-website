import { test, expect, type Page } from '@playwright/test';

// Each test reads the state a screen reader would get (aria-expanded,
// aria-label) next to what is on screen, since the bugs these guard against
// were the two drifting apart.

async function expectMenu(page: Page, controls: string, open: boolean) {
  const button = page.locator(`button[aria-controls="${controls}"]`);
  await expect(button).toHaveAttribute('aria-expanded', String(open));
  await expect(page.locator(`#${controls}`)).toBeVisible({ visible: open });
}

test.describe('desktop dropdowns', () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test('hover keeps aria-expanded in step with the visible menu', async ({ page }) => {
    await page.goto('/');
    await page.locator('button[aria-controls="more-menu"]').hover();
    await expectMenu(page, 'more-menu', true);
    await page.mouse.move(5, 700);
    await expectMenu(page, 'more-menu', false);
  });

  test('clicking inside an open menu, off its links, keeps it open', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('button[aria-controls="treatments-menu"]');
    await button.click();
    await expectMenu(page, 'treatments-menu', true);
    // The menu's padding and the divider are not focusable, so focus leaves the
    // button for nowhere in particular; that must not read as leaving the menu.
    const box = (await page.locator('#treatments-menu').boundingBox())!;
    await page.mouse.click(box.x + 3, box.y + 3);
    await expectMenu(page, 'treatments-menu', true);
    await page.locator('#treatments-menu div.border-t').click({ force: true });
    await expectMenu(page, 'treatments-menu', true);
    // A click outside still closes it.
    await page.mouse.click(5, 700);
    await expectMenu(page, 'treatments-menu', false);
  });

  test('tabbing past the last link closes a keyboard-opened menu', async ({ page }) => {
    await page.goto('/');
    await page.locator('button[aria-controls="treatments-menu"]').focus();
    await page.keyboard.press('Enter');
    await expectMenu(page, 'treatments-menu', true);
    const links = await page.locator('#treatments-menu a').count();
    for (let i = 0; i <= links; i++) await page.keyboard.press('Tab');
    await expectMenu(page, 'treatments-menu', false);
  });

  test('Escape closes the menu and returns focus to its button', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('button[aria-controls="treatments-menu"]');
    await button.focus();
    await page.keyboard.press('Enter');
    await page.keyboard.press('Escape');
    await expectMenu(page, 'treatments-menu', false);
    await expect(button).toBeFocused();
  });
});

test.describe('mobile menu', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('the toggle label follows the menu state and Escape closes it', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#menu-toggle');
    await expect(toggle).toHaveAttribute('aria-label', 'Abrir menú');
    await toggle.click();
    await expect(page.locator('#mobile-menu')).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(toggle).toHaveAttribute('aria-label', 'Cerrar menú');
    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-menu')).toBeHidden();
    await expect(toggle).toHaveAttribute('aria-label', 'Abrir menú');
    await expect(toggle).toBeFocused();
  });
});

test.describe('home WhatsApp form', () => {
  test('whitespace-only fields do not open WhatsApp', async ({ page }) => {
    await page.goto('/');
    await page.fill('#visit-name', '   ');
    await page.fill('#visit-message', '   ');
    let opened = false;
    page.on('popup', () => (opened = true));
    await page.click('#visit-form button[type="submit"]');
    await expect(page.locator('#visit-name')).toHaveValue('');
    expect(await page.locator('#visit-name').evaluate((el: HTMLInputElement) => el.validity.valid)).toBe(false);
    expect(opened).toBe(false);
  });

  test('a filled form opens WhatsApp with the name and message', async ({ page }) => {
    await page.goto('/');
    await page.fill('#visit-name', 'Ana');
    await page.fill('#visit-message', 'Quería una revisión');
    const [popup] = await Promise.all([page.waitForEvent('popup'), page.click('#visit-form button[type="submit"]')]);
    const text = new URL(popup.url()).searchParams.get('text') ?? '';
    expect(text).toContain('Hola, soy Ana.');
    expect(text).toContain('Quería una revisión');
  });
});

// For every review card: is the quote clipped, and is its "Leer más" button
// shown? A collapsed quote must have a button exactly when it is clipped.
async function reviewToggleMismatches(page: Page) {
  return page.evaluate(() => {
    const out: string[] = [];
    document.querySelectorAll<HTMLElement>('[data-review-toggle]').forEach((button) => {
      if (button.getAttribute('aria-expanded') === 'true') return;
      const quote = document.getElementById(button.getAttribute('aria-controls') ?? '')!;
      const clipped = quote.scrollHeight > quote.clientHeight + 1;
      const shown = !button.classList.contains('hidden');
      if (clipped !== shown) out.push(`${quote.id}: clipped=${clipped} shown=${shown}`);
    });
    return out;
  });
}

test.describe('review "Leer más" toggles', () => {
  for (const [from, to] of [
    [768, 1024],
    [1024, 768],
    [390, 1280],
  ]) {
    test(`stay matched to clipping after resizing from ${from}px to ${to}px`, async ({ page }) => {
      await page.setViewportSize({ width: from, height: 900 });
      await page.goto('/resenas');
      await expect.poll(() => reviewToggleMismatches(page)).toEqual([]);
      await page.setViewportSize({ width: to, height: 900 });
      await expect.poll(() => reviewToggleMismatches(page)).toEqual([]);
    });
  }

  test('stay matched after a view-transition navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');
    await page.locator('a[href="/resenas"].btn-outline').click();
    await page.waitForURL('**/resenas');
    await expect.poll(() => reviewToggleMismatches(page)).toEqual([]);
    await page.setViewportSize({ width: 768, height: 900 });
    await expect.poll(() => reviewToggleMismatches(page)).toEqual([]);
  });

  test('expand a clipped review and collapse it again', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/resenas');
    const button = page.locator('[data-review-toggle]:not(.hidden)').first();
    const quote = page.locator(`#${await button.getAttribute('aria-controls')}`);
    await button.click();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(button).toHaveText('Leer menos');
    expect(await quote.evaluate((q) => q.scrollHeight <= q.clientHeight + 1)).toBe(true);
    await button.click();
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(button).toHaveText('Leer más');
  });
});
