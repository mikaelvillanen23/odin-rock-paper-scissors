let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3); // gives out 0, 1 or 2
  if (random === 0) {
    return "Rock";
  } else if (random === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function endGame() {
  endMessage.setAttribute("style",
    `border: medium, solid, black;
    background-color: yellow;`);

  if (humanScore === 5) {
    endMessage.textContent = `You win the game ${humanScore} - ${computerScore}!`;
  } else {
    endMessage.textContent = `Computer wins the game ${humanScore} - ${computerScore}!`;
  }

  rockBtn.removeEventListener("click", rockRound);
  paperBtn.removeEventListener("click", paperRound);
  scissorsBtn.removeEventListener("click", scissorsRound);

  const resetBtn = document.createElement("button");
  resetBtn.textContent = "New game";
  resetBtn.addEventListener("click", resetGame);
  endMessage.appendChild(resetBtn);
}

function playRound(computerChoice, humanChoice) {
  playerChoice.textContent = humanChoice;
  cpuChoice.textContent = computerChoice;

  if (computerChoice === humanChoice) {
    results.textContent = "This round is a tie!";
  } else if (
    (computerChoice === "Paper") && (humanChoice === "Rock") ||
    (computerChoice === "Scissors") && (humanChoice === "Paper") ||
    (computerChoice === "Rock") && (humanChoice === "Scissors")
    ) {
    computerScore++;
    results.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    cpuScore.textContent = computerScore;
  } else {
    humanScore++;
    results.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    playerScore.textContent = humanScore;
  }

  if (humanScore === 5 || computerScore === 5) endGame();
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  playerChoice.textContent = "?";
  cpuChoice.textContent = "?";
  results.textContent = "";
  playerScore.textContent = 0;
  cpuScore.textContent = 0;
  endMessage.textContent = "";
  endMessage.setAttribute("style",
    `border: 0px;
    background-color: white;`);
    
  rockBtn.addEventListener("click", rockRound);
  paperBtn.addEventListener("click", paperRound);
  scissorsBtn.addEventListener("click", scissorsRound);
}

// DOM elements

const playerChoice = document.querySelector("#playerChoice");
const cpuChoice = document.querySelector("#cpuChoice");
const results = document.querySelector("#results");
const playerScore = document.querySelector("#playerScore");
const cpuScore = document.querySelector("#cpuScore");
const endMessage = document.querySelector("#endMessage");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const rockRound = function () { 
  playRound(getComputerChoice(), "Rock");
};
const paperRound = function () { 
  playRound(getComputerChoice(), "Paper");
};
const scissorsRound = function () { 
  playRound(getComputerChoice(), "Scissors");
};

rockBtn.addEventListener("click", rockRound);
paperBtn.addEventListener("click", paperRound);
scissorsBtn.addEventListener("click", scissorsRound);