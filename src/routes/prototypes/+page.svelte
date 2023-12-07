<script>
    import Card from '$lib/components/Card.svelte';
import prototypes from './prototypes.json'
</script>
<div>
	<div class="-z-10 h-screen sky flex content-center items-center">
		<div class="z-10 w-3/4 h-full flex items-center justify-center flex-col">
			<div
				class="w-2/3 p-6 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100"
			>
				<h2 class="text-3xl">Prototypes</h2>
                <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                    <div class="col-span-2">01</div>
                    <div class="col-span-2">02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                  </div>
			</div>
		</div>
		<div class="w-1/4 h-full" />
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

<style>
	.sky {
		background: #2980b9;
		background: -webkit-linear-gradient(to top, #6dd5fa, #6dd5fa, #2980b9);
		background: linear-gradient(to top, #6dd5fa, #6dd5fa, #2980b9);
	}

	.ocean {
		min-height: 400vh;
		background: #373b44;
		background: -webkit-linear-gradient(to bottom, #4286f4, #373b44);
		background: linear-gradient(to bottom, #4286f4, #252d40, #252d40, #070a0f);
	}

	/* * {
		border: 1px solid red;
		box-sizing: border-box;
	} */
</style>
