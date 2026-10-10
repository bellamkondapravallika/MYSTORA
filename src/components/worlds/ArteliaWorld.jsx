import React, { useState, useMemo } from 'react';
import { 
  Palette, Sparkles, Copy, Check, Bookmark, ArrowLeft, RefreshCw, 
  Layout, Eye, Sliders, Layers, Search, Filter, Type, Compass, 
  SlidersHorizontal, CheckCircle2, ChevronRight
} from 'lucide-react';
import { 
  ARTELIA_PALETTES, PALETTE_CATEGORIES, DESIGN_PROMPTS, 
  TYPOGRAPHY_PAIRINGS, COLOR_THEORY_LESSONS, GRADIENT_PRESETS 
} from '../../data/arteliaData';
import { soundFx } from '../../utils/audio';

const BATCH_SIZE = 12;

export const ArteliaWorld = ({ onBack, onSavePalette, isPaletteSaved }) => {
  const [activeTab, setActiveTab] = useState('palettes'); // 'palettes' | 'gradients' | 'typography' | 'theory' | 'playground'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [selectedPalette, setSelectedPalette] = useState(ARTELIA_PALETTES[0]);
  const [copiedValue, setCopiedValue] = useState(null);

  // Gradient Generator State
  const [gradientType, setGradientType] = useState('linear');
  const [gradientAngle, setGradientAngle] = useState(135);
  const [gradientColor1, setGradientColor1] = useState(ARTELIA_PALETTES[0].colors[0]);
  const [gradientColor2, setGradientColor2] = useState(ARTELIA_PALETTES[0].colors[2]);
  const [gradientColor3, setGradientColor3] = useState(ARTELIA_PALETTES[0].colors[3]);

  // Typography Pairing State
  const [activeTypoIndex, setActiveTypoIndex] = useState(0);

  // Filter palettes
  const filteredPalettes = useMemo(() => {
    return ARTELIA_PALETTES.filter(p => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchQuery = !q || 
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q)));
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const displayedPalettes = useMemo(() => {
    return filteredPalettes.slice(0, visibleCount);
  }, [filteredPalettes, visibleCount]);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedValue(label || text);
    soundFx.playChime(950, 0.4);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  const handleApplyPresetGradient = (preset) => {
    setGradientType(preset.type);
    setGradientAngle(preset.angle);
    if (preset.stops[0]) setGradientColor1(preset.stops[0].color);
    if (preset.stops[1]) setGradientColor2(preset.stops[1].color);
    if (preset.stops[2]) setGradientColor3(preset.stops[2].color);
    soundFx.playChime(700, 0.3);
  };

  const currentGradientCSS = gradientType === 'linear'
    ? `linear-gradient(${gradientAngle}deg, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor3} 100%)`
    : `radial-gradient(circle, ${gradientColor1} 0%, ${gradientColor2} 50%, ${gradientColor3} 100%)`;

  return (
    <section className="relative min-h-screen w-full pt-24 pb-20 px-4 sm:px-6 lg:px-12 select-none">
      
      {/* Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-pink-300 hover:text-white border border-pink-500/30 text-xs font-mono tracking-wider transition-all mb-6 focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Universe</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-pink-900/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-400/30 text-pink-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Palette className="w-3.5 h-3.5 text-pink-400" />
              <span>Planet 5 — Artelia Visual Design Studio</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white text-glow-pink">
              ARTELIA
            </h1>
            <p className="font-outfit text-pink-200/80 text-sm sm:text-base mt-1">
              100+ Curated Palettes, CSS Gradient Generator, Typography Systems, Color Theory, & UI Component Playground.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap bg-pink-950/60 p-1.5 rounded-2xl border border-pink-800/40 text-xs font-mono gap-1">
            {[
              { id: 'palettes', label: 'Palettes (106)' },
              { id: 'gradients', label: 'Gradient Studio' },
              { id: 'typography', label: 'Typography' },
              { id: 'theory', label: 'Color Theory' },
              { id: 'playground', label: 'UI Playground' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  soundFx.playChime(600, 0.3);
                }}
                className={`px-3 py-1.5 rounded-xl transition-all focus:outline-none ${
                  activeTab === tab.id
                    ? 'bg-pink-500 text-black font-bold shadow-[0_0_12px_rgba(236,72,153,0.5)]'
                    : 'text-pink-200/70 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* VIEW 1: PALETTES DIRECTORY (106 PALETTES) */}
        {activeTab === 'palettes' && (
          <div className="space-y-6">
            {/* Search & Category Filter */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(BATCH_SIZE);
                  }}
                  placeholder="Search 106 palettes by name or vibe (e.g. Cyberpunk, Obsidian, Sunset, Lavender)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-pink-500/30 text-white placeholder-pink-200/40 text-xs sm:text-sm focus:outline-none focus:border-pink-400 font-outfit"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {PALETTE_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(BATCH_SIZE);
                      soundFx.playChime(650, 0.3);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium font-outfit transition-all focus:outline-none ${
                      selectedCategory === cat
                        ? 'bg-pink-500 text-black font-semibold shadow-[0_0_12px_rgba(236,72,153,0.5)]'
                        : 'bg-pink-950/40 text-pink-200/70 hover:text-white border border-pink-800/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Palettes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedPalettes.map((pal) => {
                const isSaved = isPaletteSaved(pal.id);
                return (
                  <div
                    key={pal.id}
                    onClick={() => {
                      setSelectedPalette(pal);
                      soundFx.playChime(700, 0.3);
                    }}
                    className={`cursor-pointer p-6 rounded-3xl glass-card border transition-all text-left flex flex-col justify-between group hover:scale-[1.01] ${
                      selectedPalette.id === pal.id 
                        ? 'border-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.2)]' 
                        : 'border-pink-500/20 hover:border-pink-400/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-pink-950 text-pink-300 border border-pink-800/40">
                          {pal.category}
                        </span>
                        <span className="text-[10px] font-mono text-pink-400/70">
                          Contrast: {pal.contrastRating}
                        </span>
                      </div>

                      <h4 className="font-cinzel text-lg font-bold text-white mb-1.5 group-hover:text-pink-200 transition-colors">
                        {pal.name}
                      </h4>

                      <p className="font-outfit text-xs text-slate-300/80 leading-relaxed mb-4 line-clamp-2">
                        {pal.description}
                      </p>

                      {/* 5-Color Spectrum Swatches */}
                      <div className="grid grid-cols-5 h-16 rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-inner">
                        {pal.colors.map((hex, cIdx) => (
                          <div
                            key={cIdx}
                            style={{ backgroundColor: hex }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopy(hex, `${pal.id}-${hex}`);
                            }}
                            className="h-full flex items-end justify-center pb-2 cursor-pointer transition-transform hover:scale-105 relative group/swatch"
                            title={`Click to copy ${hex}`}
                          >
                            <span className="opacity-0 group-hover/swatch:opacity-100 text-[9px] font-mono bg-black/80 px-1 py-0.5 rounded text-white transition-opacity">
                              {copiedValue === `${pal.id}-${hex}` ? '✓' : hex.slice(1, 4)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Color Names & HEX list */}
                      <div className="space-y-1 mb-4">
                        {pal.colors.map((hex, idx) => {
                          const cName = pal.colorNames ? pal.colorNames[idx] : `Tone ${idx + 1}`;
                          const isCopiedHex = copiedValue === `${pal.id}-${hex}`;
                          const isCopiedRgb = copiedValue === `${pal.id}-rgb-${idx}`;

                          return (
                            <div key={idx} className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                              <div className="flex items-center gap-1.5 truncate mr-2">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0 border border-white/20" style={{ backgroundColor: hex }} />
                                <span className="truncate">{cName}</span>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCopy(hex, `${pal.id}-${hex}`);
                                  }}
                                  className="hover:text-pink-300 focus:outline-none"
                                >
                                  {isCopiedHex ? <span className="text-emerald-400 font-bold">Copied!</span> : hex}
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    const rgb = pal.rgbColors ? pal.rgbColors[idx] : hex;
                                    handleCopy(rgb, `${pal.id}-rgb-${idx}`);
                                  }}
                                  className="text-[10px] text-pink-400/60 hover:text-pink-300 focus:outline-none"
                                >
                                  {isCopiedRgb ? <span className="text-emerald-400 font-bold">RGB!</span> : 'RGB'}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-pink-900/30 flex items-center justify-between" onClick={e => e.stopPropagation()}>
                      <button
                        onClick={() => {
                          setSelectedPalette(pal);
                          setActiveTab('playground');
                          soundFx.playChime(800, 0.3);
                        }}
                        className="text-xs font-mono text-pink-300/80 hover:text-white flex items-center gap-1 focus:outline-none"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview in UI</span>
                      </button>

                      <button
                        onClick={() => onSavePalette(pal)}
                        disabled={isSaved}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                          isSaved
                            ? 'bg-pink-950 text-pink-300 border-pink-500'
                            : 'bg-pink-500/20 hover:bg-pink-500/30 text-pink-200 border-pink-400/30'
                        }`}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-pink-400' : ''}`} />
                        <span>{isSaved ? 'Saved' : 'Save'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredPalettes.length && (
              <div className="text-center mt-10">
                <button
                  onClick={() => {
                    setVisibleCount(prev => prev + BATCH_SIZE);
                    soundFx.playChime(650, 0.3);
                  }}
                  className="px-8 py-3 rounded-2xl bg-pink-950/70 hover:bg-pink-900/80 text-pink-200 hover:text-white border border-pink-500/40 font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(236,72,153,0.2)] focus:outline-none"
                >
                  Load More Palettes ({filteredPalettes.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: CSS GRADIENT STUDIO */}
        {activeTab === 'gradients' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="p-6 rounded-3xl glass-card border border-pink-500/30 space-y-5">
                <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-pink-400" />
                  <span>Gradient Controls</span>
                </h3>

                {/* Mode: Linear vs Radial */}
                <div className="flex bg-black/60 p-1 rounded-xl border border-pink-900/40 text-xs font-mono">
                  <button
                    onClick={() => setGradientType('linear')}
                    className={`flex-1 py-2 rounded-lg transition-all ${
                      gradientType === 'linear' ? 'bg-pink-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Linear Gradient
                  </button>
                  <button
                    onClick={() => setGradientType('radial')}
                    className={`flex-1 py-2 rounded-lg transition-all ${
                      gradientType === 'radial' ? 'bg-pink-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Radial Gradient
                  </button>
                </div>

                {/* Angle Slider (if linear) */}
                {gradientType === 'linear' && (
                  <div>
                    <div className="flex justify-between text-xs font-mono text-pink-300 mb-1.5">
                      <span>Rotation Angle</span>
                      <span>{gradientAngle}°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={gradientAngle}
                      onChange={(e) => setGradientAngle(Number(e.target.value))}
                      className="w-full accent-pink-500"
                    />
                  </div>
                )}

                {/* Color Stops Input */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase text-pink-300">Color Stops</div>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={gradientColor1}
                      onChange={(e) => setGradientColor1(e.target.value)}
                      className="w-10 h-10 rounded-xl cursor-pointer bg-transparent border-0"
                    />
                    <input
                      type="text"
                      value={gradientColor1}
                      onChange={(e) => setGradientColor1(e.target.value)}
                      className="flex-1 p-2 rounded-xl bg-black/60 border border-pink-900/40 text-white font-mono text-xs"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={gradientColor2}
                      onChange={(e) => setGradientColor2(e.target.value)}
                      className="w-10 h-10 rounded-xl cursor-pointer bg-transparent border-0"
                    />
                    <input
                      type="text"
                      value={gradientColor2}
                      onChange={(e) => setGradientColor2(e.target.value)}
                      className="flex-1 p-2 rounded-xl bg-black/60 border border-pink-900/40 text-white font-mono text-xs"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={gradientColor3}
                      onChange={(e) => setGradientColor3(e.target.value)}
                      className="w-10 h-10 rounded-xl cursor-pointer bg-transparent border-0"
                    />
                    <input
                      type="text"
                      value={gradientColor3}
                      onChange={(e) => setGradientColor3(e.target.value)}
                      className="flex-1 p-2 rounded-xl bg-black/60 border border-pink-900/40 text-white font-mono text-xs"
                    />
                  </div>
                </div>

                {/* Presets List */}
                <div className="pt-4 border-t border-pink-900/30">
                  <div className="text-xs font-mono uppercase text-pink-300 mb-2">Preset Inspiration</div>
                  <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                    {GRADIENT_PRESETS.map(preset => (
                      <button
                        key={preset.id}
                        onClick={() => handleApplyPresetGradient(preset)}
                        className="p-2 rounded-xl bg-black/40 hover:bg-pink-950/40 border border-pink-900/30 text-left text-[11px] font-outfit text-slate-300 truncate"
                      >
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Preview Box (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div 
                className="w-full h-80 rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(236,72,153,0.25)] flex items-center justify-center p-8 transition-all"
                style={{ background: currentGradientCSS }}
              >
                <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-center max-w-sm">
                  <h4 className="font-cinzel text-xl font-bold text-white mb-1">Live Cosmic Gradient</h4>
                  <p className="font-mono text-xs text-slate-200">Refracting Artelia Light</p>
                </div>
              </div>

              {/* CSS Output Code Block */}
              <div className="p-6 rounded-3xl glass-card border border-pink-500/30 flex items-center justify-between gap-4">
                <div className="font-mono text-xs text-pink-200 truncate">
                  background: {currentGradientCSS};
                </div>
                <button
                  onClick={() => handleCopy(`background: ${currentGradientCSS};`, 'gradient-css')}
                  className="px-5 py-2.5 rounded-xl bg-pink-500 hover:bg-pink-400 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 shrink-0 focus:outline-none"
                >
                  {copiedValue === 'gradient-css' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedValue === 'gradient-css' ? 'Copied CSS!' : 'Copy CSS'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: TYPOGRAPHY SYSTEMS (12 PAIRINGS) */}
        {activeTab === 'typography' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            {/* Left Selector (4 cols) */}
            <div className="lg:col-span-4 space-y-2 max-h-[600px] overflow-y-auto">
              <div className="text-xs font-mono uppercase text-pink-300 mb-2 px-1">Curated Type Pairings (12)</div>
              {TYPOGRAPHY_PAIRINGS.map((tp, idx) => (
                <button
                  key={tp.id}
                  onClick={() => {
                    setActiveTypoIndex(idx);
                    soundFx.playChime(650, 0.3);
                  }}
                  className={`w-full p-4 rounded-2xl text-left border transition-all ${
                    activeTypoIndex === idx 
                      ? 'bg-pink-500/20 border-pink-400 text-white font-semibold' 
                      : 'glass-card border-pink-500/20 text-slate-300 hover:border-pink-400/40'
                  }`}
                >
                  <div className="font-bold text-sm text-pink-200">{tp.name}</div>
                  <div className="text-xs text-slate-400 font-outfit mt-1">{tp.mood}</div>
                </button>
              ))}
            </div>

            {/* Right Live Preview Box (8 cols) */}
            <div className="lg:col-span-8 p-8 rounded-3xl glass-panel-glow border border-pink-400/40 space-y-6">
              {(() => {
                const currentTp = TYPOGRAPHY_PAIRINGS[activeTypoIndex];
                return (
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-pink-900/40 pb-4">
                      <div>
                        <span className="text-xs font-mono uppercase bg-pink-950 text-pink-300 px-3 py-1 rounded-full border border-pink-800">
                          {currentTp.mood}
                        </span>
                        <div className="text-xs font-mono text-slate-400 mt-2">
                          Display: <span className="text-pink-300 font-bold">{currentTp.displayFont}</span> • Body: <span className="text-cyan-300 font-bold">{currentTp.bodyFont}</span>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-pink-400/80">
                        Best For: {currentTp.bestFor}
                      </div>
                    </div>

                    {/* Specimen Box */}
                    <div className="p-8 rounded-2xl bg-black/60 border border-pink-800/40 space-y-4">
                      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide leading-tight">
                        {currentTp.previewHeadline}
                      </h2>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-outfit">
                        {currentTp.previewBody}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-pink-950/40 border border-pink-900/40 text-xs font-mono text-pink-200">
                      💡 Integration: Include via Google Fonts using <code>{`<link href="https://fonts.googleapis.com/css2?family=${encodeURIComponent(currentTp.displayFont)}&family=${encodeURIComponent(currentTp.bodyFont)}&display=swap" rel="stylesheet">`}</code>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* VIEW 4: COLOR THEORY LESSONS (6 LESSONS) */}
        {activeTab === 'theory' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {COLOR_THEORY_LESSONS.map((lesson) => (
              <div 
                key={lesson.id}
                className="p-6 rounded-3xl glass-card border border-pink-500/20 hover:border-pink-400/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-pink-950 text-pink-300 border border-pink-800/40">
                      Harmonic Rule
                    </span>
                    <span className="text-[10px] font-mono text-pink-400/70">
                      Wheel Angles: {lesson.angles.join('°, ')}°
                    </span>
                  </div>

                  <h4 className="font-cinzel text-lg font-bold text-white mb-1">
                    {lesson.title}
                  </h4>
                  <p className="text-xs font-outfit text-pink-300/80 mb-3 italic">
                    "{lesson.subtitle}"
                  </p>

                  <p className="font-outfit text-xs text-slate-300/80 leading-relaxed mb-4">
                    {lesson.description}
                  </p>

                  {/* Visual Color Swatches */}
                  <div className="grid grid-cols-5 h-10 rounded-xl overflow-hidden mb-4 border border-white/10">
                    {lesson.exampleColors.map((hex, i) => (
                      <div key={i} style={{ backgroundColor: hex }} className="h-full" />
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-pink-900/40 mb-3 text-xs font-mono text-pink-200">
                    <span className="font-bold text-white">Algorithm: </span>{lesson.rule}
                  </div>
                </div>

                <div className="text-[11px] font-outfit text-slate-400 pt-3 border-t border-pink-900/30">
                  <span className="font-bold text-slate-200">Best Application: </span>{lesson.bestUse}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 5: UI PLAYGROUND (COMPONENT LIVE PREVIEW) */}
        {activeTab === 'playground' && (
          <div className="space-y-6 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl glass-card border border-pink-500/30">
              <div>
                <span className="text-xs font-mono text-slate-400">Previewing Active Palette:</span>
                <h4 className="font-cinzel text-xl font-bold text-white">{selectedPalette.name}</h4>
              </div>
              <div className="flex gap-1.5">
                {selectedPalette.colors.map((c, i) => (
                  <span key={i} className="w-6 h-6 rounded-lg border border-white/20" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>

            {/* UI Component Previews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 1. Component Card */}
              <div 
                className="p-6 rounded-3xl border text-left transition-all"
                style={{ 
                  backgroundColor: selectedPalette.colors[0], 
                  borderColor: selectedPalette.colors[2] + '60' 
                }}
              >
                <span 
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold"
                  style={{ backgroundColor: selectedPalette.colors[1], color: selectedPalette.colors[4] }}
                >
                  Featured Card
                </span>
                <h4 
                  className="font-cinzel text-2xl font-bold mt-3 mb-2"
                  style={{ color: selectedPalette.colors[4] }}
                >
                  Cosmic Glass Interface
                </h4>
                <p 
                  className="text-xs sm:text-sm font-outfit leading-relaxed mb-4"
                  style={{ color: selectedPalette.colors[3] }}
                >
                  This container automatically samples the darkest and lightest tones of your active palette.
                </p>
                <button
                  className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                  style={{ 
                    backgroundColor: selectedPalette.colors[2], 
                    color: selectedPalette.colors[0] 
                  }}
                >
                  Action Button
                </button>
              </div>

              {/* 2. Interactive Controls Box */}
              <div 
                className="p-6 rounded-3xl border space-y-4"
                style={{ 
                  backgroundColor: selectedPalette.colors[0] + 'f0', 
                  borderColor: selectedPalette.colors[2] + '60' 
                }}
              >
                <h4 className="font-cinzel text-lg font-bold" style={{ color: selectedPalette.colors[4] }}>
                  Form Controls & Elements
                </h4>

                <div>
                  <label className="block text-xs font-mono mb-1" style={{ color: selectedPalette.colors[3] }}>
                    Input Field
                  </label>
                  <input
                    type="text"
                    defaultValue="Sample User Text"
                    className="w-full p-2.5 rounded-xl text-xs font-outfit border focus:outline-none"
                    style={{ 
                      backgroundColor: selectedPalette.colors[1], 
                      color: selectedPalette.colors[4],
                      borderColor: selectedPalette.colors[2] 
                    }}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="px-4 py-2 rounded-xl text-xs font-bold"
                    style={{ backgroundColor: selectedPalette.colors[3], color: selectedPalette.colors[0] }}
                  >
                    Primary
                  </button>
                  <button
                    className="px-4 py-2 rounded-xl text-xs font-bold border"
                    style={{ 
                      backgroundColor: 'transparent', 
                      color: selectedPalette.colors[3],
                      borderColor: selectedPalette.colors[3] 
                    }}
                  >
                    Secondary
                  </button>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: selectedPalette.colors[2], color: selectedPalette.colors[0] }}
                  >
                    Badge
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

    </section>
  );
};
export default ArteliaWorld;
