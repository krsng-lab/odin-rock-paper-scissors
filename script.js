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