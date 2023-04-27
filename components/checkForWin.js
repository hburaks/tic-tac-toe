import { firstPlayer, secondPlayer } from "../script.js";
const resultGame = document.querySelector(".result");
export const resultContainer = document.querySelector("#result-container");
import gameBoard from "./gameBoard.js";
function roundResult(i) {
	resultContainer.style.display = "flex";
	if (gameBoard[i] === "X") {
		resultGame.innerText = `${firstPlayer.name} won the round`;
	}
	if (gameBoard[i] === "O") {
		resultGame.innerText = `${secondPlayer.name} won the round`;
	}
	if (i === "tie") {
		resultGame.innerText = "It is a tie";
	}
}
function whoWins(i) {
	if (gameBoard[i] === "X") {
		firstPlayer.updateScore();
	}
	if (gameBoard[i] === "O") {
		secondPlayer.updateScore();
	}
}
export default function checkForWin() {
	for (let i = 0; i < 9; i = i + 3) {
		if (
			gameBoard[i] === gameBoard[i + 1] &&
			gameBoard[i] === gameBoard[i + 2] &&
			gameBoard[i] !== ""
		) {
			roundResult(i);
			whoWins(i);
			return true;
		}
	}
	for (let i = 0; i < 3; i++) {
		if (
			gameBoard[i] === gameBoard[i + 3] &&
			gameBoard[i] === gameBoard[i + 6] &&
			gameBoard[i] !== ""
		) {
			roundResult(i);
			whoWins(i);
			return true;
		}
	}

	if (
		gameBoard[2] === gameBoard[4] &&
		gameBoard[2] === gameBoard[6] &&
		gameBoard[2] !== ""
	) {
		roundResult(2);
		whoWins(2);

		return true;
	}
	if (
		gameBoard[0] === gameBoard[4] &&
		gameBoard[0] === gameBoard[8] &&
		gameBoard[0] !== ""
	) {
		roundResult(0);
		whoWins(0);
		return true;
	}
	for (let i = 0; i < 9; i++) {
		if (gameBoard[i] === "") {
			return false;
		}
	}

	roundResult("tie");
	return true;
}
