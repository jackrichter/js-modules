'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
// Alternative: Optional Chaining and knowledge coalescing
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Make this function immutable
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// We should make this a Pure function (must not mutate external data)
const addExpenses = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // Don't mutate the value of this variable, use a copy instead
  // user = user.toLowerCase();
  const cleanUser = user.toLowerCase();

  // budget.push is mutating. Do this instead:
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpenses(budget, spendingLimits, 10, 'Pizza 🍕');
// console.log(newBudget1);

const newBudget2 = addExpenses(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
// console.log(newBudget2);

const newBudget3 = addExpenses(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: 'limit' } : entry;
//   });
//
// for (const entry of newBudget3) {
//   if (entry.value < -getLimit(limits, entry.user)) {
//     entry.flag = 'limit';
//   }
// }
// };

// Turned into a Pure function because it now does not mutate anything. The .map function returns a brand new array without manipulating the original one.
// The ternary operation returns either a copy of the original array with the property 'flag' added, or the original array unchanged.
const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bidExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(bidExpenses);

  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''; // Emojis are 2 chars

  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

// console.log(budget);
logBigExpenses(finalBudget, 1000);
