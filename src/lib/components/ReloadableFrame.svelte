<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let url:string | undefined
    export let permissions = ["geolocation", "camera"]
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
        allow="{permissions.join('; ')}"
        name={`${Date.now()}`}
        data="{url}"
        on:load={handleLoad}
        on:error={handleErrors}
        />
    {/key}
{/if}