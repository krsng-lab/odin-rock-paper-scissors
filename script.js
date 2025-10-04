// Create and initialise variables to keep track of scores
let humanScore = 0;
let computerScore = 0; 

//Declare function getComputerChoice()
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

// Declare function playRound() that plays a single round
    // Read humanChoice and computerChoice
        // Set parameters to be case-insensitive
    // If computerChoice beats humanChoice then
        // Increment computer score
    // Elif tie then
        // Scores are unchanged
    // Else humanChoice beats computerChoice then
        // Increment human score
    // Endif

const results = document.getElementById("results");
const scoreboard = document.getElementById("scoreboard");
        
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper" || 
        humanChoice == "paper" && computerChoice == "scissors" || 
        humanChoice == "scissors" && computerChoice == "rock") {
        results.textContent = `You lose! As ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    }
    else if (humanChoice == computerChoice) {
        results.textContent = "Tie!";
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    }
    else {
        results.textContent = `You win! As ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});
