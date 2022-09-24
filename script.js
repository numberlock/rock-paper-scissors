"use strict";
let getComputerChoice = function () {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
};
let playerSelection, computerSelection;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  if (playerSelection == computerSelection) {
    console.log("its a draw");
    return;
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("rock, paper, scissors?").toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  console.log(
    `After 5 games player won ${playerScore} times and computer won ${computerScore} times`
  );
}

game();
