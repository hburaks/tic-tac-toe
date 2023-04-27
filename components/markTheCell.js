import { cells, activePlayer, aiPlayer } from "../script.js";
import gameBoard from "./gameBoard.js";
import toggleActivePlayer from "./toggleActivePlayer.js";
import checkForWin from "./checkForWin.js";
export function resetGameBoard() {
	for (let prop in gameBoard) {
		gameBoard[prop] = "";
	}
	cells.forEach((cell) => {
		cell.dataset.cell = gameBoard[cell.dataset.index];
		cell.innerText = "";
	});
}
export default function markTheCell() {
	cells.forEach((cell) => {
		cell.addEventListener("click", () => {
			if (cell.dataset.cell === "") {
				cell.style.color = "black";
				cell.dataset.cell = activePlayer.activePlayer.mark;
				gameBoard[cell.dataset.index] = activePlayer.activePlayer.mark;
				toggleActivePlayer(activePlayer);
				cell.innerText = cell.dataset.cell;
			}
			if (checkForWin(gameBoard)) {
				resetGameBoard();
			}
		});
	});
	if (activePlayer.activePlayer === aiPlayer) {
		computerMove();
	}
}
