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
  let humanChoice = prompt("Rock, Paper or Scissors? Please type your choice below!\n\nThe game will end after 5 rounds are played.");
  return humanChoice.toLowerCase(); // toLower so that the values will match playRound's conditions
}

function playRound(computerChoice, humanChoice) {
  switch(true) {
    case (computerChoice === humanChoice):
      console.log("This round is a tie!");
      break;
    case (computerChoice === "paper") && (humanChoice === "rock"):
      computerScore += 1;
      console.log("You lose this round! Paper beats Rock.");
      break;
    case (computerChoice === "scissors") && (humanChoice === "rock"):
      humanScore += 1;
      console.log("You win this round! Rock beats Scissors.");
      break;
    case (computerChoice === "scissors") && (humanChoice === "paper"):
      computerScore += 1;
      console.log("You lose this round! Scissors beats Paper.");
      break;
    case (computerChoice === "rock") && (humanChoice === "paper"):
      humanScore += 1;
      console.log("You win this round! Paper beats Rock.");
      break;
    case (computerChoice === "rock") && (humanChoice === "scissors"):
      computerScore += 1;
      console.log("You lose this round! Rock beats Scissors.");
      break;
    case (computerChoice === "paper") && (humanChoice === "scissors"):
      humanScore += 1;
      console.log("You win this round! Scissors beats Paper.");
      break;
    default:
      computerScore += 1;
      console.log("To play the game, please type one of the three options without typos, thank you (case doesn't matter).\n\nSince you didn't do so this time, this round goes to the computer. Tough luck.");
  }
}

function playGame(numberOfRounds) {
  let computerPlay = getComputerChoice();
  let humanPlay = getHumanChoice();

  while (true) {
    if (roundsPlayed === (numberOfRounds - 1)) { // start of last round
      playRound(computerPlay, humanPlay);
      if (humanScore === computerScore) {
        console.log("Wow, the game ends in a tie! How boring.");
      } else {
        console.log("");
        humanScore > computerScore ?
          console.log(`You win the game ${humanScore} - ${computerScore}!`) :
          console.log(`Computer wins the game ${humanScore} - ${computerScore}!`);
      }
      console.log("");
      console.log("To clear the console and start a new game, refresh this page.\nClicking 'Start game' again will break the logic of this program.")
      break;
    } else {
      playRound(computerPlay, humanPlay);
      roundsPlayed += 1;
      console.log(`Current score is: You ${humanScore} | Computer ${computerScore}`);
      console.log("");
      computerPlay = getComputerChoice(); // variables updated with a new function call to get new choices for the next round. Without the call, the choices will remain unchanged for the whole game.
      humanPlay = getHumanChoice();
    }
  }
}

// playGame(5);