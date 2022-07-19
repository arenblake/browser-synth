<script>
import Transport from './Transport.svelte';
</script>

<header>
    <h1>Web Synth</h1>
    <div class="tabs">
        <Transport />
    </div>
</header>

<style>
    header {
        background: rgba(38, 70, 83, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
    }

    h1 {
        margin: 0;
    }

    a {
        text-decoration: none;
        padding-right: 5px;
    }

    .tabs {
        margin-right: 10px;
    }
    
</style>