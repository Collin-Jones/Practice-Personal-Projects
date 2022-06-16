// showing how to use strict mode.
'use strict';

// let hasDriversLicense = false;
// const passTest = true;
//
// if(passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive!');

// function logger(){
//     console.log('My name is Collin');
// }
// // calling / running / invoking function
// logger();
//
// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
//
//
// const appleJuice = fruitProcessor(5, 2);
// console.log(appleJuice);
//
// const appleOrangeJuice = fruitProcessor(2 , 5);
// console.log(appleOrangeJuice);

//Function declaration
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1997)
//
// //Function expression
// const calAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calAge2(1997);
//
// console.log(age1, age2)
//
// //Arrow Functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1997);
// console.log(age3);




// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years.`;
// }
//
// console.log(yearsUntilRetirement(1991, 'Bob'));
// console.log(yearsUntilRetirement(1980, 'Joe'));
//
// const cutPieces = function (fruit){
//     return fruit * 4;
// }
//  const fruitProcessor = function (apples, oranges){
//     const applePieces = cutPieces(apples);
//      const orangePieces = cutPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
//
// console.log(fruitProcessor(2, 3));

//Arrays
// const friend1 = 'Micheal';
// const friend2 = 'Steve';
// const friend3 = 'Peter';
//
//
// const friends = ['Micheal', 'Steven', 'Peter', 'Collin'];
// console.log(friends);
//
// const years = new Array(1991, 1999, 1990, 2020);
//
// console.log(friends[0]);
// console.log((friends [2]));
//
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
//
// friends[2] = 'Jay';
// console.log(friends);

// const collin = {
//     firstName: "Collin",
//     lastName: "Jones",
//     birthYear: "1800",
//
//     calcAge: function (birthYear){
//         return 2037 - birthYear
//     }
// }
// console.log(collin.calcAge(1991))

//TODO Note for loop keep running while condition is True.
// for (let rep = 1; rep <= 30; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

//TODO NOTE Looping through an array.

const collin =[
    'Collin',
    'Jones',
    2022 - 1997,
    'student',
    true
]
// const types = [];
//
// for (let i = 0; i < 5; i++) {
//     console.log(collin[i], typeof collin[i]);
//
//     types.push(typeof collin[i]);
// }
// console.log(types)
//
// const years =[1991, 1997, 2006, 2022];
// const ages = [];
//
// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }
// console.log(ages)
//
// TODO continue and break
// for (let i = 0; i < 5; i++) {
//     if(typeof collin[i] !== 'string') continue;
//
//     console.log(collin[i], typeof collin[i]);
//
// }

// for (let i = collin.length - 1; i >= 0; i--) {
//     console.log(i, collin[i])
// }
// // loop inside a loop
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`----Starting exercise ${exercise}`)
//
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`)
//     }
// }

//TODO while loop

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }
// let rep = 1
// while(rep <= 10){
//     console.log(`While: Lifting weights repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) +1;

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end ...');
}

