<script>
    import { Reverb } from './stores/EffectsStore'
    import Knob from 'svelte-knob';
    let size = 30;
    export let decay = 1
    export let preDelay = 0
    export let wet = 0

    $: {
        Reverb.update(data => {
            data.decay = decay,
            data.preDelay = preDelay,
            data.wet = wet
            return data
        })
    }
</script>

<div class="lfo">
    <h3>Reverb</h3>
    <div>
        <h4>Decay</h4>
        <Knob bind:value={decay} responsive={true} {size} min={0.001} max={20} step={0.1}/>
    </div>
    <div>
        <h4>Pre-Delay</h4>
        <Knob bind:value={preDelay} responsive={true} {size} max={2.0} step={0.01}/>
    </div>
    <div>
        <h4>Wet</h4>
        <Knob bind:value={wet} responsive={true} {size} max={1.0} step={0.01}/>
    </div>
</div>



<style>
    .lfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .7rem;
        margin: .5rem;
    }

    /* .knob-row {
        display: flex;
    } */
    h3 {
        margin-top: 0;
        margin-bottom: 0;
    }

    h4 {
        /* margin-top: 0; */
        margin-top: .3rem;
        margin-bottom: 0;
    }

    .selectors {
        display: flex;
        justify-content: center;
    }

</style>