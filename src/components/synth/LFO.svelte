<script lang="ts">
	import Knob from 'svelte-knob';
	let size = 90;
	export let name: string;
	export let speed = 0;
	export let amp = 0;
</script>

<div class="lfo">
	<h3 class="text-lg">{name}</h3>
	<div class="knob-row">
		<div>
			<h4 class="text-base">Speed</h4>
			<Knob bind:value={speed} responsive={true} {size} max={20} step={0.1} />
		</div>
		<div>
			<h4 class="text-base">Amp</h4>
			<Knob bind:value={amp} responsive={true} {size} max={1.0} step={0.01} />
		</div>
	</div>
	<!-- <h3>Wave Shape</h3>
    <div class="selectors">
        <button>SIN</button>
        <button>SQU</button>
        <button>TRI</button>
    </div> -->
	<!-- <h3>Destination</h3>
    <div class="selectors">
        <button>Pitch</button>
        <button>Fil. Freq</button>
        <button>Amp</button>
    </div> -->
</div>

<style>
	.lfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.7rem;
		margin: 0.5rem;
	}

	.knob-row {
		display: flex;
	}
	h3 {
		margin-top: 0;
		margin-bottom: 0;
	}

	h4 {
		/* margin-top: 0; */
		margin-top: 0.3rem;
		margin-bottom: 0;
	}

	.selectors {
		display: flex;
		justify-content: center;
	}
</style>
