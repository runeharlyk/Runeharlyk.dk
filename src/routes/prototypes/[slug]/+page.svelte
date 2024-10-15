<script lang="ts">
	import type { prototype } from '$lib/models';
	import ReloadableFrame from '$lib/components/ReloadableFrame.svelte';

	export let data: prototype;
	let frame_hidden = true;

	const setFrameVisibility = (state: boolean) => (frame_hidden = state);
</script>

<div class="flex w-screen min-h-screen px-8 justify-center">
	<div class="max-w-7xl w-full flex-col just p-5">
		<div class="flex">
			<h1 class="text-4xl font-thin my-10">{data.name}</h1>
			<!-- <div>
				<div class="flex divide-x divide-content/80 uppercase text-xs text-content/80">
					{#each data.keywords || [] as keyword}
						<div class="px-4">{@html keyword}</div>
					{/each}
				</div>
			</div> -->
		</div>
		<div class="mb-10">{@html data.description}</div>

		<div class="w-full max-w-7xl flex justify-center">
			{#if data.framed_demo}
				<div
					class={`w-full border-grey-900 transition-height duration-1000 backdrop-blur-md overflow-hidden ${
						frame_hidden ? 'h-0' : 'h-full'
					} ${data.framed_demo ? 'border-2' : ''}`}
				>
					<ReloadableFrame
						permissions={['geolocation', 'camera *']}
						on:load={() => setFrameVisibility(false)}
						on:error={() => setFrameVisibility(true)}
						url={data.framed_demo}
						class="w-full transition-height duration-1000 aspect-video"
					/>
				</div>
			{:else}
				<img src={data.cover} alt="prototype" class="w-full mx-4" />
			{/if}
		</div>
		<div class="divide-x divide-content-800 pt-4">
			[
			{#if data.demo}
				<a href={data.demo} class="px-4">Demo</a>
			{/if}
			{#if data.source}
				<a href={data.source} class="px-4">Source</a>
			{/if}
			]
		</div>

		<div class="w-full flex justify-end">
			<a href={`${data.next_page}`}>Next</a>
		</div>
	</div>
</div>
