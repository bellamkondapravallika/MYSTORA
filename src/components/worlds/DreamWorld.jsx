import React, { useState, useMemo } from 'react';
import { 
  Sparkles, Heart, Plus, CheckCircle2, Circle, Trash2, Edit3, Copy, 
  Check, Bookmark, ArrowLeft, RefreshCw, Calendar, Tag, Target, 
  Clock, Rocket, Zap, ChevronRight, CheckSquare, Square, Award, X, Search
} from 'lucide-react';
import { GOAL_TEMPLATES, DREAMORA_QUOTES, REFLECTION_PROMPTS, GOAL_DOMAINS } from '../../data/dreamoraData';
import { soundFx } from '../../utils/audio';
import confetti from 'canvas-confetti';

class TemplatesErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Goal Templates Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-16 px-6 rounded-3xl glass-card border border-purple-500/30 max-w-lg mx-auto space-y-4">
          <Target className="w-12 h-12 text-purple-400 mx-auto" />
          <h3 className="font-cinzel text-xl text-white">Goal Templates Recovery</h3>
          <p className="text-xs text-purple-200/80 font-outfit">
            {this.state.error?.message || 'A temporary display issue occurred.'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 rounded-xl bg-purple-500 text-black text-xs font-mono font-bold"
          >
            Reload Templates
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export const DreamWorld = ({
  onBack,
  onSaveQuote,
  dreams = [],
  onAddDream,
  onEditDream,
  onToggleDream,
  onDeleteDream,
  isQuoteSaved
}) => {
  const [activeTab, setActiveTab] = useState('goals'); // 'goals' | 'templates' | 'wisdom'
  const [selectedTemplateDomain, setSelectedTemplateDomain] = useState('All');
  const [templateSearchQuery, setTemplateSearchQuery] = useState('');
  const [filterDreams, setFilterDreams] = useState('all'); // 'all' | 'active' | 'completed'

  // Quotes and Prompts Carousel state
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [copiedQuote, setCopiedQuote] = useState(false);

  // Form states
  const [formOpen, setFormOpen] = useState(false);
  const [editingDream, setEditingDream] = useState(null);
  const [dreamTitle, setDreamTitle] = useState('');
  const [dreamCategory, setDreamCategory] = useState('Career & Professional');
  const [dreamTargetDate, setDreamTargetDate] = useState('');
  const [dreamTodaysFocus, setDreamTodaysFocus] = useState('');
  const [dreamNextStep, setDreamNextStep] = useState('');
  const [dreamMilestones, setDreamMilestones] = useState([]);
  const [newMilestoneText, setNewMilestoneText] = useState('');
  const [dreamNotes, setDreamNotes] = useState('');

  const currentQuote = DREAMORA_QUOTES[currentQuoteIndex % (DREAMORA_QUOTES.length || 1)] || { text: '', author: '', category: '' };
  const currentPrompt = REFLECTION_PROMPTS[currentPromptIndex % (REFLECTION_PROMPTS.length || 1)] || { prompt: '', category: '' };

  const extractMilestoneText = (m) => {
    if (!m) return '';
    if (typeof m === 'string') return m;
    if (typeof m === 'object') return m.title || m.text || '';
    return String(m);
  };

  const handleNextQuote = () => {
    soundFx.playChime(659.25, 0.5);
    setCurrentQuoteIndex(prev => (prev + 1) % DREAMORA_QUOTES.length);
  };

  const handleNextPrompt = () => {
    soundFx.playChime(587.33, 0.5);
    setCurrentPromptIndex(prev => (prev + 1) % REFLECTION_PROMPTS.length);
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(`"${currentQuote.text}" — ${currentQuote.author}`);
    setCopiedQuote(true);
    soundFx.playChime(880, 0.4);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const handleOpenCreateForm = () => {
    setEditingDream(null);
    setDreamTitle('');
    setDreamCategory('Career & Professional');
    setDreamTargetDate('');
    setDreamTodaysFocus('');
    setDreamNextStep('');
    setDreamMilestones([]);
    setDreamNotes('');
    setFormOpen(true);
  };

  const handleOpenEditForm = (dream) => {
    setEditingDream(dream);
    setDreamTitle(dream.title);
    setDreamCategory(dream.category || 'Career & Professional');
    setDreamTargetDate(dream.targetDate || '');
    setDreamTodaysFocus(dream.todaysFocus || '');
    setDreamNextStep(dream.nextSmallStep || '');
    setDreamMilestones(dream.milestones || []);
    setDreamNotes(dream.notes || '');
    setFormOpen(true);
  };

  // Functional "Use Template" — pre-populates the goal creation form so user can customize fields before saving
  const handleUseTemplate = (tpl) => {
    setEditingDream(null);
    setDreamTitle(tpl.title || '');
    setDreamCategory(tpl.domain || 'Career & Professional');
    setDreamTargetDate(tpl.targetTimeline || tpl.timeframe || '90 Days');
    setDreamTodaysFocus(tpl.recommendedDailyHabit || tpl.todaysFocus || '');
    const firstStep = (tpl.milestones && tpl.milestones[0]) ? extractMilestoneText(tpl.milestones[0]) : '';
    setDreamNextStep(firstStep);
    const mappedMilestones = (tpl.milestones || []).map(m => {
      const text = typeof m === 'object' && m.title 
        ? `${m.title}${m.estimatedDays ? ` (~${m.estimatedDays}d)` : ''}`
        : extractMilestoneText(m);
      return { text, done: false };
    });
    setDreamMilestones(mappedMilestones);
    const initialNotes = [
      tpl.description || '',
      tpl.whyItMatters ? `Why It Matters: ${tpl.whyItMatters}` : ''
    ].filter(Boolean).join('\n\n');
    setDreamNotes(initialNotes);
    setFormOpen(true);
    soundFx.playChime(650, 0.4);
  };

  // Quick 1-click adopt with defaults
  const handleQuickAdopt = (tpl) => {
    soundFx.playSuccess();
    const mappedMilestones = (tpl.milestones || []).map(m => {
      const text = typeof m === 'object' && m.title 
        ? `${m.title}${m.estimatedDays ? ` (~${m.estimatedDays}d)` : ''}`
        : extractMilestoneText(m);
      return { text, done: false };
    });
    const firstStep = (tpl.milestones && tpl.milestones[0]) ? extractMilestoneText(tpl.milestones[0]) : '';
    onAddDream({
      title: tpl.title,
      category: tpl.domain || 'Career & Professional',
      targetDate: tpl.targetTimeline || tpl.timeframe || '90 Days',
      todaysFocus: tpl.recommendedDailyHabit || tpl.todaysFocus || '',
      nextSmallStep: firstStep,
      milestones: mappedMilestones,
      notes: [
        tpl.description || '',
        tpl.whyItMatters ? `Why It Matters: ${tpl.whyItMatters}` : ''
      ].filter(Boolean).join('\n\n')
    });
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#c084fc', '#d8b4fe', '#a855f7', '#ffffff']
    });
    setActiveTab('goals');
  };

  const handleAddMilestoneToForm = () => {
    if (!newMilestoneText.trim()) return;
    setDreamMilestones([...dreamMilestones, { text: newMilestoneText.trim(), done: false }]);
    setNewMilestoneText('');
    soundFx.playChime(700, 0.3);
  };

  const handleRemoveMilestoneFromForm = (idx) => {
    setDreamMilestones(dreamMilestones.filter((_, i) => i !== idx));
  };

  const handleToggleGoalMilestone = (dream, milestoneIndex) => {
    const updatedMilestones = (dream.milestones || []).map((m, idx) => 
      idx === milestoneIndex ? { ...m, done: !m.done } : m
    );
    const allDone = updatedMilestones.length > 0 && updatedMilestones.every(m => m.done);

    soundFx.playChime(650, 0.3);
    if (allDone && !dream.completed) {
      soundFx.playSuccess();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#c084fc', '#ffffff']
      });
    }

    onEditDream({
      ...dream,
      milestones: updatedMilestones,
      completed: allDone ? true : dream.completed
    });
  };

  const handleSaveGoal = (e) => {
    e.preventDefault();
    if (!dreamTitle.trim()) return;

    if (editingDream) {
      soundFx.playSuccess();
      onEditDream({
        ...editingDream,
        title: dreamTitle.trim(),
        category: dreamCategory,
        targetDate: dreamTargetDate || 'In the Cosmos',
        todaysFocus: dreamTodaysFocus.trim(),
        nextSmallStep: dreamNextStep.trim(),
        milestones: dreamMilestones,
        notes: dreamNotes.trim()
      });
    } else {
      soundFx.playSuccess();
      onAddDream({
        title: dreamTitle.trim(),
        category: dreamCategory,
        targetDate: dreamTargetDate || 'In the Cosmos',
        todaysFocus: dreamTodaysFocus.trim(),
        nextSmallStep: dreamNextStep.trim(),
        milestones: dreamMilestones,
        notes: dreamNotes.trim()
      });
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#c084fc', '#d8b4fe', '#a855f7', '#ffffff']
      });
    }

    setFormOpen(false);
    setActiveTab('goals');
  };

  // Safe template list
  const templateList = useMemo(() => Array.isArray(GOAL_TEMPLATES) ? GOAL_TEMPLATES : [], []);

  // Filter user goals
  const filteredGoals = useMemo(() => {
    return dreams.filter(d => {
      if (filterDreams === 'active') return !d.completed;
      if (filterDreams === 'completed') return d.completed;
      return true;
    });
  }, [dreams, filterDreams]);

  // Filter templates with domain and search
  const filteredTemplates = useMemo(() => {
    const query = templateSearchQuery.trim().toLowerCase();
    return templateList.filter(t => {
      const matchDomain = selectedTemplateDomain === 'All' || t.domain === selectedTemplateDomain;
      const matchQuery = !query || 
        (t.title && t.title.toLowerCase().includes(query)) ||
        (t.description && t.description.toLowerCase().includes(query)) ||
        (t.domain && t.domain.toLowerCase().includes(query)) ||
        (t.difficulty && t.difficulty.toLowerCase().includes(query));
      return matchDomain && matchQuery;
    });
  }, [templateList, selectedTemplateDomain, templateSearchQuery]);

  return (
    <section className="relative min-h-screen w-full pt-24 pb-20 px-4 sm:px-6 lg:px-12 select-none">
      
      {/* Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-purple-300 hover:text-white border border-purple-500/30 text-xs font-mono tracking-wider transition-all mb-6 focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Universe</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-purple-900/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-400/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Planet 1 — Dreamora Goal Sanctuary</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white text-glow">
              DREAMORA
            </h1>
            <p className="font-outfit text-purple-200/80 text-sm sm:text-base mt-1">
              50+ Structured Goal Blueprints, Sub-Task Milestones, Daily Focus, & 110 Cosmic Quotes & Prompts.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex bg-purple-950/60 p-1.5 rounded-2xl border border-purple-800/40 text-xs font-mono">
            <button
              onClick={() => { setActiveTab('goals'); soundFx.playChime(600, 0.3); }}
              className={`px-4 py-2 rounded-xl transition-all focus:outline-none ${
                activeTab === 'goals' 
                  ? 'bg-purple-500 text-black font-bold shadow-[0_0_12px_rgba(168,85,247,0.5)]' 
                  : 'text-purple-200/70 hover:text-white'
              }`}
            >
              My Goals ({dreams.length})
            </button>
            <button
              onClick={() => { setActiveTab('templates'); soundFx.playChime(650, 0.3); }}
              className={`px-4 py-2 rounded-xl transition-all focus:outline-none ${
                activeTab === 'templates' 
                  ? 'bg-purple-500 text-black font-bold shadow-[0_0_12px_rgba(168,85,247,0.5)]' 
                  : 'text-purple-200/70 hover:text-white'
              }`}
            >
              Goal Templates ({templateList.length})
            </button>
            <button
              onClick={() => { setActiveTab('wisdom'); soundFx.playChime(700, 0.3); }}
              className={`px-4 py-2 rounded-xl transition-all focus:outline-none ${
                activeTab === 'wisdom' 
                  ? 'bg-purple-500 text-black font-bold shadow-[0_0_12px_rgba(168,85,247,0.5)]' 
                  : 'text-purple-200/70 hover:text-white'
              }`}
            >
              Wisdom & Reflections
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* VIEW 1: MY ACTIVE GOALS */}
        {activeTab === 'goals' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {['all', 'active', 'completed'].map(f => (
                  <button
                    key={f}
                    onClick={() => setFilterDreams(f)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                      filterDreams === f 
                        ? 'bg-purple-500 text-black font-bold border-purple-400' 
                        : 'bg-purple-950/40 text-purple-200/70 border-purple-800/40 hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <button
                onClick={handleOpenCreateForm}
                className="px-5 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all focus:outline-none"
              >
                <Plus className="w-4 h-4" />
                <span>Create Custom Goal</span>
              </button>
            </div>

            {filteredGoals.length === 0 ? (
              <div className="text-center py-16 p-8 rounded-3xl glass-card border border-purple-900/40 space-y-4">
                <Target className="w-12 h-12 text-purple-400/40 mx-auto" />
                <h3 className="font-cinzel text-xl text-white">Your Celestial Goal Vault is Empty</h3>
                <p className="text-xs text-purple-200/70 max-w-md mx-auto font-outfit">
                  Choose from our 52 structured goal templates or create a custom ambition to start tracking daily focus and milestone progress.
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => setActiveTab('templates')}
                    className="px-5 py-2.5 rounded-xl bg-purple-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-purple-400 transition-all"
                  >
                    Browse 52 Templates
                  </button>
                  <button
                    onClick={handleOpenCreateForm}
                    className="px-5 py-2.5 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-200 text-xs uppercase tracking-wider hover:bg-purple-900 transition-all"
                  >
                    Custom Goal
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredGoals.map((dream) => {
                  const milestones = dream.milestones || [];
                  const completedMilestones = milestones.filter(m => m.done).length;
                  const progressPct = milestones.length > 0 
                    ? Math.round((completedMilestones / milestones.length) * 100) 
                    : (dream.completed ? 100 : 0);

                  return (
                    <div 
                      key={dream.id}
                      className={`p-6 rounded-3xl glass-card border transition-all text-left flex flex-col justify-between ${
                        dream.completed 
                          ? 'border-emerald-500/40 bg-emerald-950/10' 
                          : 'border-purple-500/30 hover:border-purple-400/60'
                      }`}
                    >
                      <div>
                        {/* Header Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-purple-950 text-purple-300 border border-purple-800/40">
                            {dream.category}
                          </span>
                          <span className="text-xs font-mono text-purple-300/80 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{dream.targetDate}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className={`font-cinzel text-xl font-bold mb-3 ${dream.completed ? 'text-emerald-200 line-through' : 'text-white'}`}>
                          {dream.title}
                        </h3>

                        {/* Today's Focus & Next Small Step */}
                        {(dream.todaysFocus || dream.nextSmallStep) && (
                          <div className="p-3.5 rounded-2xl bg-black/40 border border-purple-900/40 mb-4 space-y-2 text-xs">
                            {dream.todaysFocus && (
                              <div className="flex items-start gap-2">
                                <Target className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <div><span className="font-bold text-purple-300">Today's Focus: </span><span className="text-slate-200">{dream.todaysFocus}</span></div>
                              </div>
                            )}
                            {dream.nextSmallStep && (
                              <div className="flex items-start gap-2">
                                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                <div><span className="font-bold text-amber-300">Next Small Step: </span><span className="text-slate-200">{dream.nextSmallStep}</span></div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex justify-between text-[11px] font-mono text-purple-300 mb-1">
                            <span>Progress</span>
                            <span>{progressPct}% ({completedMilestones}/{milestones.length})</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-black/50 overflow-hidden border border-purple-900/30">
                            <div 
                              className={`h-full transition-all duration-500 ${dream.completed ? 'bg-emerald-400' : 'bg-gradient-to-r from-purple-500 to-cyan-400'}`}
                              style={{ width: `${progressPct}%` }}
                            />
                          </div>
                        </div>

                        {/* Sub-Task Milestones */}
                        {milestones.length > 0 && (
                          <div className="space-y-1.5 mb-4">
                            <div className="text-[10px] font-mono uppercase tracking-wider text-purple-400/80">
                              Milestone Checkpoints:
                            </div>
                            {milestones.map((m, mIdx) => (
                              <button
                                key={mIdx}
                                onClick={() => handleToggleGoalMilestone(dream, mIdx)}
                                className="w-full p-2 rounded-xl bg-purple-950/30 hover:bg-purple-950/60 border border-purple-800/30 flex items-center gap-2 text-xs text-left transition-all focus:outline-none"
                              >
                                {m.done ? (
                                  <CheckSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                ) : (
                                  <Square className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                )}
                                <span className={m.done ? 'line-through text-slate-400' : 'text-slate-200'}>
                                  {m.text}
                                </span>
                              </button>
                            ))}
                          </div>
                        )}

                        {dream.notes && (
                          <p className="text-xs text-purple-200/60 font-outfit italic mb-4">
                            {dream.notes}
                          </p>
                        )}
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
                        <button
                          onClick={() => onToggleDream(dream.id)}
                          className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl border transition-all ${
                            dream.completed 
                              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500' 
                              : 'bg-black/30 hover:bg-purple-950/50 text-slate-300 border-purple-800/40'
                          }`}
                        >
                          <CheckCircle2 className={`w-3.5 h-3.5 ${dream.completed ? 'text-emerald-400' : ''}`} />
                          <span>{dream.completed ? 'Completed' : 'Mark Completed'}</span>
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleOpenEditForm(dream)}
                            className="p-2 rounded-xl bg-black/30 hover:bg-purple-950 border border-purple-800/30 text-purple-300 text-xs transition-all"
                            title="Edit Goal"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              soundFx.playChime(350, 0.3);
                              onDeleteDream(dream.id);
                            }}
                            className="p-2 rounded-xl bg-black/30 hover:bg-rose-950 border border-purple-800/30 hover:border-rose-500 text-rose-300 text-xs transition-all"
                            title="Delete Goal"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: GOAL TEMPLATES */}
        {activeTab === 'templates' && (
          <TemplatesErrorBoundary>
            <div className="space-y-6">
              {/* Panel Header & Navigation */}
              <div className="flex items-center justify-between border-b border-purple-900/30 pb-3">
                <button
                  onClick={() => {
                    setActiveTab('goals');
                    soundFx.playChime(600, 0.3);
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-purple-200 hover:text-white text-xs font-mono transition-all focus:outline-none"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to My Goals</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('goals');
                    soundFx.playChime(600, 0.3);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-purple-300 hover:text-white text-xs font-mono focus:outline-none"
                  title="Close Templates Panel"
                >
                  <span>Close Panel</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-white flex items-center gap-2">
                    <span>Structured Goal Blueprints</span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                      {templateList.length} Total
                    </span>
                  </h3>
                  <p className="text-xs text-purple-200/80 font-outfit mt-1">
                    Proven templates across 6 domains with pre-built milestones, daily habits, and customizable parameters.
                  </p>
                </div>

              {/* Template Search Bar */}
              <div className="relative min-w-[280px]">
                <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={templateSearchQuery}
                  onChange={(e) => setTemplateSearchQuery(e.target.value)}
                  placeholder="Search 52 templates (e.g., Internship, AWS, LeetCode)..."
                  className="w-full pl-10 pr-8 py-2 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs placeholder:text-purple-400/40 focus:outline-none focus:border-purple-400 font-outfit"
                />
                {templateSearchQuery && (
                  <button
                    onClick={() => setTemplateSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400/60 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Template Domain Chips with Real Item Counts */}
            <div className="flex flex-wrap gap-2">
              {['All', ...GOAL_DOMAINS].map(d => {
                const count = d === 'All' 
                  ? templateList.length 
                  : templateList.filter(t => t.domain === d).length;
                return (
                  <button
                    key={d}
                    onClick={() => {
                      setSelectedTemplateDomain(d);
                      soundFx.playChime(650, 0.3);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium font-outfit transition-all flex items-center gap-1.5 focus:outline-none ${
                      selectedTemplateDomain === d
                        ? 'bg-purple-500 text-black font-semibold shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                        : 'bg-purple-950/40 text-purple-200/70 hover:text-white border border-purple-800/30'
                    }`}
                  >
                    <span>{d}</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-black/40 text-purple-200">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Empty State when Search/Filter has 0 items */}
            {filteredTemplates.length === 0 ? (
              <div className="text-center py-16 px-6 rounded-3xl glass-card border border-purple-900/40 space-y-4">
                <Target className="w-12 h-12 text-purple-400/40 mx-auto" />
                <h4 className="font-cinzel text-lg text-white">No Matching Goal Blueprints Found</h4>
                <p className="text-xs text-purple-200/70 max-w-md mx-auto font-outfit">
                  No templates match "{templateSearchQuery}". Try clearing search keywords or choosing a different domain.
                </p>
                <button
                  onClick={() => {
                    setTemplateSearchQuery('');
                    setSelectedTemplateDomain('All');
                  }}
                  className="px-4 py-2 rounded-xl bg-purple-950 border border-purple-500/40 text-purple-200 text-xs font-mono hover:bg-purple-900 transition-all"
                >
                  Reset Template Filters
                </button>
              </div>
            ) : (
              /* Templates Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((tpl) => (
                  <div
                    key={tpl.id}
                    className="p-6 rounded-3xl glass-card border border-purple-500/20 hover:border-purple-400/50 transition-all text-left flex flex-col justify-between group"
                  >
                    <div>
                      {/* Domain, Difficulty & Target Timeline */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-purple-950 text-purple-300 border border-purple-800/40 truncate">
                          {tpl.domain}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {tpl.difficulty && (
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                              tpl.difficulty === 'Beginner' ? 'text-emerald-300 bg-emerald-950/60 border border-emerald-800/30' :
                              tpl.difficulty === 'Intermediate' ? 'text-amber-300 bg-amber-950/60 border border-amber-800/30' :
                              'text-purple-300 bg-purple-950/60 border border-purple-800/30'
                            }`}>
                              {tpl.difficulty}
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-purple-300/80 flex items-center gap-1">
                            <Clock className="w-3 h-3 text-purple-400" />
                            <span>{tpl.targetTimeline || tpl.timeframe || '90 Days'}</span>
                          </span>
                        </div>
                      </div>

                      <h4 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                        {tpl.title}
                      </h4>

                      {tpl.description && (
                        <p className="font-outfit text-xs text-slate-300/90 leading-relaxed mb-3">
                          {tpl.description}
                        </p>
                      )}

                      {tpl.whyItMatters && (
                        <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-900/40 text-[11px] font-outfit text-purple-200/80 mb-3">
                          <span className="font-bold text-purple-300">Why It Matters: </span>
                          <span>{tpl.whyItMatters}</span>
                        </div>
                      )}

                      {/* Daily Habit */}
                      {(tpl.recommendedDailyHabit || tpl.todaysFocus) && (
                        <div className="p-3 rounded-2xl bg-black/40 border border-purple-900/40 mb-3 space-y-1 text-xs">
                          <div className="flex items-start gap-1.5">
                            <Target className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-purple-300">Daily Habit: </span>
                              <span className="text-slate-300">{tpl.recommendedDailyHabit || tpl.todaysFocus}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Milestones list */}
                      {tpl.milestones && tpl.milestones.length > 0 && (
                        <div className="space-y-1.5 mb-4">
                          <div className="text-[10px] font-mono uppercase text-purple-400/80 flex items-center justify-between">
                            <span>Milestones ({tpl.milestones.length})</span>
                          </div>
                          {tpl.milestones.slice(0, 3).map((m, idx) => {
                            const mText = typeof m === 'object' ? (m.title || m.text) : m;
                            const mDays = typeof m === 'object' && m.estimatedDays ? `~${m.estimatedDays}d` : null;
                            return (
                              <div key={idx} className="flex items-center justify-between gap-1.5 text-xs text-slate-300">
                                <div className="flex items-center gap-1.5 truncate">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                                  <span className="truncate">{mText}</span>
                                </div>
                                {mDays && (
                                  <span className="text-[10px] font-mono text-purple-300/70 bg-purple-950/80 px-1.5 py-0.2 rounded border border-purple-800/40 shrink-0">
                                    {mDays}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                          {tpl.milestones.length > 3 && (
                            <div className="text-[10px] font-mono text-purple-400/60 pl-4">
                              +{tpl.milestones.length - 3} more checkpoints...
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Actions: Use Template (Customize) & Quick Adopt */}
                    <div className="pt-4 border-t border-purple-900/30 flex items-center gap-2">
                      <button
                        onClick={() => handleUseTemplate(tpl)}
                        className="flex-1 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 focus:outline-none shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                        title="Customize title, timeline, and milestones before saving"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Use Template</span>
                      </button>
                      <button
                        onClick={() => handleQuickAdopt(tpl)}
                        className="px-3.5 py-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs font-mono transition-all flex items-center gap-1 focus:outline-none"
                        title="Quick adopt with default values"
                      >
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>Adopt</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </TemplatesErrorBoundary>
        )}

        {/* VIEW 3: WISDOM & REFLECTIONS */}
        {activeTab === 'wisdom' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Quotes Box */}
            <div className="p-8 rounded-3xl glass-panel-glow border border-purple-400/30 text-left flex flex-col justify-between shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-purple-950 text-purple-300 border border-purple-800">
                    Quote • {currentQuote.category}
                  </span>
                  <span className="text-xs font-mono text-purple-400/80">
                    #{currentQuoteIndex + 1} of {DREAMORA_QUOTES.length}
                  </span>
                </div>

                <blockquote className="font-cinzel text-xl sm:text-2xl text-white leading-relaxed mb-4">
                  "{currentQuote.text}"
                </blockquote>
                <div className="text-sm font-outfit text-purple-300 font-semibold mb-6">
                  — {currentQuote.author}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
                <button
                  onClick={handleNextQuote}
                  className="px-4 py-2 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-mono flex items-center gap-1.5 focus:outline-none"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Next Quote</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSaveQuote(currentQuote)}
                    disabled={isQuoteSaved(currentQuote.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                      isQuoteSaved(currentQuote.id)
                        ? 'bg-purple-950 text-purple-300 border-purple-500'
                        : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 border-purple-400/30'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isQuoteSaved(currentQuote.id) ? 'fill-purple-400' : ''}`} />
                    <span>{isQuoteSaved(currentQuote.id) ? 'Saved' : 'Save'}</span>
                  </button>

                  <button
                    onClick={handleCopyQuote}
                    className="p-2 rounded-xl bg-black/40 hover:bg-purple-950 border border-purple-800/40 text-purple-200 text-xs focus:outline-none"
                    title="Copy Quote"
                  >
                    {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Reflection Prompts Box */}
            <div className="p-8 rounded-3xl glass-panel-glow border border-purple-400/30 text-left flex flex-col justify-between shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-purple-950 text-purple-300 border border-purple-800">
                    Reflection Prompt • {currentPrompt.category}
                  </span>
                  <span className="text-xs font-mono text-purple-400/80">
                    #{currentPromptIndex + 1} of {REFLECTION_PROMPTS.length}
                  </span>
                </div>

                <div className="font-outfit text-lg sm:text-xl text-slate-100 leading-relaxed mb-6 font-medium">
                  {currentPrompt.prompt}
                </div>
              </div>

              <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
                <button
                  onClick={handleNextPrompt}
                  className="px-4 py-2 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-mono flex items-center gap-1.5 focus:outline-none"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Next Prompt</span>
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(currentPrompt.prompt);
                    soundFx.playChime(880, 0.4);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 text-purple-200 text-xs font-mono flex items-center gap-1.5 focus:outline-none"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Prompt</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* CREATE / EDIT GOAL MODAL FORM */}
      {formOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setFormOpen(false)}
        >
          <div 
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-950 border border-purple-400/50 p-6 sm:p-8 text-left shadow-[0_0_60px_rgba(168,85,247,0.25)] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-purple-950/50 hover:bg-purple-900/50 text-purple-400 border border-purple-500/30 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="font-cinzel text-2xl font-bold text-white mb-2">
              {editingDream ? 'Edit Celestial Goal' : (dreamTitle ? 'Customize & Adopt Goal' : 'Forge a New Goal')}
            </h2>
            <p className="font-outfit text-xs text-purple-200/70 mb-6">
              {editingDream 
                ? 'Update your milestones, timeline, or today’s focus checkpoints.' 
                : 'Personalize the title, timeline, daily habits, and milestones for this goal before saving.'}
            </p>

            <form onSubmit={handleSaveGoal} className="space-y-4 font-outfit">
              <div>
                <label className="block text-xs font-mono text-purple-300 mb-1.5">Goal Title *</label>
                <input
                  type="text"
                  required
                  value={dreamTitle}
                  onChange={(e) => setDreamTitle(e.target.value)}
                  placeholder="e.g. Master React Concurrency & WebGL"
                  className="w-full p-3 rounded-xl bg-black/60 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-purple-300 mb-1.5">Category</label>
                  <select
                    value={dreamCategory}
                    onChange={(e) => setDreamCategory(e.target.value)}
                    className="w-full p-3 rounded-xl bg-black/60 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400"
                  >
                    {GOAL_DOMAINS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-purple-300 mb-1.5">Target Horizon</label>
                  <input
                    type="text"
                    value={dreamTargetDate}
                    onChange={(e) => setDreamTargetDate(e.target.value)}
                    placeholder="e.g. 3 Months, Dec 2026"
                    className="w-full p-3 rounded-xl bg-black/60 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-purple-300 mb-1.5">Today's Focus</label>
                <input
                  type="text"
                  value={dreamTodaysFocus}
                  onChange={(e) => setDreamTodaysFocus(e.target.value)}
                  placeholder="e.g. Complete chapter 4 of concurrency tutorial"
                  className="w-full p-3 rounded-xl bg-black/60 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-purple-300 mb-1.5">Next Small Step</label>
                <input
                  type="text"
                  value={dreamNextStep}
                  onChange={(e) => setDreamNextStep(e.target.value)}
                  placeholder="e.g. Write 5 unit tests for worker thread"
                  className="w-full p-3 rounded-xl bg-black/60 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400"
                />
              </div>

              {/* Milestones Builder */}
              <div>
                <label className="block text-xs font-mono text-purple-300 mb-1.5">Sub-Task Milestones</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newMilestoneText}
                    onChange={(e) => setNewMilestoneText(e.target.value)}
                    placeholder="Add a milestone checkpoint..."
                    className="flex-1 p-2.5 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
                  />
                  <button
                    type="button"
                    onClick={handleAddMilestoneToForm}
                    className="px-4 py-2.5 rounded-xl bg-purple-500 text-black font-semibold text-xs focus:outline-none"
                  >
                    Add
                  </button>
                </div>

                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {dreamMilestones.map((m, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-black/40 border border-purple-900/40 flex items-center justify-between text-xs text-slate-200">
                      <span>• {m.text}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveMilestoneFromForm(idx)}
                        className="text-rose-400 hover:text-rose-300"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-purple-300 mb-1.5">Reflections & Notes</label>
                <textarea
                  rows={3}
                  value={dreamNotes}
                  onChange={(e) => setDreamNotes(e.target.value)}
                  placeholder="Personal observations, obstacles, or motivations..."
                  className="w-full p-3 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs resize-none focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-slate-700 text-slate-300 text-xs font-mono"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                >
                  {editingDream ? 'Update Goal' : 'Save Goal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
export default DreamWorld;
