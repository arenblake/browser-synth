<script>
    import LFO from './LFO.svelte';
</script>


<div class="lfos">
    <LFO num='1'/>
    <LFO num='2'/>
</div>

<style>
    .lfos {
        display: flex;
        /* flex-direction: column; */
        /* gap: .7rem;
        margin: .5rem; */
    }
</style>