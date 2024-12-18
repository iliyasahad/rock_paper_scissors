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


function playGame() {
    let counter = 0;
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice(); 

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "rock") || 
        (humanChoice === "paper" && computerChoice === "paper") || 
        (humanChoice === "scissors" && computerChoice === "scissors")) {
            return "Tie";
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerChoice++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
        }
    }

    playRound(humanSelection, computerSelection);

    if (humanScore == 5 && computerScore < 5) {
        window.alert("You win!");
    } else if (humanScore < 5 && computerScore == 5) {
        window.alert("You lose!");
    } else if (humanScore < 5 && computerScore < 5) {
        playRound(humanSelection, computerSelection);
    }

    return 0;
}

playGame();
