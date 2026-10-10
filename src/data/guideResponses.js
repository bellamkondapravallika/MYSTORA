// Intelligent local conversational responses for the Crystal Guide

export const GUIDE_SUGGESTIONS = [
  { label: '✨ Explore Dreams', prompt: 'Tell me about the Dream World', worldTarget: 'dreams' },
  { label: '💡 Creative Ideas', prompt: 'Give me a creative project idea', worldTarget: 'creative' },
  { label: '📖 Test Knowledge', prompt: 'What is the Knowledge World?', worldTarget: 'knowledge' },
  { label: '🚀 Future Concepts', prompt: 'Show me futuristic inventions', worldTarget: 'future' },
  { label: '💎 My Collection', prompt: 'How does My Collection work?', worldTarget: 'collection' },
  { label: '🔮 What is Mystora?', prompt: 'What is Mystora?' }
];

export const getGuideResponse = (userMessage, onNavigate) => {
  const msg = userMessage.toLowerCase().trim();

  if (msg.includes('dream') || msg.includes('aspiration') || msg.includes('goal')) {
    return {
      text: "The Dream World is your realm of inner vision, inspiration, and aspiration. You can generate cosmic quotes, manifest your goals, and mark them as achieved with celebratory starlight.",
      actionLabel: "Enter Dream World →",
      targetWorld: "dreams"
    };
  }

  if (msg.includes('creativ') || msg.includes('idea') || msg.includes('project idea') || msg.includes('spark')) {
    return {
      text: "The Creative World generates original project concepts across AI, design, sustainability, and productivity. You can filter ideas, copy descriptions, or save them directly to your personal collection.",
      actionLabel: "Enter Creative World →",
      targetWorld: "creative"
    };
  }

  if (msg.includes('knowledg') || msg.includes('fact') || msg.includes('learn') || msg.includes('quiz') || msg.includes('science')) {
    return {
      text: "The Knowledge World holds fascinating facts of quantum reality, deep cosmological phenomena, and advanced computing. You can also test your intellect with the interactive Cosmos & Tech Quiz!",
      actionLabel: "Enter Knowledge World →",
      targetWorld: "knowledge"
    };
  }

  if (msg.includes('future') || msg.includes('concept') || msg.includes('tech') || msg.includes('built') || msg.includes('inventions')) {
    return {
      text: "The Future World reveals cutting-edge concepts like the Smart Skill Gap Analyzer, Travel Planner Agent, and Neural Dream Catcher—complete with system architectures and problem-solution breakdowns.",
      actionLabel: "Enter Future World →",
      targetWorld: "future"
    };
  }

  if (msg.includes('collection') || msg.includes('save') || msg.includes('bookmark')) {
    return {
      text: "Your Collection safely stores your favorite quotes, project ideas, futuristic blueprints, and personal dreams. It uses your browser's local memory, so your items remain saved across page visits.",
      actionLabel: "Open My Collection →",
      targetWorld: "collection"
    };
  }

  if (msg.includes('mystora') || msg.includes('who are you') || msg.includes('what is this') || msg.includes('about')) {
    return {
      text: "MYSTORA is an experimental digital sanctuary suspended at the intersection of imagination, science, and futuristic technology. Here, every great thought begins as a spark within the crystal core.",
      actionLabel: "Explore the Universe →",
      targetWorld: "universe"
    };
  }

  if (msg.includes('sound') || msg.includes('audio') || msg.includes('music')) {
    return {
      text: "You can toggle soothing synthesized ambient soundscapes using the sound icon in the top navigation bar. It is completely synthesized in real-time using the Web Audio API!",
      actionLabel: null
    };
  }

  if (msg.includes('help') || msg.includes('guide') || msg.includes('hi') || msg.includes('hello')) {
    return {
      text: "Greetings, traveler! ✦ I can guide you through our four mystical worlds: Dreams, Creativity, Knowledge, and the Future. Click any suggestion chip below or ask me about any world!",
      actionLabel: null
    };
  }

  // Default response
  return {
    text: "A fascinating thought. The crystal resonates with your curiosity. Try exploring one of our four celestial worlds or ask me about Dreams, Ideas, Knowledge, or Future technology!",
    actionLabel: "View Universe Worlds →",
    targetWorld: "universe"
  };
};
