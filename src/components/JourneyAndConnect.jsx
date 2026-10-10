import React, { useState } from 'react';
import { Mail, Sparkles, BookOpen, Send, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

// Custom Crisp Brand SVGs for Social Connections
const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const JourneyAndConnect = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  const journeyEntries = [
    {
      date: 'May 18, 2025',
      title: 'Keep Building',
      excerpt: 'Small steps every day lead to something extraordinary.',
      fullText: 'True breakthroughs do not emerge from sudden lightning strikes of genius, but from relentless iterative devotion in the quiet dark. When the world is asleep, the mind explores dimensions of code, light, and form that reshape reality.',
      theme: 'Persist Through The Void'
    },
    {
      date: 'June 04, 2025',
      title: 'The Architecture of Wonder',
      excerpt: 'Technology without beauty is merely mechanics; with imagination, it becomes magic.',
      fullText: 'Every pixel is a photon of human intention. When we fuse engineering rigor with ethereal visual poetry, digital interfaces cease being tools and become portals into enchanted futures.',
      theme: 'Aesthetic Transcendence'
    },
    {
      date: 'July 22, 2025',
      title: 'Resonance and Mastery',
      excerpt: 'Mastery is not the absence of mistakes, but the deepening of curiosity.',
      fullText: 'The crystal does not fear pressure; pressure is how its crystalline lattice aligns into diamond purity. Embrace complex challenges as the sacred kiln that purifies your creative craft.',
      theme: 'Inner Evolution'
    }
  ];

  const currentEntry = journeyEntries[activeSlide];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactEmail.trim() || !contactMsg.trim()) return;

    soundFx.playSuccess();
    setContactSent(true);
    setContactEmail('');
    setContactMsg('');
    setTimeout(() => setContactSent(false), 4000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-12 select-none">
      
      {/* 2-Column Grid: My Journey & Connect (Faithful to bottom half of reference image) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT CARD: MY JOURNEY (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl glass-card border border-purple-500/25 p-6 sm:p-7 flex flex-col justify-between hover:border-purple-400/50 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-purple-900/40">
              <div>
                <h3 className="font-cinzel text-xl font-bold text-white text-glow">
                  My Journey
                </h3>
                <p className="font-outfit text-xs text-purple-300/80">
                  Thoughts. Lessons. Growth.
                </p>
              </div>

              <span className="text-[11px] font-mono text-purple-400/80 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40">
                {currentEntry.date}
              </span>
            </div>

            {/* Journey Cosmic Landscape Artwork & Story */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-4">
              {/* Graphic visual illustration of purple mountain landscape beneath moon */}
              <div className="sm:col-span-5 relative h-36 rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900 via-indigo-950 to-black border border-purple-500/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(168,85,247,0.3)]">
                {/* Luminous Moon */}
                <div className="absolute top-3 left-6 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-200 to-white shadow-[0_0_15px_#ffffff] opacity-90" />
                {/* Mountain ridges silhouette */}
                <svg viewBox="0 0 200 120" className="absolute bottom-0 w-full h-24 text-purple-950/80 fill-current">
                  <path d="M0,120 L30,60 L70,90 L120,40 L160,80 L200,50 L200,120 Z" fill="#1b0833" />
                  <path d="M0,120 L50,80 L90,110 L140,70 L180,95 L200,85 L200,120 Z" fill="#0d041a" />
                </svg>
                {/* Glowing river through canyon */}
                <div className="absolute bottom-0 w-4 h-16 bg-gradient-to-t from-purple-400 to-transparent blur-[3px]" />
                <span className="relative z-10 text-[10px] font-mono text-purple-200 uppercase tracking-widest px-2 py-0.5 rounded bg-black/50 border border-purple-500/30">
                  {currentEntry.theme}
                </span>
              </div>

              {/* Text content */}
              <div className="sm:col-span-7 flex flex-col justify-between">
                <h4 className="font-cinzel text-lg font-bold text-white mb-1.5">
                  {currentEntry.title}
                </h4>
                <p className="font-outfit text-xs sm:text-sm text-purple-200/80 leading-relaxed mb-4">
                  "{currentEntry.excerpt}"
                </p>
                <div>
                  <button
                    onClick={() => {
                      soundFx.playChime(750);
                      setIsModalOpen(true);
                    }}
                    className="px-4 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-purple-200 text-xs font-mono border border-purple-500/30 hover:border-purple-400 transition-colors focus:outline-none"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex items-center justify-center gap-2 pt-2 border-t border-purple-900/30">
            {journeyEntries.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  soundFx.playChime(650);
                  setActiveSlide(idx);
                }}
                className={`h-2 rounded-full transition-all focus:outline-none ${
                  activeSlide === idx
                    ? 'w-6 bg-purple-400 shadow-[0_0_8px_#c084fc]'
                    : 'w-2 bg-purple-950 border border-purple-800 hover:bg-purple-800'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT CARD: CONNECT (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl glass-card border border-purple-500/25 p-6 sm:p-7 flex flex-col justify-between hover:border-purple-400/50 transition-all duration-300">
          <div>
            <div className="text-center pb-3 mb-4 border-b border-purple-900/40">
              <h3 className="font-cinzel text-xl font-bold text-white text-glow">
                Connect
              </h3>
              <p className="font-outfit text-xs text-purple-300/80">
                Let's build the future together.
              </p>
            </div>

            {/* Social Icons row (Matching reference design) */}
            <div className="flex items-center justify-center gap-3 my-6">
              {[
                { icon: GithubIcon, label: 'GitHub', href: 'https://github.com' },
                { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: TwitterIcon, label: 'X / Twitter', href: 'https://x.com' },
                { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
                { icon: Mail, label: 'Email', href: 'mailto:mystora@celestial.dev' }
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playChime(800)}
                    className="w-10 h-10 rounded-full bg-purple-950/60 hover:bg-purple-800/80 border border-purple-500/30 hover:border-purple-400/80 text-purple-200 hover:text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] transform hover:scale-110"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Quick transmission message */}
            <form onSubmit={handleContactSubmit} className="space-y-2 mt-4">
              <input
                type="email"
                placeholder="your.email@universe.com"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
                className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-500/30 text-white text-xs placeholder:text-purple-400/40 focus:outline-none focus:border-purple-400"
              />
              <div className="relative">
                <input
                  type="text"
                  placeholder="Send a message to the cosmos..."
                  value={contactMsg}
                  onChange={(e) => setContactMsg(e.target.value)}
                  required
                  className="w-full px-3 py-2 pr-9 rounded-xl bg-purple-950/50 border border-purple-500/30 text-white text-xs placeholder:text-purple-400/40 focus:outline-none focus:border-purple-400"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
              {contactSent && (
                <div className="text-[11px] font-mono text-emerald-300 flex items-center gap-1 mt-1 justify-center animate-in fade-in">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Signal transmitted into the cosmos!</span>
                </div>
              )}
            </form>
          </div>

          <p className="font-cinzel italic text-xs text-center text-purple-300/80 pt-3 border-t border-purple-900/30">
            "Let's create, innovate, and inspire the world."
          </p>
        </div>

      </div>

      {/* FOOTER: Dream. Build. Inspire. (From reference image) */}
      <footer className="mt-16 pt-8 border-t border-purple-900/30 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
          <span className="text-purple-300 text-xs">✦</span>
          <p className="font-cinzel text-sm sm:text-base tracking-[0.3em] uppercase text-purple-200/90 font-medium">
            Dream. Build. Inspire.
          </p>
          <span className="text-purple-300 text-xs">✦</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
        </div>
        <p className="font-mono text-[11px] text-purple-400/50 tracking-wider">
          © {new Date().getFullYear()} MYSTORA — Enter the Unknown • Crafted for visionary creators
        </p>
      </footer>

      {/* Read More Journal Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg rounded-3xl glass-panel-glow border border-purple-400/50 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-3 border-b border-purple-900/40 mb-4">
              <div>
                <span className="text-xs font-mono text-purple-400">{currentEntry.date}</span>
                <h3 className="font-cinzel text-xl font-bold text-white">{currentEntry.title}</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-purple-300 hover:text-white p-2"
              >
                ✕
              </button>
            </div>

            <p className="font-outfit text-sm text-purple-100/90 leading-relaxed mb-6">
              {currentEntry.fullText}
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold"
              >
                Close Chronicle
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
