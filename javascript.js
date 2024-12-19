let humanScore = 0;
let computerScore = 0;
console.log("Player score: " + humanScore);
console.log("Computer score: " + computerScore);

playGame();

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Round: " + i + "\nPlayer score: " + humanScore + "\nComputer score: " + computerScore);
    }

    let result = "";
    if (humanScore === computerScore) {
        result = "The game is a tie!";
    } else if (humanScore >= computerScore) {
        result = "You win the game!";
    } else {
        result = "You lost the game!";
    }

    return result;
}

function playRound(humanChoice, computerChoice) {
    console.log("Player choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        return computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors.");
        return humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock.");
        return humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper.");
        return computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors.");
        return computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper.");
        return humanScore++;
    }
}


function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 3);

    const computerChoiceMap = new Map();
    computerChoiceMap.set(1, "rock");
    computerChoiceMap.set(2, "paper");
    computerChoiceMap.set(3, "scissors");

    return computerChoiceMap.get(computerChoice);
}


function getHumanChoice() {
    let humanChoice = prompt("Pick rock, paper or scissors: ");

    if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
        return humanChoice.toLowerCase();
    } else {
        return "Invalid choice";
    }
}



