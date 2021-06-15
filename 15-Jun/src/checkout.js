class Shop {
  checkout(shopping) {
    const stock = {
      A: 50,
      B: 30,
      C: 20,
      D: 10,
    };

    let shoppingArray = shopping.split("");
    return stock[shoppingArray[0]];

    // for(let i = 0; i < shoppingArray.length; i++) {

    // }

    // if (shopping === "A") {
    //   return 50;
    // } else if (shopping === "B") {
    //   return 30;
    // } else if (shopping === "C") {
    //   return 20;
    // } else if (shopping === "D") {
    //   return 10;
    // }
  }
}

module.exports = Shop;
