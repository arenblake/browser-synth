<div class="rack">
<slot></slot>
</div>



<style>
    .rack {
        background: rgba(38, 70, 83, 0.5);
        min-width: 5rem;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8) inset;
        border-radius: 6px;
        display: grid;
        grid-template-columns: 3fr 1fr 2fr 3fr 3fr;
        gap: 10px;
        padding: 10px;
    }

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