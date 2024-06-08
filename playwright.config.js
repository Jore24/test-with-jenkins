import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 100000,
  projects: [
    {
      name: "Google Chrome",
      use: {
        channel: 'chrome',
        headless: false,
      },
    },
  ]
});