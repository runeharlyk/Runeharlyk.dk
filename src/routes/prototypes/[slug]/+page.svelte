<script lang="ts">
	import { onMount } from 'svelte';

	export let data:prototype;
	let frame:HTMLIFrameElement;
	let frame_hidden = true

	$: {
		frame_hidden = true
		loadDemo()
	}

	onMount(() => {
		loadDemo()
	})

	const loadDemo = () => {
		if (!frame || !data.framed_demo) return
		frame.onload = () => frame_hidden = false			
		frame.src = data.framed_demo
	}
</script>

<div class="flex justify-center w-screen min-h-screen pt-10">
	<div class="max-w-7xl w-full flex items-center flex-col p-5">
		<div class="flex divide-x divide-content/80 uppercase justify-center text-sm text-content/80">
			{#each data.keywords || [] as keyword}
			<div class="px-4">{@html keyword}</div>
			{/each}
		</div>
		<h1 class="text-4xl p-10 text-center">{data.name}</h1>
		<div class="divide-x divide-content-800 pb-4">[
			{#if data.framed_demo}
				<a href={data.framed_demo} class="px-4">Demo</a>
			{/if}
			{#if data.source}
				<a href={data.source} class="px-4">Source</a>
			{/if}
		]
		</div>
		<div class="w-full max-w-7xl flex items-center">
			<div class={`w-full border-grey-900 transition-height duration-1000 backdrop-blur-md overflow-hidden ${frame_hidden ? 'h-0' : 'h-full'} ${data.framed_demo?'border-2':''}`}>
				{#if data.framed_demo }
				<iframe 
				class={`w-full  transition-height duration-1000 aspect-video`}
				bind:this={frame} 
				title="demo" />
				{/if}
			</div>
		</div>
	
		<div class="w-full flex justify-end">
			<a href={`./${data.next_page}`}>Next</a>
		</div>

		<h2 class="text-3xl uppercase">Brief</h2>
		<div>{@html data.description}</div>
	</div>
</div>

