import { defineConfig, devices } from '@playwright/test';

// Interaction tests for the header menus, the review toggles and the home
// WhatsApp form. They drive the built site through `astro preview`, because
// several of these scripts only misbehave after a full build (hashed assets,
// view transitions, real layout widths), which unit tests would not catch.
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4321',
    ...devices['Desktop Chrome'],
  },
  webServer: {
    command: 'npm run build && npm run preview -- --host 127.0.0.1 --port 4321',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
