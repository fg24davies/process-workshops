class Shop {
  checkout(shopping) {
    if (shopping === "A") {
      return 50;
    } else if (shopping === "B") {
      return 30;
    }
  }
}

module.exports = Shop;
