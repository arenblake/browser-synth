<script>
	import Knob from 'svelte-knob';
	import { SynthStore } from './stores/SynthStore';

	let frequency = 200;
	let res = 0;

	// $: {
	// 	frequency = $SynthStore.filterFreq;
	// 	res = $SynthStore.filterRes;
	// }

	$: {
		SynthStore.update((data) => {
			(data.filterFreq = frequency), (data.filterRes = res);
			return data;
		});
	}
</script>

<div class="flex flex-col items-center m-2 gap-3">
	<h3 class="text-xl">Filter</h3>
	<h4 class="text-base">Freq</h4>
	<Knob
		bind:value={$SynthStore.filterFreq}
		responsive={true}
		size={50}
		min={0}
		max={8000}
		step={5}
	/>
	<h4 class="text-base">Res</h4>
	<Knob bind:value={$SynthStore.filterRes} responsive={true} size={40} max={10} step={0.1} />
</div>

<style>
	.filter {
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
