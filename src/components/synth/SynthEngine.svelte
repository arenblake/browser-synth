<script lang='ts'>
    import * as Tone from 'tone';
    import { onMount } from 'svelte';
    import {SynthStore} from './SynthStore';
    import {Envelopes, FilterEnvelope, PitchEnvelope} from './EnvelopeStore'
    import SeqStore from '../SeqStore';
    import type { MonoSynth } from 'tone';
    let synths: MonoSynth[]
    let grid: Object[];
    let transpose = 0;

    onMount(() => {
        synths = makeSynths(8);
        console.log(synths)
        grid = makeGrid(notes)
        console.log(grid)
        configLoop();
    })

    $: {
        if (synths) {
            for (let synth in synths) {
                synths[synth].oscillator.type = $SynthStore.osc1Type
            }
        }
    }

    $: {
        if(grid) {
            let row = Math.floor($SeqStore.lastId / 32)
            let index = $SeqStore.lastId % 32
            grid[row][index].isActive = $SeqStore.grid[$SeqStore.lastId].isActive
        }
    }

    $: {
        transpose = $SynthStore.octave
    }

    $: {
        if (synths) {
            for (let synth in synths) {
                synths[synth].set({
                    detune: $SynthStore.detune
                })
            }
        }
    }

    $: {
        if (synths) {
            for (let synth in synths) {
                synths[synth].volume.rampTo($SynthStore.gain, 0.5)
            }
        }
    }

    $: {
        if (synths) {
            for (let synth in synths) {
                synths[synth].filterEnvelope.baseFrequency = $SynthStore.filterFreq
                synths[synth].filter.Q.value = $SynthStore.filterRes
                synths[synth].filterEnvelope.set({
                    attack: $FilterEnvelope.attack,
                    decay: $FilterEnvelope.decay,
                    sustain: $FilterEnvelope.sustain,
                    release: $FilterEnvelope.release
                })
            }
        }
    }

    $: {
        if (synths) {
            for (let synth in synths) {
                synths[synth].set({
                    envelope: {
                        attack: $Envelopes.attack,
                        decay: $Envelopes.decay,
                        sustain: $Envelopes.sustain,
                        release: $Envelopes.release
                    }
                })

            }
        }
    }

    const notes = ["C4", "B3", "A3", "G3", "F3", "E3", "D3", "C3"];

    const makeSynths = (count: number) => {
        const synths = [];
        for (let i = 0; i < count; i++) {  
            // const gainNode = new Tone.Gain(gain).toDestination();
            // const pitchEnv = new Tone.Envelope(
            //     $PitchEnvelope.attack,
            //     $PitchEnvelope.decay,
            //     $PitchEnvelope.sustain,
            //     $PitchEnvelope.release
            //     )
            const synth = new Tone.MonoSynth().toDestination();
            // pitchEnv.connect(synth.detune)
            synths.push(synth);
        }
        console.log(synths)
        return synths;
    };

    const makeGrid = (notes: string[]) => {
    const rows = [];
    let counter = 0;
    for (let note in notes) {
        const row = [];
        for (let i = 0; i < 32; i++) {
        row.push({
            note: notes[note],
            isActive: false,
            id: counter
        });
        counter++;
        }
        rows.push(row);
    }

    return rows;
    };

    const configLoop = () => {
        let beat = 0;

        const repeat = (time) => {
            grid.forEach((row, index) => {
            let synth = synths[index];
            let seqSquare = row[beat];
            let note = Tone.Frequency(seqSquare.note).transpose(transpose).toNote();
            if (seqSquare.isActive) {
                synth.triggerAttackRelease(note, "16n", time);
            }
            });
            beat = (beat + 1) % 32;
            SeqStore.update(data => {
                data.beat = beat
                return data
            })
        };

        Tone.Transport.bpm.value = 120;
        Tone.Transport.scheduleRepeat(repeat, "16n");
    };
</script>
