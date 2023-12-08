<script lang="ts">
    import { Galaxy } from "./objects/galaxy";

    import { useTask, useThrelte } from '@threlte/core'
	

    const { scene } = useThrelte()

    export let stars:number = 5000
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

    let galaxy = new Galaxy(scene)
</script>