<script lang="ts">
    import { T } from '@threlte/core'
    import { InstancedMesh, Instance } from '@threlte/extras'
	import { randomPointOnSphere } from './utils';

    export let stars:number = 10000
    export let radius:number = 1000
    export let color:number = 0xffcc6f

    const positions = Array.from({ length: stars }, () => randomPointOnSphere(radius));
</script>

<InstancedMesh>  
    <T.SphereGeometry />
    <T.MeshBasicMaterial transparent color="#ffffff" ></T.MeshBasicMaterial>

    {#each positions as position}
        <Instance position={position} color={color}/>
    {/each}
</InstancedMesh>

