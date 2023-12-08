<script>
	import '../app.css';
	import Background from '$lib/components/Background.svelte';
	import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
</script>

{#if $page.route.id?.includes('/scenes/')}
  <slot />
{:else}
  <Background scene="Galaxy"/>
  <Header />
  <slot />
  <Footer />
{/if}

