const Cors = require('micro-cors')
const { getCategories,
    getPromotion,
    getPrices,
    getProductNameAndCategory,
    calculateDiscountValue,
    calculateTotalPrice,
    calculatePercentage } = require('./utils/helpers')


const cors = Cors({
    allowedMethods: ['GET']
})


function getShoppingCart(ids, productsList) {

    const shoppingCart = productsList.filter((product) => ids.includes(product.id))

    const listCategory = getCategories(shoppingCart)

    const promotion = getPromotion(listCategory)

    const allPrices = getPrices(shoppingCart, promotion)

    const products = getProductNameAndCategory(shoppingCart)

    const discountValue = calculateDiscountValue(allPrices)

    const totalPrice = calculateTotalPrice(allPrices)

    const discountPercentage = calculatePercentage(discountValue, totalPrice)

    return {
        products,
        promotion,
        totalPrice: String(totalPrice.toFixed(2)),
        discountValue: String(discountValue.toFixed(2)),
        discount: `${discountPercentage}%`
    }
}


async function cart(req, res) {

    const { ids, products } = req.body

    const result = getShoppingCart(ids, products)

    return res.json(result)

}

module.exports = cors(cart)