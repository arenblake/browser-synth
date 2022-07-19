import { writable } from "svelte/store";

export const SynthStore = writable(
    {
        filterFreq: 200,
        filterRes: 0,
    }
)
