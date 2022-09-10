<script>
	import Header from '../components/Header.svelte';
	import '../styles/global.css';
	import Footer from '../components/Footer.svelte';
	import Sequencer from '../components/Sequencer.svelte';
	import SynthEngine from '../components/synth/SynthEngine.svelte';
	import SynthPresets from '../components/synth/SynthPresets.svelte';
</script>

<Header />
<div class="mt-4">
	<SynthPresets />
</div>

<main class="mt-4">
	<slot />
</main>

<Sequencer />

<Footer />

<SynthEngine />

<style>
</style>
