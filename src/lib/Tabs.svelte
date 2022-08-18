<script>
	import { createEventDispatcher } from 'svelte';
	import TabStore from '../components/TabStore';
	let dispatch = createEventDispatcher();

	export let items;
	export let activeItem;
</script>

<div class="flex justify-center items-center">
	<ul>
		{#each items as item}
			<li on:click={() => dispatch('tabChange', item)}>
				<div class:active={item === $TabStore.activeItem}>{item}</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.tabs {
		margin-bottom: 5px;
	}
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		list-style-type: none;
	}
	li {
		margin: 0 16px;
		font-size: 18px;
		color: #555;
		cursor: pointer;
	}
	.active {
		color: rgb(14 116 144);
		border-bottom: 2px solid rgb(14 116 144);
		/* padding-bottom: 8px; */
	}
</style>
