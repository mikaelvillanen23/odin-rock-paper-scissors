function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3); //gives out 0, 1 or 2
  if (computerChoice === 0) {
    return "Rock"
  } else if (computerChoice === 1) {
    return "Paper"
  } else {
    return "Scissors"
  }
}
console.log(getComputerChoice());

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