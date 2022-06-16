//either use single ' '  or double " "  Just a personal preference.
'use strict';
//Use strict always


//Just going through different themes like different colors,  but I already have a theme active.

//Teaching us how to "code"
//1. Set goals, reasonable goals of course.

//2. Instead of copying and pasting from a course be sure to understand the code.

//3. Don't get frustrated with not knowing everything and do not compare yourself to coders who have been coding for years.


//Talked about solving problems which I know will come with some time and experience


//Learning to ask questions and writing them down.
// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const tempAmplitude = function (temps){
    let max = temps[0]
    for (let i = 0; i < temps.length; i++) {
        if (temps[i] > max) max = temps[i];
    }
    console.log(max)
}
tempAmplitude(3, 7, 4)