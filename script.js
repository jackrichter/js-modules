// Importing module: Named Imports

console.log('Importing module');

// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qt);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.qt);

// Default import (The imported value can be given any name. Default and named can be mixed.)
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 3);
add('apple', 4);

console.log(cart);
