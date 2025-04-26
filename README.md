# The Odin Project- Rock, Paper and Scissors

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## My process

### Built with

- HTML
- JavaScript

### What I learned

```javascript
for (let i = 0; i < 5; i++) {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection)
    }
```

### Continued development
After taking a look through the solutions by other learners, I realised that there was a more convenient way into getting a random choice:
```javascript
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
```

## Author

- Website - [kr-sng](https://krsng-lab.github.io/)

## Acknowledgments

Special credits to The Odin Project for giving me the foundations to tackle this project more easily.
