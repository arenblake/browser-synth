import { writable } from 'svelte/store';

const TabStore = writable({
	activeItem: 'Synth 1'
});

export default TabStore;
