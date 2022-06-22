"use strict";

//Test code
// document.querySelector('.message').textContent = ' Correct Number!'
//
// document.querySelector('.number').textContent = 7;
// document.querySelector('.score').textContent = 5;
//
// document.querySelector('.guess').value = 23;
const $ = document.querySelector.bind(document);


let myNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highScore = 0;
let tooHigh = 'Too High';
let tooLow = 'Too Low';

const displayMessage = function (message) {
    $('.message').textContent = message;
};


$('.check').addEventListener('click', function () {
    const guess = Number($('.guess').value);

//When there is no input
    if (!guess) {
       displayMessage('There is no Number!');

    } else if (guess === myNumber) {
        displayMessage('Correct Number!');
        $('.number').textContent = myNumber;

        $('body').style.background = '#60b347'
        $('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score;
            $('.highscore').textContent = highScore;
        }
    } else if (guess !== myNumber) {
        if (score > 0) {
            displayMessage(guess > myNumber ? tooHigh : tooLow );
            score--;
            $('.score').textContent = score;
        } else {
            displayMessage('You Lost The Game!!!')
            $('body').style.background = '#ff0000'
            $('.score').textContent = 0;
        }
    }
});

// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/
$('.again').addEventListener('click', function () {
    score = 10;
    myNumber = Math.trunc(Math.random() * 10) + 1;

    displayMessage('Start Guessing...')
    $('.score').textContent = score;
    $('.number').textContent = '?';
    $('.guess').value = ' ';
    $('body').style.backgroundColor = '#222'
    $('.number').style.width = '15rem';

})