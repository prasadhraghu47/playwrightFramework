import { Page } from 'playwright';

export class PageObjectWorld {
  constructor(private page: Page) {}

  getPage<T>(PageObjectClass: new (page: Page) => T): T {
    return new PageObjectClass(this.page);
  }
}