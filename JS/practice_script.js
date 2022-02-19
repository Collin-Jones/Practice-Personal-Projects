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
// const now = 2037;
// const ageJones = now - 1998;
// const ageJoe = now - 2020;
// console.log(ageJones, ageJoe);
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

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
//
// const averageAge = (ageJoe + ageJones) / 2;
// console.log(ageJones , ageJoe, averageAge)


// const firstName = 'Collin';
// const job = 'student';
// const birthYear = '1997';
// const year = 2022;

// const jones = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jones)

// const jonesNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonesNew)


// const age = 25;
// // const isOldEnough = age >= 21;
//
// if(age >= 21){
//     console.log('Collin is of age to drink.')
// }else{
//     const yearsLeft = 21 - age
//     console.log(`Collin is to young. Wait another ${yearsLeft} year.`)
// }
// let century;
// const birthYear = 1997;
// if (birthYear <= 2000){
//      century = 20;
// }else {
//      century = 21;
// }
// console.log(century)


//type conversion
// const inputYear = '1997';
// console.log(Number(inputYear));
// console.log(Number('Collin'));
// console.log(String(23), 23);

//type coercion
// console.log('I am ' + 25 + ' years old');
// console.log('23' - '10' - 3);
//
//
// let n = '1' + 1 //'11'
// n = n - 1;
// console.log(n)


//5 false values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Collin'));
// console.log(Boolean({}));
// console.log(Boolean(''))
//
// const money = 0;
// if(money){
//     console.log("Don't spend it all");
// }else {
//     console.log("You should get a job!");
// }

//if statements with === operator
// const age = 18;
// if (age === 18) console.log('You just became an adult');
//
// if (age == 18) console.log('You just became an adult (loose)');

// const favorite = prompt('What is favorite number?')
// console.log(favorite)
// console.log(typeof favorite)
//
// if (favorite === 7) {
//     console.log('Cool! 7 is an amazing number.')
// } else if (favorite === 10) {
//     console.log('Cool! 10 is a cool number')
// } else {
//     console.log('That is not 7 or 10')
// }



// const hasDriversLicense = true; // A
// const hasGoodVision = false;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasGoodVision || hasGoodVision);
//
// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired)
//
// if (hasDriversLicense && hasGoodVision){
//     console.log('Collin is able to drive');
// }else{
//     console.log('Someone else should drive...')
// }

const day = 'monday';
switch (day){
    case 'monday' :
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
}