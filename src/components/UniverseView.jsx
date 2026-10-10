import React, { useState } from 'react';
import { Sparkles, ArrowRight, Heart, Compass, Brain, Rocket, CornerDownLeft } from 'lucide-react';
import { CrystalOrb } from './CrystalOrb';
import { soundFx } from '../utils/audio';

export const UniverseView = ({ onSelectWorld, onBackToAwakening }) => {
  const [hoveredWorld, setHoveredWorld] = useState(null);

  const worlds = [
    {
      id: 'dreams',
      name: 'Dreams',
      subtitle: 'Visualize your aspirations',
      accent: 'purple',
      accentHex: '#c084fc',
      borderGlow: 'rgba(192, 132, 252, 0.5)',
      cardBg: 'from-purple-950/40 to-black/60',
      icon: Heart,
      tag: 'World 1',
      description: 'Explore inspirational cosmic quotes, manifest your deepest dreams, and track your creative life goals.'
    },
    {
      id: 'creative',
      name: 'Creativity',
      subtitle: 'Ideas that shape the future',
      accent: 'amber',
      accentHex: '#fbbf24',
      borderGlow: 'rgba(251, 191, 36, 0.5)',
      cardBg: 'from-amber-950/40 to-black/60',
      icon: Compass,
      tag: 'World 2',
      description: 'Generate high-voltage project sparks across AI, design, sustainability, and productivity with tech stacks.'
    },
    {
      id: 'knowledge',
      name: 'Knowledge',
      subtitle: 'Learn. Grow. Evolve.',
      accent: 'cyan',
      accentHex: '#38bdf8',
      borderGlow: 'rgba(56, 189, 248, 0.5)',
      cardBg: 'from-cyan-950/40 to-black/60',
      icon: Brain,
      tag: 'World 3',
      description: 'Discover mind-expanding quantum facts, deep-dive technology guides, and test your mind with the Cosmos Quiz.'
    },
    {
      id: 'future',
      name: 'Future',
      subtitle: 'Build tomorrow, today.',
      accent: 'emerald',
      accentHex: '#34d399',
      borderGlow: 'rgba(52, 211, 153, 0.5)',
      cardBg: 'from-emerald-950/40 to-black/60',
      icon: Rocket,
      tag: 'World 4',
      description: 'Tour speculative prototypes, real-world AI agent architectures, and breakthrough futuristic engineering solutions.'
    }
  ];

  const handleOrbClick = (worldId) => {
    soundFx.playPulse();
    onSelectWorld(worldId);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center pt-24 pb-16 px-4 sm:px-6 lg:px-12 select-none overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-950/20 blur-[150px] pointer-events-none" />

      {/* Top Header Section */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles className="w-3 h-3 text-purple-300" />
          <span>Interactive Cosmic System</span>
        </div>
        
        <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-[0.25em] text-white text-glow-white mb-2">
          The Universe
        </h2>
        
        <p className="font-outfit text-sm sm:text-base text-purple-200/80 tracking-wider">
          Explore. Discover. Be Inspired.
        </p>

        {/* Return to Awakening button */}
        <button
          onClick={onBackToAwakening}
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-purple-300/60 hover:text-purple-200 transition-colors focus:outline-none"
        >
          <CornerDownLeft className="w-3 h-3" />
          <span>Return to Opening Awakening</span>
        </button>
      </div>

      {/* The Central Orbital Stage (Faithful to the reference image top-right) */}
      <div className="relative z-20 w-full max-w-5xl h-[480px] sm:h-[560px] flex items-center justify-center my-4">
        
        {/* Orbital Elliptical Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer Orbit 1 */}
          <div className="w-[88%] h-[82%] rounded-[50%] border border-purple-500/20 border-dashed animate-spin-slow" />
          {/* Middle Orbit 2 */}
          <div className="w-[68%] h-[64%] rounded-[50%] border border-purple-400/25 animate-reverse-spin" />
          {/* Inner Orbit 3 */}
          <div className="w-[45%] h-[42%] rounded-[50%] border border-indigo-500/25" />
          {/* Perspective tilted faint cosmic grid */}
          <div className="w-full h-full absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/15 via-transparent to-transparent" />
        </div>

        {/* Central Core Crystal Orb */}
        <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
          <CrystalOrb
            size={typeof window !== 'undefined' && window.innerWidth < 640 ? 180 : 250}
            theme="purple"
            showPlatform={true}
            interactive={false}
          />
          <div className="absolute -bottom-4 text-center">
            <span className="font-mono text-[10px] tracking-widest text-purple-300/80 uppercase px-2 py-0.5 rounded-full bg-purple-950/60 border border-purple-600/30">
              CORE NEXUS
            </span>
          </div>
        </div>

        {/* 4 Floating World Orbs in Orbit (Corners/Cardinals as in Reference Image) */}
        
        {/* WORLD 1: DREAMS (Top-Left) */}
        <div className="absolute top-[2%] left-[2%] sm:top-[6%] sm:left-[8%] z-30">
          <button
            onClick={() => handleOrbClick('dreams')}
            onMouseEnter={() => setHoveredWorld('dreams')}
            onMouseLeave={() => setHoveredWorld(null)}
            className="group flex flex-col sm:flex-row items-center gap-3 p-3 rounded-2xl glass-card border border-purple-500/30 hover:border-purple-400/70 shadow-[0_0_20px_rgba(192,132,252,0.25)] hover:shadow-[0_0_35px_rgba(192,132,252,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-left focus:outline-none"
          >
            <div className="relative">
              <CrystalOrb size={74} theme="purple" showPlatform={false} interactive={false} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Heart className="w-4 h-4 text-white opacity-80 group-hover:scale-125 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase text-purple-300/70">World 1</span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white text-glow group-hover:text-purple-200">
                Dreams
              </h3>
              <p className="font-outfit text-xs text-purple-200/70 max-w-[150px]">
                Visualize your aspirations
              </p>
            </div>
          </button>
        </div>

        {/* WORLD 2: CREATIVITY (Top-Right) */}
        <div className="absolute top-[2%] right-[2%] sm:top-[6%] sm:right-[8%] z-30">
          <button
            onClick={() => handleOrbClick('creative')}
            onMouseEnter={() => setHoveredWorld('creative')}
            onMouseLeave={() => setHoveredWorld(null)}
            className="group flex flex-col sm:flex-row-reverse items-center gap-3 p-3 rounded-2xl glass-card border border-amber-500/30 hover:border-amber-400/70 shadow-[0_0_20px_rgba(251,191,36,0.25)] hover:shadow-[0_0_35px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:-translate-y-1 sm:text-right text-left focus:outline-none"
          >
            <div className="relative">
              <CrystalOrb size={74} theme="amber" showPlatform={false} interactive={false} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Compass className="w-4 h-4 text-white opacity-80 group-hover:scale-125 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-start sm:justify-end gap-1.5">
                <span className="text-[10px] font-mono uppercase text-amber-300/70">World 2</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white text-glow-amber group-hover:text-amber-200">
                Creativity
              </h3>
              <p className="font-outfit text-xs text-amber-200/70 max-w-[150px]">
                Ideas that shape the future
              </p>
            </div>
          </button>
        </div>

        {/* WORLD 3: KNOWLEDGE (Bottom-Left) */}
        <div className="absolute bottom-[2%] left-[2%] sm:bottom-[6%] sm:left-[8%] z-30">
          <button
            onClick={() => handleOrbClick('knowledge')}
            onMouseEnter={() => setHoveredWorld('knowledge')}
            onMouseLeave={() => setHoveredWorld(null)}
            className="group flex flex-col sm:flex-row items-center gap-3 p-3 rounded-2xl glass-card border border-cyan-500/30 hover:border-cyan-400/70 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-left focus:outline-none"
          >
            <div className="relative">
              <CrystalOrb size={74} theme="cyan" showPlatform={false} interactive={false} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Brain className="w-4 h-4 text-white opacity-80 group-hover:scale-125 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase text-cyan-300/70">World 3</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white text-glow-cyan group-hover:text-cyan-200">
                Knowledge
              </h3>
              <p className="font-outfit text-xs text-cyan-200/70 max-w-[150px]">
                Learn. Grow. Evolve.
              </p>
            </div>
          </button>
        </div>

        {/* WORLD 4: FUTURE (Bottom-Right) */}
        <div className="absolute bottom-[2%] right-[2%] sm:bottom-[6%] sm:right-[8%] z-30">
          <button
            onClick={() => handleOrbClick('future')}
            onMouseEnter={() => setHoveredWorld('future')}
            onMouseLeave={() => setHoveredWorld(null)}
            className="group flex flex-col sm:flex-row-reverse items-center gap-3 p-3 rounded-2xl glass-card border border-emerald-500/30 hover:border-emerald-400/70 shadow-[0_0_20px_rgba(52,211,153,0.25)] hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] transition-all duration-300 transform hover:-translate-y-1 sm:text-right text-left focus:outline-none"
          >
            <div className="relative">
              <CrystalOrb size={74} theme="emerald" showPlatform={false} interactive={false} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Rocket className="w-4 h-4 text-white opacity-80 group-hover:scale-125 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-start sm:justify-end gap-1.5">
                <span className="text-[10px] font-mono uppercase text-emerald-300/70">World 4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white text-glow-emerald group-hover:text-emerald-200">
                Future
              </h3>
              <p className="font-outfit text-xs text-emerald-200/70 max-w-[150px]">
                Build tomorrow, today.
              </p>
            </div>
          </button>
        </div>

      </div>

      {/* Grid of the 4 Worlds with detailed descriptions & Enter buttons */}
      <div className="relative z-20 w-full max-w-6xl mx-auto mt-6 sm:mt-10">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest font-mono text-purple-300/60">
            Select a realm to enter its domain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {worlds.map((world) => {
            const Icon = world.icon;
            const isHovered = hoveredWorld === world.id;

            return (
              <div
                key={world.id}
                onMouseEnter={() => setHoveredWorld(world.id)}
                onMouseLeave={() => setHoveredWorld(null)}
                className={`relative rounded-2xl p-5 sm:p-6 glass-card border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-purple-400 shadow-[0_10px_35px_rgba(168,85,247,0.3)] -translate-y-1.5'
                    : 'border-purple-500/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wider"
                      style={{ color: world.accentHex, backgroundColor: `${world.accentHex}15`, border: `1px solid ${world.accentHex}40` }}
                    >
                      {world.tag}
                    </span>
                    <Icon className="w-5 h-5" style={{ color: world.accentHex }} />
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-white mb-1">
                    {world.name}
                  </h3>
                  
                  <p className="font-outfit text-xs font-medium tracking-wide mb-3" style={{ color: world.accentHex }}>
                    {world.subtitle}
                  </p>

                  <p className="font-outfit text-xs text-slate-300/80 leading-relaxed mb-6">
                    {world.description}
                  </p>
                </div>

                <button
                  onClick={() => handleOrbClick(world.id)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none"
                  style={{
                    backgroundColor: `${world.accentHex}20`,
                    color: world.accentHex,
                    border: `1px solid ${world.accentHex}50`
                  }}
                >
                  <span>Enter {world.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
