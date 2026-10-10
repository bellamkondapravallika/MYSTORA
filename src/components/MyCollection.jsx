import React, { useState } from 'react';
import { 
  Bookmark, Trash2, Heart, Compass, Rocket, ArrowLeft, Download, 
  Search, Palette, BookOpen, Telescope, Copy, Check, Target, 
  Brain, Code2, Clock, CheckCircle2, CheckSquare, Square, Zap, 
  ExternalLink, Sparkles 
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const MyCollection = ({
  collectionData = {},
  onRemoveQuote,
  onRemoveIdea,
  onRemoveTopic,
  onRemoveChallenge,
  onRemoveConcept,
  onRemovePalette,
  onRemoveDiscovery,
  onDeleteDream,
  onToggleDream,
  onDeleteJournalEntry,
  onNavigateWorld,
  onClearAll
}) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const {
    quotes = [],
    ideas = [],
    topics = [],
    challenges = [],
    futureConcepts = [],
    dreams = [],
    palettes = [],
    journalEntries = [],
    discoveries = []
  } = collectionData;

  const totalCount =
    quotes.length +
    ideas.length +
    topics.length +
    challenges.length +
    futureConcepts.length +
    dreams.length +
    palettes.length +
    journalEntries.length +
    discoveries.length;

  const handleExport = () => {
    soundFx.playSuccess();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(collectionData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `mystora-vault-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    soundFx.playChime(900, 0.4);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter items matching search
  const query = searchQuery.toLowerCase().trim();

  const filteredQuotes = quotes.filter(q => !query || (q.text && q.text.toLowerCase().includes(query)) || (q.author && q.author.toLowerCase().includes(query)) || (q.category && q.category.toLowerCase().includes(query)));
  const filteredDreams = dreams.filter(d => !query || (d.title && d.title.toLowerCase().includes(query)) || (d.category && d.category.toLowerCase().includes(query)) || (d.todaysFocus && d.todaysFocus.toLowerCase().includes(query)) || (d.notes && d.notes.toLowerCase().includes(query)));
  const filteredIdeas = ideas.filter(i => !query || (i.title && i.title.toLowerCase().includes(query)) || (i.description && i.description.toLowerCase().includes(query)) || (i.domain && i.domain.toLowerCase().includes(query)) || (i.category && i.category.toLowerCase().includes(query)));
  const filteredTopics = topics.filter(t => !query || (t.title && t.title.toLowerCase().includes(query)) || (t.category && t.category.toLowerCase().includes(query)) || (t.keyConcepts && t.keyConcepts.some(c => c.toLowerCase().includes(query))));
  const filteredChallenges = challenges.filter(c => !query || (c.title && c.title.toLowerCase().includes(query)) || (c.topic && c.topic.toLowerCase().includes(query)) || (c.description && c.description.toLowerCase().includes(query)));
  const filteredConcepts = futureConcepts.filter(c => !query || (c.title && c.title.toLowerCase().includes(query)) || (c.description && c.description.toLowerCase().includes(query)) || (c.domain && c.domain.toLowerCase().includes(query)));
  const filteredPalettes = palettes.filter(p => !query || (p.name && p.name.toLowerCase().includes(query)) || (p.description && p.description.toLowerCase().includes(query)) || (p.category && p.category.toLowerCase().includes(query)));
  const filteredJournal = journalEntries.filter(j => !query || (j.title && j.title.toLowerCase().includes(query)) || (j.content && j.content.toLowerCase().includes(query)) || (j.mood && j.mood.toLowerCase().includes(query)));
  const filteredDiscoveries = discoveries.filter(d => !query || (d.title && d.title.toLowerCase().includes(query)) || (d.summary && d.summary.toLowerCase().includes(query)) || (d.category && d.category.toLowerCase().includes(query)));

  const tabs = [
    { id: 'all', label: 'All Items', count: totalCount, icon: Bookmark },
    { id: 'dreams', label: 'Dreams & Goals', count: dreams.length, icon: Target, worldId: 'dreams', emptyMsg: "No saved goals yet. Visit Dreamora to adopt from 52 goal templates or craft custom aspirations." },
    { id: 'quotes', label: 'Quotes', count: quotes.length, icon: Heart, worldId: 'dreams', emptyMsg: "No saved quotes yet. Explore the wisdom sanctuary in Dreamora to bookmark cosmic quotes." },
    { id: 'ideas', label: 'Project Ideas', count: ideas.length, icon: Compass, worldId: 'creative', emptyMsg: "No bookmarked project ideas yet. Browse 300+ blueprints in Creativa across 12 domains." },
    { id: 'topics', label: 'Learning Topics', count: topics.length, icon: Brain, worldId: 'knowledge', emptyMsg: "No saved learning topics yet. Explore Knowlith's 300 technical modules." },
    { id: 'challenges', label: 'Code Challenges', count: challenges.length, icon: Code2, worldId: 'codeverse', emptyMsg: "No saved challenges yet. Bookmark algorithm problems to solve in Codeverse." },
    { id: 'concepts', label: 'Future Tech', count: futureConcepts.length, icon: Rocket, worldId: 'future', emptyMsg: "No saved futuristic concepts yet. Discover 105 frontier technologies in Futuron." },
    { id: 'palettes', label: 'Color Palettes', count: palettes.length, icon: Palette, worldId: 'artelia', emptyMsg: "No saved color palettes yet. Save aesthetic harmonies in Artelia." },
    { id: 'journal', label: 'Journal Chronicles', count: journalEntries.length, icon: BookOpen, worldId: 'memoira', emptyMsg: "No journal entries yet. Reflect and write chronicles in Memoira." },
    { id: 'discoveries', label: 'Discoveries', count: discoveries.length, icon: Telescope, worldId: 'explorix', emptyMsg: "No saved discoveries yet. Bookmark science and nature wonders in Explorix." }
  ];

  const currentTabConfig = tabs.find(t => t.id === activeTab) || tabs[0];
  const isSpecificTabEmpty = activeTab !== 'all' && currentTabConfig.count === 0;

  return (
    <section className="relative min-h-screen w-full pt-24 pb-20 px-4 sm:px-6 lg:px-12 select-none">
      
      {/* Header & Controls */}
      <div className="max-w-6xl mx-auto mb-8">
        <button
          onClick={() => onNavigateWorld('universe')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-purple-300 hover:text-white border border-purple-500/30 text-xs font-mono tracking-wider transition-all mb-6 focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Universe</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-purple-900/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-400/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Bookmark className="w-3.5 h-3.5 text-purple-400" />
              <span>Personal Vault</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white text-glow">
              My Collection
            </h1>
            <p className="font-outfit text-purple-200/80 text-sm sm:text-base mt-1">
              Your preserved constellation of saved goals, ideas, code challenges, color harmonies, and cosmic discoveries.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {totalCount > 0 && (
              <>
                <button
                  onClick={handleExport}
                  className="px-4 py-2 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-purple-200 text-xs font-mono flex items-center gap-1.5 transition-all"
                  title="Export collection as JSON"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export JSON</span>
                </button>
                <button
                  onClick={onClearAll}
                  className="px-3.5 py-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/50 border border-rose-800/40 text-rose-300 text-xs font-mono transition-all"
                >
                  Clear All
                </button>
              </>
            )}
          </div>
        </div>

        {/* Search Bar & Tab Filters */}
        <div className="mt-6 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFx.playChime(750, 0.3);
                    setActiveTab(tab.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium font-outfit transition-all flex items-center gap-1.5 ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                      : 'bg-purple-950/40 text-purple-300/70 hover:text-white border border-purple-900/30'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{tab.label}</span>
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/40 text-purple-200 font-mono">
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-purple-400/60" />
            <input
              type="text"
              placeholder="Search all saved items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-purple-950/50 border border-purple-500/30 text-white text-xs placeholder:text-purple-400/40 focus:outline-none focus:border-purple-400 font-outfit"
            />
          </div>
        </div>
      </div>

      {/* Collection Content */}
      <div className="max-w-6xl mx-auto">
        {totalCount === 0 ? (
          /* Entire vault empty state */
          <div className="text-center py-20 px-6 rounded-3xl glass-panel border border-purple-500/20 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-purple-950 border border-purple-400/40 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <Bookmark className="w-7 h-7 text-purple-300" />
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white mb-2">
              Your Celestial Vault is Empty
            </h3>
            <p className="font-outfit text-xs sm:text-sm text-purple-200/70 leading-relaxed mb-6">
              You haven't saved any items yet. As you explore the 8 planets of Mystora, click the bookmark icon on any goal, project idea, code challenge, or science discovery to preserve it here.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => onNavigateWorld('dreams')}
                className="px-4 py-2 rounded-xl bg-purple-600/80 hover:bg-purple-500 text-white text-xs font-semibold"
              >
                Explore Dreamora
              </button>
              <button
                onClick={() => onNavigateWorld('creative')}
                className="px-4 py-2 rounded-xl bg-amber-600/80 hover:bg-amber-500 text-white text-xs font-semibold"
              >
                Explore Creativa
              </button>
              <button
                onClick={() => onNavigateWorld('knowledge')}
                className="px-4 py-2 rounded-xl bg-cyan-600/80 hover:bg-cyan-500 text-white text-xs font-semibold"
              >
                Explore Knowlith
              </button>
            </div>
          </div>
        ) : isSpecificTabEmpty ? (
          /* Specific category genuinely empty state */
          <div className="text-center py-16 px-6 rounded-3xl glass-card border border-purple-900/40 max-w-md mx-auto space-y-4">
            <currentTabConfig.icon className="w-12 h-12 text-purple-400/40 mx-auto" />
            <h4 className="font-cinzel text-lg text-white">No Saved {currentTabConfig.label}</h4>
            <p className="text-xs text-purple-200/70 font-outfit">
              {currentTabConfig.emptyMsg}
            </p>
            {currentTabConfig.worldId && (
              <button
                onClick={() => onNavigateWorld(currentTabConfig.worldId)}
                className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-semibold text-xs transition-all uppercase tracking-wider"
              >
                Explore {currentTabConfig.label}
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-10">
            
            {/* 1. SAVED DREAMS & GOALS */}
            {(activeTab === 'all' || activeTab === 'dreams') && filteredDreams.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-purple-400" />
                    <span>Saved Dreams & Goals ({filteredDreams.length})</span>
                  </h3>
                  <button
                    onClick={() => onNavigateWorld('dreams')}
                    className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Open in Dreamora</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredDreams.map((d) => {
                    const milestones = d.milestones || [];
                    const completedMilestones = milestones.filter(m => m.done).length;
                    const progressPct = milestones.length > 0 
                      ? Math.round((completedMilestones / milestones.length) * 100) 
                      : (d.completed ? 100 : 0);

                    return (
                      <div 
                        key={d.id} 
                        className={`p-5 rounded-2xl glass-card border transition-all flex flex-col justify-between ${
                          d.completed ? 'border-emerald-500/30 bg-emerald-950/10' : 'border-purple-500/25'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono uppercase text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                              {d.category || 'Goal'}
                            </span>
                            <div className="flex items-center gap-2">
                              {d.targetDate && (
                                <span className="text-[10px] font-mono text-purple-300/80 flex items-center gap-1">
                                  <Clock className="w-3 h-3 text-purple-400" />
                                  <span>{d.targetDate}</span>
                                </span>
                              )}
                              <button
                                onClick={() => {
                                  soundFx.playChime(400);
                                  if (onDeleteDream) onDeleteDream(d.id);
                                }}
                                className="p-1 rounded text-purple-400/60 hover:text-rose-400 transition-colors"
                                title="Remove goal from vault"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <h4 className={`font-cinzel text-base font-bold mb-2 ${d.completed ? 'text-emerald-300 line-through' : 'text-white'}`}>
                            {d.title}
                          </h4>

                          {/* Focus & Next Step */}
                          {(d.todaysFocus || d.nextSmallStep) && (
                            <div className="p-2.5 rounded-xl bg-black/40 border border-purple-900/40 mb-3 space-y-1 text-xs">
                              {d.todaysFocus && (
                                <div className="text-slate-300">
                                  <span className="font-bold text-purple-300">Today's Focus: </span>
                                  <span>{d.todaysFocus}</span>
                                </div>
                              )}
                              {d.nextSmallStep && (
                                <div className="text-slate-300">
                                  <span className="font-bold text-amber-300">Next Step: </span>
                                  <span>{d.nextSmallStep}</span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Progress bar */}
                          <div className="mb-3">
                            <div className="flex justify-between text-[10px] font-mono text-purple-300 mb-1">
                              <span>Milestones</span>
                              <span>{progressPct}% ({completedMilestones}/{milestones.length})</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-black/50 overflow-hidden border border-purple-900/30">
                              <div 
                                className={`h-full transition-all duration-300 ${d.completed ? 'bg-emerald-400' : 'bg-gradient-to-r from-purple-500 to-cyan-400'}`}
                                style={{ width: `${progressPct}%` }}
                              />
                            </div>
                          </div>

                          {/* Notes */}
                          {d.notes && (
                            <p className="font-outfit text-xs text-slate-300/70 italic mb-3 line-clamp-2">
                              {d.notes}
                            </p>
                          )}
                        </div>

                        <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between">
                          <button
                            onClick={() => {
                              if (onToggleDream) onToggleDream(d.id);
                              soundFx.playChime(600, 0.3);
                            }}
                            className={`flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all ${
                              d.completed 
                                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/50' 
                                : 'bg-black/30 text-purple-200 border-purple-800/40 hover:text-white'
                            }`}
                          >
                            <CheckCircle2 className={`w-3 h-3 ${d.completed ? 'text-emerald-400' : ''}`} />
                            <span>{d.completed ? 'Completed' : 'Mark Done'}</span>
                          </button>

                          <button
                            onClick={() => onNavigateWorld('dreams')}
                            className="text-[11px] font-mono text-purple-300 hover:text-white flex items-center gap-1"
                          >
                            <span>Manage in Dreamora</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. SAVED QUOTES */}
            {(activeTab === 'all' || activeTab === 'quotes') && filteredQuotes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                    <Heart className="w-4 h-4 text-purple-400" />
                    <span>Favorite Quotes ({filteredQuotes.length})</span>
                  </h3>
                  <button
                    onClick={() => onNavigateWorld('dreams')}
                    className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Open in Dreamora</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredQuotes.map((q) => (
                    <div key={q.id} className="p-5 rounded-2xl glass-card border border-purple-500/25 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                            {q.category || 'Wisdom'}
                          </span>
                          <button
                            onClick={() => {
                              soundFx.playChime(400);
                              onRemoveQuote(q.id);
                            }}
                            className="p-1 rounded text-purple-400/60 hover:text-rose-400 transition-colors"
                            title="Remove quote"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="font-cinzel italic text-sm text-white mb-2">"{q.text}"</p>
                        <cite className="font-outfit text-xs text-purple-300/80 not-italic block text-right">— {q.author}</cite>
                      </div>
                      <div className="pt-3 border-t border-purple-900/30 flex justify-end">
                        <button
                          onClick={() => handleCopy(q.id, `"${q.text}" — ${q.author}`)}
                          className="text-[11px] font-mono text-purple-300 hover:text-white flex items-center gap-1"
                        >
                          {copiedId === q.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedId === q.id ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. CREATIVE IDEAS */}
            {(activeTab === 'all' || activeTab === 'ideas') && filteredIdeas.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                    <Compass className="w-4 h-4 text-amber-400" />
                    <span>Project Ideas ({filteredIdeas.length})</span>
                  </h3>
                  <button
                    onClick={() => onNavigateWorld('creative')}
                    className="text-xs font-mono text-amber-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Open in Creativa</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredIdeas.map((idea) => (
                    <div key={idea.id} className="p-5 rounded-2xl glass-card border border-amber-500/25 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase text-amber-300 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                            {idea.domain || idea.category}
                          </span>
                          <div className="flex items-center gap-2">
                            {idea.difficulty && (
                              <span className="text-[10px] font-mono text-amber-400/80">
                                {idea.difficulty}
                              </span>
                            )}
                            <button
                              onClick={() => {
                                soundFx.playChime(400);
                                onRemoveIdea(idea.id);
                              }}
                              className="p-1 rounded text-amber-400/60 hover:text-rose-400 transition-colors"
                              title="Remove idea"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <h4 className="font-cinzel text-base font-bold text-white mb-1">{idea.title}</h4>
                        <p className="font-outfit text-xs text-slate-300/80 mb-3">{idea.description || idea.problemStatement}</p>
                      </div>
                      <div className="pt-3 border-t border-amber-900/30 flex justify-end">
                        <button
                          onClick={() => onNavigateWorld('creative')}
                          className="text-[11px] font-mono text-amber-300 hover:text-white flex items-center gap-1"
                        >
                          <span>Explore in Creativa</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. KNOWLEDGE TOPICS */}
            {(activeTab === 'all' || activeTab === 'topics') && filteredTopics.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                    <Brain className="w-4 h-4 text-cyan-400" />
                    <span>Learning Topics ({filteredTopics.length})</span>
                  </h3>
                  <button
                    onClick={() => onNavigateWorld('knowledge')}
                    className="text-xs font-mono text-cyan-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Open in Knowlith</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTopics.map((topic) => (
                    <div key={topic.id} className="p-5 rounded-2xl glass-card border border-cyan-500/25 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                            {topic.category}
                          </span>
                          <button
                            onClick={() => {
                              soundFx.playChime(400);
                              if (onRemoveTopic) onRemoveTopic(topic.id);
                            }}
                            className="p-1 rounded text-cyan-400/60 hover:text-rose-400 transition-colors"
                            title="Remove topic"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 className="font-cinzel text-base font-bold text-white mb-1">{topic.title}</h4>
                        {topic.keyConcepts && (
                          <div className="space-y-1 mb-3">
                            {topic.keyConcepts.slice(0, 2).map((kc, idx) => (
                              <div key={idx} className="text-xs text-slate-300 font-outfit line-clamp-1">
                                • {kc}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="pt-3 border-t border-cyan-900/30 flex justify-end">
                        <button
                          onClick={() => onNavigateWorld('knowledge')}
                          className="text-[11px] font-mono text-cyan-300 hover:text-white flex items-center gap-1"
                        >
                          <span>Review in Knowlith</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. CODE CHALLENGES */}
            {(activeTab === 'all' || activeTab === 'challenges') && filteredChallenges.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span>Coding Challenges ({filteredChallenges.length})</span>
                  </h3>
                  <button
                    onClick={() => onNavigateWorld('codeverse')}
                    className="text-xs font-mono text-blue-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Open in Codeverse</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredChallenges.map((ch) => (
                    <div key={ch.id} className="p-5 rounded-2xl glass-card border border-blue-500/25 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase text-blue-300 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                            {ch.topic}
                          </span>
                          <div className="flex items-center gap-2">
                            {ch.difficulty && (
                              <span className="text-[10px] font-mono text-blue-400/80">
                                {ch.difficulty}
                              </span>
                            )}
                            <button
                              onClick={() => {
                                soundFx.playChime(400);
                                if (onRemoveChallenge) onRemoveChallenge(ch.id);
                              }}
                              className="p-1 rounded text-blue-400/60 hover:text-rose-400 transition-colors"
                              title="Remove challenge"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                        <h4 className="font-cinzel text-base font-bold text-white mb-1">{ch.title}</h4>
                        <p className="font-outfit text-xs text-slate-300/80 mb-3 line-clamp-2">{ch.description}</p>
                      </div>
                      <div className="pt-3 border-t border-blue-900/30 flex justify-end">
                        <button
                          onClick={() => onNavigateWorld('codeverse')}
                          className="text-[11px] font-mono text-blue-300 hover:text-white flex items-center gap-1"
                        >
                          <span>Solve in Codeverse</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. FUTURE CONCEPTS */}
            {(activeTab === 'all' || activeTab === 'concepts') && filteredConcepts.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-emerald-400" />
                    <span>Futuristic Blueprints ({filteredConcepts.length})</span>
                  </h3>
                  <button
                    onClick={() => onNavigateWorld('future')}
                    className="text-xs font-mono text-emerald-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Open in Futuron</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredConcepts.map((fc) => (
                    <div key={fc.id} className="p-5 rounded-2xl glass-card border border-emerald-500/25 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                            {fc.domain || fc.category}
                          </span>
                          <button
                            onClick={() => {
                              soundFx.playChime(400);
                              onRemoveConcept(fc.id);
                            }}
                            className="p-1 rounded text-emerald-400/60 hover:text-rose-400 transition-colors"
                            title="Remove concept"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 className="font-cinzel text-base font-bold text-white mb-1">{fc.title}</h4>
                        <p className="font-outfit text-xs text-slate-300/80 mb-3 line-clamp-2">{fc.description}</p>
                      </div>
                      <div className="pt-3 border-t border-emerald-900/30 flex justify-end">
                        <button
                          onClick={() => onNavigateWorld('future')}
                          className="text-[11px] font-mono text-emerald-300 hover:text-white flex items-center gap-1"
                        >
                          <span>Explore in Futuron</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. COLOR PALETTES */}
            {(activeTab === 'all' || activeTab === 'palettes') && filteredPalettes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                    <Palette className="w-4 h-4 text-pink-400" />
                    <span>Saved Color Palettes ({filteredPalettes.length})</span>
                  </h3>
                  <button
                    onClick={() => onNavigateWorld('artelia')}
                    className="text-xs font-mono text-pink-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Open in Artelia</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {filteredPalettes.map((p) => (
                    <div key={p.id} className="p-5 rounded-2xl glass-card border border-pink-500/25 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-cinzel text-sm font-bold text-white">{p.name}</span>
                          <button
                            onClick={() => {
                              soundFx.playChime(400);
                              onRemovePalette(p.id);
                            }}
                            className="p-1 rounded text-pink-400/60 hover:text-rose-400"
                            title="Remove palette"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex rounded-xl overflow-hidden h-10 border border-white/10 mb-3">
                          {p.colors && p.colors.map((c, idx) => (
                            <div 
                              key={idx} 
                              className="flex-1 cursor-pointer hover:opacity-90 transition-opacity" 
                              style={{ backgroundColor: c }} 
                              title={`Click to copy ${c}`}
                              onClick={() => handleCopy(`${p.id}-${idx}`, c)}
                            />
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {p.colors && p.colors.map((c, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleCopy(`${p.id}-${idx}`, c)}
                              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-slate-300 hover:text-white border border-white/5"
                            >
                              {copiedId === `${p.id}-${idx}` ? 'Copied!' : c}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. JOURNAL CHRONICLES */}
            {(activeTab === 'all' || activeTab === 'journal') && filteredJournal.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span>Journal Chronicles ({filteredJournal.length})</span>
                  </h3>
                  <button
                    onClick={() => onNavigateWorld('memoira')}
                    className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Open in Memoira</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredJournal.map((j) => (
                    <div key={j.id} className="p-5 rounded-2xl glass-card border border-purple-500/25 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">
                            {j.mood || 'Reflection'}
                          </span>
                          <button
                            onClick={() => {
                              soundFx.playChime(400);
                              if (onDeleteJournalEntry) onDeleteJournalEntry(j.id);
                            }}
                            className="p-1 rounded text-purple-400/60 hover:text-rose-400 transition-colors"
                            title="Delete entry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 className="font-cinzel text-base font-bold text-white mb-1">{j.title}</h4>
                        <p className="font-outfit text-xs text-slate-300/80 mb-3 line-clamp-3 whitespace-pre-line">{j.content}</p>
                      </div>
                      <div className="pt-3 border-t border-purple-900/30 flex justify-end">
                        <button
                          onClick={() => onNavigateWorld('memoira')}
                          className="text-[11px] font-mono text-purple-300 hover:text-white flex items-center gap-1"
                        >
                          <span>Edit in Memoira</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. SCIENCE DISCOVERIES */}
            {(activeTab === 'all' || activeTab === 'discoveries') && filteredDiscoveries.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                    <Telescope className="w-4 h-4 text-teal-400" />
                    <span>Saved Science Discoveries ({filteredDiscoveries.length})</span>
                  </h3>
                  <button
                    onClick={() => onNavigateWorld('explorix')}
                    className="text-xs font-mono text-teal-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Open in Explorix</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredDiscoveries.map((d) => (
                    <div key={d.id} className="p-5 rounded-2xl glass-card border border-teal-500/25 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono uppercase text-teal-300 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
                            {d.category}
                          </span>
                          <button
                            onClick={() => {
                              soundFx.playChime(400);
                              onRemoveDiscovery(d.id);
                            }}
                            className="p-1 rounded text-teal-400/60 hover:text-rose-400"
                            title="Remove discovery"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h4 className="font-cinzel text-base font-bold text-white mb-1">{d.title}</h4>
                        <p className="font-outfit text-xs text-slate-300/80 mb-3">{d.summary}</p>
                      </div>
                      <div className="pt-3 border-t border-teal-900/30 flex justify-end">
                        <button
                          onClick={() => onNavigateWorld('explorix')}
                          className="text-[11px] font-mono text-teal-300 hover:text-white flex items-center gap-1"
                        >
                          <span>Explore in Explorix</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
      </div>

    </section>
  );
};

export default MyCollection;
