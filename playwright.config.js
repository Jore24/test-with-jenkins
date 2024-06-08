import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 100000,
  projects: [
    {
      name: "chromium",
      use: {
        channel: 'chrome',
        headless: false,
      },
    },
  ]
});