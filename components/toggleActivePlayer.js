import { aiPlayer, firstPlayer, secondPlayer } from "../script.js";
import { outputSecond } from "../script.js";
import computerMove from "./computerMove.js";
export default function toggleActivePlayer(activePlayer) {
	if (outputSecond.innerText === "Computer") {
		if (activePlayer.activePlayer === firstPlayer) {
			activePlayer.activePlayer = aiPlayer;
			computerMove();
		} else {
			activePlayer.activePlayer = firstPlayer;
		}
	} else {
	}
	activePlayer.activePlayer =
		activePlayer.activePlayer === firstPlayer ? secondPlayer : firstPlayer;
	return activePlayer;
}
