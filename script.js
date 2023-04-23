import gameBoard from "./components/gameBoard.js";
import Player from "./components/players.js";

const player1 = new Player("hasan");
const player2 = new Player("mehmet");
const myCell = document.querySelectorAll(".cell");
for (let i = 0; i < myCell.length; i++) {
	myCell[i].dataset.cell = "x";
	myCell[i].innerText = myCell[i].dataset.cell;
}
