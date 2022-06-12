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

