"use strict";

//Test code
// document.querySelector('.message').textContent = ' Correct Number!'
//
// document.querySelector('.number').textContent = 7;
// document.querySelector('.score').textContent = 5;
//
// document.querySelector('.guess').value = 23;


let myNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

//When there is no input
    if (!guess) {
       displayMessage('No Number!');
    } else if (guess === myNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = myNumber;

        document.querySelector('body').style.background = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== myNumber) {
        if (score > 0) {
            displayMessage(guess > myNumber ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost The Game!!!')
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    myNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start Guessing...')
    document.querySelector('.score').textContent = score;
    displayMessage('?');
    document.querySelector('.guess').value = ' ';

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
})