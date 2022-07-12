<script>
    import Knob from 'svelte-knob';
    import {SynthStore} from './SynthStore';
    let frequency = 200
    let res = 0

    $: {
        SynthStore.update(data => {
            data.filterFreq = frequency,
            data.filterRes = res
            return data
        })
    }
</script>

<div class="filter">
    <h3>Filter</h3>
    <h4>Freq</h4>
    <Knob bind:value={frequency} responsive={true} size={50} min={0} max={8000} step={5}/>
    <h4>Res</h4>
    <Knob bind:value={res} responsive={true} size={40} max={10} step={0.1}/>
</div>


<style>
    .filter {
        display: flex;
        flex-direction: column;
        gap: .7rem;
        margin: .5rem;
    }
    h3 {
        margin-top: 0;
        margin-bottom: 0;
    }

    h4 {
        margin-top: .3rem;
        margin-bottom: 0;
    }

</style>