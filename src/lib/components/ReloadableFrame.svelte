<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let url:string | undefined
    let reload = {};

    $: reload = {}

    const handleLoad = () => dispatch('load')

    const handleErrors = () => {
        url = ""
		reload = {};
        dispatch('error')
	};
</script>

{#if url}
    {#key reload}
        <object
        class="{$$restProps.class || ''}"
        title="browser"
        name={`${Date.now()}`}
        data="{url}"
        on:load={handleLoad}
        on:error={handleErrors}
        />
    {/key}
{/if}