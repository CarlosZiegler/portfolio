const Cors = require('micro-cors')

const cors = Cors({
    allowedMethods: ['GET']
})

async function Test(req, res) {

    const { num } = req.query


    const fibonacci = (limit = 350) => {

        let fibonacciArray = []
        let element = 0

        for (let index = 0; ; index++) {

            if (index < 2) {
                fibonacciArray.push(index)
                continue
            }

            element = fibonacciArray[(index - 1)] + fibonacciArray[(index - 2)]

            if (element > limit) {
                break
            }

            fibonacciArray.push(element)

        }
        return fibonacciArray
    }

    const isFibonnaci = (num) => {

        return fibonacci().includes(Number(num))
    }


    return res.json({ isFibonnaci: isFibonnaci(num) })
}

module.exports = cors(Test)