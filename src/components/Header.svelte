<script lang="ts">
	import Tabs from '$lib/Tabs.svelte';
	import TabStore from './TabStore';

	import Transport from './Transport.svelte';
	// let items = ['Synth 1', 'Synth 2', 'Drum Machine', 'Effects', 'Mixer'];
	let items = ['Synth 1', 'Effects'];

	let activeItem = $TabStore.activeItem;
	const tabChange = (e: any) =>
		TabStore.update((data) => {
			data.activeItem = e.detail;
			return data;
		});
</script>

<header class="flex justify-between bg-gray-300 ">
	<h1 class="text-4xl font-mono ml-8 py-3">Web Synth</h1>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	<div class="tabs">
		<Transport />
	</div>
</header>

<style>
	.tabs {
		margin-right: 10px;
	}
</style>
