const cells = document.querySelectorAll(".cell");

export default function markTheCell() {
	cells.forEach((cell) => {
		cell.addEventListener("click", () => {
			cell.dataset.cell = "X";
			cell.innerText = cell.dataset.cell;
		});
	});
}
