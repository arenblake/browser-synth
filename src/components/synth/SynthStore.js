import { writable } from "svelte/store";

const SynthStore = writable(
    {
        osc1Type: 'square',
        osc1Pitch: 440,
        osc1Octave: 0,
        filterFreq: 200,
        filterRes: 0,
        octave: 0,
        detune: 0,
        gain: 0,
        // attack: 0.2,
        // decay: 0.2,
        // sustain: 0.8,
        // release: 2,
    }
)

export default SynthStore;