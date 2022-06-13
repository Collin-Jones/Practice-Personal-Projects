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

// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const marksWeight = 95;
// const marksHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;
//
// const BMIMark = marksWeight / marksHeight ** 2;
// const BMIJohn = johnWeight / (johnHeight * johnHeight);
//
// const markHigherBMI = BMIMark > BMIJohn;
//
// console.log(BMIMark , BMIJohn);
// console.log(markHigherBMI);

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
//     Your tasks:
// TODO : Print a nice output to the console, saying who has the higher BMI. The message
//  is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// TODO : Use a template literal to include the BMI values in the outputs. Example: "Mark's
//  BMI (28.3) is higher than John's (23.9)!"
// let markWeight = 75;
// let johnWeight = 80;
// if (markWeight >= johnWeight ){
//     console.log(`Mark weight is ${markWeight} and John weight is ${johnWeight}, then Mark weigh's more than John.`)
// }else {
//     console.log(`John weights more than Mark`)
// }
// Hint: Use an if/else statement

//
// TODO : Calculate the average score for each team, using the test data below


// TODO : Compare the team's average scores to determine the winner of the competition,
//  and print it to the console. Don't forget that there can be a draw, so test for that
//  as well (draw means they have the same average score)


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas)
//
// if(scoreDolphins > scoreKoalas){
//     console.log('Dolphins win the trophy!')
// }else if (scoreKoalas > scoreDolphins){
//     console.log('Koalas win the trophy!')
// }else if (scoreDolphins === scoreKoalas){
//     console.log('Both win the trophy')
// }

// Test data:
//   Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//   Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//   Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// TODO Create an arrow function 'calcAverage' to calculate the average of 3 scores

// TODO Use the function to calculate the average for both teams

// TODO Create a function 'checkWinner' that takes the average score of each team
//  as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
//  to the console, together with the victory points, according to the rule above.
//     Example: "Koalas win (30 vs. 13)"

// TODO Use the 'checkWinner' function to determine the winner for both Data 1 and
//  Data 2

// TODO Ignore draws this time

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5))
//
// const scoreDolphins = calcAverage(44, 55, 60)
// const scoreKoalos = calcAverage(34, 90, 55)
// console.log(scoreDolphins, scoreKoalos)
//
// const winner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win! (${avgKoalas} vs. ${avgDolphins})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// winner(scoreDolphins, scoreKoalos);


// Test data:
//     § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// TODO Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
//TODO
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass/ this.height ** 2;
//         return this.bmi;
//     }
//
// };
//
// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass/this.height ** 2;
//         return this.bmi
//     }
// }
// john.calcBMI()
// mark.calcBMI()
// console.log(mark.bmi, john.bmi)

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.


// Coding Challenge #4

// TODO Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
//TODO
// 1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
// TEST DATA: Test for bill values 275, 40 and 430
// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

const bill = 430
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2

const bill1 = 40
const tip1 = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`)

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)