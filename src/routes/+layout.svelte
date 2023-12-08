<script>
	import '../app.css';
	import Background from '$lib/components/Background.svelte';
	import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<Background />

<Header />
<slot />
<Footer />
