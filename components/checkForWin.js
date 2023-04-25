import { firstPlayer, secondPlayer } from "../script.js";
export default function checkForWin(gameBoard) {
	function whoWins(i) {
		if (gameBoard[i] === "X") {
			firstPlayer.updateScore();
		}
		if (gameBoard[i] === "O") {
			secondPlayer.updateScore();
		}
	}

	for (let i = 0; i < 9; i = i + 3) {
		if (
			gameBoard[i] === gameBoard[i + 1] &&
			gameBoard[i] === gameBoard[i + 2] &&
			gameBoard[i] !== ""
		) {
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
			whoWins(i);

			return true;
		}
	}

	if (
		gameBoard[2] === gameBoard[4] &&
		gameBoard[2] === gameBoard[6] &&
		gameBoard[2] !== ""
	) {
		whoWins(2);
		return true;
	}
	if (
		gameBoard[0] === gameBoard[4] &&
		gameBoard[0] === gameBoard[8] &&
		gameBoard[0] !== ""
	) {
		whoWins(0);
		return true;
	}
	for (let i = 0; i < 9; i++) {
		if (gameBoard[i] === "") {
			return false;
		}
	}
	return true;
}
// [cell.dataset.index];
