<script lang='ts'>
    import Knob from 'svelte-knob';
    import {SynthStore} from './SynthStore';
    export let num: String;

    let detune = 0;

    function changeOsc(type) {
        SynthStore.update(data => {
            data.osc1Type = type;
            console.log(data)
            return data
        })
    }

    function changeOctave(octave) {
        SynthStore.update(data => {
            data.octave = octave;
            return data
        })
    }

    $: {
        SynthStore.update(data => {
            data.detune = detune
            return data
        })
    }

</script>

<div class="osc">
    <h3>OSC {num}</h3>
    <div class="selectors">
        <button on:click='{() => changeOsc('sine')}'>SIN</button>
        <button on:click="{() => changeOsc('square')}">SQU</button>
        <button on:click="{() => changeOsc('triangle')}">TRI</button>
    </div>
    <h4>Pitch</h4>
    <Knob bind:value={detune} min={-100} max={100} step={.1}/>
    <h4>Octave</h4>
    <div class="selectors">
        <button on:click='{() => changeOctave('-24')}'>-2</button>
        <button on:click='{() => changeOctave('-12')}'>-1</button>
        <button on:click='{() => changeOctave('0')}'>0</button>
        <button on:click='{() => changeOctave('12')}'>+2</button>
        <button on:click='{() => changeOctave('24')}'>+1</button>
    </div>
</div>

<style>
    .osc {
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

    .selectors {
        display: flex;
        justify-content: center;
    }
</style>