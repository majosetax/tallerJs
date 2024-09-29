
const animalEmojis = ['🐯', '🦁', '🐻', '🐶', '🐷', '🐸', '🐼', '🐨'];


const cardsArray = [...animalEmojis, ...animalEmojis];


cardsArray.sort(() => 0.5 - Math.random());

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let attempts = 0;
let matchedPairs = 0;


const board = document.getElementById('game-board');
const attemptsDisplay = document.getElementById('attempts');


function createBoard() {
  cardsArray.forEach(emoji => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front"></div>
        <div class="card-back">${emoji}</div>
      </div>
    `;
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });
}


function flipCard() {
  if (lockBoard) return; 
  if (this === firstCard) return; 

  this.classList.add('flipped'); 

  if (!hasFlippedCard) {
    
    hasFlippedCard = true;
    firstCard = this;
  } else {
 
    secondCard = this;
    lockBoard = true; 

   
    checkForMatch();
  }
}


function checkForMatch() {
  let isMatch = firstCard.innerHTML === secondCard.innerHTML;

  if (isMatch) {
    disableCards();
    matchedPairs++;
    if (matchedPairs === animalEmojis.length) {
      setTimeout(() => alert('¡Ganaste!'), 500);
    }
  } else {
    unflipCards(); 
  }

  attempts++;
  attemptsDisplay.innerText = `Intentos: ${attempts}`;
}


function disableCards() {
  firstCard.removeEventListener('click', flipCard); 
  secondCard.removeEventListener('click', flipCard);
  resetBoard(); 
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flipped'); 
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000); 
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null]; 
}

createBoard();
