<script>
    import Knob from 'svelte-knob';
    import {Envelopes, FilterEnvelope} from './stores/EnvelopeStore';
    let size = 70

    let ampAttack = 0.8
    let ampDecay = 0.2
    let ampSustain = 0.8
    let ampRelease = 2

    let filterAttack = 0.8
    let filterDecay = 0.2
    let filterSustain = 0.8
    let filterRelease = 2


    $: {
        Envelopes.update(data => {
            data.attack = ampAttack
            data.decay = ampDecay,
            data.sustain = ampSustain,
            data.release = ampRelease
            return data
        })
    }

    $: {
        FilterEnvelope.update(data => {
            data.attack = filterAttack
            data.decay = filterDecay,
            data.sustain = filterSustain,
            data.release = filterRelease
            return data
        })
    }
</script>

<div class="envelopes">
    <h3>Envelopes</h3>
    <h4>Amp</h4>
    <div class="adsr-row">
        <Knob bind:value={ampAttack} responsive={true} {size} max={4} step={0.1}/>
        <Knob bind:value={ampDecay} responsive={true} {size} max={4} step={0.1}/>
        <Knob bind:value={ampSustain} responsive={true} {size} max={1} step={0.1}/>
        <Knob bind:value={ampRelease} responsive={true} {size} max={10} step={0.1}/>
    </div>
    <h4>Filter</h4>
    <div class="adsr-row">
        <Knob bind:value={filterAttack} responsive={true} {size} max={4} step={0.1}/>
        <Knob bind:value={filterDecay} responsive={true} {size} max={4} step={0.1}/>
        <Knob bind:value={filterSustain} responsive={true} {size} max={1} step={0.1}/>
        <Knob bind:value={filterRelease} responsive={true} {size} max={10} step={0.1}/>
    </div>
    <!-- <h4>Aux Destination</h4>
    <div class="selectors">
        <button>Filter Freq</button>
        <button>OSC 2 Pitch</button>
        <button>LFO Rate</button>
    </div> -->
</div>


<style>
    .adsr-row {
        display: flex;
        justify-content: space-around;
    }

    .selectors {
        display: flex;
        justify-content: center;
    }

    .envelopes {
        display: flex;
        flex-direction: column;
        gap: .7rem;
        margin: .5rem;
    }
    h3 {
        margin-top: 0;
        margin-bottom: 0;
    }

    h4 {
        margin-top: .3rem;
        margin-bottom: 0;
    }

</style>