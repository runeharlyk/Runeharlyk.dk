
<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import Header from './Header.svelte';
	import RootContent from './RootContent.svelte';
</script>

<Header/>

<div class="fixed top-0 h-full w-full">
	<Canvas>
		<Scene />
	</Canvas>
</div>

<RootContent/>
