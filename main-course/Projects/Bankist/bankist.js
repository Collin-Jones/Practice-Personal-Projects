'use strict';

//BANKIST APP

// Data
const account1 = {
    owner: 'Collin Jones',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jonas Schmedtmann',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const $ = document.querySelector.bind(document);

const labelWelcome = $('.welcome');

const labelDate = $('.date');

const labelBalance = $('.balance__value');

const labelSumIn = $('.summary__value--in');

const labelSumOut = $('.summary__value--out');

const labelSumInterest = $('.summary__value--interest');

const labelTimer = $('.timer');


const containerApp = $('.app');

const containerMovements = $('.movements');


const btnLogin = $('.login__btn');

const btnTransfer = $('.form__btn--transfer');

const btnLoan = $('.form__btn--loan');

const btnClose = $('.form__btn--close');

const btnSort = $('.btn--sort');


const inputLoginUsername = $('.login__input--user');

const inputLoginPin = $('.login__input--pin');

const inputTransferTo = $('.form__input--to');

const inputTransferAmount = $('.form__input--amount');

const inputLoanAmount = $('.form__input--loan-amount');

const inputCloseUsername = $('.form__input--user');

const inputClosePin = $('.form__input--pin');


const displayMovements = function (movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i) {

        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
         <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
        `

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements)

const calcDisplayBalance = function (movements){
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${balance} USD`
}
calcDisplayBalance(account1.movements)

const createUsernames = function (accs) {
    accs.forEach(function (acc){
       acc.username = user.toLowerCase().split(' ').map(name => name[0]).join();
    })
};
createUsernames(accounts);


///////////////
// LECTURES


// Maximum value
// const max = movements.reduce((acc, mov) => {
//     if (acc > mov) return acc;
//     else return mov;
// }, movements[0]);
// console.log(max);

// The reduce Method
// console.log(movements);
// // accumulator -> SNOWBALL
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);
//
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);
//
// // Maximum value
// const max = movements.reduce((acc, mov) => {
//     if (acc > mov) return acc;
//     else return mov;
// }, movements[0]);
// console.log(max);

// // The filter Method
// const deposits = movements.filter(function (mov, i, arr) {
//     return mov > 0;
// });
//
// console.log(movements);
// console.log(deposits);
//
// const depositsFor = [];
//
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);
//
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);



// // The Magic of Chaining Methods
// const eurToUsd = 1.1;
// console.log(movements);
//
// // PIPELINE
// const totalDepositsUSD = movements
//     .filter(mov => mov > 0)
//     .map((mov, i, arr) => {
//         // console.log(arr);
//         return mov * eurToUsd;
//     })
//     // .map(mov => mov * eurToUsd)
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// /////////////////////////////////////////////////
//
// //Simple Array Methods
// let arr = ['a', 'b','c','d','e'];
//
// //SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);
//
// //SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);
//
// //REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
//
// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
//
// //Join
// console.log(letters.join(' - '));
//
// //The new at Method
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
//
//
// //Getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
//
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));
//
//
// // Looping Arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
//
// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// }
//
//
// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//     }
// });
// // 0: function(200)
// // 1: function(450)
// // 2: function(400)
// // ...
//
//
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);
//
// currencies.forEach(function (value, key, map){
//     console.log(`${key}: ${value}`)
// });
//
// //Set
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR'])
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value,key,map){
//     console.log(`${key}: ${value}`);
// });


