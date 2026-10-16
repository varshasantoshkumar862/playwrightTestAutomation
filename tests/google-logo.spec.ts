import { test } from '@playwright/test';
import { GoogleHomePage } from '../pages/GoogleHomePage';

test('opens Google and verifies the logo is visible', async ({ page }) => {
  const googleHomePage = new GoogleHomePage(page);

  await googleHomePage.goto();
  await googleHomePage.expectLogoVisible();
});
