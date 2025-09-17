// Initialise variables to keep track of scores
let humanScore = 0;
let computerScore = 0; 

// Declare function getComputerChoice()
    // Compute random value of either "rock", "paper" or "scissors"
    // Return the value
function getComputerChoice() {
    const index = Math.floor(Math.random() * 100);
    if (index <= 100/3) {
        return "rock";
    }
    else if (index >= 200/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
// Declare function getHumanChoice()
    // Prompt user for choice
        // Assume user inputs valid choice
    // Initialise a constant 'choice'
function getHumanChoice() {
    let choice = prompt("Choose either 'rock', 'paper' or 'scissors'.");
}