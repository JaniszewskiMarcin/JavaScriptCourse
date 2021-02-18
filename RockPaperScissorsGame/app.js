const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}`,
    ""
  ).toUpperCase();
  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert("Invalid choice! We chose Rock for you.");
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (playerChoice, computerChoice) => {
  if(playerChoice == computerChoice) {
    return RESULT_DRAW;
  } else if(
    computerChoice === ROCK && playerChoice === PAPER || 
    computerChoice === PAPER && playerChoice === SCISSORS ||
    computerChoice === SCISSORS && playerChoice === ROCK) {
      return RESULT_PLAYER_WINS;
    } else {
      return RESULT_COMPUTER_WINS;
    }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Start game...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, so`;
  if(winner === RESULT_DRAW) {
    message += ' we have a draw.';
  } else if(winner === RESULT_PLAYER_WINS) {
    message += ' you win.';
  } else {
    message += ' you lost.';
  }

  alert(message);
  gameIsRunning = false;
});

// not related to game ---------------------------------------------

/* function StartGame(){
  console.log("Start game...");
} */

/* const start = function StartGame(){
  console.log("Start game...");
}; */

/* const start = function(){         //Przykład funkcji anonimowej "anonymous"
  console.log("Start game...");
}; */

/* const person = {           //Metody i funkcje, różnice i sposób tworzenia metod.
  personName: 'Max',
  greet: function greet(){
    console.log(`Hello ${person.personName}`)
  }
};

person.greet(); */

//console.dir(StartGame);   - funkcja to obiekt

const sumUp = (resultHandler, ...numbers) => {   //dynamiczne parametry
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for(const num of numbers) {
    sum += validateNumber(num);
  }

  resultHandler(sum);
};

const showResult = (result) => {
  alert(`Result is ${result}`);
}

const subtrackUp = function() {
  let sum = 0;
  for(const num of arguments) {     //stare, nie używać
    sum += num;
  }
  return sum;
};

console.log(sumUp(showResult,2,3,4,2,4,7,85,21,4,7));