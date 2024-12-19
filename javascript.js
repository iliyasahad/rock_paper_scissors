let humanScore, computerScore = 0;
console.log("Player score: " + humanScore);
console.log("Computer score: " + computerScore);


function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Round: " + i + "\nPlayer score: " + humanScore + "\nComputer score: " + computerScore);
    }


}

function playRound(humanChoice, computerChoice) {
    console.log("Player choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.");
        computerChoice++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors.");
        humanChoice++;
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock.");
        humanChoice++;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper.");
        computerChoice++;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors.");
        computerChoice++;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper.");
        humanChoice++;
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



