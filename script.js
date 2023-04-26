import displayNames from "./components/displayNames,.js";
import markTheCell from "./components/markTheCell.js";
import hoverCell from "./components/hoverCell.js";
import Player from "./components/players.js";
import { resultContainer } from "./components/checkForWin.js";
const namesInput = document.querySelector(".names-input");
const header = document.querySelector(".header");
const inputOne = document.getElementById("input-one");
const inputSecond = document.getElementById("input-second");
const submitButton = document.getElementById("submit-button");
const outputOne = document.getElementById("firstPlayerOutput");
const outputSecond = document.getElementById("secondPlayerOutput");
const title = document.querySelector(".title");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const restartGame = document.querySelector(".restart-game");
const restart = document.querySelector(".restart");
const friend = document.querySelector("#friend");
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
export const aiPlayer = new Player("Computer", "0", score2);
export const activePlayer = { activePlayer: firstPlayer };

submitButton.addEventListener("click", () => {
	displayNames(inputOne, outputOne, "X", firstPlayer);
	displayNames(inputSecond, outputSecond, "O", secondPlayer);
	formContainer.style.display = "none";
	title.style.color = "black";
	header.style.display = "flex";
});
restartGame.addEventListener("click", () => {
	resultContainer.style.display = "none";
});
restart.addEventListener("click", () => {
	namesInput.style.display = "flex";
	resultContainer.style.display = "none";
	firstPlayer.resetScore();
	aiPlayer.resetScore();
	secondPlayer.resetScore();
});
friend.addEventListener("click", () => {
	// namesInput.forEach((nameInput) => {
	// 	nameInput.style.display = "flex";
	// });
	formContainer.style.display = "flex";
	console.log(namesInput);
	opponentSelector.style.display = "none";
});
hoverCell();
markTheCell();
