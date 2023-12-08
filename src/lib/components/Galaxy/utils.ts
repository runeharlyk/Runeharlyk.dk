export function gaussianRandom(mean = 0, stdev = 1) {
	let u = 1 - Math.random();
	let v = Math.random();
	let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

	return z * stdev + mean;
}

export function clamp(value: number, minimum: number, maximum: number) {
	return Math.min(maximum, Math.max(minimum, value));
}

export function spiral(
	x: number,
	y: number,
	z: number,
	offset: number,
	arm_x: number,
	spiral: number
) {
	let r = Math.sqrt(x ** 2 + y ** 2);
	let theta = offset;
	theta += x > 0 ? Math.atan(y / x) : Math.atan(y / x) + Math.PI;
	theta += (r / arm_x) * spiral;
	return [r * Math.cos(theta), r * Math.sin(theta), z];
}

export function randomPointOnSphere(radius: number) {
	var theta = Math.random() * 2 * Math.PI;
	var phi = Math.acos(2 * Math.random() - 1);
	var x = radius * Math.sin(phi) * Math.cos(theta);
	var y = radius * Math.sin(phi) * Math.sin(theta);
	var z = radius * Math.cos(phi);
	return [x, y, z];
}

export const generatePositions = (
	stars: number,
	arms_density: number,
	arm_x_mean: number,
	arm_x: number,
	arm_y_mean: number,
	arm_y: number,
	thickness: number,
	core_x: number,
	core_y: number,
	outer_core_x: number,
	spiral_value: number
) => {
	let positions = [];

	for (let j = 0; j < arms_density; j++) {
		for (let i = 0; i < stars / 4; i++) {
			let pos = spiral(
				gaussianRandom(arm_x_mean, arm_x),
				gaussianRandom(arm_y_mean, arm_y),
				gaussianRandom(0, thickness),
				(j * 2 * Math.PI) / arms_density,
				arm_x,
				spiral_value
			);
			positions.push(pos);
		}
	}

	for (let i = 0; i < stars / 4; i++) {
		let pos = [gaussianRandom(0, core_x), gaussianRandom(0, core_y), gaussianRandom(0, thickness)];
		positions.push(pos);
	}

	for (let i = 0; i < stars / 4; i++) {
		let pos = [
			gaussianRandom(0, outer_core_x),
			gaussianRandom(0, core_x),
			gaussianRandom(0, thickness)
		];
		positions.push(pos);
	}

	return positions;
};
