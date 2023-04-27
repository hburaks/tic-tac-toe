import { activePlayer } from "../script.js";
import gameBoard, { renderGameBoard } from "./gameBoard.js";
import toggleActivePlayer from "./toggleActivePlayer.js";
import checkForWin from "./checkForWin.js";
import { resetGameBoard } from "./markTheCell.js";
export default function computerMove() {
	const randomNum = Math.floor(Math.random() * 9);
	let flag = false;
	for (let i = 0; i < 9; i++) {
		if (gameBoard[i] === "") {
			flag = true;
		}
	}
	if (!flag) {
		if (checkForWin(gameBoard)) {
			resetGameBoard();
		}
		return;
	}
	if (gameBoard[randomNum] !== "") {
		computerMove();
	}
	if (gameBoard[randomNum] === "") {
		gameBoard[randomNum] = "O";
		renderGameBoard();
		toggleActivePlayer(activePlayer);
	}
}
