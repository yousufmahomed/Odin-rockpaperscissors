// Create an array of choices
const choices = ["rock", "paper", "scissors"];

// Get the user's choice
let userChoice = prompt("Choose rock, paper, or scissors:");

// Make sure the user's choice is valid
while (!choices.includes(userChoice)) {
  userChoice = prompt("Invalid choice. Please choose rock, paper, or scissors:");
}

// Get a random choice for the computer
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

// Compare the choices and determine the winner
if (userChoice === computerChoice) {
  alert("It's a tie!");
} else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")
) {
  alert("You win!");
} else {
  alert("Computer wins!");
}
