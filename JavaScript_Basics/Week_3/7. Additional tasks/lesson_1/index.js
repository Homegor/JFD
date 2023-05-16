const groceries = {
  "73Wakv": {
    name: "Orange Juice",
    price: 1.5,
    discount: 10,
  },
  "5L3db9": {
    name: "Chocolate",
    price: 2,
    discount: 0,
  },
};

function getTotalPriceOfShoppingBag(shoppingBagArray) {
  const totalPrice = shoppingBagArray.reduce((acc, item) => {
    const product = groceries[item.productId];
    const percent = product.price - (product.price / 100) * product.discount;
    return acc + percent * item.count;
  }, 0);
  return Number(totalPrice.toFixed(2));
}

const shoppingBag = [
  { productId: "73Wakv", count: 3 },
  { productId: "5L3db9", count: 23 },
];
const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05
