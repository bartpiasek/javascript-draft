const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WINS';
const RESULT_COMPUTER_WIN = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK && 
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice We choice ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// const getWinner = function(cChoice, pChoice) {
//     if (pChoice === cChoice) {
//         return RESULT_DRAW;
//     } else if (
//         cChoice === ROCK && pChoice === PAPER ||
//         cChoice === PAPER && pChoice === SCISSORS ||
//         cChoice === SCISSORS && pChoice === ROCK
//         ) {
//         return RESULT_PLAYER_WIN;
//     } else {
//         return RESULT_COMPUTER_WIN;
//     }
// };
// GETWINNER WITH TURNARY AND ARROW FUNCTION, WITH DEFAULT ARG VALUE
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
    cChoice === pChoice 
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === ROCK && pChoice === PAPER)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;


// ARROW FUNCTION AS A PARAMETER - CALLBACK FUNCTION
startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    let winner;
    if (playerChoice) {
        const winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }

    let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, 
        computer picked ${computerChoice} - `;
    if (winner === RESULT_DRAW) {
        message = message + 'DRAW';
    } else if (winner === RESULT_PLAYER_WIN) {
        message = message + 'WIN';
    } else {
        message = message + 'LOST';
    }
    alert(message);
    gameIsRunning = false;
});
