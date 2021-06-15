class Shop {
  constructor() {
    this.priceList = {
      A: 50,
      B: 30,
      C: 20,
      D: 15,
    };
  }

  checkout(basket) {
    let items = basket.split("");
    let countA = 0;
    let discountMultiplier;

    for (let i = 0; i < items.length; i++) {
      if (items[i] === "A") {
        countA++;
      }
      discountMultiplier = countA / 3;
    }

    console.log(countA);
    console.log(discountMultiplier);

    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += this.priceList[items[i]];
    }
    if (discountMultiplier >= 1) {
      let discount = discountMultiplier * 20;
      return total - discount;
    }
    return total;
  }
}

module.exports = Shop;
