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
	import { makeSynths } from './utils/ToneObjects';
	import { makeGrid } from './utils/Grid';

	let synths: MonoSynth[];
	let synthsB: MonoSynth[];
	let grid: {
		isActive: boolean;
		note: string;
	}[][];
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
		if (synths && $Osc1Store) {
			for (let synth in synths) {
				// @ts-ignore
				synths[synth].oscillator.type = $Osc1Store.oscType;
			}
		}

		if (synthsB && $Osc1Store) {
			for (let synth in synthsB) {
				// @ts-ignore
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
		if ($Osc1Store) {
			transposeA = $Osc1Store.octave;
			transposeB = $Osc2Store.octave;
		}
	}

	$: {
		if (synths && $Osc1Store) {
			for (let synth in synths) {
				synths[synth].set({
					detune: $Osc1Store.detune
				});
			}
		}
	}

	$: {
		if (synthsB && $Osc1Store) {
			for (let synth in synthsB) {
				synthsB[synth].set({
					detune: $Osc2Store.detune
				});
			}
		}
	}

	$: {
		if (synths && $Osc1Store) {
			for (let synth in synths) {
				synths[synth].volume.rampTo($Osc1Store.gain, 0.5);
			}
		}
	}

	$: {
		if (synthsB && $Osc1Store) {
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

	const configLoop = () => {
		let beat = 0;

		const repeat = (time: Tone.Unit.Time) => {
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
