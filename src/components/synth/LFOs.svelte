<script>
	import LFO from './LFO.svelte';
	import { Lfo1, Lfo2, Lfo3, Lfo4 } from './stores/LfoStore';

	let speed1 = 0;
	let speed2 = 0;
	let amp1 = 0;
	let amp2 = 0;
	let speed3 = 0;
	let speed4 = 0;
	let amp3 = 0;
	let amp4 = 0;

	// $: {
	// 	speed1 = $Lfo1.speed;
	// 	speed2 = $Lfo2.speed;
	// 	amp1 = $Lfo1.amp;
	// 	amp2 = $Lfo2.amp;
	// 	speed3 = $Lfo3.speed;
	// 	speed4 = $Lfo4.speed;
	// 	amp3 = $Lfo3.amp;
	// 	amp4 = $Lfo4.amp;
	// }

	$: {
		Lfo1.update((data) => {
			data.speed = speed1;
			data.amp = amp1;
			return data;
		});
	}

	$: {
		Lfo2.update((data) => {
			data.speed = speed2;
			data.amp = amp2;
			return data;
		});
	}

	$: {
		Lfo3.update((data) => {
			data.speed = speed3;
			data.amp = amp3;
			return data;
		});
	}

	$: {
		Lfo4.update((data) => {
			data.speed = speed4;
			data.amp = amp4;
			return data;
		});
	}
</script>

<div class="lfos">
	<LFO name="Tremolo" bind:speed={$Lfo1.speed} bind:amp={$Lfo1.amp} />
	<LFO name="Pitch" bind:speed={$Lfo2.speed} bind:amp={$Lfo2.amp} />
	<LFO name="Tremolo" bind:speed={$Lfo3.speed} bind:amp={$Lfo3.amp} />
	<LFO name="Pitch" bind:speed={$Lfo4.speed} bind:amp={$Lfo4.amp} />
	<!-- <LFO name="Tremolo" bind:speed={speed1} bind:amp={amp1} />
	<LFO name="Pitch" bind:speed={speed2} bind:amp={amp2} />
	<LFO name="Tremolo" bind:speed={speed3} bind:amp={amp3} />
	<LFO name="Pitch" bind:speed={speed4} bind:amp={amp4} /> -->
</div>

<style>
	.lfos {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
