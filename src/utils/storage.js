// LocalStorage persistent store for MYSTORA collections
// Pure user-saved content only, no fake placeholder items.

const STORAGE_KEY = 'mystora_v2_collection_data';

const EMPTY_STORE = {
  quotes: [],
  ideas: [],
  topics: [],
  challenges: [],
  futureConcepts: [],
  dreams: [],
  palettes: [],
  completedChallenges: [],
  journalEntries: [],
  discoveries: []
};

export const getStoredData = () => {
  if (typeof window === 'undefined') return EMPTY_STORE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(EMPTY_STORE));
      return EMPTY_STORE;
    }
    const parsed = JSON.parse(raw);
    return {
      quotes: Array.isArray(parsed.quotes) ? parsed.quotes : [],
      ideas: Array.isArray(parsed.ideas) ? parsed.ideas : [],
      topics: Array.isArray(parsed.topics) ? parsed.topics : [],
      challenges: Array.isArray(parsed.challenges) ? parsed.challenges : [],
      futureConcepts: Array.isArray(parsed.futureConcepts) ? parsed.futureConcepts : [],
      dreams: Array.isArray(parsed.dreams) ? parsed.dreams : [],
      palettes: Array.isArray(parsed.palettes) ? parsed.palettes : [],
      completedChallenges: Array.isArray(parsed.completedChallenges) ? parsed.completedChallenges : [],
      journalEntries: Array.isArray(parsed.journalEntries) ? parsed.journalEntries : [],
      discoveries: Array.isArray(parsed.discoveries) ? parsed.discoveries : []
    };
  } catch (err) {
    console.error('Failed to parse localStorage data:', err);
    return EMPTY_STORE;
  }
};

export const saveStoredData = (data) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }
};
