class Shop {
  checkout(shopping) {
    const stock = {
      A: 50,
      B: 30,
      C: 20,
      D: 15,
    };

    let shoppingArray = shopping.split("");

    if (shoppingArray.length === 1) {
      return stock[shoppingArray[0]];
    } else {
      return stock[shoppingArray[0]] + stock[shoppingArray[1]];
    }
  }
}

module.exports = Shop;
