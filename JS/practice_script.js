// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
//
// console.log("Collin");
// console.log(23);
//
// let firstName = "Collin";
// console.log(firstName);
//
// //Variable name conventions
// let collin_jones = "CJ"
// let $function = 24;
//
// let person = "collin"
// let PI = 3.1415;
//
// let myFirstJob = "Warehouse Worker";
// let myCurrentJob = "Student";
//
// let job1 = "Warehouse Worker"
// let job2 = "student"
// console.log(myFirstJob)


// let javascriptIsFun = true;
// console.log(javascriptIsFun)
// console.log(typeof true);
//
// javascriptIsFun = "Yes!";
// console.log(typeof javascriptIsFun)
//
// let year;
// console.log(year)
//
// year = 1991;
// console.log(typeof year);
//
// console.log(typeof null);

// let age = 24;
// age = 25;
//
// const birthYear = 1998;
// // birthYear = 1990;
// // const job;
//
// var job = 'Warehouse'
// job = 'Student'
//
// lastName = 'Jones'
// console.log(lastName)

// const ageJones = 2037 - 1998;
// const ageJoe = 2037 - 2018;
// console.log(ageJones, ageJoe);
const now = 2037;
const ageJones = now - 1998;
const ageJoe = now - 2020;
console.log(ageJones, ageJoe);
//
// console.log(ageJones * 2, ageJoe / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Collin';
// const lastName = 'Jones';
// console.log(firstName, '', lastName);
//
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);
//
// //Comparison operators
// console.log(ageJones > ageJoe); // > , < >=, <=
//
// console.log(ageJoe >= 18);
//
// const isFullAge = ageJoe >= 18;
//
// console.log(now - 1997 > now - 2020);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJoe + ageJones) / 2;
console.log(ageJones , ageJoe, averageAge)

//Coding Exercise

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

//  Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
//  Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

const marksWeight = 78;
const marksHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const BMIMark = marksWeight / marksHeight ** 2;
const BMIJohn = johnWeight / (johnHeight * johnHeight);

console.log(BMIMark , BMIJohn)
