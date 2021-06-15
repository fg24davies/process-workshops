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
    let countB = 0;

    for (let i = 0; i < items.length; i++) {
      if (items[i] === "A") {
        countA++;
      } else if (items[i] === "B") {
        countB++;
      }

      if (countA % 3 === 0) {
        this.discount += (countA / 3) * 20;
      }

      if (countB % 2 === 0) {
        this.discount += (countB / 2) * 15;
      }
    }
  }
}

module.exports = Shop;
