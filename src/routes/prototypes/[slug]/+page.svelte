<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<div class="flex divide-x">
		{#each data.keywords || [] as keyword}
			<div>{keyword}</div>
		{/each}
	</div>
	<h1>{data.name}</h1>
	<div>{@html data.description}</div>

	{#if data['framed-demo']}
		<iframe src={data['framed-demo']} title="demo"></iframe>
	{/if}

</div>

