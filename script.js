'use strict';

/*
document.querySelector('.message').textContent = '🎉Correct Numver!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value;
document.querySelector('.guess').value = 23;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymessage = function (message) {
   document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess);
   //when there is no number
   if (!guess /* if there is no guess */) {
      // document.querySelector('.message').textContent = '⛔ No Number!';
      displaymessage('⛔ No Number!');

      // when player wins
   } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🎯 Correct Number!';
      displaymessage('🎯 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      // document.querySelector('.highscore').textContent = score;

      if (score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }


      // when guess is too high
   } else if (guess !== secretNumber) {
      if (score > 1) {
         // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
         displaymessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

         score--;
         document.querySelector('.score').textContent = score;
      } else {
         // document.querySelector('.message').textContent = '🎃 You Lost the game!';
         displaymessage('🎃 You Lost the game!');

         document.querySelector('.score').textContent = 0;
      }
   };
   // } else if (guess > secretNumber) {
   //    if (score > 1) {
   //       document.querySelector('.message').textContent = '📈 Too high!';
   //       score--;
   //       document.querySelector('.score').textContent = score;
   //    } else {
   //       document.querySelector('.message').textContent = '🎃 You Lost the game!';
   //       document.querySelector('.score').textContent = 0;
   //    }

   //    // when guess is too low
   // } else if (guess < secretNumber) {
   //    if (score > 1) {
   //       document.querySelector('.message').textContent = '📉 Too low!';
   //       score--;
   //       document.querySelector('.score').textContent = score;
   //    } else {
   //       document.querySelector('.message').textContent = '🎃 You Lost the game!';
   //       document.querySelector('.score').textContent = 0;
   //    }
   // }
});

// console.log(typeof again);
document.querySelector('.again').addEventListener('click', function () {

   secretNumber = Math.trunc(Math.random() * 20) + 1;
   score = 20;

   document.querySelector('.score').textContent = score;
   // document.querySelector('.message').textContent = 'Start guessing...';
   displaymessage('Start guessing...');

   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';

   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
});


