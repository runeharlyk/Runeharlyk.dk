<script lang="ts">
    import {Vector3} from 'three'
    import { T, useFrame } from '@threlte/core'
    import Boid from './boid';
    import { writable } from 'svelte/store';
	import PostProcessingBloom from '../Galaxy/PostProcessingBloom.svelte';
	import { Instance, InstancedMesh } from '@threlte/extras';

    export let num_boids = 200;

    const bounds = {
        min: new Vector3(-75, -50, -75),
        max: new Vector3(75, 50, 75)
    };

    const boids = writable(Array.from({ length: num_boids }, () => new Boid()));

    useFrame((delta) => {       
        boids.update(currentBoids => {
            currentBoids.forEach(boid => {
                boid.update(currentBoids)
                // boid.wrapAround({x:100, y:100, z:100});
                boid.checkBounds(bounds);
            })
            return currentBoids;
        });
    });
</script>

<InstancedMesh limit={1000} range={1000}>
    <T.ConeGeometry args={[0.05, 0.5]}></T.ConeGeometry>
    <T.MeshBasicMaterial></T.MeshBasicMaterial>
    
    {#each $boids as boid}
        <Instance position={boid.position.toArray()} rotation={boid.rotation.toArray()} />
    {/each}
</InstancedMesh>