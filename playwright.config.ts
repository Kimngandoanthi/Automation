import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  retries: 1,
  timeout: 3000000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    baseURL: 'https://dummyapi.io/data/v1/',
    // extraHTTPHeaders: {
    //     "app-id": "621f1ad6df839b28e4b77ddc"
    // },
    video: 'on',
    screenshot: 'on',
    trace: 'on'
  },
};
export default config;