import React, { useState, useMemo } from 'react';
import { 
  Compass, Sparkles, Copy, Check, Bookmark, ArrowLeft, RefreshCw, 
  Layers, CheckCircle2, Target, Lightbulb, Users, Search, Filter, 
  X, Clock, Rocket, Zap, ChevronRight, Code, Database, Server
} from 'lucide-react';
import { IDEAS_DATA, IDEA_CATEGORIES } from '../../data/ideasData';
import { soundFx } from '../../utils/audio';

const BATCH_SIZE = 12;

export const CreativeWorld = ({ onBack, onSaveIdea, isIdeaSaved }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [activeModalIdea, setActiveModalIdea] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  // Filter ideas efficiently with useMemo
  const filteredIdeas = useMemo(() => {
    return IDEAS_DATA.filter((idea) => {
      const matchCat = selectedCategory === 'All' || idea.category === selectedCategory;
      const matchDiff = selectedDifficulty === 'All' || idea.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
      const query = searchQuery.trim().toLowerCase();
      const matchQuery = !query || 
        idea.title.toLowerCase().includes(query) ||
        idea.problemStatement.toLowerCase().includes(query) ||
        idea.proposedSolution.toLowerCase().includes(query) ||
        idea.techStack.some(t => t.toLowerCase().includes(query));
      return matchCat && matchDiff && matchQuery;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  const displayedIdeas = useMemo(() => {
    return filteredIdeas.slice(0, visibleCount);
  }, [filteredIdeas, visibleCount]);

  const currentSpotlight = filteredIdeas[spotlightIndex % (filteredIdeas.length || 1)] || IDEAS_DATA[0];

  const handleNextSpotlight = () => {
    soundFx.playChime(587.33, 0.5); // D5 chime
    setSpotlightIndex(prev => (prev + 1) % (filteredIdeas.length || 1));
  };

  const handleCopyIdea = (idea, e) => {
    if (e) e.stopPropagation();
    const textToCopy = `Project: ${idea.title} [${idea.category} - ${idea.difficulty}]
Time: ${idea.estimatedTime || 'N/A'}
Problem: ${idea.problemStatement}
Solution: ${idea.proposedSolution}
What Makes It Different: ${idea.whatMakesItDifferent || 'N/A'}
MVP: ${idea.mvp || 'N/A'}
Tech Stack: ${idea.techStack.join(', ')}
Key Features:
${idea.features.map(f => `- ${f}`).join('\n')}
${idea.implementationRoadmap ? `\nRoadmap:\n${idea.implementationRoadmap.map(r => `${r.phase}: ${r.title} - ${r.description}`).join('\n')}` : ''}`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(idea.id);
    soundFx.playChime(880, 0.4);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSave = (idea, e) => {
    if (e) e.stopPropagation();
    soundFx.playSuccess();
    onSaveIdea(idea);
  };

  const handleLoadMore = () => {
    soundFx.playChime(650, 0.3);
    setVisibleCount(prev => prev + BATCH_SIZE);
  };

  return (
    <section className="relative min-h-screen w-full pt-24 pb-20 px-4 sm:px-6 lg:px-12 select-none">
      
      {/* Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-amber-300 hover:text-white border border-amber-500/30 text-xs font-mono tracking-wider transition-all mb-6 focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Universe</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-amber-900/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-400/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Planet 2 — Creativa Project Hub</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white text-glow-amber">
              CREATIVA
            </h1>
            <p className="font-outfit text-amber-200/80 text-sm sm:text-base mt-1">
              300 Curated Project Ideas across 12 Domains with Roadmaps, MVPs, and Tech Architectures.
            </p>
          </div>

          <button
            onClick={handleNextSpotlight}
            className="px-5 py-2.5 rounded-xl bg-amber-500/90 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all active:scale-95 self-start md:self-end focus:outline-none"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Surprise Idea</span>
          </button>
        </div>

        {/* Controls: Search, Difficulty, Category */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(BATCH_SIZE);
                }}
                placeholder="Search 300 projects by name, problem, or technology (e.g., Python, AI, Healthcare)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-amber-500/30 text-white placeholder-amber-200/40 text-xs sm:text-sm focus:outline-none focus:border-amber-400 font-outfit"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400/60 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-xl border border-amber-500/30 shrink-0">
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map(diff => (
                <button
                  key={diff}
                  onClick={() => {
                    setSelectedDifficulty(diff);
                    setVisibleCount(BATCH_SIZE);
                    soundFx.playChime(600, 0.3);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus:outline-none ${
                    selectedDifficulty === diff
                      ? 'bg-amber-500 text-black font-bold shadow-[0_0_10px_rgba(251,191,36,0.5)]'
                      : 'text-amber-200/70 hover:text-white'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Domain / Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {['All', ...IDEA_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(BATCH_SIZE);
                  setSpotlightIndex(0);
                  soundFx.playChime(650, 0.4);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium font-outfit transition-all duration-200 focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-black font-semibold shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                    : 'bg-amber-950/40 text-amber-200/70 hover:text-white hover:bg-amber-900/40 border border-amber-800/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* FEATURED SPOTLIGHT CARD */}
        {currentSpotlight && (
          <div 
            onClick={() => setActiveModalIdea(currentSpotlight)}
            className="cursor-pointer p-6 sm:p-8 rounded-3xl glass-panel-glow border border-amber-400/40 relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.15)] group hover:border-amber-300 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/40">
                  {currentSpotlight.category}
                </span>
                <span className="text-xs font-mono text-amber-300/80 px-2 py-0.5 rounded bg-amber-950 border border-amber-800">
                  {currentSpotlight.difficulty}
                </span>
                {currentSpotlight.estimatedTime && (
                  <span className="text-xs font-mono text-amber-300/80 px-2 py-0.5 rounded bg-amber-950 border border-amber-800 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{currentSpotlight.estimatedTime}</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-amber-400/70">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>Audience: {currentSpotlight.targetAudience}</span>
              </div>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
              {currentSpotlight.title}
            </h2>

            {currentSpotlight.whatMakesItDifferent && (
              <p className="text-xs sm:text-sm font-outfit text-amber-300/90 mb-4 italic">
                ✨ Unique Edge: {currentSpotlight.whatMakesItDifferent}
              </p>
            )}

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/40">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-1.5 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-rose-400" />
                  <span>The Real-World Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {currentSpotlight.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/40">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-1.5 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span>Proposed Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {currentSpotlight.proposedSolution}
                </p>
              </div>
            </div>

            {/* MVP Highlight */}
            {currentSpotlight.mvp && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5 text-amber-400" />
                  <span>Realistic Student MVP</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200">
                  {currentSpotlight.mvp}
                </p>
              </div>
            )}

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-amber-900/30">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-amber-400/70 mr-1">Recommended Stack:</span>
                {currentSpotlight.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-amber-950/70 text-amber-200 border border-amber-700/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                <button
                  onClick={() => setActiveModalIdea(currentSpotlight)}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-amber-400 transition-all focus:outline-none"
                >
                  <span>View Full Roadmap</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={(e) => handleSave(currentSpotlight, e)}
                  disabled={isIdeaSaved(currentSpotlight.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all focus:outline-none ${
                    isIdeaSaved(currentSpotlight.id)
                      ? 'bg-amber-950/80 text-amber-300 border border-amber-500/50'
                      : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isIdeaSaved(currentSpotlight.id) ? 'fill-amber-400' : ''}`} />
                  <span>{isIdeaSaved(currentSpotlight.id) ? 'Saved' : 'Save'}</span>
                </button>

                <button
                  onClick={(e) => handleCopyIdea(currentSpotlight, e)}
                  className="px-3 py-2 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/30 text-amber-200 text-xs font-medium flex items-center gap-1.5 transition-all focus:outline-none"
                >
                  {copiedId === currentSpotlight.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ALL CURATED IDEAS GRID */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
              <span>Project Blueprints Directory</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
                {filteredIdeas.length} Available
              </span>
            </h3>
            <p className="text-xs font-mono text-amber-300/70">
              Showing {displayedIdeas.length} of {filteredIdeas.length}
            </p>
          </div>

          {filteredIdeas.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-3xl glass-card border border-amber-900/40">
              <Compass className="w-12 h-12 text-amber-400/40 mx-auto mb-3" />
              <p className="text-amber-200/80 font-cinzel text-lg">No project concepts match your search.</p>
              <p className="text-xs font-outfit text-amber-400/60 mt-1">Try resetting the difficulty or domain filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedIdeas.map((idea) => {
                const isSaved = isIdeaSaved(idea.id);
                const isCopied = copiedId === idea.id;

                return (
                  <div
                    key={idea.id}
                    onClick={() => setActiveModalIdea(idea)}
                    className="cursor-pointer rounded-3xl glass-card p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.01]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-amber-950 text-amber-300 border border-amber-800/40">
                          {idea.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            idea.difficulty === 'Beginner' ? 'text-emerald-300 bg-emerald-950/60 border border-emerald-800/40' :
                            idea.difficulty === 'Intermediate' ? 'text-amber-300 bg-amber-950/60 border border-amber-800/40' :
                            'text-purple-300 bg-purple-950/60 border border-purple-800/40'
                          }`}>
                            {idea.difficulty}
                          </span>
                        </div>
                      </div>

                      <h4 className="font-cinzel text-base font-bold text-white mb-2 group-hover:text-amber-200 transition-colors line-clamp-2">
                        {idea.title}
                      </h4>

                      <p className="font-outfit text-xs text-slate-300/80 leading-relaxed mb-4 line-clamp-3">
                        {idea.problemStatement}
                      </p>

                      <div className="space-y-1 mb-4">
                        {idea.features.slice(0, 2).map((f, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-amber-200/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-amber-900/25 flex items-center justify-between gap-2" onClick={e => e.stopPropagation()}>
                      <div className="flex flex-wrap gap-1">
                        {idea.techStack.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-amber-300/70 border border-amber-900/30">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => handleSave(idea, e)}
                          className={`p-2 rounded-lg border text-xs transition-colors focus:outline-none ${
                            isSaved
                              ? 'bg-amber-950 border-amber-500 text-amber-300'
                              : 'bg-black/30 hover:bg-amber-950/40 border-amber-700/30 text-amber-200'
                          }`}
                          title="Save to My Collection"
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-400' : ''}`} />
                        </button>

                        <button
                          onClick={(e) => handleCopyIdea(idea, e)}
                          className="p-2 rounded-lg bg-black/30 hover:bg-amber-950/40 border border-amber-700/30 text-amber-200 text-xs transition-colors focus:outline-none"
                          title="Copy blueprint"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredIdeas.length && (
            <div className="text-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 rounded-2xl bg-amber-950/70 hover:bg-amber-900/80 text-amber-200 hover:text-white border border-amber-500/40 font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] focus:outline-none"
              >
                Load More Projects ({filteredIdeas.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>

      </div>

      {/* DETAIL MODAL: ROADMAP & MVP BLUEPRINT */}
      {activeModalIdea && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveModalIdea(null)}
        >
          <div 
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-950 border border-amber-400/50 p-6 sm:p-8 text-left shadow-[0_0_60px_rgba(245,158,11,0.25)] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalIdea(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-amber-950/50 hover:bg-amber-900/50 text-amber-400 border border-amber-500/30 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-amber-500/20 text-amber-300 border border-amber-400/40">
                {activeModalIdea.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-950 text-amber-200 border border-amber-800">
                {activeModalIdea.difficulty}
              </span>
              {activeModalIdea.estimatedTime && (
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-950 text-amber-200 border border-amber-800 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>Est: {activeModalIdea.estimatedTime}</span>
                </span>
              )}
            </div>

            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
              {activeModalIdea.title}
            </h2>

            {activeModalIdea.whatMakesItDifferent && (
              <p className="text-xs sm:text-sm text-amber-300/90 font-outfit italic mb-6">
                ⭐ What Makes It Different: {activeModalIdea.whatMakesItDifferent}
              </p>
            )}

            {/* Problem & Solution */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40">
                <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5" />
                  <span>The Real-World Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-outfit">
                  {activeModalIdea.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>The Proposed Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-outfit">
                  {activeModalIdea.proposedSolution}
                </p>
              </div>

              {activeModalIdea.realWorldUseCase && (
                <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40">
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Real-World Use Case</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-outfit">
                    {activeModalIdea.realWorldUseCase}
                  </p>
                </div>
              )}
            </div>

            {/* MVP Spec */}
            {activeModalIdea.mvp && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-400/40">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold mb-1 flex items-center gap-1.5">
                  <Rocket className="w-4 h-4 text-amber-400" />
                  <span>Minimum Viable Product (MVP) Blueprint</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-outfit">
                  {activeModalIdea.mvp}
                </p>
              </div>
            )}

            {/* Implementation Roadmap */}
            {activeModalIdea.implementationRoadmap && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>Step-by-Step Implementation Roadmap</span>
                </h4>
                <div className="space-y-2.5">
                  {activeModalIdea.implementationRoadmap.map((step, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-amber-800/30 flex items-start gap-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950 text-amber-300 border border-amber-800 shrink-0">
                        {step.phase}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-white">{step.title}</div>
                        <div className="text-xs text-slate-300 font-outfit mt-0.5">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-2">
                Core Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalIdea.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-2">
                Recommended Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalIdea.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-amber-950 text-amber-200 border border-amber-800/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Extensions */}
            {activeModalIdea.extensions && (
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-2">
                  Suggested Extensions
                </h4>
                <div className="space-y-1.5">
                  {activeModalIdea.extensions.map((ext, idx) => (
                    <div key={idx} className="text-xs text-amber-200/80 flex items-center gap-1.5 font-outfit">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{ext}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-900/40">
              <div className="text-xs font-mono text-amber-400/70">
                Audience: {activeModalIdea.targetAudience}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSave(activeModalIdea)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all focus:outline-none ${
                    isIdeaSaved(activeModalIdea.id)
                      ? 'bg-amber-950 text-amber-300 border border-amber-500/50'
                      : 'bg-amber-500 hover:bg-amber-400 text-black'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isIdeaSaved(activeModalIdea.id) ? 'fill-amber-400' : ''}`} />
                  <span>{isIdeaSaved(activeModalIdea.id) ? 'Saved in Vault' : 'Save Blueprint'}</span>
                </button>

                <button
                  onClick={() => handleCopyIdea(activeModalIdea)}
                  className="px-4 py-2 rounded-xl bg-amber-950/60 hover:bg-amber-900/60 border border-amber-500/30 text-amber-200 text-xs font-medium flex items-center gap-1.5 focus:outline-none"
                >
                  {copiedId === activeModalIdea.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Blueprint</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
export default CreativeWorld;
