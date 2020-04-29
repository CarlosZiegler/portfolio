
//Create array with categories in shoppingCart
function getCategories(productList) {
    return [... new Set(productList.map((product) => product.category))]

}

// Set a promotion from quantity category in shoppingCart
function getPromotion(quantityCategory) {
    const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
    return promotions[quantityCategory.length - 1]

}

// Select prices regularPrice, promotionPrice, discountValue for each Product
function getPrices(shoppingCart, promotion) {

    return shoppingCart.map((product) => {
        //set regular price
        const regularPrice = product.regularPrice.toFixed(2)

        //set promotion price if exist
        const [promotionPrice] = product.promotions.map((promotions) => {
            if (promotions["looks"].includes(promotion)) {
                return promotions["price"].toFixed(2)
            }
        }).filter(price => price !== undefined)

        //calculate discount Value if exist promotion Price
        let discountValue = 0
        if (promotionPrice) {
            discountValue = regularPrice - promotionPrice
        }

        // result object with Regular Price, Promotion Price and Discount value per Product
        return {
            regularPrice,
            promotionPrice,
            discountValue
        }
    })

}

// Get only name and Category from product
function getProductNameAndCategory(cart) {
    return cart.map(({ name, category }) => ({ name, category }))

}

// calculate total discount
function calculateDiscountValue(prices) {
    return prices.reduce((sum, item) => sum + Number(item.discountValue), 0)
}

// calculate price total
function calculateTotalPrice(prices) {
    return prices.reduce((sum, item) => {
        // if contains promotion price
        if (item.promotionPrice) {
            return sum + Number(item.promotionPrice)
        }
        // if not exist promotion price
        return sum + Number(item.regularPrice)
    }, 0)
}

// calculate discount percentage
function calculatePercentage(discountValue, totalPrice) {
    return (discountValue.toFixed(2) / (Number(totalPrice.toFixed(2)) + Number(discountValue.toFixed(2))) * 100).toFixed(2)
}


module.exports = {
    getCategories,
    getPromotion,
    getPrices,
    getProductNameAndCategory,
    calculateDiscountValue,
    calculateTotalPrice,
    calculatePercentage
} 
