export default function displayNames(input, output, mark, player) {
	input.style.display = "none";
	output.style.display = "block";
	const inputValue = input.value || input.getAttribute("placeholder");
	output.innerText = inputValue;
	player.name = inputValue;
}
