<script>
    import Knob from 'svelte-knob';
    let size = 90;
    export let num;
</script>

<div class="lfo">
    <h3>LFO {num}</h3>
    <div class="knob-row">
        <div>
            <h4>Speed</h4>
            <Knob value={50} responsive={true} {size} />
        </div>
        <div>
            <h4>Amp</h4>
            <Knob value={50} responsive={true} {size} />
        </div>
    </div>
    <h3>Wave Shape</h3>
    <div class="selectors">
        <button>SIN</button>
        <button>SQU</button>
        <button>TRI</button>
    </div>
    <h3>Destination</h3>
    <div class="selectors">
        <button>Pitch</button>
        <button>Fil. Freq</button>
        <button>Amp</button>
    </div>
</div>



<style>
    .lfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .7rem;
        margin: .5rem;
    }

    .knob-row {
        display: flex;
    }
    h3 {
        margin-top: 0;
        margin-bottom: 0;
    }

    h4 {
        margin-top: .3rem;
        margin-bottom: 0;
    }

    .selectors {
        display: flex;
        justify-content: center;
    }

</style>