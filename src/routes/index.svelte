<script>
    import DrumMachine from "../components/DrumMachine.svelte";
    import Effects from "../components/effects/Effects.svelte";
    import Mixer from "../components/Mixer.svelte";
    import Synth from "../components/synth/Synth.svelte";
    // @ts-ignore
    import Tabs from "$lib/Tabs.svelte"

    // tabs
    let items = ['Synth 1', 'Synth 2', 'Drum Machine', 'Effects', 'Mixer'];
    let activeItem = 'Synth 1';
    const tabChange = (e) => activeItem = e.detail;


</script>
<Tabs {activeItem} {items} on:tabChange={tabChange} />

<div class="synth">
    <div hidden={activeItem !== 'Synth 1'}>
        <Synth />
    </div>
    <div hidden={activeItem !== 'Synth 2'}>
        <Synth />
    </div>
    <div hidden={activeItem !== 'Drum Machine'}>
        <DrumMachine />
    </div>
    <div hidden={activeItem !== 'Effects'}>
        <Effects />
    </div>
    <div hidden={activeItem !== 'Mixer'}>
        <Mixer />
    </div>
</div>

<style>
    .synth {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 10px;
        padding-top: 0px;
    }
</style>