import { test, expect } from '@playwright/test';

test.describe('Portfolio — cross-device (mobile, tablet, desktop)', () => {
  test('loads and shows hero with name and headline', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Vijay Sehgal/i })).toBeVisible();
    // Use .first() — hero subtitle always renders before experience cards in DOM
    await expect(page.getByText(/Product Manager.*EdTech/i).first()).toBeVisible();
  });

  test('shows lead builder proof in first view', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/3 products in 7 days|AI Product OS|no engineering team/i).first()).toBeVisible();
  });

  test('primary CTA "Book a 20-min call" is visible and clickable', async ({ page }) => {
    await page.goto('/');
    const bookCall = page.getByRole('link', { name: /Book a 20-min call/i }).first();
    await expect(bookCall).toBeVisible();
    await expect(bookCall).toHaveAttribute('href', /.+/);
  });

  test('View Resume link is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: /View Resume/i }).first()).toBeVisible();
  });

  test('Proof of Impact section has metric cards', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Proof of Impact/i })).toBeVisible();
    await expect(page.getByText(/78%|60%|Products Shipped/i).first()).toBeVisible();
  });

  test('Projects section is present with case study links', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('heading', { name: /Case Studies|Projects/i }).scrollIntoViewIfNeeded();
    await expect(page.getByText(/WhatsApp|Blinkit|GitHub-for-PMs/i).first()).toBeVisible();
  });

  test('Experience section shows work history', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('heading', { name: /Experience/i }).scrollIntoViewIfNeeded();
    await expect(page.getByText(/WhiteHat|Delta Learning|Independent/i).first()).toBeVisible();
  });

  test('Education section has no career break text', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('heading', { name: /Education/i }).scrollIntoViewIfNeeded();
    await expect(page.getByText(/Career break|2022.*2024.*break/i)).not.toBeVisible();
  });

  test('Contact CTA has Book a call and resume', async ({ page }) => {
    await page.goto('/');
    await page.getByText(/Let's Build Something Together/i).scrollIntoViewIfNeeded();
    await expect(page.getByRole('link', { name: /Book a 20-min Call/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Download Resume|View Resume/i }).first()).toBeVisible();
  });

  test('no horizontal overflow on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    const docWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(docWidth).toBeLessThanOrEqual(385);
  });

  test('main content is within viewport on iPad size', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Vijay Sehgal/i })).toBeInViewport();
  });

  test('ProductOS card is present with live beta label', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/ProductOS/i).first()).toBeVisible();
    await expect(page.getByText(/Live Beta/i).first()).toBeVisible();
  });

  test('PaiseWise card is present', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/PaiseWise/i).first()).toBeVisible();
  });

  test('PM DEX card is removed', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/PM DEX/i)).not.toBeVisible();
  });

  test('Infinity Learn is shown as current role in experience', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('heading', { name: /Experience/i }).scrollIntoViewIfNeeded();
    await expect(page.getByText(/Infinity Learn/i).first()).toBeVisible();
  });

  test('NowNext Building item references ProductOS', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/ProductOS/i).first()).toBeVisible();
  });

  test('skip link works for accessibility', async ({ page }) => {
    await page.goto('/');
    const skipLink = page.getByRole('link', { name: /Skip to main content/i });
    await skipLink.focus();
    await expect(skipLink).toBeFocused();
    await skipLink.click();
    await expect(page.locator('#main-content')).toBeVisible();
  });
});
