const Cors = require('micro-cors')

const cors = Cors({
    allowedMethods: ['GET']
})

async function Qrcode(req, res) {

    return res.json({

        link: ["https://github.com/carlosziegler",
            "https://linkedin.com/in/carlos",
            "https://carlosziegler.now.sh/",
        ]
    })
}

module.exports = cors(Qrcode)