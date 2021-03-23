const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch({
    headless: false });
  const page = await browser.newPage();
  await page.goto('http://alfa.gemsdev.ru/');
  await page.waitForNavigation();
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();
