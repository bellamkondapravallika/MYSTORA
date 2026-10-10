import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Sparkles, Plus, Trash2, Edit3, ArrowLeft, Calendar, 
  Tag, Search, CheckCircle2, Award, Filter, Download, Clock, 
  FileText, Smile, Heart, Target, Zap, Compass, X, ChevronRight, RefreshCw, Copy
} from 'lucide-react';
import { 
  REFLECTION_PROMPTS, PROMPT_CATEGORIES, STARTER_ENTRIES, 
  MOODS, ENTRY_CATEGORIES 
} from '../../data/memoiraData';
import { soundFx } from '../../utils/audio';

export const MemoiraWorld = ({
  onBack,
  journalEntries = [],
  onAddEntry,
  onEditEntry,
  onDeleteEntry
}) => {
  const [activeTab, setActiveTab] = useState('journal'); // 'journal' | 'prompts' | 'timeline'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedPromptCategory, setSelectedPromptCategory] = useState('All');
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  // Form states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [entryTitle, setEntryTitle] = useState('');
  const [entryCategory, setEntryCategory] = useState('Learning Breakthrough');
  const [entryMood, setEntryMood] = useState('Inspired');
  const [entryDate, setEntryDate] = useState(new Date().toISOString().split('T')[0]);
  const [entryContent, setEntryContent] = useState('');
  const [entryTagsString, setEntryTagsString] = useState('React, Cosmos');

  // Combined active entries (if empty, display STARTER_ENTRIES)
  const effectiveEntries = useMemo(() => {
    return journalEntries.length > 0 ? journalEntries : STARTER_ENTRIES;
  }, [journalEntries]);

  // Filtered entries
  const filteredEntries = useMemo(() => {
    return effectiveEntries.filter(entry => {
      const matchTag = selectedTag === 'All' || entry.category === selectedTag || (entry.tags && entry.tags.includes(selectedTag));
      const q = searchQuery.trim().toLowerCase();
      const matchQuery = !q || 
        entry.title.toLowerCase().includes(q) ||
        entry.content.toLowerCase().includes(q) ||
        (entry.tags && entry.tags.some(t => t.toLowerCase().includes(q)));
      return matchTag && matchQuery;
    });
  }, [effectiveEntries, selectedTag, searchQuery]);

  // Filtered prompts
  const filteredPrompts = useMemo(() => {
    if (selectedPromptCategory === 'All') return REFLECTION_PROMPTS;
    return REFLECTION_PROMPTS.filter(p => p.category === selectedPromptCategory);
  }, [selectedPromptCategory]);

  const currentPrompt = filteredPrompts[activePromptIndex % (filteredPrompts.length || 1)] || REFLECTION_PROMPTS[0];

  const handleNextPrompt = () => {
    soundFx.playChime(650, 0.4);
    setActivePromptIndex(prev => (prev + 1) % (filteredPrompts.length || 1));
  };

  const handleOpenCreate = () => {
    setEditingEntry(null);
    setEntryTitle('');
    setEntryCategory('Learning Breakthrough');
    setEntryMood('Inspired');
    setEntryDate(new Date().toISOString().split('T')[0]);
    setEntryContent('');
    setEntryTagsString('Reflection');
    setIsFormOpen(true);
  };

  const handleOpenCreateWithPrompt = (promptText, promptCat) => {
    setEditingEntry(null);
    setEntryTitle(`Reflection: ${promptText.slice(0, 45)}...`);
    setEntryCategory(promptCat || 'Cosmic Reflection');
    setEntryMood('Reflective');
    setEntryDate(new Date().toISOString().split('T')[0]);
    setEntryContent(`Prompt: ${promptText}\n\nMy Thoughts:\n`);
    setEntryTagsString('Prompt, Reflection');
    setIsFormOpen(true);
    soundFx.playChime(700, 0.3);
  };

  const handleOpenEdit = (entry) => {
    setEditingEntry(entry);
    setEntryTitle(entry.title);
    setEntryCategory(entry.category || 'Learning Breakthrough');
    setEntryMood(entry.mood || 'Inspired');
    setEntryDate(entry.date || new Date().toISOString().split('T')[0]);
    setEntryContent(entry.content || '');
    setEntryTagsString(entry.tags ? entry.tags.join(', ') : '');
    setIsFormOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!entryTitle.trim() || !entryContent.trim()) return;

    soundFx.playSuccess();
    const tagsArray = entryTagsString
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    if (editingEntry) {
      onEditEntry({
        ...editingEntry,
        title: entryTitle.trim(),
        category: entryCategory,
        mood: entryMood,
        date: entryDate,
        content: entryContent.trim(),
        tags: tagsArray
      });
    } else {
      onAddEntry({
        title: entryTitle.trim(),
        category: entryCategory,
        mood: entryMood,
        date: entryDate,
        content: entryContent.trim(),
        tags: tagsArray
      });
    }

    setIsFormOpen(false);
  };

  // Word count and reading time
  const wordCount = entryContent.trim() ? entryContent.trim().split(/\s+/).length : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Export to Markdown
  const handleExportMarkdown = () => {
    soundFx.playSuccess();
    const markdownContent = effectiveEntries.map(e => `
# ${e.title}
*Date: ${e.date} | Category: ${e.category} | Mood: ${e.mood || 'N/A'}*
Tags: ${(e.tags || []).join(', ')}

${e.content}

---
`).join('\n');

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `mystora_reflections_${new Date().toISOString().split('T')[0]}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Export to Plain Text
  const handleExportText = () => {
    soundFx.playSuccess();
    const textContent = effectiveEntries.map(e => `
TITLE: ${e.title}
DATE: ${e.date} | CATEGORY: ${e.category} | MOOD: ${e.mood || 'N/A'}
TAGS: ${(e.tags || []).join(', ')}

${e.content}

================================================================================
`).join('\n');

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `mystora_reflections_${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-screen w-full pt-24 pb-20 px-4 sm:px-6 lg:px-12 select-none">
      
      {/* Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-purple-200 hover:text-white border border-purple-500/30 text-xs font-mono tracking-wider transition-all mb-6 focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Universe</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-purple-900/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-400/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-2">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Planet 7 — Memoira Thought Sanctuary</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white text-glow">
              MEMOIRA
            </h1>
            <p className="font-outfit text-purple-200/80 text-sm sm:text-base mt-1">
              Reflective Journaling with 108 Deep Prompts, Timeline Chronicle, Mood Tracking, & Markdown Export.
            </p>
          </div>

          {/* Action Tabs & Exports */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex bg-purple-950/60 p-1.5 rounded-2xl border border-purple-800/40 text-xs font-mono">
              {[
                { id: 'journal', label: 'Journal' },
                { id: 'timeline', label: 'Timeline' },
                { id: 'prompts', label: '108 Prompts' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => { setActiveTab(t.id); soundFx.playChime(600, 0.3); }}
                  className={`px-3.5 py-1.5 rounded-xl transition-all focus:outline-none ${
                    activeTab === t.id
                      ? 'bg-purple-500 text-black font-bold shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                      : 'text-purple-200/70 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleExportMarkdown}
              className="px-3.5 py-2 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-mono flex items-center gap-1.5 transition-all focus:outline-none"
              title="Download Markdown"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export .MD</span>
            </button>

            <button
              onClick={handleOpenCreate}
              className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all focus:outline-none"
            >
              <Plus className="w-4 h-4" />
              <span>New Entry</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">

        {/* VIEW 1: JOURNAL CARDS VIEW */}
        {activeTab === 'journal' && (
          <div className="space-y-6">
            
            {/* Daily Prompt Banner */}
            <div className="p-6 rounded-3xl glass-panel-glow border border-purple-400/30 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">
                  Featured Prompt • {currentPrompt.category}
                </span>
                <p className="text-sm sm:text-base font-outfit text-white font-medium">
                  "{currentPrompt.prompt}"
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleNextPrompt}
                  className="px-3 py-1.5 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-800 text-purple-200 text-xs font-mono flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Cycle</span>
                </button>
                <button
                  onClick={() => handleOpenCreateWithPrompt(currentPrompt.prompt, currentPrompt.category)}
                  className="px-4 py-1.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-1"
                >
                  <span>Journal This</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Search & Tag Filter */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search journal entries by title, content, or tags..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-purple-500/30 text-white placeholder-purple-200/40 text-xs sm:text-sm focus:outline-none focus:border-purple-400 font-outfit"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {['All', ...ENTRY_CATEGORIES].map(tag => (
                  <button
                    key={tag}
                    onClick={() => { setSelectedTag(tag); soundFx.playChime(650, 0.3); }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium font-outfit transition-all focus:outline-none ${
                      selectedTag === tag
                        ? 'bg-purple-500 text-black font-semibold shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                        : 'bg-purple-950/40 text-purple-200/70 hover:text-white border border-purple-800/30'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Entries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEntries.map((entry) => {
                const words = entry.content ? entry.content.split(/\s+/).length : 0;
                return (
                  <div
                    key={entry.id}
                    className="p-6 rounded-3xl glass-card border border-purple-500/20 hover:border-purple-400/50 transition-all text-left flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-purple-950 text-purple-300 border border-purple-800/40">
                          {entry.category}
                        </span>
                        <div className="flex items-center gap-2 text-xs font-mono text-purple-300/80">
                          {entry.mood && (
                            <span className="px-2 py-0.5 rounded bg-black/40 border border-purple-900/40 text-[10px]">
                              {entry.mood}
                            </span>
                          )}
                          <span>{entry.date}</span>
                        </div>
                      </div>

                      <h4 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                        {entry.title}
                      </h4>

                      <p className="font-outfit text-xs text-slate-300/80 leading-relaxed mb-4 line-clamp-4 whitespace-pre-line">
                        {entry.content}
                      </p>

                      {/* Tags */}
                      {entry.tags && entry.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {entry.tags.map((t, tIdx) => (
                            <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/40 text-purple-300/70 border border-purple-950">
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>{words} words • ~{Math.max(1, Math.ceil(words / 200))}m read</span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(entry)}
                          className="p-1.5 rounded-lg bg-black/30 hover:bg-purple-950 border border-purple-800/30 text-purple-300 text-xs transition-all"
                          title="Edit Entry"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            soundFx.playChime(350, 0.3);
                            onDeleteEntry(entry.id);
                          }}
                          className="p-1.5 rounded-lg bg-black/30 hover:bg-rose-950 border border-purple-800/30 text-rose-300 text-xs transition-all"
                          title="Delete Entry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* VIEW 2: TIMELINE CHRONICLE */}
        {activeTab === 'timeline' && (
          <div className="max-w-3xl mx-auto space-y-8 text-left relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-purple-900/60">
            {effectiveEntries.map((entry) => (
              <div key={entry.id} className="relative pl-12 group">
                <div className="absolute left-2.5 top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-black group-hover:scale-125 transition-transform" />
                <div className="p-6 rounded-3xl glass-card border border-purple-500/20 hover:border-purple-400/50 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-purple-400">{entry.date}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                      {entry.category}
                    </span>
                  </div>
                  <h4 className="font-cinzel text-lg font-bold text-white mb-2">{entry.title}</h4>
                  <p className="font-outfit text-xs text-slate-300/80 leading-relaxed whitespace-pre-line mb-3">
                    {entry.content}
                  </p>
                  {entry.tags && (
                    <div className="flex flex-wrap gap-1">
                      {entry.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-purple-300/70">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 3: 108 PROMPTS COMPENDIUM */}
        {activeTab === 'prompts' && (
          <div className="space-y-6 text-left">
            <div className="flex flex-wrap gap-2">
              {PROMPT_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setSelectedPromptCategory(cat); soundFx.playChime(650, 0.3); }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium font-outfit transition-all focus:outline-none ${
                    selectedPromptCategory === cat
                      ? 'bg-purple-500 text-black font-semibold shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                      : 'bg-purple-950/40 text-purple-200/70 hover:text-white border border-purple-800/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map((p) => (
                <div
                  key={p.id}
                  className="p-6 rounded-3xl glass-card border border-purple-500/20 hover:border-purple-400/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-purple-950 text-purple-300 border border-purple-800/40 mb-3 inline-block">
                      {p.category}
                    </span>
                    <p className="font-outfit text-sm text-slate-200 font-medium leading-relaxed mb-4">
                      "{p.prompt}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(p.prompt);
                        soundFx.playChime(880, 0.3);
                      }}
                      className="text-xs font-mono text-purple-300/80 hover:text-white flex items-center gap-1 focus:outline-none"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </button>

                    <button
                      onClick={() => handleOpenCreateWithPrompt(p.prompt, p.category)}
                      className="px-3.5 py-1.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-1 focus:outline-none"
                    >
                      <span>Journal</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* CREATE / EDIT MODAL FORM */}
      {isFormOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsFormOpen(false)}
        >
          <div 
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-950 border border-purple-400/50 p-6 sm:p-8 text-left shadow-[0_0_60px_rgba(168,85,247,0.25)] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-purple-950/50 hover:bg-purple-900/50 text-purple-400 border border-purple-500/30 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="font-cinzel text-2xl font-bold text-white mb-6">
              {editingEntry ? 'Edit Reflection Entry' : 'New Journal Reflection'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 font-outfit">
              <div>
                <label className="block text-xs font-mono text-purple-300 mb-1.5">Title *</label>
                <input
                  type="text"
                  required
                  value={entryTitle}
                  onChange={(e) => setEntryTitle(e.target.value)}
                  placeholder="e.g. Diagnosing the Event Loop Mystery"
                  className="w-full p-3 rounded-xl bg-black/60 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-purple-300 mb-1.5">Category</label>
                  <select
                    value={entryCategory}
                    onChange={(e) => setEntryCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
                  >
                    {ENTRY_CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-purple-300 mb-1.5">Mood</label>
                  <select
                    value={entryMood}
                    onChange={(e) => setEntryMood(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
                  >
                    {MOODS.map(m => (
                      <option key={m.name} value={m.name}>{m.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-purple-300 mb-1.5">Date</label>
                  <input
                    type="date"
                    value={entryDate}
                    onChange={(e) => setEntryDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-mono text-purple-300">Content *</label>
                  <span className="text-[11px] font-mono text-purple-400/80">
                    {wordCount} words • ~{readingTime}m read
                  </span>
                </div>
                <textarea
                  rows={8}
                  required
                  value={entryContent}
                  onChange={(e) => setEntryContent(e.target.value)}
                  placeholder="Pour your thoughts, technical breakthroughs, mental models, or gratitude here..."
                  className="w-full p-4 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs sm:text-sm resize-none focus:outline-none focus:border-purple-400 leading-relaxed font-outfit"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-purple-300 mb-1.5">Tags (Comma-separated)</label>
                <input
                  type="text"
                  value={entryTagsString}
                  onChange={(e) => setEntryTagsString(e.target.value)}
                  placeholder="e.g. JavaScript, Performance, Focus, Stoicism"
                  className="w-full p-2.5 rounded-xl bg-black/60 border border-purple-500/30 text-white text-xs focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-black/40 hover:bg-black/60 border border-slate-700 text-slate-300 text-xs font-mono"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                >
                  {editingEntry ? 'Update Entry' : 'Save Reflection'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
export default MemoiraWorld;
