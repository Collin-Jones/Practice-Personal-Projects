'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`)
    },

    orderPizza: function (mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

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
