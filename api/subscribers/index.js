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

    const element = $('yt-formatted-string[id="subscriber-count"]').eq(0)

    return element ? element.text().trim() : 'not value';
}

const cors = Cors({
    allowedMethods: ['GET']
})

async function Subscribers(req, res) {

    const count = await getResults()

    return res.json({
        count
    })
}

module.exports = cors(Subscribers)