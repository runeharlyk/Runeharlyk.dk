<script>
	import Card from '$lib/components/Card.svelte';
	import { fly } from 'svelte/transition';
	import prototypes from './prototypes.json';

	let list = [];

	setTimeout(() => {
		list = prototypes;
	}, 100);
</script>

<div>
	<div class="-z-10 flex flex-col items-center pt-14 p-10">
		<div class="">
			<h1 class="text-3xl">Prototype [noun]</h1>
			<h2>/ˈprəʊtətʌɪp/</h2>
			<em>
				First or preliminary version of a device or vehicle from which other forms are developed.
			</em>
		</div>
	</div>

	<div class="h-screen ocean">
		<div
			class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row hover:grid-flow-row-dense gap-10 lg:gap-24 xl:gap-10 2xl:gap-24 auto-cols-max p-10 md:px-20"
		>
			{#each list as proto, i}
				<div transition:fly={{ y: 50, duration: 1000, delay: i * 100 }}>
					<Card data={proto} />
				</div>
			{/each}
		</div>
	</div>
</div>
