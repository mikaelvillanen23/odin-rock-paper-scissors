let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3); // gives out 0, 1 or 2
  if (computerChoice === 0) {
    return "rock"
  } else if (computerChoice === 1) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors? Please type your choice below!");
  return humanChoice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
  switch(true) {
    case (computerChoice === humanChoice):
      console.log("It's a tie!");
      break;
    case (computerChoice === "paper") && (humanChoice === "rock"):
      computerScore += 1;
      console.log("You lose! Paper beats Rock.");
      break;
    case (computerChoice === "scissors") && (humanChoice === "rock"):
      humanScore += 1;
      console.log("You win! Rock beats Scissors.");
      break;
    case (computerChoice === "scissors") && (humanChoice === "paper"):
      computerScore += 1;
      console.log("You lose! Scissors beats Paper.");
      break;
    case (computerChoice === "rock") && (humanChoice === "paper"):
      humanScore += 1;
      console.log("You win! Paper beats Rock.");
      break;
    case (computerChoice === "rock") && (humanChoice === "scissors"):
      computerScore += 1;
      console.log("You lose! Rock beats Scissors.");
      break;
    case (computerChoice === "paper") && (humanChoice === "scissors"):
      humanScore += 1;
      console.log("You win! Scissors beats Paper.");
      break;
    default:
      console.log("To play the game, please type only one of the three options without typos, thank you.");
  }
}

function playGame(numberOfRounds) {
  let computerPlay = getComputerChoice();
  let humanPlay = getHumanChoice();

  while (true) {
    if (roundsPlayed === (numberOfRounds - 1)) {
      playRound(computerPlay, humanPlay);
      if (humanScore === computerScore) {
        console.log("Wow, the game ends in a tie! How boring.");
      } else {
        humanScore > computerScore ?
          console.log(`You win the game ${humanScore} - ${computerScore}!`) :
          console.log(`Computer wins the game ${humanScore} - ${computerScore}!`);
      }
      console.log("");
      console.log("To start a new game, refresh this page.")
      break;
    } else {
      playRound(computerPlay, humanPlay);
      roundsPlayed += 1;
      console.log(`Current score is: YOU ${humanScore} | Computer ${computerScore}.`);
      console.log("");
      computerPlay = getComputerChoice();
      humanPlay = getHumanChoice();
    }
  }
}

playGame(5);