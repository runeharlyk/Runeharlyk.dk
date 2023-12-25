<script lang="ts">
	import { Canvas } from '@threlte/core';
	import GalaxyScene from '$lib/components/Scenes/Galaxy/GalaxyScene.svelte';
	import OceanScene from '$lib/components/Scenes/Ocean/OceanScene.svelte';
	import type { BackgroundScene } from '$lib/models';

    export let scene:BackgroundScene
    export let debug:boolean = false
</script>

<div class="fixed top-0 h-full w-full -z-10 bg-{scene}">
    <Canvas>
        {#if scene === "Galaxy"}
            <GalaxyScene debug={debug}/>
        {:else if scene === "Ocean"}
            <OceanScene debug={debug}/>
        {/if}
    </Canvas>
</div>

<style>
    .bg-Galaxy {
        background: #000428;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #000000, #000428);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, rgb(0, 0, 0), rgb(0, 9, 40)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .bg-Ocean {
        background: #000046;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>