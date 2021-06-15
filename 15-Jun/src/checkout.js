class Shop {
  constructor() {
    this.priceList = {
      A: 50,
      B: 30,
      C: 20,
      D: 15,
    };
    this.total = 0;
    this.discount = 0;
  }

  checkout(basket) {
    let items = basket.split("");
    this.calculateDiscount(items);

    //console.log(this.discount);

    for (let i = 0; i < items.length; i++) {
      this.total += this.priceList[items[i]];
    }
    return this.total - this.discount;
  }

  calculateDiscount(items) {
    let countA = 0;
    let discountMultiplier;
    //count B

    for (let i = 0; i < items.length; i++) {
      if (items[i] === "A") {
        countA++;
      }
      discountMultiplier = countA / 3;
      if (discountMultiplier >= 1) {
        this.discount = discountMultiplier * 20;
      }
    }
  }
}

module.exports = Shop;
