<script lang='ts'>
    import Knob from 'svelte-knob';
    export let num: String;
    export let detune = 0;
    export let oscType = 'square'
    export let octave = '0'


    function changeOsc(type) {
        oscType = type
    }

    function changeOctave(newOctave) {
        octave = newOctave
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
        <button on:click='{() => changeOctave('12')}'>+1</button>
        <button on:click='{() => changeOctave('24')}'>+2</button>
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