const buttons = document.querySelectorAll('button');
const player = document.querySelector('#player');
const comp = document.querySelector('#computer');
const result = document.querySelector('#result');
let compScore = 0;
let playerScore = 0;

// Start game once a button is pressed. Set button.id to be player's selection
buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button.id);
    })
})

// loop through 5 rounds to play game
function game(playerSelection) {
    // for (let i = 0; i < 5; i++) {
    let computerChoice = computerPlay();
    playRound(playerSelection, computerChoice);
    // }
}

// Add point to score and change text content of result
function changeScore(outcome) {
    if (outcome === "win") {
        playerScore++;
        player.textContent = playerScore;
        result.textContent = "WIN!!";
    } else if (outcome === "loss") {
        compScore++;
        comp.textContent = compScore;
        result.textContent = "Loss...";
    } else {
        result.textContent = "Draw!";
    }
}

// compare playerSelection to computerSelection
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        console.log(`DRAW! You: ${playerSelection} | Computer: ${computerSelection}`);
        changeScore("draw");
        // return "draw";
    } else if (playerSelection === "rock" && computerSelection != "paper") {
        console.log(`WIN! You: ${playerSelection} | Computer: ${computerSelection}`);
        changeScore("win");
        // return "win";
    } else if (playerSelection === "paper" && computerSelection != "scissors") {
        console.log(`WIN! You: ${playerSelection} | Computer: ${computerSelection}`);
        changeScore("win");
        // return "win";
    } else if (playerSelection === "scissors" && computerSelection != "rock") {
        console.log(`WIN! You: ${playerSelection} | Computer: ${computerSelection}`);
        changeScore("win");
        // return "win";
    } else {
        console.log(`Loss... You: ${playerSelection} | Computer: ${computerSelection}`);
        changeScore("loss");
        // return "loss";
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