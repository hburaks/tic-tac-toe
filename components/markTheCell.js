import { cells, activePlayer } from "../script.js";
import gameBoard from "./gameBoard.js";
import toggleActivePlayer from "./toggleActivePlayer.js";
import checkForWin from "./checkForWin.js";
export default function markTheCell() {
	function clearCells() {
		for (let prop in gameBoard) {
			gameBoard[prop] = "";
		}
	}
	function renderGameBoard() {
		cells.forEach((cell) => {
			console.log(cell.dataset.cell);
			cell.dataset.cell = gameBoard[cell.dataset.index];
			if (cell.dataset.cell === "") {
				cell.innerText = "";
			}
		});
	}
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
				clearCells();
				console.log(gameBoard);
				renderGameBoard();
			}
		});
	});
}
