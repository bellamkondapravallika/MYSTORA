import React, { useState, useMemo } from 'react';
import { 
  Rocket, Sparkles, Bookmark, ArrowLeft, Cpu, Compass, Box, Leaf, 
  Info, Users, AlertCircle, Wrench, Search, Filter, X, ChevronRight, 
  Clock, ShieldAlert, Award, FileCode, CheckCircle2
} from 'lucide-react';
import { FUTURE_PROJECTS, FUTURON_DOMAINS } from '../../data/futureProjectsData';
import { soundFx } from '../../utils/audio';

const BATCH_SIZE = 12;

export const FutureWorld = ({ onBack, onSaveConcept, isConceptSaved }) => {
  const [activeConceptModal, setActiveConceptModal] = useState(null);
  const [filterHorizon, setFilterHorizon] = useState('All'); // 'All' | 'Practical' | 'Experimental' | 'Speculative'
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // Filter projects with useMemo
  const filteredProjects = useMemo(() => {
    return FUTURE_PROJECTS.filter((p) => {
      const matchHorizon = filterHorizon === 'All' || p.timeHorizon === filterHorizon;
      const matchDomain = selectedDomain === 'All' || p.category === selectedDomain;
      const q = searchQuery.trim().toLowerCase();
      const matchQuery = !q || 
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        (p.suggestedTechnologies && p.suggestedTechnologies.some(t => t.toLowerCase().includes(q)));
      return matchHorizon && matchDomain && matchQuery;
    });
  }, [filterHorizon, selectedDomain, searchQuery]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const handleSave = (project, e) => {
    if (e) e.stopPropagation();
    soundFx.playSuccess();
    onSaveConcept(project);
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-mono tracking-wider transition-all mb-6 focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Universe</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-emerald-900/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-400/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Rocket className="w-3.5 h-3.5 text-emerald-400" />
              <span>Planet 4 — Futuron Horizon Observatory</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white text-glow-emerald">
              FUTURON
            </h1>
            <p className="font-outfit text-emerald-200/80 text-sm sm:text-base mt-1">
              105 Future Technologies across 15 Frontier Domains & 3 Time Horizons: Practical, Experimental, and Speculative.
            </p>
          </div>

          {/* Time Horizon Filter Tabs */}
          <div className="flex bg-emerald-950/60 p-1.5 rounded-2xl border border-emerald-800/40 text-xs font-mono">
            {['All', 'Practical', 'Experimental', 'Speculative'].map(h => (
              <button
                key={h}
                onClick={() => {
                  setFilterHorizon(h);
                  setVisibleCount(BATCH_SIZE);
                  soundFx.playChime(600, 0.3);
                }}
                className={`px-3.5 py-1.5 rounded-xl transition-all focus:outline-none ${
                  filterHorizon === h
                    ? 'bg-emerald-500 text-black font-bold shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                    : 'text-emerald-200/70 hover:text-white'
                }`}
              >
                {h === 'All' ? 'All Horizons' : `${h} (${h === 'Practical' ? '0-5y' : h === 'Experimental' ? '5-15y' : '15y+'})`}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Domain Filter */}
        <div className="mt-6 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(BATCH_SIZE);
              }}
              placeholder="Search 105 future technologies (e.g., Fusion, Quantum, Neurotechnology, BCI, Solid-State)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-emerald-500/30 text-white placeholder-emerald-200/40 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 font-outfit"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Domain Chips */}
          <div className="flex flex-wrap gap-2">
            {['All', ...FUTURON_DOMAINS].map(dom => (
              <button
                key={dom}
                onClick={() => {
                  setSelectedDomain(dom);
                  setVisibleCount(BATCH_SIZE);
                  soundFx.playChime(650, 0.3);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium font-outfit transition-all focus:outline-none ${
                  selectedDomain === dom
                    ? 'bg-emerald-500 text-black font-semibold shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                    : 'bg-emerald-950/40 text-emerald-200/70 hover:text-white border border-emerald-800/30'
                }`}
              >
                {dom}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid Workspace */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
            <span>Horizon Blueprints</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
              {filteredProjects.length} Technologies
            </span>
          </h3>
          <p className="text-xs font-mono text-emerald-300/70">
            Showing {displayedProjects.length} of {filteredProjects.length}
          </p>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl glass-card border border-emerald-900/40">
            <Rocket className="w-12 h-12 text-emerald-400/40 mx-auto mb-3" />
            <p className="text-emerald-200/80 font-cinzel text-lg">No future technologies match your search.</p>
            <p className="text-xs font-outfit text-emerald-400/60 mt-1">Try resetting the domain or horizon filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project) => {
              const isSaved = isConceptSaved(project.id);
              return (
                <div
                  key={project.id}
                  onClick={() => {
                    setActiveConceptModal(project);
                    soundFx.playChime(700, 0.3);
                  }}
                  className="cursor-pointer rounded-3xl glass-card p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.01]"
                >
                  <div>
                    {/* Horizon & Domain Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                        {project.category}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        project.timeHorizon === 'Practical' ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' :
                        project.timeHorizon === 'Experimental' ? 'bg-amber-950 text-amber-300 border border-amber-700' :
                        'bg-purple-950 text-purple-300 border border-purple-700'
                      }`}>
                        {project.timeHorizon} ({project.timeHorizon === 'Practical' ? '0-5y' : project.timeHorizon === 'Experimental' ? '5-15y' : '15y+'})
                      </span>
                    </div>

                    <h4 className="font-cinzel text-lg font-bold text-white mb-1.5 group-hover:text-emerald-200 transition-colors">
                      {project.title}
                    </h4>

                    <p className="font-outfit text-xs text-emerald-300/80 mb-3 italic">
                      "{project.tagline}"
                    </p>

                    <p className="font-outfit text-xs text-slate-300/80 leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-emerald-900/30 flex items-center justify-between" onClick={e => e.stopPropagation()}>
                    <div className="flex flex-wrap gap-1">
                      {project.suggestedTechnologies && project.suggestedTechnologies.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-emerald-300/70 border border-emerald-900/30">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleSave(project, e)}
                        className={`p-2 rounded-xl border text-xs transition-colors focus:outline-none ${
                          isSaved
                            ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                            : 'bg-black/30 hover:bg-emerald-950/40 border-emerald-700/30 text-emerald-200'
                        }`}
                        title="Save to My Collection"
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-emerald-400' : ''}`} />
                      </button>

                      <button
                        onClick={() => setActiveConceptModal(project)}
                        className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 text-xs font-mono flex items-center gap-1 focus:outline-none"
                      >
                        <span>Blueprint</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-200 hover:text-white border border-emerald-500/40 font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] focus:outline-none"
            >
              Load More Technologies ({filteredProjects.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      {/* DETAILED BLUEPRINT MODAL */}
      {activeConceptModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveConceptModal(null)}
        >
          <div 
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-950 border border-emerald-400/50 p-6 sm:p-8 text-left shadow-[0_0_60px_rgba(16,185,129,0.25)] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveConceptModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-emerald-950/50 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-500/30 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                {activeConceptModal.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950 text-emerald-200 border border-emerald-800">
                {activeConceptModal.timeHorizon} Horizon
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950 text-emerald-200 border border-emerald-800">
                Status: {activeConceptModal.status}
              </span>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1">
              {activeConceptModal.title}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-300 font-outfit italic mb-6">
              "{activeConceptModal.tagline}"
            </p>

            {/* Deep Technical Explanation */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 mb-4">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold mb-1.5 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                <span>Technical Mechanics & Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-outfit">
                {activeConceptModal.technicalExplanation}
              </p>
            </div>

            {/* Breakthrough Impact */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 mb-4">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-1.5 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Potential Breakthrough Impact</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-outfit">
                {activeConceptModal.breakthroughImpact}
              </p>
            </div>

            {/* Ethical Considerations & Challenges */}
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40 mb-4">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold mb-1.5 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Ethical Considerations & Systemic Risks</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-outfit">
                {activeConceptModal.ethicalChallenges}
              </p>
            </div>

            {/* Real World Precursors */}
            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-800/40 mb-4">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold mb-1.5 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-purple-400" />
                <span>Real-World Precursors & Leading Labs</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-outfit">
                {activeConceptModal.realWorldPrecursors}
              </p>
            </div>

            {/* Student Project Idea */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/40 mb-6">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold mb-1.5 flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-emerald-400" />
                <span>Actionable Student Project You Can Build Today</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-outfit">
                {activeConceptModal.studentProjectIdea}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-300 mb-2">
                Key Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeConceptModal.suggestedTechnologies && activeConceptModal.suggestedTechnologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-950 text-emerald-200 border border-emerald-800/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-emerald-900/40">
              <button
                onClick={(e) => handleSave(activeConceptModal, e)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all focus:outline-none ${
                  isConceptSaved(activeConceptModal.id)
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-500'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-black'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isConceptSaved(activeConceptModal.id) ? 'fill-emerald-400' : ''}`} />
                <span>{isConceptSaved(activeConceptModal.id) ? 'Saved in Vault' : 'Save Horizon Blueprint'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
export default FutureWorld;
