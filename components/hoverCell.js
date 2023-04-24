import { cells } from "../script.js";
import { activePlayer } from "../script.js";
export default function hoverCell() {
	cells.forEach((cell) => {
		cell.addEventListener("mouseenter", () => {
			if (cell.dataset.cell === "") {
				cell.style.color = "gray";
				cell.innerText = activePlayer.activePlayer.mark;
			}
		});
		cell.addEventListener("mouseleave", () => {
			if (cell.dataset.cell === "") {
				cell.innerText = "";
			}
		});
	});
}
