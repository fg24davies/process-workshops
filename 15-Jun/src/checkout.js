class Shop {
  checkout(shopping) {
    if (shopping === "A") {
      return 50;
    } else if (shopping === "B") {
      return 30;
    } else if (shopping === "C") {
      return 20;
    }
  }
}

module.exports = Shop;
