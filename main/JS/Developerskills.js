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

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calctempAmplitude = function (temps){
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i]
        if(typeof currentTemp !== 'number') continue;

        if(currentTemp > max ) max = currentTemp;
        if(currentTemp < min) min = currentTemp;
    }
    console.log(max, min)
    return max - min
};
const amplitude = calctempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays
const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
