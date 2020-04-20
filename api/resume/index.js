const Cors = require('micro-cors')

const cors = Cors({
    allowedMethods: ['GET']
})

async function Test(req, res) {





    return res.json({ ok: 200 })



}

module.exports = cors(Test)