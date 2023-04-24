import { cells } from "../script.js";
export default function markTheCell() {
	cells.forEach((cell) => {
		cell.addEventListener("click", () => {
			cell.style.color = "black";
			console.log(cell.dataset.cell);
			cell.dataset.cell = "X";
			cell.innerText = cell.dataset.cell;
		});
	});
}
