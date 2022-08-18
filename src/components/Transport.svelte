<script>
	import * as Tone from 'tone';
	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementById('audio')?.addEventListener('click', async () => {
			await Tone.start();
			console.log('audio is ready');
		});
		document.getElementById('start')?.addEventListener('click', async () => {
			Tone.Transport.start();
		});
		document.getElementById('stop')?.addEventListener('click', async () => {
			Tone.Transport.stop();
		});
	});
</script>

<div class="flex gap-3 mr-8 py-3 items-center h-full">
	<button
		class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
		id="audio">Start Tone</button
	>
	<button
		class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
		id="start">Start Transport</button
	>
	<button
		class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
		id="stop">Stop Transport</button
	>
</div>
