<script lang="ts">
    import Envelopes from "./Envelopes.svelte";
    import Filter from "./Filter.svelte";
    import LfOs from "./LFOs.svelte";
    import Osc from "./Osc.svelte";
    import SynthMixer from "./SynthMixer.svelte";
    import {Osc1Store} from './stores/Osc1Store'
    import {Osc2Store} from './stores/Osc2Store'
import Rack from "../Rack.svelte";

    let detuneA: number
    let detuneB: number
    let oscTypeA: string
    let oscTypeB: string
    let octaveA: string
    let octaveB: string

    $: {
        Osc1Store.update(data => {
            data.detune = detuneA
            data.oscType = oscTypeA
            data.octave = octaveA
            return data
        })
    }

    $: {
        Osc2Store.update(data => {
            data.detune = detuneB
            data.oscType = oscTypeB
            data.octave = octaveB
            return data
        })
    }

</script>
<Rack>
    <div class="module oscs">
        <Osc num='1' 
        bind:detune={detuneA}
        bind:oscType={oscTypeA}
        bind:octave={octaveA}/>
        <Osc num='2' 
        bind:detune={detuneB}
        bind:oscType={oscTypeB}
        bind:octave={octaveB}/>
    </div>
    <div class="module mixer">
        <SynthMixer />
    </div>
    <div class="module filter">
        <Filter />
    </div>
    <div class="module env">
        <Envelopes />
    </div>
    <div class="module lfos">
        <LfOs />
    </div>
</Rack>


<style>
    .module {
        border: 3px solid black;
        min-height: 5rem;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0,0,0,0.7);
    }

    .oscs {
        display: flex;
        justify-content: space-around;
    }

</style>