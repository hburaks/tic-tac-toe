import Player from "./players.js";
export default function displayDom(input, output, mark) {
	input.style.display = "none";
	output.style.display = "block";
	const inputValue = input.value || input.getAttribute("placeholder");
	output.innerText = inputValue;
	return new Player(inputValue, mark);
}
