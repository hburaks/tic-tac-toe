import { cells, activePlayer } from "../script.js";
import toggleActivePlayer from "./toggleActivePlayer.js";
export default function markTheCell() {
	cells.forEach((cell) => {
		cell.addEventListener("click", () => {
			if (cell.dataset.cell === "") {
				cell.style.color = "black";
				cell.dataset.cell = activePlayer.activePlayer.mark;
				toggleActivePlayer(activePlayer);
				cell.innerText = cell.dataset.cell;
			}
		});
	});
}
