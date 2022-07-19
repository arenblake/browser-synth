<script>
    import Header from '../components/Header.svelte';
    import '../styles/global.css'
    import Footer from '../components/Footer.svelte';
    import Sequencer from '../components/Sequencer.svelte';
    import SynthEngine from '../components/synth/SynthEngine.svelte';
</script>

<Header />

<main>
    <slot></slot>
</main>

<Sequencer />

<Footer />

<SynthEngine />
<style>

</style>