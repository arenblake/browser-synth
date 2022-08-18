<script>
	import Tabs from '$lib/Tabs.svelte';
	import TabStore from './TabStore';

	import Transport from './Transport.svelte';
	// let items = ['Synth 1', 'Synth 2', 'Drum Machine', 'Effects', 'Mixer'];
	let items = ['Synth 1', 'Effects'];

	let activeItem = $TabStore.activeItem;
	// const tabChange = (e) => (activeItem = e.detail);
	const tabChange = (e) =>
		TabStore.update((data) => {
			data.activeItem = e.detail;
			return data;
		});

	// SeqStore.update(data => {
	//             data.beat = beat
	//             return data
	//         })
</script>

<header class="flex justify-between bg-gray-300 ">
	<h1 class="text-4xl font-mono ml-8 py-3">Web Synth</h1>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	<div class="tabs">
		<Transport />
	</div>
</header>

<style>
	/* header {
		background: rgba(38, 70, 83, 0.2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px;
	} */

	/* h1 {
		margin: 0;
	} */

	a {
		text-decoration: none;
		padding-right: 5px;
	}

	.tabs {
		margin-right: 10px;
	}
</style>
