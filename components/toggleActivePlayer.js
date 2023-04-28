import { aiPlayer, firstPlayer, secondPlayer } from "../script.js";
import { outputSecond } from "../script.js";
import computerMove from "./computerMove.js";
import bestComputerMove from "./bestComputerMove.js";
export default function toggleActivePlayer(activePlayer) {
	if (outputSecond.dataset.ai === "1") {
		if (activePlayer.activePlayer === firstPlayer) {
			activePlayer.activePlayer = aiPlayer;
			computerMove();
		} else {
			activePlayer.activePlayer = firstPlayer;
		}
	} else if (outputSecond.dataset.ai === "2") {
		if (activePlayer.activePlayer === firstPlayer) {
			activePlayer.activePlayer = aiPlayer;
			bestComputerMove();
		} else {
			activePlayer.activePlayer = firstPlayer;
		}
	} else {
		activePlayer.activePlayer =
			activePlayer.activePlayer === firstPlayer ? secondPlayer : firstPlayer;
	}
	return activePlayer;
}
