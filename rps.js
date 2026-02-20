function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    return prompt("Select rock, paper, or scissors");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        } else {
            console.log("It's a tie!");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        } else if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else {
            console.log("It's a tie!");
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        } else {
            console.log("It's a tie!");
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock!");
                computerScore++;
            } else if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors!");
                humanScore++;
            } else {
                console.log("It's a tie!");
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper!");
                computerScore++;
            } else if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock!");
                humanScore++;
            } else {
                console.log("It's a tie!");
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors!");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper!");
                humanScore++;
            } else {
                console.log("It's a tie!");
            }
        }
    }
}

playGame();