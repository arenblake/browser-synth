<script>
	import LFO from './LFO.svelte';
	import { Lfo1, Lfo2, Lfo3, Lfo4 } from './stores/LfoStore';
</script>

<div class="lfos">
	<LFO name="Tremolo" bind:speed={$Lfo1.speed} bind:amp={$Lfo1.amp} />
	<LFO name="Pitch" bind:speed={$Lfo2.speed} bind:amp={$Lfo2.amp} />
	<LFO name="Tremolo" bind:speed={$Lfo3.speed} bind:amp={$Lfo3.amp} />
	<LFO name="Pitch" bind:speed={$Lfo4.speed} bind:amp={$Lfo4.amp} />
</div>

<style>
	.lfos {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
