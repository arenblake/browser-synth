<script>
    import * as Tone from 'tone';
    import { onMount } from 'svelte';

    onMount(() => {
        document.getElementById('audio')?.addEventListener('click', async () => {
            await Tone.start()
            console.log('audio is ready')
        })
        document.getElementById('start')?.addEventListener('click', async () => {
            Tone.Transport.start()
        })
        document.getElementById('stop')?.addEventListener('click', async () => {
            Tone.Transport.stop()
        })
    })

</script>


<button id="audio">Start Tone</button>
<button id="start">Start Transport</button>
<button id="stop">Stop Transport</button>
