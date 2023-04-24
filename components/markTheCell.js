import { cells, activePlayer } from "../script.js";
import toggleActivePlayer from "./toggleActivePlayer.js";
export default function markTheCell() {
	cells.forEach((cell) => {
		cell.addEventListener("click", () => {
			cell.style.color = "black";
			cell.dataset.cell = activePlayer.activePlayer.mark;
			toggleActivePlayer(activePlayer);
			console.log(activePlayer.activePlayer);
			cell.innerText = cell.dataset.cell;
		});
	});
}
