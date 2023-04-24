import displayNames from "./components/displayNames,.js";
import markTheCell from "./components/markTheCell.js";
import hoverCell from "./components/hoverCell.js";
import Player from "./components/players.js";

const namesInput = document.querySelector(".names-input");
const header = document.querySelector(".header");
const inputOne = document.getElementById("input-one");
const inputSecond = document.getElementById("input-second");
const submitButton = document.getElementById("submit-button");
const outputOne = document.getElementById("firstPlayerOutput");
const outputSecond = document.getElementById("secondPlayerOutput");
export const cells = document.querySelectorAll(".cell");

const firstPlayer = new Player(inputOne.getAttribute("placeholder"), "X");
const secondPlayer = new Player(inputSecond.getAttribute("placeholder"), "O");
submitButton.addEventListener("click", () => {
	displayNames(inputOne, outputOne, "X", firstPlayer);
	displayNames(inputSecond, outputSecond, "O", secondPlayer);
	namesInput.style.display = "none";
	header.style.display = "flex";
	console.log(secondPlayer);
});
hoverCell();
markTheCell();
