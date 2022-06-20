<div class="rack">
    <div class="module">Filter</div>
    <div class="module">OSC 1</div>
    <div class="module">OSC 2</div>
    <div class="module">Envelope</div>
</div>

<style>
    .rack {
        background: rgba(38, 70, 83, 0.5);
        min-width: 5rem;
        /* height: 100%; */
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8) inset;
        border-radius: 6px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        padding: 10px;
    }

    .module {
        border: 3px solid black;
        min-height: 5rem;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0,0,0,0.7);
    }

</style>