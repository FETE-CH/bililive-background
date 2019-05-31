const puppeteer = require('puppeteer');
// const devices = require('puppeteer/DeviceDescriptors');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36';

(async () => {
    const browser = await puppeteer.launch({
        // headless: false,
        // slowMo: 250
    });
    const page = await browser.newPage();
    await page.emulate({
        userAgent: UA,
        viewport: {
            'width': 1920,
            'height': 1080,
        }
    });
    // await page.goto('https://live.bilibili.com/32997');
    await page.goto('https://live.bilibili.com/12235923');
    const backgroundString = await page.$eval('.room-bg', el=>el.getAttribute('style'));

    const url = backgroundString.match(/(?<=\").*?(?=\")/g)[0];
    console.log(url);

    await browser.close();
})();
