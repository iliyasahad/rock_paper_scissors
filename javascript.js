let counter, humanScore, computerScore = 0;

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
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice(); 

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "rock") || 
        (humanChoice === "paper" && computerChoice === "paper") || 
        (humanChoice === "scissors" && computerChoice === "scissors")) {
            return "Tie";
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            return humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            return computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            return humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            return computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerChoice++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            return humanScore++;
        }
        return 1;
    }

    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);

    return 0;
}

playGame();
