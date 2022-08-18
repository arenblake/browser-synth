<script lang="ts">
	import Knob from 'svelte-knob';
	export let num: String;
	export let detune = 0;
	export let oscType = 'square';
	export let octave = '0';

	function changeOsc(type) {
		oscType = type;
	}

	function changeOctave(newOctave) {
		octave = newOctave;
	}
</script>

<div class="osc">
	<h3 class="text-xl">OSC {num}</h3>
	<div class="inline-flex flex justify-center">
		<button
			class={`bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 rounded-l ${
				oscType === 'sine' && 'bg-gray-100'
			}`}
			on:click={() => changeOsc('sine')}>SIN</button
		>
		<button
			class={`bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 ${
				oscType === 'square' && 'bg-gray-100'
			}`}
			on:click={() => changeOsc('square')}>SQU</button
		>
		<button
			class={`bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 rounded-r ${
				oscType === 'triangle' && 'bg-gray-100'
			}`}
			on:click={() => changeOsc('triangle')}>TRI</button
		>
	</div>
	<h4 class="text-base">Pitch</h4>
	<Knob bind:value={detune} min={-100} max={100} step={0.1} />
	<h4 class="text-base">Octave</h4>
	<div class="inline-flex">
		<button
			class={`bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 rounded-l ${
				octave === '-24' && 'bg-gray-100'
			}`}
			on:click={() => changeOctave('-24')}>-2</button
		>
		<button
			class={`bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 ${
				octave === '-12' && 'bg-gray-100'
			}`}
			on:click={() => changeOctave('-12')}>-1</button
		>
		<button
			class={`bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 ${
				octave === '0' && 'bg-gray-100'
			}`}
			on:click={() => changeOctave('0')}>0</button
		>
		<button
			class={`bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 ${
				octave === '12' && 'bg-gray-100'
			}`}
			on:click={() => changeOctave('12')}>+1</button
		>
		<button
			class={`bg-gray-300 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 rounded-r ${
				octave === '24' && 'bg-gray-100'
			}`}
			on:click={() => changeOctave('24')}>+2</button
		>
	</div>
</div>

<style>
	.osc {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		margin: 0.5rem;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 0;
	}

	h4 {
		margin-top: 0.3rem;
		margin-bottom: 0;
	}

	.selectors {
		display: flex;
		justify-content: center;
	}
</style>
