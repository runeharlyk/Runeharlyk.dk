<script lang="ts">
    import { T } from '@threlte/core'
    import { generatePositions } from './utils.js';
    import { getStarType, starTypes } from './config/starDistributions.js'

    import {InstancedMesh, Instance } from '@threlte/extras'

    export let world_scale = 1
    export let stars:number = 2000
    export let arms:number = 4

    export let thickness:number = 5

    export let core_x:number = 33
    export let core_y:number = 33

    export let outer_core_x:number = 100
    export let outer_core_y:number = 100

    export let arm_x:number = 100
    export let arm_y:number = 100
    export let arm_x_mean:number = 100
    export let arm_y_mean:number = 100

    export let spiral:number = 3
    export let arms_density:number = 2

    export let haze:number = 0.5

    const positions = generatePositions(stars, arms_density, arm_x_mean, arm_x, arm_y_mean, arm_y, thickness, core_x, core_y, outer_core_x)
</script>

<InstancedMesh limit={10000} range={10000}>  
    <T.SphereGeometry/>
    <T.MeshBasicMaterial />

    {#each positions as position, i}
        <Instance position={position} color={starTypes.color[getStarType()]} scale={starTypes.size[getStarType()]}/>
    {/each}
</InstancedMesh>
