import React, { useState, useMemo } from 'react';
import { 
  Brain, Sparkles, RefreshCw, Code, Terminal, Database, Globe, 
  ArrowLeft, CheckCircle2, XCircle, Award, RotateCcw, ChevronRight, 
  BookOpen, Layers, Search, Filter, X, HelpCircle, FileText, Bookmark
} from 'lucide-react';
import { 
  KNOWLEDGE_TOPICS, KNOWLEDGE_CATEGORIES, TECHNICAL_GLOSSARY, 
  KNOWLEDGE_FACTS, QUIZ_QUESTIONS 
} from '../../data/knowledgeData';
import { soundFx } from '../../utils/audio';
import confetti from 'canvas-confetti';

const BATCH_SIZE = 12;

export const KnowledgeWorld = ({ 
  onBack, 
  onSaveTopic = () => {}, 
  onRemoveTopic = () => {}, 
  isTopicSaved = () => false 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [activeTopicModal, setActiveTopicModal] = useState(null);
  const [showGlossaryModal, setShowGlossaryModal] = useState(false);
  const [glossarySearch, setGlossarySearch] = useState('');
  const [activeTab, setActiveTab] = useState('topics'); // 'topics' | 'quiz' | 'glossary'
  
  // Quick facts state
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // Quiz state
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Filter topics
  const filteredTopics = useMemo(() => {
    return KNOWLEDGE_TOPICS.filter((topic) => {
      const matchCat = selectedCategory === 'All' || topic.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchQuery = !query || 
        topic.title.toLowerCase().includes(query) ||
        topic.category.toLowerCase().includes(query) ||
        (topic.keyConcepts && topic.keyConcepts.some(c => c.toLowerCase().includes(query))) ||
        (topic.takeaways && topic.takeaways.some(t => t.toLowerCase().includes(query)));
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const displayedTopics = useMemo(() => {
    return filteredTopics.slice(0, visibleCount);
  }, [filteredTopics, visibleCount]);

  // Filter glossary terms
  const filteredGlossary = useMemo(() => {
    const query = glossarySearch.trim().toLowerCase();
    if (!query) return TECHNICAL_GLOSSARY;
    return TECHNICAL_GLOSSARY.filter(item => 
      item.term.toLowerCase().includes(query) ||
      item.definition.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  }, [glossarySearch]);

  const currentFact = KNOWLEDGE_FACTS[currentFactIndex % KNOWLEDGE_FACTS.length];

  const handleNextFact = () => {
    soundFx.playChime(523.25, 0.5); // C5
    setCurrentFactIndex(prev => (prev + 1) % KNOWLEDGE_FACTS.length);
  };

  const handleSelectOption = (optIndex) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQIndex]: optIndex });
    soundFx.playChime(659.25, 0.4);
  };

  const handleSubmitAnswer = () => {
    const selected = selectedAnswers[currentQIndex];
    if (selected === undefined) return;

    setIsAnswerSubmitted(true);
    const currentQ = QUIZ_QUESTIONS[currentQIndex];

    if (selected === currentQ.correctAnswer) {
      soundFx.playSuccess();
      setScore(prev => prev + 1);
    } else {
      soundFx.playChime(350, 0.4);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQIndex(prev => prev + 1);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
      soundFx.playSuccess();
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#0284c7', '#ffffff', '#c084fc']
      });
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedAnswers({});
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section className="relative min-h-screen w-full pt-24 pb-20 px-4 sm:px-6 lg:px-12 select-none">
      
      {/* Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-cyan-300 hover:text-white border border-cyan-500/30 text-xs font-mono tracking-wider transition-all mb-6 focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Universe</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-cyan-900/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Brain className="w-3.5 h-3.5 text-cyan-400" />
              <span>Planet 3 — Knowlith Knowledge Matrix</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white text-glow-cyan">
              KNOWLITH
            </h1>
            <p className="font-outfit text-cyan-200/80 text-sm sm:text-base mt-1">
              300 Deep Learning Modules across 12 CS Domains, 60+ Technical Terms Glossary, & Interactive Quiz Arena.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-cyan-950/60 p-1.5 rounded-2xl border border-cyan-800/40 text-xs font-mono">
            <button
              onClick={() => { setActiveTab('topics'); soundFx.playChime(600, 0.3); }}
              className={`px-4 py-2 rounded-xl transition-all focus:outline-none ${
                activeTab === 'topics' 
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.5)]' 
                  : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              Topics (300)
            </button>
            <button
              onClick={() => { setActiveTab('glossary'); soundFx.playChime(650, 0.3); }}
              className={`px-4 py-2 rounded-xl transition-all focus:outline-none ${
                activeTab === 'glossary' 
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.5)]' 
                  : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              Glossary (61)
            </button>
            <button
              onClick={() => { setActiveTab('quiz'); soundFx.playChime(700, 0.3); }}
              className={`px-4 py-2 rounded-xl transition-all focus:outline-none ${
                activeTab === 'quiz' 
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(6,182,212,0.5)]' 
                  : 'text-cyan-200/70 hover:text-white'
              }`}
            >
              Quiz Arena
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10">

        {/* VIEW 1: TOPICS DIRECTORY */}
        {activeTab === 'topics' && (
          <>
            {/* Quick Fact Spotlight Banner */}
            <div className="p-6 rounded-3xl glass-panel-glow border border-cyan-400/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_0_30px_rgba(6,182,212,0.12)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400/80 mb-1">
                    Knowledge Spark • {currentFact.category}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white font-cinzel">
                    {currentFact.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/90 font-outfit mt-1">
                    {currentFact.explanation}
                  </p>
                </div>
              </div>

              <button
                onClick={handleNextFact}
                className="px-4 py-2 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-200 text-xs font-mono shrink-0 flex items-center gap-2 focus:outline-none transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Next Insight</span>
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(BATCH_SIZE);
                  }}
                  placeholder="Search 300 learning topics (e.g., Event Loop, Docker, Neural Networks, Sharding)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-cyan-500/30 text-white placeholder-cyan-200/40 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 font-outfit"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400/60 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Domain Tabs */}
              <div className="flex flex-wrap gap-2">
                {['All', ...KNOWLEDGE_CATEGORIES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(BATCH_SIZE);
                      soundFx.playChime(650, 0.4);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium font-outfit transition-all duration-200 focus:outline-none ${
                      selectedCategory === cat
                        ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                        : 'bg-cyan-950/40 text-cyan-200/70 hover:text-white hover:bg-cyan-900/40 border border-cyan-800/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Topics Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-cinzel text-xl font-bold text-white flex items-center gap-2">
                  <span>Knowledge Curriculum</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {filteredTopics.length} Topics
                  </span>
                </h3>
                <p className="text-xs font-mono text-cyan-300/70">
                  Showing {displayedTopics.length} of {filteredTopics.length}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedTopics.map((topic) => (
                  <div
                    key={topic.id}
                    onClick={() => {
                      setActiveTopicModal(topic);
                      soundFx.playChime(700, 0.3);
                    }}
                    className="cursor-pointer rounded-3xl glass-card p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.01]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                          {topic.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (isTopicSaved(topic.id)) {
                                onRemoveTopic(topic.id);
                                soundFx.playChime(400, 0.3);
                              } else {
                                onSaveTopic(topic);
                                soundFx.playSuccess();
                              }
                            }}
                            className={`p-1 rounded-lg border transition-all ${
                              isTopicSaved(topic.id)
                                ? 'bg-cyan-500/30 text-cyan-300 border-cyan-400'
                                : 'bg-black/40 text-cyan-400/60 hover:text-cyan-200 border-cyan-900/40'
                            }`}
                            title={isTopicSaved(topic.id) ? 'Remove Bookmark' : 'Save to Collection'}
                          >
                            <Bookmark className={`w-3 h-3 ${isTopicSaved(topic.id) ? 'fill-cyan-400' : ''}`} />
                          </button>
                          <span className="text-[10px] font-mono text-cyan-400/80">
                            ID: {topic.id}
                          </span>
                        </div>
                      </div>

                      <h4 className="font-cinzel text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                        {topic.title}
                      </h4>

                      <div className="space-y-1.5 mb-4">
                        {topic.keyConcepts && topic.keyConcepts.slice(0, 3).map((concept, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300/80 font-outfit">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0" />
                            <span className="line-clamp-1">{concept}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-cyan-900/30 flex items-center justify-between text-xs font-mono text-cyan-300/80">
                      <span>Click to Explore Module</span>
                      <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < filteredTopics.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => {
                      setVisibleCount(prev => prev + BATCH_SIZE);
                      soundFx.playChime(650, 0.3);
                    }}
                    className="px-8 py-3 rounded-2xl bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-200 hover:text-white border border-cyan-500/40 font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)] focus:outline-none"
                  >
                    Load More Modules ({filteredTopics.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* VIEW 2: TECHNICAL GLOSSARY (61 TERMS) */}
        {activeTab === 'glossary' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  Technical Glossary & CS Lexicon
                </h3>
                <p className="text-xs text-cyan-300/80 font-outfit mt-1">
                  61 Essential computer science, distributed systems, and software engineering terms.
                </p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={glossarySearch}
                  onChange={(e) => setGlossarySearch(e.target.value)}
                  placeholder="Filter glossary..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-cyan-500/30 text-white placeholder-cyan-200/40 text-xs focus:outline-none focus:border-cyan-400 font-outfit"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredGlossary.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl glass-card border border-cyan-500/20 hover:border-cyan-400/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-mono text-sm font-bold text-cyan-300">
                      {item.term}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400/80 border border-cyan-800/40">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-outfit leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: QUIZ ARENA */}
        {activeTab === 'quiz' && (
          <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel-glow border border-cyan-400/30 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
            {!quizFinished ? (
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-cyan-900/40 pb-4">
                  <div className="text-xs font-mono text-cyan-400/80">
                    Question {currentQIndex + 1} of {QUIZ_QUESTIONS.length}
                  </div>
                  <div className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Score: {score}
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400/80 mb-2">
                  {QUIZ_QUESTIONS[currentQIndex].category}
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-cinzel text-white mb-6">
                  {QUIZ_QUESTIONS[currentQIndex].question}
                </h3>

                <div className="space-y-3 mb-6">
                  {QUIZ_QUESTIONS[currentQIndex].options.map((opt, idx) => {
                    const isSelected = selectedAnswers[currentQIndex] === idx;
                    const isCorrect = idx === QUIZ_QUESTIONS[currentQIndex].correctAnswer;
                    let btnClass = "bg-black/40 border-cyan-800/40 text-slate-200 hover:bg-cyan-950/40 hover:border-cyan-500/40";

                    if (isAnswerSubmitted) {
                      if (isCorrect) {
                        btnClass = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                      } else if (isSelected) {
                        btnClass = "bg-rose-950/80 border-rose-500 text-rose-200";
                      }
                    } else if (isSelected) {
                      btnClass = "bg-cyan-500/20 border-cyan-400 text-white font-semibold";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswerSubmitted}
                        className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-outfit transition-all flex items-center justify-between focus:outline-none ${btnClass}`}
                      >
                        <span>{opt}</span>
                        {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                        {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {isAnswerSubmitted && (
                  <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 mb-6 text-xs text-cyan-200 font-outfit leading-relaxed">
                    <span className="font-bold text-white">Explanation: </span>
                    {QUIZ_QUESTIONS[currentQIndex].explanation}
                  </div>
                )}

                <div className="flex justify-end">
                  {!isAnswerSubmitted ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswers[currentQIndex] === undefined}
                      className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-black font-semibold text-xs uppercase tracking-wider transition-all focus:outline-none"
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 focus:outline-none"
                    >
                      <span>{currentQIndex + 1 === QUIZ_QUESTIONS.length ? 'Finish Quiz' : 'Next Question'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-cinzel text-2xl font-bold text-white mb-2">Quiz Completed!</h3>
                <p className="font-outfit text-slate-300 text-sm mb-6">
                  You scored <span className="font-bold text-cyan-300">{score}</span> out of {QUIZ_QUESTIONS.length}!
                </p>
                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 mx-auto focus:outline-none"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>
              </div>
            )}
          </div>
        )}

      </div>

      {/* TOPIC DEEP-DIVE MODAL */}
      {activeTopicModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveTopicModal(null)}
        >
          <div 
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-neutral-950 border border-cyan-400/50 p-6 sm:p-8 text-left shadow-[0_0_60px_rgba(6,182,212,0.25)] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveTopicModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-cyan-950/50 hover:bg-cyan-900/50 text-cyan-400 border border-cyan-500/30 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-between gap-4 mb-3 pr-10">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 inline-block">
                {activeTopicModal.category}
              </span>
              <button
                onClick={() => {
                  if (isTopicSaved(activeTopicModal.id)) {
                    onRemoveTopic(activeTopicModal.id);
                    soundFx.playChime(400, 0.3);
                  } else {
                    onSaveTopic(activeTopicModal);
                    soundFx.playSuccess();
                  }
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-all ${
                  isTopicSaved(activeTopicModal.id)
                    ? 'bg-cyan-500/30 text-cyan-200 border-cyan-400'
                    : 'bg-black/50 text-cyan-300 hover:text-white border-cyan-800/40'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isTopicSaved(activeTopicModal.id) ? 'fill-cyan-400' : ''}`} />
                <span>{isTopicSaved(activeTopicModal.id) ? 'Saved in Vault' : 'Save to Vault'}</span>
              </button>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-6">
              {activeTopicModal.title}
            </h2>

            {/* Key Concepts */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Key Concepts & Principles</span>
              </h4>
              <div className="space-y-2">
                {activeTopicModal.keyConcepts.map((kc, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/30 text-xs sm:text-sm text-slate-200 font-outfit">
                    {kc}
                  </div>
                ))}
              </div>
            </div>

            {/* Real World Code / Example */}
            {activeTopicModal.example && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2 flex items-center gap-1.5">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span>Practical Example / Code Snippet</span>
                </h4>
                <pre className="p-4 rounded-2xl bg-black/80 border border-cyan-800/50 text-cyan-200 font-mono text-xs overflow-x-auto leading-relaxed">
                  <code>{activeTopicModal.example}</code>
                </pre>
              </div>
            )}

            {/* Key Takeaways */}
            {activeTopicModal.takeaways && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2">
                  Key Takeaways
                </h4>
                <div className="space-y-1.5">
                  {activeTopicModal.takeaways.map((tk, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-outfit">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{tk}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Practice Question */}
            {activeTopicModal.quizQuestion && (
              <div className="p-4 rounded-2xl bg-cyan-950/50 border border-cyan-500/40">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-1 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Concept Check Question</span>
                </div>
                <p className="text-xs sm:text-sm text-white font-medium mb-3">
                  {activeTopicModal.quizQuestion}
                </p>
                <div className="text-xs text-cyan-200/90 font-outfit p-2.5 rounded-xl bg-black/40 border border-cyan-800/40">
                  <span className="font-bold text-white">Answer: </span>
                  {activeTopicModal.quizAnswer}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
export default KnowledgeWorld;
