'use strict';

// Default Parameters
const createBooking = function (flightNum, numPassengers, price){
    numPassengers = 1;
    price = 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2 , 800);


const flight = "LH234"
const Collin = {
    name : 'Collin',
    passport : 12345678
}

const checkIn = function (flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport === 21345566){
        alert('Check in')
    }else{
        alert('Wrong passport!')
    }

}
checkIn(flight, Collin);

// const flightNum = flight;
// const passenger = Collin;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(Collin);
checkIn(flight, Collin);



// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
// JS uses callbacks all the time
const high5 = function () {
    console.log('👋');
};
document.body.addEventListener('click', high5);
['Collin', 'Martha', 'Adam'].forEach(high5);
