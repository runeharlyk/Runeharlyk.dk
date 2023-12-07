<script>
    import Card from '$lib/components/Card.svelte';
    import prototypes from './prototypes.json'
</script>
<div>
	<div class="-z-10 h-screen sky flex justify-items-center p-10 bg-opacity-60 text-white">
        <div class="">
            <h1 class="text-3xl">Prototype [noun]</h1>
            <h2>/ˈprəʊtətʌɪp/</h2>
            <em>First or preliminary version of a device or vehicle from which other forms are developed.</em>
        </div>
	</div>

	<div class="h-screen ocean">
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row hover:grid-flow-row-dense gap-10 md:gap-24 auto-cols-max py-20 px-10 md:px-20">
            {#each prototypes as proto}
                <Card data={proto}></Card>
            {/each}
        </div>
		<footer class="fixed bottom-0 flex h-16 w-full text-zinc-50 justify-between p-4 z-20">
			<div />
			<div>Made with ❤️ and 🕰️ by Rune Harlyk</div>
		</footer>
	</div>
</div>
