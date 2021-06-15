class Shop {
  checkout(shopping) {
    const stock = {
      A: 50,
      B: 30,
      C: 20,
      D: 15,
    };

    let shoppingArray = shopping.split("");
    let total = 0;
    for (let i = 0; i < shoppingArray.length; i++) {
      total += stock[shoppingArray[i]];
    }
    return total;

    // if (shoppingArray.length === 1) {
    //   return stock[shoppingArray[0]];
    // } else {
    //   return stock[shoppingArray[0]] + stock[shoppingArray[1]];
    // }
  }
}

module.exports = Shop;
