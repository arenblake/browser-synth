import { writable } from "svelte/store";

const makeGrid = () => {
    const grid = []
    for (let i=0; i<256; i++) {
        grid.push({
            isActive: false
        })
    }
    return grid
}

const grid = makeGrid()

const SeqStore = writable(
    {
        grid: grid,
        lastId: 0,
        beat: 0

    }
)

export default SeqStore;