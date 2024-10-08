// Exporting module: Named Exports
console.log('Exporting module');

const shoppingCost = 10;
export const cart = [];

// Export only works in top level code!
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

// Default exports (no name only the value!)
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
