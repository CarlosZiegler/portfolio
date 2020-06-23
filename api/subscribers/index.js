const puppeteer = require('puppeteer')
const Cors = require('micro-cors')
const axios = require("axios");
const cheerio = require("cheerio");


const siteUrl = "https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw";

const fetchData = async () => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
};

const getResults = async () => {
    const $ = await fetchData();
    const substr = $('#subscriber-count').text();
    console.log(substr)
    return substr
}

const cors = Cors({
    allowedMethods: ['GET']
})

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


async function Subscribers(req, res) {

    const count = await getCountChannel()

    return res.json({
        count
    })
}

module.exports = cors(Subscribers)