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

// TODO Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
//TODO
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

const mark = {
   fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass/ this.height ** 2;
        return this.bmi;
    }

};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass/this.height ** 2;
        return this.bmi
    }
}
john.calcBMI()
mark.calcBMI()
console.log(mark.bmi, john.bmi)

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
