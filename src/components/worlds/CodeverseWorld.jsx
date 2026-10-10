import React, { useState, useMemo } from 'react';
import { 
  Code2, ArrowLeft, CheckCircle2, XCircle, Award, RotateCcw, Copy, 
  Check, Play, Lightbulb, Eye, EyeOff, Terminal, HelpCircle, 
  Search, Filter, ChevronRight, Clock, Zap, BookOpen, Layers, Bookmark
} from 'lucide-react';
import { CODEVERSE_EXERCISES, CODEVERSE_TOPICS } from '../../data/codeverseData';
import { soundFx } from '../../utils/audio';
import confetti from 'canvas-confetti';

export const CodeverseWorld = ({ 
  onBack, 
  completedChallenges = [], 
  onToggleChallengeComplete,
  onSaveChallenge = () => {},
  onRemoveChallenge = () => {},
  isChallengeSaved = () => false
}) => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
  
  // Selected code language: 'javascript' | 'python' | 'java'
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  // Filtered exercises
  const filtered = useMemo(() => {
    return CODEVERSE_EXERCISES.filter(c => {
      const matchTopic = selectedTopic === 'All' || c.topic === selectedTopic;
      const matchDiff = selectedDifficulty === 'All' || c.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
      const q = searchQuery.trim().toLowerCase();
      const matchQuery = !q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);
      return matchTopic && matchDiff && matchQuery;
    });
  }, [selectedTopic, selectedDifficulty, searchQuery]);

  const currentExercise = filtered[activeExerciseIndex % (filtered.length || 1)] || CODEVERSE_EXERCISES[0];

  // Code editor & evaluation state
  const [userCode, setUserCode] = useState(currentExercise.starterCode);
  const [testResults, setTestResults] = useState(null);
  const [currentHintLevel, setCurrentHintLevel] = useState(0); // 0 = none, 1 = hint1, 2 = hint2, 3 = hint3
  const [showSolution, setShowSolution] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Synchronize editor code when currentExercise or language changes
  const handleSelectExercise = (idx) => {
    setActiveExerciseIndex(idx);
    const ex = filtered[idx];
    if (selectedLanguage === 'javascript') {
      setUserCode(ex.starterCode);
    } else if (selectedLanguage === 'python') {
      setUserCode(ex.pythonStarter || `# Python 3\n# Solution for ${ex.title}\n`);
    } else {
      setUserCode(ex.javaStarter || `// Java 17\n// Solution for ${ex.title}\n`);
    }
    setTestResults(null);
    setCurrentHintLevel(0);
    setShowSolution(false);
    soundFx.playChime(600, 0.4);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    if (lang === 'javascript') {
      setUserCode(currentExercise.starterCode);
    } else if (lang === 'python') {
      setUserCode(currentExercise.pythonStarter || `# Python 3\n`);
    } else {
      setUserCode(currentExercise.javaStarter || `// Java 17\n`);
    }
    setTestResults(null);
    setShowSolution(false);
    soundFx.playChime(650, 0.3);
  };

  const handleResetCode = () => {
    if (selectedLanguage === 'javascript') {
      setUserCode(currentExercise.starterCode);
    } else if (selectedLanguage === 'python') {
      setUserCode(currentExercise.pythonStarter);
    } else {
      setUserCode(currentExercise.javaStarter);
    }
    setTestResults(null);
    soundFx.playChime(500, 0.4);
  };

  // Safe browser JavaScript test runner
  const handleRunCode = () => {
    soundFx.playChime(700, 0.5);

    if (selectedLanguage !== 'javascript') {
      setTestResults({
        success: false,
        isNonJs: true,
        message: `In-browser code execution is currently available for JavaScript. Python and Java solutions are provided below with full complexity analysis!`
      });
      return;
    }

    try {
      // Find function name
      const fnMatch = userCode.match(/function\s+([a-zA-Z0-9_$]+)/);
      if (!fnMatch) {
        setTestResults({
          success: false,
          error: "Could not find a valid function declaration (e.g. 'function twoSum(...)')."
        });
        soundFx.playChime(350, 0.4);
        return;
      }

      const fnName = fnMatch[1];
      const createFn = new Function(`
        ${userCode}
        if (typeof ${fnName} !== 'function') {
          throw new Error("${fnName} is not defined as a function");
        }
        return ${fnName};
      `);

      const compiledFn = createFn();
      const results = [];
      let allPassed = true;

      for (let i = 0; i < currentExercise.testCases.length; i++) {
        const tc = currentExercise.testCases[i];
        let actual;
        try {
          actual = compiledFn(...tc.input);
        } catch (execErr) {
          allPassed = false;
          results.push({
            testIndex: i + 1,
            input: JSON.stringify(tc.input),
            expected: JSON.stringify(tc.expected),
            actual: `Error: ${execErr.message}`,
            passed: false
          });
          continue;
        }

        const isMatch = JSON.stringify(actual) === JSON.stringify(tc.expected);
        if (!isMatch) allPassed = false;

        results.push({
          testIndex: i + 1,
          input: JSON.stringify(tc.input),
          expected: JSON.stringify(tc.expected),
          actual: JSON.stringify(actual),
          passed: isMatch
        });
      }

      setTestResults({
        success: true,
        allPassed,
        tests: results
      });

      if (allPassed) {
        soundFx.playSuccess();
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#60a5fa', '#93c5fd', '#ffffff']
        });
        if (!completedChallenges.includes(currentExercise.id)) {
          onToggleChallengeComplete(currentExercise.id);
        }
      } else {
        soundFx.playChime(350, 0.4);
      }
    } catch (err) {
      setTestResults({
        success: false,
        error: `Syntax or Compilation Error: ${err.message}`
      });
      soundFx.playChime(350, 0.4);
    }
  };

  const isCompleted = completedChallenges.includes(currentExercise.id);

  return (
    <section className="relative min-h-screen w-full pt-24 pb-20 px-4 sm:px-6 lg:px-12 select-none">
      
      {/* Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-blue-300 hover:text-white border border-blue-500/30 text-xs font-mono tracking-wider transition-all mb-6 focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Universe</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-blue-900/40 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Planet 6 — Codeverse Interactive Lab</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white text-glow-blue">
              CODEVERSE
            </h1>
            <p className="font-outfit text-blue-200/80 text-sm sm:text-base mt-1">
              50 Algorithm & Data Structure Challenges across 12 Core CS Topics with Live Browser Test Runner.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-blue-300/80 bg-blue-950/50 p-2 rounded-xl border border-blue-800/40">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Solved: {completedChallenges.length} / {CODEVERSE_EXERCISES.length}</span>
          </div>
        </div>

        {/* Filters Bar: Search, Difficulty, Topics */}
        <div className="mt-6 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-blue-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setActiveExerciseIndex(0);
                }}
                placeholder="Search challenges by title or keyword (e.g., Two Sum, Tree, Graph, Dynamic)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-blue-500/30 text-white placeholder-blue-200/40 text-xs sm:text-sm focus:outline-none focus:border-blue-400 font-outfit"
              />
            </div>

            {/* Difficulty Tabs */}
            <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-blue-500/30 shrink-0">
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map(diff => (
                <button
                  key={diff}
                  onClick={() => {
                    setSelectedDifficulty(diff);
                    setActiveExerciseIndex(0);
                    soundFx.playChime(600, 0.3);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all focus:outline-none ${
                    selectedDifficulty === diff
                      ? 'bg-blue-500 text-black font-bold shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                      : 'text-blue-200/70 hover:text-white'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Topics Chips */}
          <div className="flex flex-wrap gap-2">
            {['All', ...CODEVERSE_TOPICS].map(topic => (
              <button
                key={topic}
                onClick={() => {
                  setSelectedTopic(topic);
                  setActiveExerciseIndex(0);
                  soundFx.playChime(650, 0.3);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium font-outfit transition-all focus:outline-none ${
                  selectedTopic === topic
                    ? 'bg-blue-500 text-black font-semibold shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'bg-blue-950/40 text-blue-200/70 hover:text-white hover:bg-blue-900/40 border border-blue-800/30'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Lab Workspace */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Challenge Selector & Problem Statement (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Challenge Selector List */}
          <div className="p-4 rounded-3xl glass-card border border-blue-500/20 max-h-56 overflow-y-auto space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-blue-400/80 mb-2 px-1">
              Select Challenge ({filtered.length})
            </div>
            {filtered.map((ex, idx) => {
              const isSelected = ex.id === currentExercise.id;
              const isDone = completedChallenges.includes(ex.id);
              return (
                <button
                  key={ex.id}
                  onClick={() => handleSelectExercise(idx)}
                  className={`w-full p-2.5 rounded-xl text-left text-xs font-outfit transition-all flex items-center justify-between focus:outline-none ${
                    isSelected 
                      ? 'bg-blue-500/20 border border-blue-400 text-white font-semibold' 
                      : 'hover:bg-blue-950/40 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    {isDone ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    )}
                    <span className="truncate">{ex.title}</span>
                  </div>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 ${
                    ex.difficulty === 'Beginner' ? 'text-emerald-300 bg-emerald-950/60' :
                    ex.difficulty === 'Intermediate' ? 'text-amber-300 bg-amber-950/60' :
                    'text-purple-300 bg-purple-950/60'
                  }`}>
                    {ex.difficulty}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Current Problem Card */}
          <div className="p-6 rounded-3xl glass-panel-glow border border-blue-400/30 text-left shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-blue-950 text-blue-300 border border-blue-800/40">
                {currentExercise.topic}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (isChallengeSaved(currentExercise.id)) {
                      onRemoveChallenge(currentExercise.id);
                      soundFx.playChime(400, 0.3);
                    } else {
                      onSaveChallenge(currentExercise);
                      soundFx.playSuccess();
                    }
                  }}
                  className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-xl transition-all border ${
                    isChallengeSaved(currentExercise.id)
                      ? 'bg-blue-500/30 text-blue-200 border-blue-400'
                      : 'bg-black/40 text-blue-300 border-blue-800/40 hover:text-white'
                  }`}
                  title={isChallengeSaved(currentExercise.id) ? 'Remove Bookmark' : 'Save Challenge to Collection'}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isChallengeSaved(currentExercise.id) ? 'fill-blue-400' : ''}`} />
                  <span>{isChallengeSaved(currentExercise.id) ? 'Saved' : 'Save'}</span>
                </button>

                <button
                  onClick={() => onToggleChallengeComplete(currentExercise.id)}
                  className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-xl transition-all border ${
                    isCompleted 
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500' 
                      : 'bg-black/40 text-slate-300 border-blue-800/40 hover:text-white'
                  }`}
                >
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-400' : ''}`} />
                  <span>{isCompleted ? 'Solved' : 'Mark Solved'}</span>
                </button>
              </div>
            </div>

            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
              {currentExercise.title}
            </h2>

            <p className="font-outfit text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
              {currentExercise.description}
            </p>

            {/* Complexity badges */}
            {(currentExercise.timeComplexity || currentExercise.spaceComplexity) && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-blue-900/40 mb-4 text-xs font-mono">
                <div className="text-blue-300">
                  <span className="text-slate-400 mr-1">Time:</span>
                  {currentExercise.timeComplexity}
                </div>
                <div className="text-blue-300">
                  <span className="text-slate-400 mr-1">Space:</span>
                  {currentExercise.spaceComplexity}
                </div>
              </div>
            )}

            {/* Test Case Inputs Preview */}
            <div className="mb-4">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400/80 mb-2">
                Example Cases
              </div>
              <div className="space-y-2">
                {currentExercise.testCases.slice(0, 2).map((tc, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-black/60 border border-blue-950 text-xs font-mono">
                    <div className="text-slate-400">Input: <span className="text-blue-200">{JSON.stringify(tc.input)}</span></div>
                    <div className="text-slate-400">Expected: <span className="text-emerald-300">{JSON.stringify(tc.expected)}</span></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progressive Hints Accordion */}
            <div className="pt-4 border-t border-blue-900/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-amber-300 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span>Progressive Hints</span>
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3].map(level => (
                    <button
                      key={level}
                      onClick={() => {
                        setCurrentHintLevel(currentHintLevel === level ? 0 : level);
                        soundFx.playChime(600 + level * 50, 0.3);
                      }}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono border transition-all ${
                        currentHintLevel >= level
                          ? 'bg-amber-500/30 text-amber-200 border-amber-400'
                          : 'bg-black/30 text-slate-400 border-slate-700 hover:text-white'
                      }`}
                    >
                      Hint {level}
                    </button>
                  ))}
                </div>
              </div>

              {currentHintLevel >= 1 && currentExercise.hint1 && (
                <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs font-outfit text-amber-200">
                  <span className="font-bold">Hint 1: </span>{currentExercise.hint1}
                </div>
              )}
              {currentHintLevel >= 2 && currentExercise.hint2 && (
                <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs font-outfit text-amber-200">
                  <span className="font-bold">Hint 2: </span>{currentExercise.hint2}
                </div>
              )}
              {currentHintLevel >= 3 && currentExercise.hint3 && (
                <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs font-outfit text-amber-200">
                  <span className="font-bold">Hint 3: </span>{currentExercise.hint3}
                </div>
              )}
            </div>

            {/* Solution Toggle */}
            <div className="mt-4 pt-4 border-t border-blue-900/30 flex items-center justify-between">
              <button
                onClick={() => {
                  setShowSolution(!showSolution);
                  soundFx.playChime(650, 0.3);
                }}
                className="text-xs font-mono text-purple-300 hover:text-purple-200 flex items-center gap-1.5 focus:outline-none"
              >
                {showSolution ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showSolution ? 'Hide Solution' : 'Reveal Solution'}</span>
              </button>
            </div>

            {showSolution && (
              <div className="mt-3 p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/40 text-xs font-mono">
                <div className="text-purple-300 font-bold mb-1">
                  {selectedLanguage.toUpperCase()} Reference Solution:
                </div>
                <pre className="overflow-x-auto text-purple-200 text-[11px] leading-relaxed">
                  <code>
                    {selectedLanguage === 'javascript' ? currentExercise.solution :
                     selectedLanguage === 'python' ? currentExercise.pythonSolution :
                     currentExercise.javaSolution || currentExercise.solution}
                  </code>
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Code Editor & Live Test Runner (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Editor Header Bar */}
          <div className="p-4 rounded-3xl glass-card border border-blue-500/30 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="font-mono text-xs text-white font-semibold">Interactive Editor</span>
              
              {/* Language Selector */}
              <div className="flex bg-black/60 p-1 rounded-xl border border-blue-800/40 ml-2">
                {[
                  { id: 'javascript', label: 'JS (Run)' },
                  { id: 'python', label: 'Python' },
                  { id: 'java', label: 'Java' }
                ].map(l => (
                  <button
                    key={l.id}
                    onClick={() => handleLanguageChange(l.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all focus:outline-none ${
                      selectedLanguage === l.id 
                        ? 'bg-blue-500 text-black font-bold shadow-[0_0_8px_rgba(59,130,246,0.5)]' 
                        : 'text-blue-200/70 hover:text-white'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleResetCode}
                className="p-2 rounded-xl bg-black/40 hover:bg-blue-950 border border-blue-800/40 text-blue-300 text-xs transition-all focus:outline-none"
                title="Reset Code"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(userCode);
                  setCopiedCode(true);
                  soundFx.playChime(880, 0.3);
                  setTimeout(() => setCopiedCode(false), 2000);
                }}
                className="p-2 rounded-xl bg-black/40 hover:bg-blue-950 border border-blue-800/40 text-blue-300 text-xs transition-all focus:outline-none"
                title="Copy Code"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={handleRunCode}
                className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all active:scale-95 focus:outline-none"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>Run Code</span>
              </button>
            </div>
          </div>

          {/* Code Textarea Editor */}
          <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-black/90">
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              spellCheck="false"
              className="w-full h-80 p-5 font-mono text-xs sm:text-sm bg-transparent text-blue-100 resize-none focus:outline-none leading-relaxed selection:bg-blue-500/30"
              style={{ tabSize: 2 }}
            />
          </div>

          {/* Test Runner Output Terminal */}
          {testResults && (
            <div className="p-6 rounded-3xl glass-panel-glow border border-blue-400/40 text-left space-y-3">
              <div className="flex items-center justify-between border-b border-blue-900/40 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" />
                  <span>Execution Output</span>
                </span>
                {testResults.success && (
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    testResults.allPassed 
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500' 
                      : 'bg-rose-950 text-rose-300 border border-rose-500'
                  }`}>
                    {testResults.allPassed ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'}
                  </span>
                )}
              </div>

              {testResults.isNonJs ? (
                <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-200 font-outfit">
                  {testResults.message}
                </div>
              ) : testResults.error ? (
                <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-xs font-mono text-rose-200">
                  {testResults.error}
                </div>
              ) : (
                <div className="space-y-2">
                  {testResults.tests.map((t) => (
                    <div
                      key={t.testIndex}
                      className={`p-3 rounded-2xl border text-xs font-mono flex items-start justify-between gap-3 ${
                        t.passed 
                          ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200' 
                          : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                      }`}
                    >
                      <div>
                        <div className="font-bold flex items-center gap-1.5 mb-1">
                          {t.passed ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                          )}
                          <span>Test Case #{t.testIndex}</span>
                        </div>
                        <div className="text-[11px] text-slate-300">Input: {t.input}</div>
                        <div className="text-[11px] text-slate-300">Expected: {t.expected}</div>
                        <div className="text-[11px]">Actual: {t.actual}</div>
                      </div>

                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        t.passed ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                      }`}>
                        {t.passed ? 'PASS' : 'FAIL'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>

    </section>
  );
};
export default CodeverseWorld;
