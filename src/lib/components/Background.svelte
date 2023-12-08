<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/Galaxy/SpaceScene.svelte';
</script>
<div class="fixed top-0 h-full w-full -z-10 bg-deep-space">
    <Canvas>
        <Scene />
    </Canvas>
</div>

<style>
    .bg-ocean {
        background: #000046;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .bg-deep-space {
        background: #4b6cb7;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
</style>