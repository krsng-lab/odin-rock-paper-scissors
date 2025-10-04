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
        

function playRound(humanChoice, computerChoice) {
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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        if (button.id = "rock") {
            playRound("rock", getComputerChoice());
        }
        else if (button.id ="paper") {
            playRound("paper", getComputerChoice());
        }
        else playRound("scissors", getComputerChoice());
    });
});