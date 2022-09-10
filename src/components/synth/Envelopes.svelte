<script>
	import Knob from 'svelte-knob';
	import { Envelopes, FilterEnvelope } from './stores/EnvelopeStore';
	let size = 70;
</script>

<div class="envelopes">
	<h3 class="text-xl">Envelopes</h3>
	<h4 class="text-base">Amp</h4>
	<div class="adsr-row mb-4">
		<Knob bind:value={$Envelopes.attack} responsive={true} {size} max={4} step={0.1} />
		<Knob bind:value={$Envelopes.decay} responsive={true} {size} max={4} step={0.1} />
		<Knob bind:value={$Envelopes.sustain} responsive={true} {size} max={1} step={0.1} />
		<Knob bind:value={$Envelopes.release} responsive={true} {size} max={10} step={0.1} />
	</div>
	<h4 class="text-base">Filter</h4>
	<div class="adsr-row">
		<Knob bind:value={$FilterEnvelope.attack} responsive={true} {size} max={4} step={0.1} />
		<Knob bind:value={$FilterEnvelope.decay} responsive={true} {size} max={4} step={0.1} />
		<Knob bind:value={$FilterEnvelope.sustain} responsive={true} {size} max={1} step={0.1} />
		<Knob bind:value={$FilterEnvelope.release} responsive={true} {size} max={10} step={0.1} />
	</div>
</div>

<style>
	.adsr-row {
		display: flex;
		justify-content: space-around;
	}

	.envelopes {
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
