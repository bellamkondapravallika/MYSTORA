import React, { useState, useMemo } from 'react';
import { 
  Telescope, Sparkles, RefreshCw, Bookmark, ArrowLeft, HelpCircle, 
  ChevronDown, ChevronUp, Compass, BookOpen, Search, Filter, Lightbulb, 
  Eye, EyeOff, CheckCircle2, Atom, Globe, Beaker, Brain, Layers, 
  Zap, AlertCircle, Wrench
} from 'lucide-react';
import { 
  EXPLORIX_DISCOVERIES, DISCOVERY_CATEGORIES, 
  EXPLORIX_PUZZLES, EXPLORIX_EXPERIMENTS 
} from '../../data/explorixData';
import { soundFx } from '../../utils/audio';

const BATCH_SIZE = 12;

export const ExplorixWorld = ({ onBack, onSaveDiscovery, isDiscoverySaved }) => {
  const [activeTab, setActiveTab] = useState('discoveries'); // 'discoveries' | 'puzzles' | 'experiments'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [expandedId, setExpandedId] = useState(null);
  
  // Spotlight discovery
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  // Logic Puzzles state
  const [puzzleSearch, setPuzzleSearch] = useState('');
  const [activeHintLevel, setActiveHintLevel] = useState({}); // { [puzzleId]: 0 | 1 | 2 }
  const [revealedSolutions, setRevealedSolutions] = useState({}); // { [puzzleId]: boolean }

  // Filter discoveries
  const filteredDiscoveries = useMemo(() => {
    return EXPLORIX_DISCOVERIES.filter(d => {
      const matchCat = selectedCategory === 'All' || d.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchQuery = !q || 
        d.title.toLowerCase().includes(q) ||
        d.summary.toLowerCase().includes(q) ||
        d.details.toLowerCase().includes(q) ||
        (d.didYouKnow && d.didYouKnow.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const displayedDiscoveries = useMemo(() => {
    return filteredDiscoveries.slice(0, visibleCount);
  }, [filteredDiscoveries, visibleCount]);

  const currentSpotlight = filteredDiscoveries[spotlightIndex % (filteredDiscoveries.length || 1)] || EXPLORIX_DISCOVERIES[0];

  const handleNextSpotlight = () => {
    soundFx.playChime(739.99, 0.5); // F#5
    setSpotlightIndex(prev => (prev + 1) % (filteredDiscoveries.length || 1));
  };

  const handleToggleExpand = (id) => {
    soundFx.playChime(650, 0.3);
    setExpandedId(expandedId === id ? null : id);
  };

  const handleSave = (discovery, e) => {
    if (e) e.stopPropagation();
    soundFx.playSuccess();
    onSaveDiscovery(discovery);
  };

  const handleToggleHint = (puzzleId, level) => {
    soundFx.playChime(600 + level * 50, 0.3);
    setActiveHintLevel(prev => ({
      ...prev,
      [puzzleId]: prev[puzzleId] === level ? level - 1 : level
    }));
  };

  const handleToggleSolution = (puzzleId) => {
    soundFx.playChime(650, 0.3);
    setRevealedSolutions(prev => ({
      ...prev,
      [puzzleId]: !prev[puzzleId]
    }));
  };

  return (
    <section className="relative min-h-screen w-full pt-24 pb-20 px-4 sm:px-6 lg:px-12 select-none">
      
      {/* Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-teal-300 hover:text-white border border-teal-500/30 text-xs font-mono tracking-wider transition-all mb-6 focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Universe</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-teal-900/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-400/30 text-teal-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Telescope className="w-3.5 h-3.5 text-teal-400" />
              <span>Planet 8 — Explorix Curiosity Observatory</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white text-glow">
              EXPLORIX
            </h1>
            <p className="font-outfit text-teal-200/80 text-sm sm:text-base mt-1">
              200 Science Anomalies & Breakthroughs, 20 Mind-Bending Logic Puzzles, & 15 Hands-On Physics Experiments.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex bg-teal-950/60 p-1.5 rounded-2xl border border-teal-800/40 text-xs font-mono">
            {[
              { id: 'discoveries', label: `Discoveries (200)` },
              { id: 'puzzles', label: `Logic Puzzles (20)` },
              { id: 'experiments', label: `Experiments (15)` }
            ].map(t => (
              <button
                key={t.id}
                onClick={() => { setActiveTab(t.id); soundFx.playChime(600, 0.3); }}
                className={`px-3.5 py-1.5 rounded-xl transition-all focus:outline-none ${
                  activeTab === t.id
                    ? 'bg-teal-500 text-black font-bold shadow-[0_0_12px_rgba(20,184,166,0.5)]'
                    : 'text-teal-200/70 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">

        {/* VIEW 1: 200 SCIENCE DISCOVERIES */}
        {activeTab === 'discoveries' && (
          <div className="space-y-8">
            
            {/* Spotlight Banner Card */}
            {currentSpotlight && (
              <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-teal-400/40 text-left relative shadow-[0_0_40px_rgba(20,184,166,0.15)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-teal-950 text-teal-300 border border-teal-800">
                      Spotlight Anomaly • {currentSpotlight.category}
                    </span>
                    <button
                      onClick={handleNextSpotlight}
                      className="px-3.5 py-1.5 rounded-xl bg-teal-950 hover:bg-teal-900 border border-teal-500/30 text-teal-200 text-xs font-mono flex items-center gap-1.5 focus:outline-none"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Next Phenomenon</span>
                    </button>
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-3">
                    {currentSpotlight.title}
                  </h3>

                  <p className="font-outfit text-sm text-teal-100/90 leading-relaxed mb-4">
                    {currentSpotlight.summary}
                  </p>

                  <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-800/40 mb-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-outfit">
                    {currentSpotlight.details}
                  </div>

                  {currentSpotlight.didYouKnow && (
                    <div className="p-3.5 rounded-xl bg-black/40 border border-teal-900/40 text-xs font-outfit text-amber-200/90 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div><span className="font-bold text-amber-300">Mind-Bending Fact: </span>{currentSpotlight.didYouKnow}</div>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-teal-900/30 flex items-center justify-between">
                  <div className="text-xs font-mono text-teal-300/80 italic">
                    ❓ "{currentSpotlight.mysteryQuestion}"
                  </div>

                  <button
                    onClick={(e) => handleSave(currentSpotlight, e)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                      isDiscoverySaved(currentSpotlight.id)
                        ? 'bg-teal-950 text-teal-300 border-teal-500'
                        : 'bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 border-teal-400/40'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isDiscoverySaved(currentSpotlight.id) ? 'fill-teal-400' : ''}`} />
                    <span>{isDiscoverySaved(currentSpotlight.id) ? 'Saved' : 'Save Anomaly'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Search & Category Filter */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-teal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(BATCH_SIZE);
                  }}
                  placeholder="Search 200 science anomalies (e.g. Quantum, Black Hole, Graphene, Tardigrade, Mandelbrot)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-teal-500/30 text-white placeholder-teal-200/40 text-xs sm:text-sm focus:outline-none focus:border-teal-400 font-outfit"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {DISCOVERY_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(BATCH_SIZE);
                      soundFx.playChime(650, 0.3);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium font-outfit transition-all focus:outline-none ${
                      selectedCategory === cat
                        ? 'bg-teal-500 text-black font-semibold shadow-[0_0_12px_rgba(20,184,166,0.5)]'
                        : 'bg-teal-950/40 text-teal-200/70 hover:text-white border border-teal-800/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Discoveries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedDiscoveries.map((d) => {
                const isExpanded = expandedId === d.id;
                const isSaved = isDiscoverySaved(d.id);

                return (
                  <div
                    key={d.id}
                    onClick={() => handleToggleExpand(d.id)}
                    className="cursor-pointer p-6 rounded-3xl glass-card border border-teal-500/20 hover:border-teal-400/50 transition-all text-left flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-teal-950 text-teal-300 border border-teal-800/40">
                          {d.category}
                        </span>
                        <button
                          onClick={(e) => handleSave(d, e)}
                          className={`p-1.5 rounded-lg border text-xs transition-colors focus:outline-none ${
                            isSaved
                              ? 'bg-teal-950 border-teal-500 text-teal-300'
                              : 'bg-black/30 hover:bg-teal-950/40 border-teal-800/30 text-teal-200'
                          }`}
                          title="Save to Collection"
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-teal-400' : ''}`} />
                        </button>
                      </div>

                      <h4 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-teal-200 transition-colors">
                        {d.title}
                      </h4>

                      <p className="font-outfit text-xs text-slate-300/80 leading-relaxed mb-4">
                        {d.summary}
                      </p>

                      {isExpanded && (
                        <div className="space-y-3 pt-3 border-t border-teal-900/30 text-xs font-outfit text-slate-200 animate-fadeIn">
                          <p className="leading-relaxed bg-black/40 p-3 rounded-xl border border-teal-950">
                            {d.details}
                          </p>
                          {d.didYouKnow && (
                            <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-[11px]">
                              <span className="font-bold">Did you know: </span>{d.didYouKnow}
                            </div>
                          )}
                          {d.applications && (
                            <div className="text-[11px] font-mono text-teal-400/80">
                              Applied in: {d.applications}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-teal-900/30 flex items-center justify-between text-xs font-mono text-teal-300/80">
                      <span>{isExpanded ? 'Collapse' : 'Deep Dive'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredDiscoveries.length && (
              <div className="text-center mt-10">
                <button
                  onClick={() => {
                    setVisibleCount(prev => prev + BATCH_SIZE);
                    soundFx.playChime(650, 0.3);
                  }}
                  className="px-8 py-3 rounded-2xl bg-teal-950/70 hover:bg-teal-900/80 text-teal-200 hover:text-white border border-teal-500/40 font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(20,184,166,0.2)] focus:outline-none"
                >
                  Load More Anomalies ({filteredDiscoveries.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: 20 LOGIC PUZZLES */}
        {activeTab === 'puzzles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {EXPLORIX_PUZZLES.map((puzzle) => {
              const hintLevel = activeHintLevel[puzzle.id] || 0;
              const isSolutionRevealed = revealedSolutions[puzzle.id] || false;

              return (
                <div 
                  key={puzzle.id}
                  className="p-6 rounded-3xl glass-card border border-teal-500/20 hover:border-teal-400/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-teal-950 text-teal-300 border border-teal-800/40">
                        {puzzle.category}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        puzzle.difficulty === 'Easy' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' :
                        puzzle.difficulty === 'Medium' ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                        'bg-purple-950 text-purple-300 border border-purple-800'
                      }`}>
                        {puzzle.difficulty}
                      </span>
                    </div>

                    <h4 className="font-cinzel text-lg font-bold text-white mb-2">
                      {puzzle.title}
                    </h4>

                    <p className="font-outfit text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                      {puzzle.puzzle}
                    </p>

                    {/* Hints Buttons */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleHint(puzzle.id, 1)}
                          className={`px-3 py-1 rounded-xl text-xs font-mono border transition-all ${
                            hintLevel >= 1 
                              ? 'bg-amber-500/30 text-amber-200 border-amber-400' 
                              : 'bg-black/30 text-slate-400 border-slate-700 hover:text-white'
                          }`}
                        >
                          Hint 1
                        </button>
                        <button
                          onClick={() => handleToggleHint(puzzle.id, 2)}
                          className={`px-3 py-1 rounded-xl text-xs font-mono border transition-all ${
                            hintLevel >= 2 
                              ? 'bg-amber-500/30 text-amber-200 border-amber-400' 
                              : 'bg-black/30 text-slate-400 border-slate-700 hover:text-white'
                          }`}
                        >
                          Hint 2
                        </button>
                      </div>

                      {hintLevel >= 1 && (
                        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs font-outfit text-amber-200">
                          <span className="font-bold">Hint 1: </span>{puzzle.hint1}
                        </div>
                      )}
                      {hintLevel >= 2 && (
                        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs font-outfit text-amber-200">
                          <span className="font-bold">Hint 2: </span>{puzzle.hint2}
                        </div>
                      )}
                    </div>

                    {/* Revealed Solution Box */}
                    {isSolutionRevealed && (
                      <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/40 space-y-2 mb-4 animate-fadeIn">
                        <div className="text-xs font-mono font-bold text-teal-300">Solution:</div>
                        <p className="text-xs font-outfit text-white font-medium">
                          {puzzle.solution}
                        </p>
                        <div className="text-[11px] font-outfit text-slate-300 pt-2 border-t border-teal-900/40">
                          {puzzle.explanation}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-teal-900/30 flex items-center justify-between">
                    <button
                      onClick={() => handleToggleSolution(puzzle.id)}
                      className="px-4 py-1.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-teal-200 text-xs font-mono flex items-center gap-1.5 focus:outline-none"
                    >
                      {isSolutionRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isSolutionRevealed ? 'Hide Solution' : 'Reveal Solution'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 3: 15 MINI EXPERIMENTS */}
        {activeTab === 'experiments' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {EXPLORIX_EXPERIMENTS.map((exp) => (
              <div 
                key={exp.id}
                className="p-6 rounded-3xl glass-card border border-teal-500/20 hover:border-teal-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-teal-950 text-teal-300 border border-teal-800/40">
                      {exp.category}
                    </span>
                    <span className="text-[10px] font-mono text-teal-400/80">
                      DIY Lab
                    </span>
                  </div>

                  <h4 className="font-cinzel text-lg font-bold text-white mb-2">
                    {exp.title}
                  </h4>

                  {/* Materials */}
                  <div className="p-3 rounded-xl bg-black/40 border border-teal-900/40 mb-3 text-xs font-outfit">
                    <span className="font-bold text-teal-300">Materials Needed: </span>
                    <span className="text-slate-300">{exp.materials}</span>
                  </div>

                  {/* Steps */}
                  <div className="space-y-1.5 mb-4">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-teal-400/80">
                      Procedure Steps:
                    </div>
                    {exp.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs font-outfit text-slate-300">
                        <span className="px-1.5 py-0.5 rounded bg-teal-950 text-[10px] font-mono text-teal-300 shrink-0">
                          {sIdx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Observation */}
                  <div className="p-3 rounded-xl bg-teal-950/30 border border-teal-800/30 mb-3 text-xs font-outfit">
                    <span className="font-bold text-teal-200">What Happens: </span>
                    <span className="text-slate-200">{exp.observation}</span>
                  </div>
                </div>

                {/* Science Explanation */}
                <div className="pt-3 border-t border-teal-900/30 text-[11px] font-outfit text-teal-300/90 leading-relaxed">
                  <span className="font-bold text-white">The Science: </span>
                  {exp.scienceExplanation}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </section>
  );
};
export default ExplorixWorld;
