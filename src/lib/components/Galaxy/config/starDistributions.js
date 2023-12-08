export const starTypes = {
	percentage: [80, 50, 20, 15, 10, 5],
	color: [0xffcc6f, 0xffd2a1, 0xfff4ea, 0xf8f7ff, 0xcad7ff, 0xaabfff],
	size: [0.7, 0.7, 1.15, 1.48, 2.0, 2.5, 3.5]
};

export const getStarType = () => {
	const num = Math.random() * 100;

	for (const [i, percentage] of starTypes.percentage.reverse().entries()) {
		if (num < percentage) return i;
	}
	return 0;
};