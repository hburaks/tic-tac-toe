import displayNames from "./components/displayNames,.js";
import markTheCell from "./components/markTheCell.js";
import hoverCell from "./components/hoverCell.js";
import Player from "./components/players.js";
import { resultContainer } from "./components/checkForWin.js";
import computerMove from "./components/computerMove.js";
const namesInput = document.querySelector(".names-input");
const header = document.querySelector(".header");
const inputOne = document.getElementById("input-one");
const inputSecond = document.getElementById("input-second");
const submitButton = document.getElementById("submit-button");
const outputOne = document.getElementById("firstPlayerOutput");
export const outputSecond = document.getElementById("secondPlayerOutput");
const title = document.querySelector(".title");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const restartGame = document.querySelector(".restart-game");
const restart = document.querySelector(".restart");
const friend = document.querySelector("#friend");
const computer = document.querySelector("#computer");
const toughComputer = document.querySelector("#tough-computer");
const opponentSelector = document.querySelector(".opponent-selector");
const formContainer = document.querySelector("#form-container");
export const cells = document.querySelectorAll(".cell");
export const firstPlayer = new Player(
	inputOne.getAttribute("placeholder"),
	"X",
	score1
);
export const secondPlayer = new Player(
	inputSecond.getAttribute("placeholder"),
	"O",
	score2
);
export const aiPlayer = new Player("Computer", "O", score2);
export const activePlayer = { activePlayer: firstPlayer };
const buttonContainer = document.querySelector(".button-container");

submitButton.addEventListener("click", () => {
	displayNames(inputOne, outputOne, "X", firstPlayer);
	if (inputSecond.style.display !== "none") {
		displayNames(inputSecond, outputSecond, "O", secondPlayer);
	}
	formContainer.style.display = "none";
	title.style.color = "black";
	header.style.display = "flex";
});
restartGame.addEventListener("click", () => {
	resultContainer.style.display = "none";
	activePlayer.activePlayer = firstPlayer;
});
restart.addEventListener("click", () => {
	activePlayer.activePlayer = firstPlayer;
	namesInput.style.display = "flex";
	resultContainer.style.display = "none";
	firstPlayer.resetScore();
	aiPlayer.resetScore();
	secondPlayer.resetScore();
});
friend.addEventListener("click", () => {
	formContainer.style.display = "flex";
	opponentSelector.style.display = "none";
	inputSecond.style.display = "flex";
	outputSecond.dataset.ai = "0";
});
computer.addEventListener("click", () => {
	formContainer.style.display = "flex";
	opponentSelector.style.display = "none";
	inputSecond.style.display = "none";
	outputSecond.dataset.ai = "1";
	outputSecond.innerText = "Computer";
});
toughComputer.addEventListener("click", () => {
	buttonContainer.style.display = "none";
	namesInput.innerText = "in Progress, please refresh the page";

	// formContainer.style.display = "flex";
	// opponentSelector.style.display = "none";
	// inputSecond.style.display = "none";
	// outputSecond.dataset.ai = "2";
	// outputSecond.innerText = "Computer";
});
hoverCell();
markTheCell();
if (activePlayer.activePlayer === aiPlayer) {
	computerMove();
}
