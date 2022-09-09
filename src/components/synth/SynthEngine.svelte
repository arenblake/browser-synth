<script lang="ts">
	import * as Tone from 'tone';
	import { onMount } from 'svelte';
	import { SynthStore } from './stores/SynthStore';
	import { Envelopes, FilterEnvelope } from './stores/EnvelopeStore';
	import SeqStore from '../SeqStore';
	import { Osc1Store } from './stores/Osc1Store';
	import { Osc2Store } from './stores/Osc2Store';
	import { Lfo1, Lfo2, Lfo3, Lfo4 } from './stores/LfoStore';
	import { Reverb } from '../effects/stores/EffectsStore';
	import type { MonoSynth } from 'tone';

	let synths: MonoSynth[];
	let synthsB: MonoSynth[];
	let grid: Object[][];
	let transposeA = 0;
	let transposeB = 0;
	let tremolo1: Tone.Tremolo;
	let vibrato1: Tone.Vibrato;
	let tremolo2: Tone.Tremolo;
	let vibrato2: Tone.Vibrato;
	let reverb: Tone.Reverb;
	let delay: Tone.Delay;
	let distortion: Tone.Distortion;
	let autofilter: Tone.AutoFilter;
	let bitcrusher: Tone.BitCrusher;

	onMount(() => {
		// tremolo1 = new Tone.Tremolo().start();
		// vibrato1 = new Tone.Vibrato();
		// tremolo2 = new Tone.Tremolo().start();
		// vibrato2 = new Tone.Vibrato();
		makeEffects();

		synths = makeSynths(8, tremolo1, vibrato1, reverb, delay, distortion, autofilter, bitcrusher);
		synthsB = makeSynths(8, tremolo2, vibrato2, reverb, delay, distortion, autofilter, bitcrusher);
		grid = makeGrid();
		configLoop();
	});

	$: {
		if (reverb) {
			reverb.set({
				decay: $Reverb.decay,
				preDelay: $Reverb.preDelay,
				wet: $Reverb.wet
			});
		}
	}

	$: {
		if (tremolo1) {
			tremolo1.set({
				frequency: $Lfo1.speed,
				depth: $Lfo1.amp
			});
			vibrato1.set({
				frequency: $Lfo2.speed,
				depth: $Lfo2.amp
			});
		}
	}

	$: {
		if (tremolo2) {
			tremolo2.set({
				frequency: $Lfo3.speed,
				depth: $Lfo3.amp
			});
			vibrato2.set({
				frequency: $Lfo4.speed,
				depth: $Lfo4.amp
			});
		}
	}

	$: {
		if (synths) {
			for (let synth in synths) {
				synths[synth].oscillator.type = $Osc1Store.oscType;
			}
		}

		if (synthsB) {
			for (let synth in synthsB) {
				synthsB[synth].oscillator.type = $Osc2Store.oscType;
			}
		}
	}

	$: {
		if (grid) {
			$SeqStore.grid.forEach((item, index) => {
				let row = Math.floor(index / 32);
				let column = index % 32;
				grid[row][column].isActive = item.isActive;
			});
		}
	}

	$: {
		transposeA = $Osc1Store.octave;
		transposeB = $Osc2Store.octave;
	}

	$: {
		if (synths) {
			for (let synth in synths) {
				synths[synth].set({
					detune: $Osc1Store.detune
				});
			}
		}
	}

	$: {
		if (synthsB) {
			for (let synth in synthsB) {
				synthsB[synth].set({
					detune: $Osc2Store.detune
				});
			}
		}
	}

	$: {
		if (synths) {
			for (let synth in synths) {
				synths[synth].volume.rampTo($Osc1Store.gain, 0.5);
			}
		}
	}

	$: {
		if (synthsB) {
			for (let synth in synthsB) {
				synthsB[synth].volume.rampTo($Osc2Store.gain, 0.5);
			}
		}
	}

	$: {
		if (synths) {
			for (let synth in synths) {
				synths[synth].filterEnvelope.baseFrequency = $SynthStore.filterFreq;
				synths[synth].filter.Q.value = $SynthStore.filterRes;
				synths[synth].filterEnvelope.set({
					attack: $FilterEnvelope.attack,
					decay: $FilterEnvelope.decay,
					sustain: $FilterEnvelope.sustain,
					release: $FilterEnvelope.release
				});
			}
			for (let synth in synthsB) {
				synthsB[synth].filterEnvelope.baseFrequency = $SynthStore.filterFreq;
				synthsB[synth].filter.Q.value = $SynthStore.filterRes;
				synthsB[synth].filterEnvelope.set({
					attack: $FilterEnvelope.attack,
					decay: $FilterEnvelope.decay,
					sustain: $FilterEnvelope.sustain,
					release: $FilterEnvelope.release
				});
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
				});
			}
			for (let synth in synthsB) {
				synthsB[synth].set({
					envelope: {
						attack: $Envelopes.attack,
						decay: $Envelopes.decay,
						sustain: $Envelopes.sustain,
						release: $Envelopes.release
					}
				});
			}
		}
	}

	const makeSynths = (
		count: number,
		tremolo: Tone.Tremolo | Tone.InputNode,
		vibrato: Tone.Vibrato | Tone.InputNode,
		reverb: Tone.Reverb | Tone.InputNode,
		delay: Tone.Delay,
		distortion: Tone.Distortion,
		autofilter: Tone.AutoFilter,
		bitcrusher: Tone.BitCrusher
	) => {
		const synths = [];
		for (let i = 0; i < count; i++) {
			const synth = new Tone.MonoSynth();
			synth.chain(
				vibrato,
				tremolo,
				reverb,
				// delay,
				// distortion,
				// autofilter,
				// bitcrusher,
				Tone.Destination
			);
			synths.push(synth);
		}
		return synths;
	};

	const makeEffects = () => {
		tremolo1 = new Tone.Tremolo().start();
		vibrato1 = new Tone.Vibrato();
		tremolo2 = new Tone.Tremolo().start();
		vibrato2 = new Tone.Vibrato();
		reverb = new Tone.Reverb();
		delay = new Tone.Delay();
		distortion = new Tone.Distortion();
		autofilter = new Tone.AutoFilter();
		bitcrusher = new Tone.BitCrusher();
		return {
			tremolo1,
			vibrato1,
			tremolo2,
			vibrato2,
			reverb,
			delay,
			distortion,
			autofilter,
			bitcrusher
		};
	};

	const makeGrid = () => {
		const rows = [];
		const notes = ['C4', 'B3', 'A3', 'G3', 'F3', 'E3', 'D3', 'C3'];
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
				let synthB = synthsB[index];
				let seqSquare = row[beat];
				let noteA = Tone.Frequency(seqSquare.note).transpose(transposeA).toNote();
				let noteB = Tone.Frequency(seqSquare.note).transpose(transposeB).toNote();
				if (seqSquare.isActive) {
					synth.triggerAttackRelease(noteA, '16n', time);
					synthB.triggerAttackRelease(noteB, '16n', time);
				}
			});
			beat = (beat + 1) % 32;
			SeqStore.update((data) => {
				data.beat = beat;
				return data;
			});
		};

		Tone.Transport.bpm.value = 120;
		Tone.Transport.scheduleRepeat(repeat, '16n');
	};
</script>
