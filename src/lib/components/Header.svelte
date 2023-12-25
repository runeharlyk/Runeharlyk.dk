<script>
	import routes from '$lib/routes.json'
	let open = false
	let hasScrolled = false;

	const toggle = () => {
		open = !open
	}

	const handleScroll = () => {
		hasScrolled = window.scrollY > 0;
	}
</script>
<header class={"transition-all fixed w-full flex h-16 md:items-center justify-end md:justify-center z-30 text-content bg-opacity-20" 
	+ (hasScrolled ? " backdrop-blur-sm bg-gray-200" : "")}>
	<!-- <button on:click={toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center m-2 p-2 w-14 h-14 justify-center text-sm text-gray-500 rounded-lg md:hidden"aria-controls="navbar-default" aria-expanded="false">
		<span class="sr-only">Open main menu</span>
		<svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
			<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
		</svg>
	</button> -->

	<nav class="flex items-center divide-x divide-gray-900 ">
		<div >
			{#each routes as route}
			<a class="px-4" href={route.route}>{route.name}</a>
			{/each}
		</div>
	</nav>
</header>

<svelte:window on:scroll={handleScroll}></svelte:window>

<!-- <div class:hidden={open} class="fixed left-0 z-30 h-screen w-screen flex justify-end">
	<nav class={`bg-red-700 transition-all h-full ${open ? 'w-2/3': ''}`}>
		<button on:click={toggle} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center m-2 p-2 w-14 h-14 justify-center text-sm text-gray-500 rounded-lg md:hidden"aria-controls="navbar-default" aria-expanded="false">
			<span class="sr-only">Open main menu</span>
			<svg class="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
				<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
			</svg>
		</button>
		<div class="flex flex-col">
			{#each routes as route}
				<a class="px-4" href={route.route}>{route.name}</a>
			{/each}
		</div>
	</nav>
</div> -->