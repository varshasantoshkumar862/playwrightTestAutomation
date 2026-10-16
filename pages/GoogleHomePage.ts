import { expect, type Page } from '@playwright/test';

export class GoogleHomePage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('https://www.google.com');
  }

  async expectLogoVisible(): Promise<void> {
    await expect(this.page.getByRole('img', { name: 'Google' })).toBeVisible();
  }
}
