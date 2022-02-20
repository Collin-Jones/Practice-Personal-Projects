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
function calcAge1(birthYear){
    return 2037 - birthYear;
}
const age1 = calcAge1(1997)

//Function expression
const calAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calAge2(1997);

console.log(age1, age2)

//Arrow Functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);




const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Bob'));
console.log(yearsUntilRetirement(1980, 'Joe'));

const cutPieces = function (fruit){
    return fruit * 4;
}
 const fruitProcessor = function (apples, oranges){
    const applePieces = cutPieces(apples);
     const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));