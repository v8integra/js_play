let cards = [];
let hasBlackjack = false;
let cardSum = 0;
let isAlive = true;
let message = '';

function startGame() {
  gameReset();

  // Get first two cards
  let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  cards.push(firstCard);
  cards.push(secondCard);  

  let btn = document.getElementById('start');
  btn.style.display = 'none';

  btn = document.getElementById('draw');
  btn.style.display = 'inline';

  renderGame();
}

function gameReset() {
  cards = [];
  cardSum = 0;
  message = '';
}

function renderGame() {
  cardSum = cards.reduce((acc, num) => acc + num, 0);
  
  document.getElementById('cards').innerHTML = `Cards: ${cards}`;
  document.getElementById('sum').innerHTML = `Sum: ${cardSum}`;

  if (cardSum > 21) {
    isAlive = false;
    let btn = document.getElementById('draw')
    btn.style.display = 'none';

    btn = document.getElementById('start')
    btn.style.display = 'inline';

    message ='Sorry, you went over 21. You loss.';
  } else if (cardSum == 21) {
    hasBlackjack = true;
    let btn = document.getElementById('draw')
    btn.style.display = 'none';

    btn = document.getElementById('start')
    btn.style.display = 'inline';

    message = 'Congradulations, you got 21. You win.';
  } else {
    message = `Do you want to draw another card?`;
  }

  //Cash out
  document.getElementById("message").innerText = message;
}

function drawCard() {
  let newCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
  cards.push(newCard)
  renderGame();
}

