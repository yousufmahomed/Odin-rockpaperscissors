// Create an array of choices
const choices = ["rock", "paper", "scissors"];

// Set initial scores
let playerScore = 0;
let computerScore = 0;

// Get the buttons and result display div
const buttons = document.querySelectorAll('button');
const resultsDiv = document.querySelector('#results');

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});

// Function to play a round
function playRound(playerSelection) {
  // Get a random choice for the computer
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  // Determine the winner of the round
  let roundResult;
  if (playerSelection === computerSelection) {
    roundResult = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult = "You win!";
    playerScore++;
  } else {
    roundResult = "Computer wins!";
    computerScore++;
  }

  // Display the round result and current score
  resultsDiv.innerHTML = `
    <p>${roundResult}</p>
    <p>Player: ${playerScore}</p>
    <p>Computer: ${computerScore}</p>
  `;

  // Check if either player has reached 5 points and declare a winner
  if (playerScore === 5) {
    resultsDiv.innerHTML += "<p>You win the game!</p>";
    resetGame();
  } else if (computerScore === 5) {
    resultsDiv.innerHTML += "<p>Computer wins the game!</p>";
    resetGame();
  }
}

// Function to reset the game
function resetGame() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;

  // Clear result display
  resultsDiv.innerHTML = "";
}
