import { cells } from "../script.js";

const gameBoard = {
	0: "",
	1: "",
	2: "",
	3: "",
	4: "",
	5: "",
	6: "",
	7: "",
	8: ""
};

export function renderGameBoard() {
	let i = 0;
	cells.forEach((cell) => {
		cell.style.color = "black";
		cell.dataset.cell = gameBoard[i];
		cell.innerText = gameBoard[i];
		i++;
	});
}
export default gameBoard;
