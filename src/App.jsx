import React, { useState, useEffect } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { Navbar } from './components/Navbar';
import { AwakeningHero } from './components/AwakeningHero';
import { UniverseSystem } from './components/UniverseSystem';
import { DreamWorld } from './components/worlds/DreamWorld';
import { CreativeWorld } from './components/worlds/CreativeWorld';
import { KnowledgeWorld } from './components/worlds/KnowledgeWorld';
import { FutureWorld } from './components/worlds/FutureWorld';
import { ArteliaWorld } from './components/worlds/ArteliaWorld';
import { CodeverseWorld } from './components/worlds/CodeverseWorld';
import { MemoiraWorld } from './components/worlds/MemoiraWorld';
import { ExplorixWorld } from './components/worlds/ExplorixWorld';
import { MyCollection } from './components/MyCollection';
import { getStoredData, saveStoredData } from './utils/storage';
import { soundFx } from './utils/audio';

export function App() {
  const [currentView, setCurrentView] = useState('awakening');
  const [isSoundActive, setIsSoundActive] = useState(false); // strictly off by default
  const [collection, setCollection] = useState(() => getStoredData());
  const [recentWorld, setRecentWorld] = useState(() => {
    try {
      return localStorage.getItem('mystora_recent_world') || null;
    } catch {
      return null;
    }
  });

  // Save to localStorage on change
  useEffect(() => {
    saveStoredData(collection);
  }, [collection]);

  // Total saved items count for navbar badge
  const totalSavedCount =
    (collection.quotes?.length || 0) +
    (collection.ideas?.length || 0) +
    (collection.topics?.length || 0) +
    (collection.challenges?.length || 0) +
    (collection.futureConcepts?.length || 0) +
    (collection.dreams?.length || 0) +
    (collection.palettes?.length || 0) +
    (collection.journalEntries?.length || 0) +
    (collection.discoveries?.length || 0);

  // Student progress stats for the awakening hero
  const stats = {
    goalsCompleted: collection.dreams?.filter(d => d.completed).length || 0,
    goalsTotal: collection.dreams?.length || 0,
    challengesCompleted: collection.completedChallenges?.length || 0,
    savedCount: totalSavedCount
  };

  const handleNavigateToWorld = (worldId) => {
    soundFx.playWorldEntry(worldId);
    setRecentWorld(worldId);
    try {
      localStorage.setItem('mystora_recent_world', worldId);
    } catch {}
    setCurrentView(worldId);
  };

  // Quote handlers
  const handleSaveQuote = (quote) => {
    if (collection.quotes?.some(q => q.id === quote.id)) return;
    setCollection(prev => ({
      ...prev,
      quotes: [...(prev.quotes || []), { ...quote, savedAt: new Date().toISOString() }]
    }));
  };

  const handleRemoveQuote = (id) => {
    setCollection(prev => ({
      ...prev,
      quotes: (prev.quotes || []).filter(q => q.id !== id)
    }));
  };

  // Idea handlers
  const handleSaveIdea = (idea) => {
    if (collection.ideas?.some(i => i.id === idea.id)) return;
    setCollection(prev => ({
      ...prev,
      ideas: [...(prev.ideas || []), { ...idea, savedAt: new Date().toISOString() }]
    }));
  };

  const handleRemoveIdea = (id) => {
    setCollection(prev => ({
      ...prev,
      ideas: (prev.ideas || []).filter(i => i.id !== id)
    }));
  };

  // Knowledge Topic handlers
  const handleSaveTopic = (topic) => {
    if (collection.topics?.some(t => t.id === topic.id)) return;
    setCollection(prev => ({
      ...prev,
      topics: [...(prev.topics || []), { ...topic, savedAt: new Date().toISOString() }]
    }));
  };

  const handleRemoveTopic = (id) => {
    setCollection(prev => ({
      ...prev,
      topics: (prev.topics || []).filter(t => t.id !== id)
    }));
  };

  // Coding Challenge handlers
  const handleSaveChallenge = (challenge) => {
    if (collection.challenges?.some(c => c.id === challenge.id)) return;
    setCollection(prev => ({
      ...prev,
      challenges: [...(prev.challenges || []), { ...challenge, savedAt: new Date().toISOString() }]
    }));
  };

  const handleRemoveChallenge = (id) => {
    setCollection(prev => ({
      ...prev,
      challenges: (prev.challenges || []).filter(c => c.id !== id)
    }));
  };

  // Future concept handlers
  const handleSaveConcept = (concept) => {
    if (collection.futureConcepts?.some(c => c.id === concept.id)) return;
    setCollection(prev => ({
      ...prev,
      futureConcepts: [...(prev.futureConcepts || []), { ...concept, savedAt: new Date().toISOString() }]
    }));
  };

  const handleRemoveConcept = (id) => {
    setCollection(prev => ({
      ...prev,
      futureConcepts: (prev.futureConcepts || []).filter(c => c.id !== id)
    }));
  };

  // Dream handlers
  const handleAddDream = (dreamData) => {
    const newDream = {
      id: dreamData.id || `dream-${Date.now()}`,
      title: dreamData.title,
      category: dreamData.category || 'Career & Professional',
      completed: false,
      createdAt: new Date().toISOString(),
      targetDate: dreamData.targetDate || 'In the Cosmos',
      todaysFocus: dreamData.todaysFocus || '',
      nextSmallStep: dreamData.nextSmallStep || '',
      milestones: Array.isArray(dreamData.milestones) ? dreamData.milestones : [],
      notes: dreamData.notes || ''
    };
    setCollection(prev => ({
      ...prev,
      dreams: [newDream, ...(prev.dreams || [])]
    }));
  };

  const handleEditDream = (updatedDream) => {
    setCollection(prev => ({
      ...prev,
      dreams: (prev.dreams || []).map(d => (d.id === updatedDream.id ? updatedDream : d))
    }));
  };

  const handleToggleDream = (id) => {
    setCollection(prev => ({
      ...prev,
      dreams: (prev.dreams || []).map(d =>
        d.id === id ? { ...d, completed: !d.completed } : d
      )
    }));
  };

  const handleDeleteDream = (id) => {
    setCollection(prev => ({
      ...prev,
      dreams: prev.dreams.filter(d => d.id !== id)
    }));
  };

  // Palette handlers
  const handleSavePalette = (palette) => {
    if (collection.palettes.some(p => p.id === palette.id)) return;
    setCollection(prev => ({
      ...prev,
      palettes: [...prev.palettes, { ...palette, savedAt: new Date().toISOString() }]
    }));
  };

  const handleRemovePalette = (id) => {
    setCollection(prev => ({
      ...prev,
      palettes: prev.palettes.filter(p => p.id !== id)
    }));
  };

  // Code challenge handlers
  const handleToggleChallenge = (challengeId) => {
    setCollection(prev => {
      const exists = prev.completedChallenges.includes(challengeId);
      return {
        ...prev,
        completedChallenges: exists
          ? prev.completedChallenges.filter(id => id !== challengeId)
          : [...prev.completedChallenges, challengeId]
      };
    });
  };

  // Journal handlers
  const handleAddJournalEntry = (entry) => {
    setCollection(prev => ({
      ...prev,
      journalEntries: [entry, ...prev.journalEntries]
    }));
  };

  const handleEditJournalEntry = (updatedEntry) => {
    setCollection(prev => ({
      ...prev,
      journalEntries: prev.journalEntries.map(e => (e.id === updatedEntry.id ? updatedEntry : e))
    }));
  };

  const handleDeleteJournalEntry = (id) => {
    setCollection(prev => ({
      ...prev,
      journalEntries: prev.journalEntries.filter(j => j.id !== id)
    }));
  };

  // Discovery handlers
  const handleSaveDiscovery = (disc) => {
    if (collection.discoveries.some(d => d.id === disc.id)) return;
    setCollection(prev => ({
      ...prev,
      discoveries: [...prev.discoveries, { ...disc, savedAt: new Date().toISOString() }]
    }));
  };

  const handleRemoveDiscovery = (id) => {
    setCollection(prev => ({
      ...prev,
      discoveries: prev.discoveries.filter(d => d.id !== id)
    }));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear your celestial collection?")) {
      soundFx.playChime(350);
      setCollection({
        quotes: [],
        ideas: [],
        futureConcepts: [],
        dreams: [],
        palettes: [],
        completedChallenges: [],
        journalEntries: [],
        discoveries: []
      });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between selection:bg-purple-600 selection:text-white overflow-hidden">
      {/* Ambient Cosmic Background with Stardust */}
      <CosmicBackground />

      {/* Subtle Global Navigation Bar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        savedCount={totalSavedCount}
        isSoundActive={isSoundActive}
        setIsSoundActive={setIsSoundActive}
      />

      {/* Main Dynamic View Content */}
      <main className="relative z-10 flex-1 flex flex-col">
        {/* 1. OPENING SCREEN — THE AWAKENING */}
        {currentView === 'awakening' && (
          <AwakeningHero
            onEnterUniverse={() => {
              setCurrentView('universe');
            }}
            onQuickLaunch={(worldId) => handleNavigateToWorld(worldId)}
            recentWorld={recentWorld}
            stats={stats}
          />
        )}

        {/* 2. THE UNIVERSE — 8-PLANET SOLAR SYSTEM */}
        {currentView === 'universe' && (
          <UniverseSystem
            onSelectPlanet={(planetId) => {
              handleNavigateToWorld(planetId);
            }}
            onBackToAwakening={() => setCurrentView('awakening')}
          />
        )}

        {/* PLANET 1: DREAMORA */}
        {currentView === 'dreams' && (
          <DreamWorld
            onBack={() => setCurrentView('universe')}
            onSaveQuote={handleSaveQuote}
            isQuoteSaved={(id) => collection.quotes.some(q => q.id === id)}
            dreams={collection.dreams}
            onAddDream={handleAddDream}
            onEditDream={handleEditDream}
            onToggleDream={handleToggleDream}
            onDeleteDream={handleDeleteDream}
          />
        )}

        {/* PLANET 2: CREATIVA */}
        {currentView === 'creative' && (
          <CreativeWorld
            onBack={() => setCurrentView('universe')}
            onSaveIdea={handleSaveIdea}
            isIdeaSaved={(id) => collection.ideas.some(i => i.id === id)}
          />
        )}

        {/* PLANET 3: KNOWLITH */}
        {currentView === 'knowledge' && (
          <KnowledgeWorld
            onBack={() => setCurrentView('universe')}
            onSaveTopic={handleSaveTopic}
            onRemoveTopic={handleRemoveTopic}
            isTopicSaved={(id) => (collection.topics || []).some(t => t.id === id)}
          />
        )}

        {/* PLANET 4: FUTURON */}
        {currentView === 'future' && (
          <FutureWorld
            onBack={() => setCurrentView('universe')}
            onSaveConcept={handleSaveConcept}
            isConceptSaved={(id) => (collection.futureConcepts || []).some(c => c.id === id)}
          />
        )}

        {/* PLANET 5: ARTELIA */}
        {currentView === 'artelia' && (
          <ArteliaWorld
            onBack={() => setCurrentView('universe')}
            onSavePalette={handleSavePalette}
            isPaletteSaved={(id) => (collection.palettes || []).some(p => p.id === id)}
          />
        )}

        {/* PLANET 6: CODEVERSE */}
        {currentView === 'codeverse' && (
          <CodeverseWorld
            onBack={() => setCurrentView('universe')}
            completedChallenges={collection.completedChallenges || []}
            onToggleChallengeComplete={handleToggleChallenge}
            onSaveChallenge={handleSaveChallenge}
            onRemoveChallenge={handleRemoveChallenge}
            isChallengeSaved={(id) => (collection.challenges || []).some(c => c.id === id)}
          />
        )}

        {/* PLANET 7: MEMOIRA */}
        {currentView === 'memoira' && (
          <MemoiraWorld
            onBack={() => setCurrentView('universe')}
            journalEntries={collection.journalEntries || []}
            onAddEntry={handleAddJournalEntry}
            onEditEntry={handleEditJournalEntry}
            onDeleteEntry={handleDeleteJournalEntry}
          />
        )}

        {/* PLANET 8: EXPLORIX */}
        {currentView === 'explorix' && (
          <ExplorixWorld
            onBack={() => setCurrentView('universe')}
            onSaveDiscovery={handleSaveDiscovery}
            isDiscoverySaved={(id) => (collection.discoveries || []).some(d => d.id === id)}
          />
        )}

        {/* MY COLLECTION PAGE */}
        {currentView === 'collection' && (
          <MyCollection
            collectionData={collection}
            onRemoveQuote={handleRemoveQuote}
            onRemoveIdea={handleRemoveIdea}
            onRemoveTopic={handleRemoveTopic}
            onRemoveChallenge={handleRemoveChallenge}
            onRemoveConcept={handleRemoveConcept}
            onRemovePalette={handleRemovePalette}
            onRemoveDiscovery={handleRemoveDiscovery}
            onDeleteDream={handleDeleteDream}
            onToggleDream={handleToggleDream}
            onDeleteJournalEntry={handleDeleteJournalEntry}
            onNavigateWorld={(viewId) => setCurrentView(viewId)}
            onClearAll={handleClearAll}
          />
        )}
      </main>
    </div>
  );
}

export default App;
