// Create and initialise variables to keep track of scores
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
    return choice = prompt("Choose either 'rock', 'paper' or 'scissors'.");
}
// Declare function playGame() that starts the game
    // Declare function playRound() that plays a single round
        // Read humanChoice and computerChoice
            // Set parameters to be case-insensitive
        // If computerChoice beats humanChoice then
            // Display message
            // Increment computer score
        // Elif tie then
            // Display message
            // Scores are unchanged
        // Else humanChoice beats computerChoice then
            // Display message
            // Increment human score
        // Endif
    // Create variables humanSelection and computerSelection 
        // Initialise variables with getHumanChoice() and getComputerChoice() respectively
    // Pass the variables as parameters to playRound()
    // Repeat playRound() until it has been run 5 times
function playGame() {
    function playRound(originalHumanChoice, originalComputerChoice) {
        let humanChoice = originalHumanChoice.toLowerCase();
        let computerChoice = originalComputerChoice.toLowerCase();
        if (humanChoice == "rock" && computerChoice == "paper" || 
            humanChoice == "paper" && computerChoice == "scissors" || 
            humanChoice == "scissors" && computerChoice == "rock") {
            console.log(`You lose! As ${computerChoice} beats ${humanChoice}.`);
            computerChoice++;
        }
        else if (humanChoice == computerChoice) {
            console.log("Tie!");
        }
        else {
            console.log(`You win! As ${humanChoice} beats ${computerChoice}.`);
            humanChoice++;
        }
}
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    for (let i = 0; i < 4; i++) {
        playRound(humanSelection, computerSelection);
    }
}