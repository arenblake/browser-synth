<script>
    import { Reverb } from './stores/EffectsStore'
    import Knob from 'svelte-knob';
    // import Slider from '@smui/slider'
    // import Slider from '@bulatdashiev/svelte-slider';
    // import Slider from '@fouita/slider'
    // import RangeSlider from "svelte-range-slider-pips";
    let size = 30;
    export let decay = 0.1
    export let preDelay = 0.00
    export let wet = 0.0


    $: {
        Reverb.update(data => {
            data.decay = decay,
            data.preDelay = preDelay,
            data.wet = wet
            return data
        })
    }
</script>

<div class="lfo">
    <h3>Reverb</h3>
    <!-- <div class="slider-container"> -->
        <!-- <div class='slider-label'> -->
            <h4>Decay</h4>
            <Knob bind:value={decay} responsive={true} {size} min={0.001} max={20} step={0.1}/>
            <!-- <div class="rotated">
                <Slider 
                bind:value={decay} 
                min={0.001} 
                max={20}/>
            </div> -->
        <!-- </div> -->
        <!-- <div class='slider-label'> -->
            <h4>Pre-Delay</h4>
            <Knob bind:value={preDelay} responsive={true} {size} max={2.0} step={0.01}/>
            <!-- <div class="rotated">
                <Slider bind:value={preDelay} min={0} max={2.0} step={0.01} />
            </div> -->
        <!-- </div> -->
        <!-- <div class='slider-label'> -->
            <h4>Wet</h4>
            <Knob bind:value={wet} responsive={true} {size} max={1.0} step={0.01}/>
            <!-- <div class="rotated">
                <Slider bind:value={wet} min={0} max={1.0} step={0.01} />
            </div> -->
        <!-- </div> -->
    <!-- </div> -->
</div>



<style>
    .lfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .7rem;
        margin: .5rem;
        /* height: 15rem; */
    }

    .slider-container {
        display: flex;
        justify-content: center;
    }
    h3 {
        margin-top: 0;
        margin-bottom: 0;
    }

    h4 {
        /* margin-top: 0; */
        margin-top: .3rem;
        margin-bottom: 0;
    }

    .selectors {
        display: flex;
        justify-content: center;
    }

    .rotated {
        transform: rotate(-90deg);
        /* height: 10rem; */
    }
    /* .slider-label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        width: 5rem;
    } */

</style>