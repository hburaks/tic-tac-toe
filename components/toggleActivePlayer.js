import { firstPlayer, secondPlayer } from "../script.js";
export default function toggleActivePlayer(activePlayer) {
	activePlayer.activePlayer =
		activePlayer.activePlayer === firstPlayer ? secondPlayer : firstPlayer;
	return activePlayer;
}
