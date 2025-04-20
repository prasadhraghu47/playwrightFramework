import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: any) {
    super(options);
  }

  async init() {
    const headlessMode = this.parameters.headless ?? false;
    this.browser = await chromium.launch({ headless: headlessMode });
    this.context = await this.browser.newContext();
  }

  async close() {
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);