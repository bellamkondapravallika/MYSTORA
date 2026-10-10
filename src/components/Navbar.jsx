import React, { useState } from 'react';
import { Volume2, VolumeX, Bookmark, Menu, X, Sparkles, Orbit } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Navbar = ({
  currentView,
  setCurrentView,
  savedCount = 0,
  isSoundActive,
  setIsSoundActive,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [volume, setVolume] = useState(40);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const handleSoundToggle = () => {
    const newState = soundFx.toggleSound();
    setIsSoundActive(newState);
  };

  const handleVolumeChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setVolume(val);
    soundFx.setVolume(val / 100);
  };

  const navItems = [
    { id: 'awakening', label: 'Home', icon: Sparkles },
    { id: 'universe', label: 'Universe', icon: Orbit },
    { id: 'collection', label: 'My Collection', icon: Bookmark, count: savedCount },
  ];

  const handleNavClick = (viewId) => {
    soundFx.playChime(750);
    setCurrentView(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-2 rounded-full glass-panel border border-purple-500/20 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('awakening')}
          className="flex items-center gap-2.5 group focus:outline-none rounded-full px-2 py-1 transition-transform active:scale-95"
          aria-label="MYSTORA Home"
        >
          <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-purple-900 to-indigo-800 border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_20px_rgba(192,132,252,0.8)] transition-all">
            <span className="text-purple-200 text-xs font-bold group-hover:rotate-45 transition-transform duration-300">✦</span>
          </div>
          <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.25em] text-white group-hover:text-purple-200 transition-colors drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">
            MYSTORA
          </span>
        </button>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 focus:outline-none ${
                  isActive
                    ? 'text-white bg-purple-600/30 border border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                    : 'text-purple-200/70 hover:text-white hover:bg-purple-950/40 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-purple-300' : 'text-purple-400/70'}`} />
                <span>{item.label}</span>
                {item.count !== undefined && item.count > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-purple-500/80 text-white">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons: Audio Toggle & Volume Slider */}
        <div className="flex items-center gap-2 relative">
          
          {/* Audio Controls */}
          <div
            className="flex items-center gap-1.5"
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)}
          >
            <button
              onClick={handleSoundToggle}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all focus:outline-none ${
                isSoundActive
                  ? 'bg-purple-500/20 text-purple-200 border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-black/30 text-purple-300/60 border-purple-900/40 hover:text-purple-200 hover:border-purple-600/40'
              }`}
              title={isSoundActive ? 'Mute ambient sound' : 'Unmute celestial ambient sound'}
              aria-label={isSoundActive ? 'Mute ambient sound' : 'Unmute celestial ambient sound'}
            >
              {isSoundActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-purple-300" />
                  <span className="hidden sm:inline text-[10px] font-mono tracking-wider">SOUND ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-purple-400/60" />
                  <span className="hidden sm:inline text-[10px] font-mono tracking-wider">AUDIO OFF</span>
                </>
              )}
            </button>

            {/* Collapsible Volume Slider */}
            {isSoundActive && (
              <div className="hidden sm:flex items-center px-2 py-1 rounded-full bg-purple-950/60 border border-purple-800/40">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-purple-900 rounded-lg appearance-none cursor-pointer accent-purple-400"
                  title={`Volume: ${volume}%`}
                  aria-label="Volume slider"
                />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-purple-200 hover:text-white bg-purple-950/40 border border-purple-700/30 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 py-4 rounded-2xl glass-panel-glow border border-purple-500/30 flex flex-col gap-2 animate-in fade-in duration-200">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-purple-600/30 text-white border border-purple-400/40'
                    : 'text-purple-200/80 hover:bg-purple-900/30 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-purple-300" />
                  <span>{item.label}</span>
                </div>
                {item.count !== undefined && item.count > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500 text-white font-bold">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
