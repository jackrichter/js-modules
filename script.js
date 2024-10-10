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

/** Top level await (allowed only in modules) */

// It blocks
// console.log('Start');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Finish');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// Remember! The returned value of an async function is a Promise. So this won't work.
const lastPost = getLastPost();
// console.log(lastPost);

// Not very "clean" Solution
// lastPost.then(last => console.log(last));

// Better solution using top-level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

/////////////////////////////////////////////////////

/** The Module Pattern - The way modules were implemented before */

/* The aim is to encapsulate private data and expose a public API */

// Use a IIFE
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // What is publicly exposed
  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

/////////////////////////////////////////////////////

/** Lodash */

// We want to use the cloneDeep (for cloning objects) function from the cloneDeep.js file in lodash
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

//One deeply nested object
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// Shallow object copy
const stateClone = Object.assign({}, state);
// Deep cloning
const stateDeppClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeppClone);
