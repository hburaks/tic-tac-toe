import displayDom from "./components/displayDom.js";
import gameBoard from "./components/gameBoard.js";

const inputOne = document.getElementById("input-one");
const inputSecond = document.getElementById("input-second");
const submitButton = document.getElementById("submit-button");
const outputOne = document.getElementById("firstPlayerOutput");
const outputSecond = document.getElementById("secondPlayerOutput");

const myCell = document.querySelectorAll(".cell");
for (let i = 0; i < myCell.length; i++) {
	myCell[i].dataset.cell = "X";
	myCell[i].innerText = myCell[i].dataset.cell;
}

submitButton.addEventListener("click", () => {
	displayDom(inputOne, outputOne);
	displayDom(inputSecond, outputSecond);
	submitButton.style.display = "none";
});
