<script lang="ts">
    import { onMount } from 'svelte';
    import SeqStore from './SeqStore';
    // import classNames from 'classnames'
    // const classNames = require('classnames')

    let numSteps = 32;
    let numNotes = 8;
    let mounted = false;

    onMount(() => {
        const grid: HTMLElement | null = document.getElementById('grid')
        for (let i = 0; i < numSteps * numNotes; i++) {
            const gridElement = document.createElement('div')
            gridElement.id = i.toString();
            gridElement.classList.add('grid-element')
            gridElement.style.border = '1px solid black'
            gridElement.style.borderRadius = '3px'
            gridElement.style.margin = '.1rem'
            if(i % 4 === 0) {
                gridElement.style.background = 'rgba(74, 82, 90, 0.2)' 
            }
            gridElement.addEventListener('mouseover', changeColor)
            gridElement.addEventListener('mouseout', changeColor)
            gridElement.addEventListener('click', handleClick);
            grid.appendChild(gridElement)
        }
        const beatIndicator: HTMLElement | null = document.getElementById('beat-indicator')
        for (let i = 0; i < numSteps; i++) {
            const gridElement = document.createElement('div')
            gridElement.id = i.toString();
            gridElement.classList.add('beat-element')
            gridElement.style.border = '1px solid black'
            gridElement.style.borderRadius = '3px'
            gridElement.style.margin = '.1rem'
            // if(i % 4 === 0) {
            //     gridElement.style.background = 'rgba(74, 82, 90, 0.2)' 
            // }
            // gridElement.addEventListener('mouseover', changeColor)
            // gridElement.addEventListener('mouseout', changeColor)
            // gridElement.addEventListener('click', handleClick);
            beatIndicator.appendChild(gridElement)
        }
        mounted = true;
    });

    function handleClick(e) {
        $SeqStore.grid[e.target.id].isActive ? e.target.style.background = 'rgba(200, 182, 90, 0.8)' : e.target.style.background = 'green'
        SeqStore.update(data => {
            data.grid[e.target.id].isActive = !data.grid[e.target.id].isActive
            data.lastId = e.target.id
            return data
        })
    }

    function changeColor(e) {
        if(e.type === 'mouseover' && !$SeqStore.grid[e.target.id].isActive) {
            e.target.style.background = 'rgba(74, 82, 90, 0.8)'
        }
        if(e.type === 'mouseout' && !$SeqStore.grid[e.target.id].isActive) {
            if(e.target.id % 4 === 0) {
                e.target.style.background = 'rgba(74, 82, 90, 0.2)' 
            } else if(!$SeqStore.grid[e.target.id].isActive) {
                e.target.style.background = 'transparent' 
            }
        }
    }

    $: {
        if(mounted) {
            // console.log("Beat",$SeqStore.beat)
            const beat = document.getElementById(`${$SeqStore.beat}`)
            const lastBeat = document.getElementById(`${$SeqStore.beat === 0 ? 31 : $SeqStore.beat - 1}`)
            beat ? beat.style.background = 'red' : null
            lastBeat ? lastBeat.style.background = 'transparent' : null
        }
    }

</script>

<div id="beat-indicator" class="beat-indicator-container">

</div>

<div id='grid' class="seq-container">
</div>

<style>
    .class1 {
        color: blue;
    }

    .class2 {
        color: red;
    }

    .beat-indicator-container {
        display: grid;
        grid-template-columns: repeat(32, 1fr);
        background: rgba(42, 157, 143, 0.2);
        border-radius: 5px;
        box-shadow: 1px 1px 5px black inset;
        height: 2rem;
        margin: 10px;
        padding: .3rem;
    }
    .seq-container {
        display: grid;
        grid-template-columns: repeat(32, 1fr);
        grid-template-rows: repeat(8, 1fr);
        background: rgba(42, 157, 143, 0.2);
        border-radius: 5px;
        box-shadow: 1px 1px 5px black inset;
        height: 15rem;
        margin: 10px;
        padding: .3rem;
    }

    /* .note-is-active {
        background-color: green;
        border: 1px solid black;
    }

    .note-not-active {
        background-color: solid grey;
    } */
</style>