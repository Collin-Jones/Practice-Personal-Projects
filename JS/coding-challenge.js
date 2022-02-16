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
let markWeight = 95;
let johnWeight = 87;
if (markWeight >= johnWeight ){
    console.log(`Mark weight is ${markWeight} and John weight is ${johnWeight}, then Mark weigh's more than John.`)
}else {
    console.log(`John weights more than Mark`)
}
// Hint: Use an if/else statement


