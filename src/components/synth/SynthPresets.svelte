<script lang="ts">
	import { onMount } from 'svelte';
	import { Envelopes, FilterEnvelope } from './stores/EnvelopeStore';
	import { Lfo1, Lfo2, Lfo3, Lfo4 } from './stores/LfoStore';
	import { Osc1Store } from './stores/Osc1Store';
	import { Osc2Store } from './stores/Osc2Store';
	import { SynthStore } from './stores/SynthStore';
	import { createSynthPreset, listSynthPresets } from '../../utils/api';
	let presetList: any[] = [];
	let presetName = 'new synth preset';
	let selected: object;

	async function getPresets() {
		presetList = await listSynthPresets();
		console.log(presetList);
	}

	onMount(() => {
		getPresets();
	});

	async function handleSave() {
		console.log('save preset');

		const settingsObject = {
			Envelopes: $Envelopes,
			FilterEnvelope: $FilterEnvelope,
			Lfo1: $Lfo1,
			Lfo2: $Lfo2,
			Lfo3: $Lfo3,
			Lfo4: $Lfo4,
			Osc1Store: $Osc1Store,
			Osc2Store: $Osc2Store,
			SynthStore: $SynthStore
		};

		const settingsString = JSON.stringify(settingsObject);

		const newPreset = {
			name: presetName,
			settings: settingsString
		};
		console.log(newPreset);
		const preset = await createSynthPreset(newPreset);
	}

	function handleLoad() {
		const settingsObj = JSON.parse(selected.settings);

		Envelopes.update((data) => {
			const { Envelopes } = settingsObj;
			data = Envelopes;
			console.log(data);
			return data;
		});

		FilterEnvelope.update((data) => {
			const { FilterEnvelope } = settingsObj;
			data = FilterEnvelope;
			console.log(data);
			return data;
		});

		Lfo1.update((data) => {
			const { Lfo1 } = settingsObj;
			data = Lfo1;
			console.log(data);
			return data;
		});

		Lfo2.update((data) => {
			const { Lfo2 } = settingsObj;
			data = Lfo2;
			console.log(data);
			return data;
		});

		Lfo3.update((data) => {
			const { Lfo3 } = settingsObj;
			data = Lfo3;
			console.log(data);
			return data;
		});

		Lfo4.update((data) => {
			const { Lfo4 } = settingsObj;
			data = Lfo4;
			console.log(data);
			return data;
		});

		Osc1Store.update((data) => {
			const { Osc1Store } = settingsObj;
			data = Osc1Store;
			console.log('osc store 1', data);
			return data;
		});

		Osc2Store.update((data) => {
			const { Osc2Store } = settingsObj;
			data = Osc2Store;
			console.log('osc store 2', data);
			return data;
		});

		SynthStore.update((data) => {
			const { SynthStore } = settingsObj;
			data = SynthStore;
			console.log(data);
			return data;
		});
	}
</script>

<div class="presets bg-slate-200 py-2 mx-2">
	<!-- <button
		class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
		on:click={handleGenPreset}>Generate Random Preset</button
	> -->

	<form on:submit|preventDefault={handleSave}>
		<label>Name:</label>
		<input type="text" bind:value={presetName} />
		<button
			class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
			>Save Preset</button
		>
	</form>

	<form on:submit|preventDefault={handleLoad}>
		<label>Presets:</label>
		<select bind:value={selected}>
			{#each presetList as preset}
				<option value={preset}>
					{preset.name}
				</option>
			{/each}
		</select>
		<button
			class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
			>Load Preset</button
		>
	</form>
</div>

<style>
	.presets {
		display: flex;
		gap: 5rem;
		justify-content: center;
	}
</style>
