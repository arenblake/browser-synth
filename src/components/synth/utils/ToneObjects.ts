import * as Tone from 'tone';
import type { MonoSynth } from 'tone';

export const makeSynths = (
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

export const makeEffects = () => {
	const tremolo1 = new Tone.Tremolo().start();
	const vibrato1 = new Tone.Vibrato();
	const tremolo2 = new Tone.Tremolo().start();
	const vibrato2 = new Tone.Vibrato();
	const reverb = new Tone.Reverb();
	const delay = new Tone.Delay();
	const distortion = new Tone.Distortion();
	const autofilter = new Tone.AutoFilter();
	const bitcrusher = new Tone.BitCrusher();
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
