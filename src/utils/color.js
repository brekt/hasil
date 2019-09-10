function combineColors(colors) {
	return colors.reduce((accum, color) => {
		return accum + color;
	}) / colors.length;
}

function getRandomColor() {
	return Math.ceil(Math.random() * 360);
}

function getCombinedColors(players) {
	return combineColors(players.map(player => player.color));
}

export {
	combineColors,
	getCombinedColors,
	getRandomColor
};
