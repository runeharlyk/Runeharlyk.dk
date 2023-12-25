<script>
    import Card from '$lib/components/Card.svelte';
    import prototypes from './prototypes.json'
</script>
<div>
	<div class="-z-10 h-screen sky flex flex-col justify-items-center pt-14 p-10 bg-opacity-60">
        <div class="">
            <h1 class="text-3xl">Prototype [noun]</h1>
            <h2>/ˈprəʊtətʌɪp/</h2>
            <em>First or preliminary version of a device or vehicle from which other forms are developed.</em>
        </div>
        
        <div>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            class="pulse-1 -mb-[20px]"
            fill="#fff"
            viewBox="0 0 256 256"
            >
            <path
            d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"
            />
        </svg>
        
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        class="pulse-2 -mb-[20px]"
        fill="#fff"
        viewBox="0 0 256 256"
        >
        <path
        d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"
        />
    </svg>
    
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
          height="32"
          class="pulse-3 -mb-[20px]"
          fill="#fff"
          viewBox="0 0 256 256"
          >
          <path
          d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"
          />
        </svg>
    </div>
	</div>

	<div class="h-screen ocean">
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row hover:grid-flow-row-dense gap-10 md:gap-24 auto-cols-max py-20 px-10 md:px-20">
            {#each prototypes as proto}
                <Card data={proto}></Card>
            {/each}
        </div>
	</div>
</div>
