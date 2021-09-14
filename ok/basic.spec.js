describe('Google', () => {
  let page;
  beforeAll(async () => {
    page = await browser.newPage();
    await page.goto('https://google.com');
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });
});
