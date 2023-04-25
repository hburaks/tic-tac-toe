import displayNames from "./components/displayNames,.js";
import markTheCell from "./components/markTheCell.js";
import hoverCell from "./components/hoverCell.js";
import Player from "./components/players.js";
import toggleActivePlayer from "./components/toggleActivePlayer.js";

const namesInput = document.querySelector(".names-input");
const header = document.querySelector(".header");
const inputOne = document.getElementById("input-one");
const inputSecond = document.getElementById("input-second");
const submitButton = document.getElementById("submit-button");
const outputOne = document.getElementById("firstPlayerOutput");
const outputSecond = document.getElementById("secondPlayerOutput");
const title = document.querySelector(".title");
export const cells = document.querySelectorAll(".cell");
export const firstPlayer = new Player(
	inputOne.getAttribute("placeholder"),
	"X"
);
export const secondPlayer = new Player(
	inputSecond.getAttribute("placeholder"),
	"O"
);
export const activePlayer = { activePlayer: firstPlayer };
submitButton.addEventListener("click", () => {
	displayNames(inputOne, outputOne, "X", firstPlayer);
	displayNames(inputSecond, outputSecond, "O", secondPlayer);
	namesInput.style.display = "none";
	title.style.color = "black";
	header.style.display = "flex";
});
hoverCell();
markTheCell();
