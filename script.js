// Initialise the computer score and human score
let computerScore = 0;
let humanScore = 0;

// Create a function that randomly selects rock, paper or scissors with equal probability
function getComputerChoice() {
    // Let Math.random() generate a number between 0 and <1, assigning it to a variable
    let x = Math.random(); 
    // Compare x
    if (x <= 1/3) {
        return "rock";
    } else if (x <= 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
    
// Create a function that return one of the valid choices depending on what the user inputs
function getHumanChoice() {
    return prompt("Enter your choice below:").toLowerCase();
}

// Write the logic to play a single rond 
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice ==="scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Draw!");
        return;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame() {
    // Use loops to playRound() five times
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    // Return final result to console
    if (humanScore > computerScore) {
        console.log("Mankind is saved!")
    } else if (humanScore === computerScore) {
        console.log("Draw!")
    } else {
        console.log("Mankind has been defeated...")
    }
}

playGame();