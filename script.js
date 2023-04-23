import gameBoard from "./components/gameBoard.js";
import Player from "./components/players.js";

const myCell = document.querySelectorAll(".cell");
for (let i = 0; i < myCell.length; i++) {
	myCell[i].dataset.cell = "X";
	myCell[i].innerText = myCell[i].dataset.cell;
}

const inputOne = document.getElementById("input-one");
const inputSecond = document.getElementById("input-second");
const submitButton = document.getElementById("submit-button");
const outputOne = document.getElementById("firstPlayerOutput");
const outputSecond = document.getElementById("secondPlayerOutput");

submitButton.addEventListener("click", () => {
	const inputOneValue = inputOne.value || "Player X";
	const inputSecondValue = inputSecond.value || "Player O";
	inputOne.style.display = "none";
	inputSecond.style.display = "none";
	submitButton.style.display = "none";
	outputOne.style.display = "block";
	outputSecond.style.display = "block";
	outputOne.innerText = inputOneValue;
	outputSecond.innerText = inputSecondValue;
	const player1 = new Player(inputOneValue);
	const player2 = new Player(inputSecondValue);
	console.log(player1);
	return player1, player2;
});

// CREATE INPUT PLACEHOLDER FOR BOTH NAMES

// IF NO NAMES DEFAULT PLAYER X - PLAYER O

// RE RENDER AFTER INPUT DISPLAY

//
