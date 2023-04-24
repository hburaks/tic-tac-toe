import displayNames from "./components/displayNames,.js";
import markTheCell from "./components/markTheCell.js";
import Player from "./components/players.js";
const namesInput = document.querySelector(".names-input");
const header = document.querySelector(".header");
const inputOne = document.getElementById("input-one");
const inputSecond = document.getElementById("input-second");
const submitButton = document.getElementById("submit-button");
const outputOne = document.getElementById("firstPlayerOutput");
const outputSecond = document.getElementById("secondPlayerOutput");

const firstPlayer = new Player("Player X", "X");
const secondPlayer = new Player("Player O", "O");
submitButton.addEventListener("click", () => {
	displayNames(inputOne, outputOne, "X");
	displayNames(inputSecond, outputSecond, "O");
	namesInput.style.display = "none";
	header.style.display = "flex";
});
markTheCell();
