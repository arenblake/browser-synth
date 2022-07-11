<script>
    import Knob from 'svelte-knob';
    import SynthStore from './SynthStore';
    let size = 70

    let attack = 0.8
    let decay = 0.2
    let sustain = 0.8
    let release = 2

    // $: {
    //     SynthStore.update(data => {
    //         data.attack = attack,
    //         data.decay = decay,
    //         data.sustain = sustain,
    //         data.release = release
    //     })
    // }

</script>

<div class="envelopes">
    <h3>Envelopes</h3>
    <h4>Amp</h4>
    <div class="adsr-row">
        <Knob bind:value={attack} responsive={true} {size} />
        <Knob bind:value={decay} responsive={true} {size} />
        <Knob bind:value={sustain} responsive={true} {size} />
        <Knob bind:value={release} responsive={true} {size} />
    </div>
    <h4>Filter</h4>
    <div class="adsr-row">
        <Knob value={50} responsive={true} {size} />
        <Knob value={50} responsive={true} {size} />
        <Knob value={50} responsive={true} {size} />
        <Knob value={50} responsive={true} {size} />
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
        /* justify-content: space-around;
        gap: 1rem; */
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