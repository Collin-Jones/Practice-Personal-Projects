"use strict";

//Test code
// document.querySelector('.message').textContent = ' Correct Number!'
//
// document.querySelector('.number').textContent = 7;
// document.querySelector('.score').textContent = 5;
//
// document.querySelector('.guess').value = 23;


const myNumber = Math.trunc(Math.random() * 20 ) + 1;
document.querySelector('.number').textContent = myNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function (){
 const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

//When there is no input
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!'
    }else if(guess === myNumber){
        document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('body').style.background = '#60b347'

        document.querySelector('.number').style.width = '30rem'

    }else if(guess > myNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too High!'
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = 'You Lost The Game!!!'
            document.querySelector('.score').textContent = 0;
        }

        } else if (guess < myNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game!!!'
            document.querySelector('.score').textContent = 0;
        }
    }
});