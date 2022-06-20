<script>
    import Sidebar from '../components/Sidebar.svelte';
    import Header from '../components/Header.svelte';
    import '../styles/global.css'
    import Footer from '../components/Footer.svelte';
    import Sequencer from '../components/Sequencer.svelte';
    import Modules from '../components/Modules.svelte';
</script>

<Header />

<main>
    <slot></slot>
</main>

<Sequencer />

<Footer />

<style>

</style>