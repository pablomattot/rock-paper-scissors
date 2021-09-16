// player input
let playerSelection = () => prompt('Rock, paper or scissors?');

// loop through 5 rounds to play game
function game() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = computerPlay();
        playRound(playerSelection(), computerChoice);
    }
}

// compare playerSelection to computerSelection
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        console.log(`DRAW! You: ${playerSelection} | Computer: ${computerSelection}`);
        return "draw";
    } else if (playerSelection === "rock" && computerSelection != "paper") {
        console.log(`WIN! You: ${playerSelection} | Computer: ${computerSelection}`);
        return "win";
    } else if (playerSelection === "paper" && computerSelection != "scissors") {
        console.log(`WIN! You: ${playerSelection} | Computer: ${computerSelection}`);
        return "win";
    } else if (playerSelection === "scissors" && computerSelection != "rock") {
        console.log(`WIN! You: ${playerSelection} | Computer: ${computerSelection}`);
        return "win";
    } else {
        console.log(`Loss... You: ${playerSelection} | Computer: ${computerSelection}`);
        return "loss";
    }
}

// random number decides computerSelection
function computerPlay() {
    let randomNum = () => Math.floor(Math.random() * 3);
    switch (randomNum()) {
        case 0: return 'rock';
            break;
        case 1: return 'paper';
            break;
        case 2: return 'scissors';
            break;
    }
}

game();