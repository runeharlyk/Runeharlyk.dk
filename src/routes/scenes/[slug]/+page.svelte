<script lang="ts">
	import Background from "$lib/components/Background.svelte";
	export let data;
</script>

<Background debug={true} scene={data.sceneName} />