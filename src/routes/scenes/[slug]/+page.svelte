<script lang="ts">
	import Background from "$lib/components/Background.svelte";
	export let data;
</script>

<Background scene={data.sceneName} />