import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { PageObjectWorld } from './PageObjectWorld';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  pageFactory!: PageObjectWorld;

  constructor(options: any) {
    super(options);
  }

  async init() {
    const headless = this.parameters.headless ?? false;
    this.browser = await chromium.launch({ headless });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.pageFactory = new PageObjectWorld(this.page);
  }

  async close() {
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);