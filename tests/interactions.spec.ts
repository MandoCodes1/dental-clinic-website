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
