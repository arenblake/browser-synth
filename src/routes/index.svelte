<script>
    import DrumMachine from "../components/DrumMachine.svelte";
    import Effects from "../components/Effects.svelte";
    import Mixer from "../components/Mixer.svelte";
    import Modules from "../components/Modules.svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Synth from "../components/Synth.svelte";
    // @ts-ignore
    import Tabs from "$lib/Tabs.svelte"

    // tabs
    let items = ['Synth 1', 'Synth 2', 'Drum Machine', 'Effects', 'Mixer'];
    let activeItem = 'Synth 1';
    const tabChange = (e) => activeItem = e.detail;


</script>
<Tabs {activeItem} {items} on:tabChange={tabChange} />

<div class="synth">
    <Sidebar />
    {#if activeItem === 'Synth 1'}
        <Synth />
    {:else if activeItem === 'Synth 2'}
        <Modules />
    {:else if activeItem === 'Drum Machine'}
        <DrumMachine />
    {:else if activeItem === 'Effects'}
        <Effects />
    {:else if activeItem === 'Mixer'}
        <Mixer />
    {/if}
</div>

<style>
    .synth {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 1rem;
        padding: 10px;
    }
</style>