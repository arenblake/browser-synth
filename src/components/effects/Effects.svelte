<script>
import Rack from "../Rack.svelte";
import Autofilter from "./Autofilter.svelte";
import Bitcrusher from "./Bitcrusher.svelte";
import Delay from "./Delay.svelte";
import Distortion from "./Distortion.svelte";
import Reverb from "./Reverb.svelte";

</script>

<Rack>
<div class="module">
    <Reverb />
</div>
<div class="module">
    <Delay />
</div>
<div class="module">
    <Distortion />
</div>
<div class="module">
    <Autofilter />
</div>
<div class="module">
    <Bitcrusher />
</div>
</Rack>


<style>
    .module {
        border: 3px solid black;
        min-height: 5rem;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0,0,0,0.7);
    }

    .oscs {
        display: flex;
        justify-content: space-around;
    }

</style>