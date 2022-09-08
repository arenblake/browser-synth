<script lang="ts">
	import { onMount } from 'svelte';
	import SeqStore from './SeqStore';
	import { genRandomPreset } from '../utils/api';

	let numSteps = 32;
	let numNotes = 8;
	let mounted = false;

	onMount(() => {
		const grid: HTMLElement | null = document.getElementById('grid');
		for (let i = 0; i < numSteps * numNotes; i++) {
			const gridElement = document.createElement('div');
			gridElement.id = i.toString();
			gridElement.classList.add('grid-element');
			gridElement.style.border = '1px solid black';
			gridElement.style.borderRadius = '3px';
			gridElement.style.margin = '.1rem';
			if (i % 4 === 0) {
				gridElement.style.background = 'rgba(74, 82, 90, 0.2)';
			}
			gridElement.addEventListener('mouseover', changeColor);
			gridElement.addEventListener('mouseout', changeColor);
			gridElement.addEventListener('click', handleClick);
			grid.appendChild(gridElement);
		}
		const beatIndicator: HTMLElement | null = document.getElementById('beat-indicator');
		for (let i = 0; i < numSteps; i++) {
			const gridElement = document.createElement('div');
			gridElement.id = (i + 256).toString();
			gridElement.classList.add('beat-element');
			gridElement.style.border = '1px solid black';
			gridElement.style.borderRadius = '3px';
			gridElement.style.margin = '.1rem';
			beatIndicator.appendChild(gridElement);
		}
		mounted = true;
	});

	function handleClick(e) {
		$SeqStore.grid[e.target.id].isActive
			? (e.target.style.background = 'rgba(200, 182, 90, 0.8)')
			: (e.target.style.background = 'rgb(5 150 105)');
		SeqStore.update((data) => {
			data.grid[e.target.id].isActive = !data.grid[e.target.id].isActive;
			data.lastId = e.target.id;
			return data;
		});
	}

	function changeColor(e) {
		if (e.type === 'mouseover' && !$SeqStore.grid[e.target.id].isActive) {
			e.target.style.background = 'rgba(74, 82, 90, 0.8)';
		}
		if (e.type === 'mouseout' && !$SeqStore.grid[e.target.id].isActive) {
			if (e.target.id % 4 === 0) {
				e.target.style.background = 'rgba(74, 82, 90, 0.2)';
			} else if (!$SeqStore.grid[e.target.id].isActive) {
				e.target.style.background = 'transparent';
			}
		}
	}

	$: {
		if (mounted) {
			const beat = document.getElementById(`${$SeqStore.beat + 256}`);
			const lastBeat = document.getElementById(
				`${$SeqStore.beat === 0 ? 31 + 256 : $SeqStore.beat - 1 + 256}`
			);
			beat ? (beat.style.background = 'red') : null;
			lastBeat ? (lastBeat.style.background = 'transparent') : null;
		}
	}

	async function handleGenPreset() {
		const abortController = new AbortController();
		const preset = await genRandomPreset(abortController.signal);
		// console.log(preset);
		SeqStore.update((data) => {
			data.grid.splice(0, data.grid.length, ...preset);
			return data;
		});
		console.log($SeqStore.grid);
		$SeqStore.grid.forEach((item, index) => {
			const square = document.getElementById(index.toString());
			// console.log(square);
			// item.isActive
			// 	? (square.style.background = 'rgba(200, 182, 90, 0.8)')
			// 	: (square.style.background = 'rgb(5 150 105)');
			item.isActive
				? (square.style.background = 'rgb(5 150 105)')
				: (square.style.background = 'transparent');
		});

		// document.getElementById('grid');
	}
</script>

<button
	class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
	on:click={handleGenPreset}>Generate Random Preset</button
>

<div id="beat-indicator" class="beat-indicator-container" />

<div id="grid" class="seq-container" />

<style>
	/* .class1 {
        color: blue;
    } */

	/* .class2 {
        color: red;
    } */

	.beat-indicator-container {
		display: grid;
		grid-template-columns: repeat(32, 1fr);
		background: rgba(42, 157, 143, 0.2);
		border-radius: 5px;
		box-shadow: 1px 1px 5px black inset;
		height: 2rem;
		margin: 10px;
		padding: 0.3rem;
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
		padding: 0.3rem;
	}

	/* .note-is-active {
        background-color: green;
        border: 1px solid black;
    }

    .note-not-active {
        background-color: solid grey;
    } */
</style>
