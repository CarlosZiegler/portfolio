const Cors = require('micro-cors')
const axios = require("axios");
const cheerio = require("cheerio");

const cors = Cors({
    allowedMethods: ['GET']
})

const siteUrl = "https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw";

const fetchData = async () => {
    const result = await axios.get(siteUrl);
    const html = await cheerio.load(result.data);
    return html
};


async function Subscribers(req, res) {

    const $ = await fetchData();

    const element2 = $.html().split(' ').filter((item) => item.includes('300.000'))

    return element2.length > 0
        ? res.json({ isMore300k: true })
        : res.json({ isMore300k: false })

}


module.exports = cors(Subscribers)