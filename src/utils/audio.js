// Premium Web Audio API Sound Engine for MYSTORA
// Authentic, audible cinematic cosmic synthesizer pad with gentle harmonic breath
// Musical crystal chimes with soft attack and realistic acoustic decay
// Strictly OFF by default. Volume control. Anti-pop envelope.

class AudioManager {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.volume = 0.5; // 0.0 to 1.0 (default 50%)
    this.masterGain = null;
    this.ambientGain = null;
    this.activeNodes = [];
    this.lfoNode = null;
    this.isPlaying = false;
    this.lastChimeTime = 0;
  }

  initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(newVol) {
    this.volume = Math.max(0, Math.min(1, newVol));
    if (this.ctx && this.masterGain) {
      const targetGain = this.isMuted ? 0.0001 : this.volume * 0.28;
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(Math.max(0.0001, targetGain), now + 0.08);
    }
  }

  toggleSound() {
    this.initContext();
    this.isMuted = !this.isMuted;

    if (!this.isMuted) {
      this.startAmbient();
      this.playChime(659.25, 0.6); // E5 crystal bell
    } else {
      this.stopAmbient();
    }
    return !this.isMuted;
  }

  startAmbient() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;
    if (this.isPlaying) return;

    try {
      const now = this.ctx.currentTime;

      // Master output gain
      if (!this.masterGain) {
        this.masterGain = this.ctx.createGain();
        this.masterGain.connect(this.ctx.destination);
      }
      const targetMaster = this.volume * 0.28;
      this.masterGain.gain.setValueAtTime(0.0001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(targetMaster, now + 1.5);

      // Ambient sub-bus gain
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.85, now);
      this.ambientGain.connect(this.masterGain);

      // Warm celestial lowpass filter with slow LFO breath
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(620, now);
      filter.Q.setValueAtTime(1.2, now);
      filter.connect(this.ambientGain);

      // Gentle LFO for filter breath (0.07Hz = ~14 second breathing cycle)
      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.07, now);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(220, now);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start(now);
      this.lfoNode = lfo;

      // Celestial harmonic chord voices (A minor 9th / C celestial pad: A2, E3, A3, B3, E4)
      const voices = [
        { freq: 110.0, type: 'sine', gain: 0.38 },      // Root drone (A2)
        { freq: 164.81, type: 'sine', gain: 0.28 },     // Fifth (E3)
        { freq: 220.0, type: 'triangle', gain: 0.20 },  // Octave (A3)
        { freq: 246.94, type: 'sine', gain: 0.16 },     // Major 9th (B3)
        { freq: 329.63, type: 'sine', gain: 0.12 }      // High fifth (E4)
      ];

      const nodes = [];
      voices.forEach(({ freq, type, gain }) => {
        const osc = this.ctx.createOscillator();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);

        // Subtle detune (+/- 1.5 cents) for rich analog celestial chorus
        const detuneAmount = (Math.random() - 0.5) * 3;
        osc.detune.setValueAtTime(detuneAmount, now);

        const vGain = this.ctx.createGain();
        vGain.gain.setValueAtTime(gain, now);

        osc.connect(vGain);
        vGain.connect(filter);

        osc.start(now);
        nodes.push({ osc, vGain });
      });

      this.activeNodes = nodes;
      this.isPlaying = true;
    } catch (e) {
      console.warn('Audio autoplay blocked until user gesture:', e);
      this.isPlaying = false;
    }
  }

  stopAmbient() {
    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (this.masterGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

        setTimeout(() => {
          if (this.activeNodes) {
            this.activeNodes.forEach(({ osc }) => {
              try { osc.stop(); } catch (_) {}
            });
            this.activeNodes = [];
          }
          if (this.lfoNode) {
            try { this.lfoNode.stop(); } catch (_) {}
            this.lfoNode = null;
          }
        }, 900);
      } catch (_) {}
    }
  }

  // Pure, gentle crystal chime with harmonic overtone and zero click
  playChime(freq = 659.25, gainMult = 0.5) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    // Choke rapid overlapping chimes to prevent clutter
    const nowMs = Date.now();
    if (nowMs - this.lastChimeTime < 140) return;
    this.lastChimeTime = nowMs;

    try {
      const now = this.ctx.currentTime;

      // Master chime output
      const chimeGain = this.ctx.createGain();
      const peakVol = Math.max(0.02, this.volume * 0.22 * gainMult);

      chimeGain.gain.setValueAtTime(0.0001, now);
      // Soft 25ms attack (zero speaker click)
      chimeGain.gain.exponentialRampToValueAtTime(peakVol, now + 0.025);
      // Natural exponential bell decay over 1.2s
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      chimeGain.connect(this.ctx.destination);

      // Fundamental crystal tone
      const osc1 = this.ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);
      osc1.connect(chimeGain);

      // Subtle celestial glass overtone (2.76x frequency)
      const osc2 = this.ctx.createOscillator();
      const overtoneGain = this.ctx.createGain();
      overtoneGain.gain.setValueAtTime(0.18, now);
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2.756, now);
      osc2.connect(overtoneGain);
      overtoneGain.connect(chimeGain);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.25);
      osc2.stop(now + 1.25);
    } catch (_) {}
  }

  // World-specific musical entrance chords
  playWorldEntry(worldId) {
    const worldNotes = {
      dreams: 659.25,     // E5 (Dreamora)
      creative: 587.33,   // D5 (Creativa)
      knowledge: 523.25,  // C5 (Knowlith)
      future: 783.99,     // G5 (Futuron)
      artelia: 698.46,    // F5 (Artelia)
      codeverse: 440.00,  // A4 (Codeverse)
      memoira: 880.00,    // A5 (Memoira)
      explorix: 739.99    // F#5 (Explorix)
    };
    const root = worldNotes[worldId] || 659.25;
    this.playChime(root, 0.65);
    setTimeout(() => this.playChime(root * 1.5, 0.35), 80);
  }

  // Celestial success sparkle
  playSuccess() {
    if (this.isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => {
      setTimeout(() => this.playChime(f, 0.45), i * 90);
    });
  }
}

export const soundFx = new AudioManager();
