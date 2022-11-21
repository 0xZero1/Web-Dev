// Rock Paper Scissors Game
// Score:
let userScore = 0;
let compScore = 0;
const round = document.querySelector('#container');
// Get computer's choice

function getComputerChoice() {
  roll = Math.floor(Math.random() * 3 + 1);
  if (roll === 1) {
    return 'rock';
  } else if (roll === 2) {
    return 'scissors';
  } else if (roll === 3) {
    return 'paper';
  }
};

// Setup function for 1 round of Rock Paper Scissors
function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  console.log([computerSelection, playerSelection]);

  if (playerSelection === computerSelection) {
    round.textContent = "It's a Tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    userScore += 1
    round.textContent = "You chose Rock and I chose Scissors: You Win!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userScore += 1
    round.textContent = "You chose Paper and I chose Rock: You Win!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userScore += 1
    round.textContent = "You chose Scissors and I chose Paper: You Win!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore += 1
    round.textContent = "You chose Rock and I chose Paper: You Lose this round.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore += 1
    round.textContent = "You chose Paper and I chose Scissors: You Lose this round.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore += 1
    round.textContent = "You chose Scissors and I chose Rock: You Lose this round.";
  };
};


//Track score - first to 5 wins
const score = document.querySelector('#score');
score.textContent = `Play the game!`;
function game(btn) {
    console.log(btn);
    playRound(btn);
    score.textContent = `User: + ${userScore}\nComputer: + ${compScore}`;
    if (userScore === 5) {
      alert('You win!')
      userScore = 0
      compScore = 0
    } else if (compScore === 5) {
      alert('You lose, better luck next time!')
      userScore = 0
      compScore = 0
    }
    // Add a reset function
  };



const button = document.querySelectorAll('button');
// Use button to start round
button.forEach(button => {
  button.addEventListener('click', function (e) {game(button.id)
  });
});
