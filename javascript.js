function getComputerChoice() {
    let choice = Math.ceil(Math.random() * 3);
    const choice_map = new Map();
    choice_map.set(1, "rock");
    choice_map.set(2, "paper");
    choice_map.set(3, "scissors");

    return choice_map.get(choice);
}

console.log(getComputerChoice());