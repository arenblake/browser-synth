<script>
	// @ts-ignore
	import Knob from 'svelte-knob';
	import { Osc1Store } from './stores/Osc1Store';
	import { Osc2Store } from './stores/Osc2Store';

	let gainA = 0;
	let gainB = 0;

	$: {
		Osc1Store.update((data) => {
			data.gain = gainA;
			return data;
		});
	}

	$: {
		Osc2Store.update((data) => {
			data.gain = gainB;
			return data;
		});
	}
</script>

<div class="mixer">
	<h3 class="text-xl">Mixer</h3>
	<h4 class="text-base">OSC 1</h4>
	<Knob bind:value={$Osc1Store.gain} responsive={true} size={50} min={-60} max={12} step={0.1} />
	<h4 class="text-base">OSC 2</h4>
	<Knob bind:value={$Osc2Store.gain} responsive={true} size={50} min={-60} max={12} step={0.1} />
	<h4 class="text-base">Noise</h4>
	<Knob value={50} responsive={true} size={50} />
</div>

<style>
	.mixer {
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
</style>
