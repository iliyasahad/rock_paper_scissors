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
        return humanChoice;
    } else {
        return "Invalid choice";
    }
}
console.log("Computer choice: " + getComputerChoice());
console.log("Human choice: " + getHumanChoice().toLowerCase());


