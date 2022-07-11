<script>
    import Sidebar from '../components/Sidebar.svelte';
    import Header from '../components/Header.svelte';
    import '../styles/global.css'
    import Footer from '../components/Footer.svelte';
    import Sequencer from '../components/Sequencer.svelte';
    // import Modules from '../components/Modules.svelte';
    import SynthEngine from '../components/synth/SynthEngine.svelte';
import Transport from '../components/Transport.svelte';
</script>

<Header />

<!-- <Transport /> -->

<main>
    <slot></slot>
</main>

<Sequencer />

<Footer />

<SynthEngine />
<style>

</style>