const puppeteer = require('puppeteer')

async function getCountChannel(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    let data = await page.evaluate(() => {
        const [element] = document.querySelector('#subscriber-count').innerHTML.split(' ')
        return element;
    });

    await browser.close()
    console.log(data)
    return data

}

getCountChannel('https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw')