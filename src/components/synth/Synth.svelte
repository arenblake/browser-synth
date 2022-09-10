<script lang="ts">
	import Envelopes from './Envelopes.svelte';
	import Filter from './Filter.svelte';
	import LfOs from './LFOs.svelte';
	import SynthMixer from './SynthMixer.svelte';
	import Rack from '../Rack.svelte';
	import Osc2 from './Osc2.svelte';
	import Osc1 from './Osc1.svelte';
</script>

<Rack>
	<div class="module oscs">
		<Osc1 />
		<Osc2 />
	</div>
	<div class="module mixer">
		<SynthMixer />
	</div>
	<div class="module filter">
		<Filter />
	</div>
	<div class="module env">
		<Envelopes />
	</div>
	<div class="module lfos">
		<LfOs />
	</div>
</Rack>

<style>
	.module {
		border: 3px solid black;
		min-height: 5rem;
		border-radius: 5px;
		box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
	}

	.oscs {
		display: flex;
		justify-content: space-around;
	}
</style>
