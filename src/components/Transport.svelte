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
        document.getElementById('change')?.addEventListener('click', async () => {
        // notes = ['D2', 'E#2', 'A3', 'Bb3']
        })
    })

</script>


<button id="audio">Start Tone</button>
<button id="start">Start Transport</button>
<button id="stop">Stop Transport</button>
