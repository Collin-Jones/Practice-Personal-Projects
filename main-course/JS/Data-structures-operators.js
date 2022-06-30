'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 12 + 12,
    },
};
// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    hours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`)
    },

    orderPizza(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};


// Maps: Iteration
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);

console.log(question);
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));
// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);




// // Maps: Fundamentals
// const rest = new Map();
//
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest
//     .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :D')
//     .set(false, 'We are closed :(');
//
//
// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
//
// // rest.clear();
// const arr = [1, 2];
//
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));



// Sets
// const ordersSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
// ]);
//
//
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);
// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//     new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );
// console.log(new Set('jonasschmedtmann').size);




//Looping Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu)
    console.log(item)

for (const item of menu.entries()){
    console.log(`${item[0] + 1}: ${item[1]}`);
}

// Looping Objects: Object Keys, Values, and Entries
// Property NAMES

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);
// Property VALUES

const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);

// console.log(entries);
// [key, value]

for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}



// Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//     console.log(restaurant.openingHours.mon.open);
//
// // WITH optional chaining
//
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
//
// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//
// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);
// }
// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
//
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
//
// // Arrays
//
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];
//
// console.log(users[0]?.name ?? 'User array empty');
//
// if (users.length > 0) console.log(users[0].name);
//
// else console.log('user array empty');


// Logical Assignment Operators
// const rest1 = {
//     name: 'Capri',
//     // numGuests: 20,
//     numGuests: 0,
// };
// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };
// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);







// The Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
//
// //Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);




//Short Circuiting(&& and ||)
//Use ANY data type, return ANY data type, short-ciruciting
// console.log(3 || 'Collin');
// console.log('' || 'Collin');
// console.log(true || 0);
// console.log(undefined || null);
//
// console.log(undefined || 0 || '' ||'Hello' || 23 || null);
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
//
// const guests2 = restaurant.numGuests || 10
// console.log(guests2);
//
// console.log('---AND---');
// console.log(0 && 'Collin');
// console.log(7 && 'Collin');
//
// console.log('Hello' && 23 && null && 'Collin');
//
// if(restaurant.orderPizza){
//     restaurant.orderPizza('mushrooms','spinach');
// }
// restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');

//Rest Pattern and Parameters
// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
//
// const [pizza, ,risotto, ...otherFood] = [
//     ...restaurant.mainMenu, ...restaurant.starterMenu
// ];
// console.log(pizza, risotto, otherFood);
//
// //Objects
// const{ sat, ...weekday} = restaurant.openingHours;
// console.log(weekday);
//
// //Functions
// const add = function (...numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) { sum +=
//         numbers[i];
//         console.log(sum);
//     }
// };
//
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
//
// const x = [23, 5, 7];
// add(...x);
//
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');



//The Spread Operator (...)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr);
//
// const newArr = [1, 2, ...arr];
// console.log(newArr);
//
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);
//
// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu);
//
// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
//
// //Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
//
// //Iterables: array, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.']
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`)
//
// const ingredients = [
//     prompt("Let's make pasta! Ingredient 1?"),
//     prompt("Ingredient 2?"),
//     prompt("Ingredient 3?"),
// ];
//
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
//
// //Objects
//  const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant)
//
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';

//Destructuring Objects
// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });
//
// restaurant.orderDelivery({
//     address: 'Via del Sole, 21',
//     starterIndex: 1,
// });
//
//
// const {name, openingHours, categories} = restaurant;
//
// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
//
// //Default variables
// const {menu = [], starterMenu: starters = []} = restaurant;
//
// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14}
// ({a, b} = obj);
//
// //Nested objects
// const{
//     fri: {open: o, close: c,} ,
// } = openingHours;
//
// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0)
// console.log(starter, mainCourse)
//
// const nested = [2, 4, [5, 6]]
