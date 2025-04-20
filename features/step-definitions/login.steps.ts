import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Page } from 'playwright';
import { CustomWorld } from '../../world/CustomWorld';

Given('I navigate to the login page', async function (this: CustomWorld) {
  this.page = await this.context.newPage();
  await this.page.goto('https://example.com/login');
});

When('I enter valid credentials', async function (this: CustomWorld) {
  await this.page.fill('#username', 'testuser');
  await this.page.fill('#password', 'password123');
  await this.page.click('#loginBtn');
});

Then('I should be redirected to the dashboard', async function (this: CustomWorld) {
  await this.page.waitForSelector('#dashboard');
  const url = this.page.url();
  expect(url).to.include('/dashboard');
});