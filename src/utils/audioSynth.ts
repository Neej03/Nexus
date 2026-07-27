class SoundSynth {
  private ctx: AudioContext | null = null;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleAmbient(): boolean {
    this.initCtx();
    if (!this.ctx) return false;

    if (this.isPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  private startAmbient() {
    if (!this.ctx) return;
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.03, this.ctx.currentTime);

    this.ambientOsc1 = this.ctx.createOscillator();
    this.ambientOsc2 = this.ctx.createOscillator();

    this.ambientOsc1.type = 'sine';
    this.ambientOsc1.frequency.setValueAtTime(110, this.ctx.currentTime); // A2
    
    this.ambientOsc2.type = 'triangle';
    this.ambientOsc2.frequency.setValueAtTime(164.81, this.ctx.currentTime); // E3

    // Lowpass filter for smooth ambient warmth
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, this.ctx.currentTime);

    this.ambientOsc1.connect(filter);
    this.ambientOsc2.connect(filter);
    filter.connect(this.gainNode);
    this.gainNode.connect(this.ctx.destination);

    this.ambientOsc1.start();
    this.ambientOsc2.start();
    this.isPlaying = true;
  }

  private stopAmbient() {
    if (this.ambientOsc1) {
      this.ambientOsc1.stop();
      this.ambientOsc1.disconnect();
      this.ambientOsc1 = null;
    }
    if (this.ambientOsc2) {
      this.ambientOsc2.stop();
      this.ambientOsc2.disconnect();
      this.ambientOsc2 = null;
    }
    this.isPlaying = false;
  }

  playClick() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Audio fallback silent fail
    }
  }

  isAmbientPlaying(): boolean {
    return this.isPlaying;
  }
}

export const audioSynth = new SoundSynth();
