import React from 'react';
import { ArrowRight, Sparkles, Compass, Brain, Code2, Heart, Play } from 'lucide-react';
import { CrystalOrb } from './CrystalOrb';
import { CrystalClusters } from './CrystalClusters';
import { soundFx } from '../utils/audio';

export const AwakeningHero = ({
  onEnterUniverse,
  onQuickLaunch,
  recentWorld,
  stats = { goalsCompleted: 0, goalsTotal: 0, challengesCompleted: 0, savedCount: 0 }
}) => {
  const handleEnter = () => {
    soundFx.playChime(659.25, 0.6); // E5 crystal bell
    onEnterUniverse();
  };

  const handleLaunch = (viewId) => {
    soundFx.playWorldEntry(viewId);
    onQuickLaunch(viewId);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between px-4 pt-16 pb-12 select-none overflow-hidden">
      
      {/* Background ambient atmospheric nebulae */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full bg-purple-700/10 blur-[170px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* Flanking Crystalline Shards on the Left and Right */}
      <CrystalClusters side="left" className="hidden lg:block opacity-65" />
      <CrystalClusters side="right" className="hidden lg:block opacity-65" />

      {/* TOP/CENTER SECTION: UNOBSTRUCTED LUMINOUS CRYSTAL ORB & PLATFORM */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center my-auto w-full max-w-4xl pt-2">
        <CrystalOrb
          size={typeof window !== 'undefined' && window.innerWidth < 640 ? 290 : 410}
          theme="purple"
          showPlatform={true}
          interactive={true}
          onClick={handleEnter}
        />
      </div>

      {/* DEDICATED LOWER SECTION: PLACED CLEANLY BELOW THE CRYSTAL (ZERO OVERLAPPING) */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto px-4 mt-2 space-y-4">
        
        {/* Title: MYSTORA */}
        <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.35em] sm:tracking-[0.45em] text-white text-glow-white uppercase">
          MYSTORA
        </h1>

        {/* Main Purpose Tagline */}
        <p className="font-cinzel text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-purple-200/90 text-glow uppercase">
          Explore Ideas. Build Skills. Shape Your Future.
        </p>

        {/* Inspirational Subtitle */}
        <p className="font-cinzel italic text-xs sm:text-sm text-purple-300/80 tracking-widest drop-shadow-[0_0_10px_rgba(192,132,252,0.4)]">
          "Every great idea begins with a spark."
        </p>

        {/* Prominent Primary CTA: ENTER THE UNKNOWN */}
        <div className="pt-2">
          <button
            onClick={handleEnter}
            className="group relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-white bg-gradient-to-r from-purple-950/80 via-purple-900/60 to-black/80 hover:from-purple-800/90 hover:to-indigo-900/90 border border-purple-400/50 hover:border-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(192,132,252,0.85)] transition-all duration-300 active:scale-95 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <span>ENTER THE UNKNOWN</span>
            <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1.5 transition-transform duration-300" />
            <span className="absolute inset-0 rounded-full border border-white/20 animate-pulse pointer-events-none" />
          </button>
        </div>

        {/* Quick Launch Action Pathways */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            onClick={() => handleLaunch('creative')}
            className="px-3.5 py-1.5 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/30 text-amber-200 text-xs font-mono flex items-center gap-1.5 transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Discover Project Ideas</span>
          </button>

          <button
            onClick={() => handleLaunch('knowledge')}
            className="px-3.5 py-1.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 text-cyan-200 text-xs font-mono flex items-center gap-1.5 transition-all"
          >
            <Brain className="w-3.5 h-3.5 text-cyan-400" />
            <span>Start Learning & Quiz</span>
          </button>

          <button
            onClick={() => handleLaunch('codeverse')}
            className="px-3.5 py-1.5 rounded-xl bg-blue-950/40 hover:bg-blue-900/50 border border-blue-500/30 text-blue-200 text-xs font-mono flex items-center gap-1.5 transition-all"
          >
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Practice Coding</span>
          </button>

          <button
            onClick={() => handleLaunch('dreams')}
            className="px-3.5 py-1.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-purple-200 text-xs font-mono flex items-center gap-1.5 transition-all"
          >
            <Heart className="w-3.5 h-3.5 text-purple-400" />
            <span>Set Personal Goals</span>
          </button>
        </div>

        {/* Real Progress & Resume Bar (using actual local user data) */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-purple-300/80">
          <div className="px-3 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>{stats.goalsCompleted} of {stats.goalsTotal} Goals Achieved</span>
            <span>•</span>
            <span>{stats.challengesCompleted} Coding Labs Mastered</span>
            <span>•</span>
            <span>{stats.savedCount} Vault Items</span>
          </div>

          {recentWorld && (
            <button
              onClick={() => handleLaunch(recentWorld.id)}
              className="px-3 py-1 rounded-full bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 text-purple-200 flex items-center gap-1.5 transition-all"
            >
              <Play className="w-3 h-3 fill-current text-purple-300" />
              <span>Resume: {recentWorld.name} →</span>
            </button>
          )}
        </div>

      </div>

    </section>
  );
};
