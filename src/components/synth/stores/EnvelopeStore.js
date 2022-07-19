import { writable } from "svelte/store";

export const Envelopes = writable(
    {
        attack: 0.2,
        decay: 0.2,
        sustain: 0.8,
        release: 2,
    }
)

export const FilterEnvelope = writable(
    {
        attack: 0.2,
        decay: 0.2,
        sustain: 0.8,
        release: 2,
    }
)
