let firstCard = 0;
let secondCard = 0;
let hasBlackjack = false;
let cardSum = firstCard + secondCard;
let isAlive = true;
let message = '';

function startGame() {
  document.getElementById('cards').innerHTML = `Cards: ${firstCard}, ${secondCard}`;
  document.getElementById('sum').innerHTML = `Sum: ${cardSum}`;

  if (cardSum > 21) {
    isAlive = false;
    message ='Sorry, you went over 21. You loss.';
  } else if (cardSum == 21) {
    hasBlackjack = true;
    message = 'Congradulations, you got 21. You win.';
  } else {
    message = `Do you want to draw another card?`;
  }

  //Cash out
  document.getElementById("message").innerText = message;
}


