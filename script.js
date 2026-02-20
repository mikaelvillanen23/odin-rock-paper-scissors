let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

/*
define function for computer choice
  create var for computer choice
  use rng to generate 3 outcomes: 1, 2, 3
  condition:
    if rng outcome is 1 assign rock to computer choice
    if rng outcome is 2 assign paper to computer choice
    if rng outcome is 3 assign scissors to computer choice
  return computer choice
*/

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3); //gives out 0, 1 or 2
  if (computerChoice === 0) {
    return "rock"
  } else if (computerChoice === 1) {
    return "paper"
  } else {
    return "scissors"
  }
}
// console.log(getComputerChoice()); 

/*
define function for human choice
  create var for human choice
  prompt for choice (choices: rock paper scissors)
  return choice
*/

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors? Please type your choice below!");
  return humanChoice.toLowerCase();
}
// console.log(getHumanChoice());

/*
define function for a round of the game with two parameters
  create var for computerChoice ("C")
  create var for humanChoice ("H")
    make prompt lowercase to make sure it fits the following conditionals
  create round conditions
    if H is rock and C is paper:
      increment computerScore by 1
      print "You lose! Paper beats Rock."
    if H is rock and C is scissors:
      increment humanScore by 1
      print "You win! Rock beats Scissors."

    if H is paper and C is scissors:
      increment computerScore by 1
      print "You lose! Scissors beats Paper."
    if H is paper and C is rock:
      increment humanScore by 1
      print "You win! Paper beats Rock."

    if H is scissors and C is rock:
      increment computerScore by 1
      print "You lose! Rock beats Scissors."
    if H is scissors and C is paper:
      increment humanScore by 1
      print "You win! Scissors beats Paper."

    if H and C are equal
      print "It's a tie! Play again."
      call self
*/

function playRound(computerChoice, humanChoice) {
  // console.log(computerChoice);
  // console.log(humanChoice);
  switch(true) {
    case (computerChoice === humanChoice):
      console.log("It's a tie! Play again.");
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

let computerPlay = getComputerChoice();
let humanPlay = getHumanChoice();

// playRound(computerPlay, humanPlay);

/*
define function for the whole game
  create var for round counter
  if round counter is fewer than 5:
    call playRound
    print game format (ends after 5 rounds) and current score
  after 5 rounds:
    if score is not even, declare winner
    else print something like "Wow, that's an outlier of a result"
  print "refresh page to play again"
*/

function playGame() {
  if (roundsPlayed === 5) {
    if (humanScore === computerScore) {
      console.log("Wow, game ends with a tie! How boring.");
    } else {
      humanScore > computerScore ?
        console.log(`You win the game ${humanScore} - ${computerScore}!`) :
        console.log(`Computer wins the game ${humanScore} - ${computerScore}!`);
    }
    console.log("To start a new game, refresh this page.")
  } else if (roundsPlayed === 4) {
    playRound(computerPlay, humanPlay);
    roundsPlayed += 1;
    console.log(`Current score is: YOU ${humanScore} | Computer ${computerScore}.`);
    console.log("");
  } else {
    playRound(computerPlay, humanPlay);
    roundsPlayed += 1;
    console.log(`Current score is: YOU ${humanScore} | Computer ${computerScore}.`);
    console.log("");
    computerPlay = getComputerChoice();
    humanPlay = getHumanChoice();
  }
}

playGame();
playGame();
playGame();
playGame();
playGame();
playGame();