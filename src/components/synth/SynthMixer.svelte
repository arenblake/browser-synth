<script>
    import Knob from 'svelte-knob';
    import {SynthStore} from './SynthStore';
    let gain = 0;

    $: {
        SynthStore.update(data => {
            data.gain = gain
            return data
        })
    }
</script>


<div class="mixer">
    <h3>Mixer</h3>
    <h4>OSC 1</h4>
    <Knob bind:value={gain} responsive={true} size={50} min={-60} max={12} step={0.1}/>
    <h4>OSC 2</h4>
    <Knob value={50} responsive={true} size={50}/>
    <h4>Noise</h4>
    <Knob value={50} responsive={true} size={50}/>
</div>


<style>
    .mixer {
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