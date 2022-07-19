import { writable } from "svelte/store";

export const Osc2Store = writable(
    {
        oscType: 'square',
        oscPitch: 440,
        oscOctave: 0,
        octave: 0,
        detune: 0,
        gain: 0,
    }
)