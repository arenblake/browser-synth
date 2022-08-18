<script>
	import Header from '../components/Header.svelte';
	import '../styles/global.css';
	import Footer from '../components/Footer.svelte';
	import Sequencer from '../components/Sequencer.svelte';
	import SynthEngine from '../components/synth/SynthEngine.svelte';
	// import '../app.css';
</script>

<Header />

<main class="mt-4">
	<slot />
</main>

<Sequencer />

<Footer />

<SynthEngine />

<style>
</style>
