export default function Player(name, mark, score) {
	this.name = name;
	this.mark = mark;
	this.score = score.innerText;
	this.updateScore = function () {
		this.score++;
		score.innerText = this.score;
	};
}
