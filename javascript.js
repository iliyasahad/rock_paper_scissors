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
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice != "rock" || humanChoice != "paper" || humanChoice != "scissors") {
        return "Invalid choice";
    }

    return humanChoice;
}
console.log("Computer choice: " + getComputerChoice());
console.log("Computer choice: " + getHumanChoice());


