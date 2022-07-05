'use strict';

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
    passenger.name('Mr.' + passenger.name);
}
checkIn(flight, Collin);
