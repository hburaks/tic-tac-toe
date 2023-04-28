import { activePlayer } from "../script.js";
import gameBoard, { renderGameBoard } from "./gameBoard.js";
import toggleActivePlayer from "./toggleActivePlayer.js";
import checkForWin from "./checkForWin.js";
import { resetGameBoard } from "./markTheCell.js";
import miniMax from "./miniMax.js";
export default function bestComputerMove() {
	const bestMoveNum = miniMax();
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
	if (gameBoard[bestMoveNum] === "") {
		gameBoard[bestMoveNum] = "O";
		renderGameBoard();
		toggleActivePlayer(activePlayer);
	}
}
