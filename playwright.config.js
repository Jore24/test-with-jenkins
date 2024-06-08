import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], headless: true },
    },
  ]
});