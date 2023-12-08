import * as THREE from 'three';

class Boid {
	position: THREE.Vector3;
	velocity: THREE.Vector3;
	acceleration: THREE.Vector3;
	maxSpeed: number;
	maxForce: number;
	rotation: THREE.Euler;

	constructor() {
		this.position = new THREE.Vector3(
			Math.random() * 200 - 100,
			Math.random() * 200 - 100,
			Math.random() * 200 - 100
		);
		this.rotation = new THREE.Euler();
		this.velocity = new THREE.Vector3(
			Math.random() * 2 - 1,
			Math.random() * 2 - 1,
			Math.random() * 2 - 1
		);
		this.acceleration = new THREE.Vector3();
		this.maxSpeed = 0.5;
		this.maxForce = 0.03;
	}

	update(boids: Boid[]) {
		let alignment = this.align(boids);
		let cohesion = this.cohesion(boids);
		let separation = this.separate(boids);

		// Arbitrary weights for these forces (change as needed)
		alignment.multiplyScalar(1.0);
		cohesion.multiplyScalar(1.0);
		separation.multiplyScalar(1.5);

		this.acceleration.add(alignment);
		this.acceleration.add(cohesion);
		this.acceleration.add(separation);

		// Update velocity
		this.velocity.add(this.acceleration);

		// Limit speed
		this.velocity.clampLength(0, this.maxSpeed);
		this.position.add(this.velocity);

		// Reset acceleration
		this.acceleration.multiplyScalar(0);

		this.updateRotation();
	}

	wrapAround(bounds: { x: number; y: number; z: number }) {
		const { x, y, z } = bounds;
		this.position.x = this.position.x > x ? -x : this.position.x < -x ? x : this.position.x;
		this.position.y = this.position.y > y ? -y : this.position.y < -y ? y : this.position.y;
		this.position.z = this.position.z > z ? -z : this.position.z < -z ? z : this.position.z;
	}

	align(boids: Boid[]): THREE.Vector3 {
		let perceptionRadius = 50;
		let steering = new THREE.Vector3();
		let total = 0;
		for (let other of boids) {
			let d = this.position.distanceTo(other.position);
			if (other != this && d < perceptionRadius) {
				steering.add(other.velocity);
				total++;
			}
		}
		if (total > 0) {
			steering.divideScalar(total);
			steering.setLength(this.maxSpeed);
			steering.sub(this.velocity);
			steering.clampLength(0, this.maxForce);
		}
		return steering;
	}

	cohesion(boids: Boid[]): THREE.Vector3 {
		let perceptionRadius = 50;
		let steering = new THREE.Vector3();
		let total = 0;
		for (let other of boids) {
			let d = this.position.distanceTo(other.position);
			if (other != this && d < perceptionRadius) {
				steering.add(other.position); // Add the position of each nearby boid
				total++;
			}
		}
		if (total > 0) {
			steering.divideScalar(total); // Average position
			steering.sub(this.position); // Desired velocity vector pointing towards the average position
			steering.setLength(this.maxSpeed);
			steering.sub(this.velocity);
			steering.clampLength(0, this.maxForce);
		}
		return steering;
	}

	separate(boids: Boid[]): THREE.Vector3 {
		let perceptionRadius = 25; // Usually smaller than for alignment and cohesion
		let steering = new THREE.Vector3();
		let total = 0;
		for (let other of boids) {
			let d = this.position.distanceTo(other.position);
			if (other != this && d < perceptionRadius) {
				let diff = new THREE.Vector3().subVectors(this.position, other.position);
				diff.divideScalar(d); // Weight by distance
				steering.add(diff);
				total++;
			}
		}
		if (total > 0) {
			steering.divideScalar(total); // Average force
			steering.setLength(this.maxSpeed);
			steering.sub(this.velocity);
			steering.clampLength(0, this.maxForce);
		}
		return steering;
	}

	checkBounds(bounds: { min: THREE.Vector3; max: THREE.Vector3 }) {
		let steer = new THREE.Vector3();
		let margin = 20; // Distance from the boundary at which the boid starts turning back

		// Check each dimension (x, y, z) and steer the boid back into the bounds if necessary
		if (this.position.x < bounds.min.x + margin) {
			steer.x = this.maxSpeed;
		} else if (this.position.x > bounds.max.x - margin) {
			steer.x = -this.maxSpeed;
		}

		if (this.position.y < bounds.min.y + margin) {
			steer.y = this.maxSpeed;
		} else if (this.position.y > bounds.max.y - margin) {
			steer.y = -this.maxSpeed;
		}

		if (this.position.z < bounds.min.z + margin) {
			steer.z = this.maxSpeed;
		} else if (this.position.z > bounds.max.z - margin) {
			steer.z = -this.maxSpeed;
		}

		// Apply the steering force
		this.velocity.add(steer);
	}

	updateRotation() {
		// Create a target point in the direction of the velocity
		let target = new THREE.Vector3();
		target.addVectors(this.position, this.velocity);

		// Calculate the rotation to look at the target
		let rotation = new THREE.Quaternion().setFromUnitVectors(
			new THREE.Vector3(0, 1, 0), // assuming the boid's "up" direction is along the y-axis
			this.velocity.clone().normalize()
		);

		this.rotation = new THREE.Euler().setFromQuaternion(rotation);
	}
}

export default Boid;
