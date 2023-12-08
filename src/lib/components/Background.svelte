<script lang="ts">
	import { Canvas } from '@threlte/core';
	import SpaceScene from '$lib/components/Galaxy/SpaceScene.svelte';
	import OceanScene from '$lib/components/OceanScene.svelte';

    type BackgroundScene = "Galaxy" | "Ocean"

    export let scene:BackgroundScene
</script>

<div class="fixed top-0 h-full w-full -z-10 bg-{scene}">
    <Canvas>
        {#if scene === "Galaxy"}
            <SpaceScene />
        {:else if scene === "Ocean"}
            <OceanScene />
        {/if}
    </Canvas>
</div>

<style>
    .bg-Galaxy {
        background: #000428;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #004e92, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>