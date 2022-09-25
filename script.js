"use strict";
let getComputerChoice = function () {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
};
let playing = false;
let playerSelection, computerSelection;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".buttons");
let btnStart = document.querySelector(".start");
let showPlayerScore = document.querySelector(".playerScore");
let showComputerScore = document.querySelector(".computerScore");
let anouncer = document.querySelector(".anouncer");
btnStart.addEventListener("click", () => {
  playing = true;
  anouncer.style.fontSize = "16px";
  playerScore = 0;
  computerScore = 0;
  showPlayerScore.textContent = playerScore;
  showComputerScore.textContent = computerScore;
  anouncer.textContent = "";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playing) {
      playerSelection = button.dataset.button;
      buttonInsides();
    }
  });
});

let buttonInsides = () => {
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, computerScore);
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    anouncer.textContent = "Its a draw!";
    return;
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      anouncer.textContent = "Player won!";
      playerScore += 1;
    } else {
      anouncer.textContent = "Computer won!";

      computerScore += 1;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      anouncer.textContent = "Player won!";

      playerScore += 1;
    } else {
      anouncer.textContent = "Computer won!";

      computerScore += 1;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      anouncer.textContent = "Player won!";

      playerScore += 1;
    } else {
      anouncer.textContent = "Computer won!";

      computerScore += 1;
    }
  }
  showPlayerScore.textContent = `${playerScore} for player`;
  showComputerScore.textContent = `${computerScore} for computer`;
}

let checkWinner = (playerScore, computerScore) => {
  if (playerScore == 5 || computerScore == 5) {
    playing = false;
    anouncer.style.fontSize = "60px";
    btnStart.textContent = "restart";
    if (playerScore == 5) {
      anouncer.textContent = "PLAYER WINS!";
    } else {
      anouncer.textContent = "COMPUTER WINS!";
    }
  }
};
