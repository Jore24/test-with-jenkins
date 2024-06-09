import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 100000,
  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
  ]
});