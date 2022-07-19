import { writable } from "svelte/store";

export const Reverb = writable(
    {
        decay: 1,
        preDelay: 0,
        wet: 0
    }
)

export const FilterEnvelope = writable(
    {

    }
)
