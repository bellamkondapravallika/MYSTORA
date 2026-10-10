import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Heart, Compass, Brain, Rocket, MessageSquare, ArrowRight } from 'lucide-react';
import { MiniCrystalOrb } from './MiniCrystalOrb';
import { GUIDE_SUGGESTIONS, getGuideResponse } from '../data/guideResponses';
import { soundFx } from '../utils/audio';

export const CrystalGuide = ({ onNavigateToWorld }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: "Welcome, traveler! ✦ I'm your crystal guide.",
      time: 'Just now'
    },
    {
      sender: 'user',
      text: "Hi! What can you help me with?",
      time: 'Just now'
    },
    {
      sender: 'assistant',
      text: "I can help you explore your universe, discover ideas, and stay inspired. Where shall we begin?",
      time: 'Just now',
      showPills: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    soundFx.playChime(700);

    const newMsg = {
      sender: 'user',
      text: query,
      time: 'Just now'
    };

    setMessages(prev => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulated magical thinking response
    setTimeout(() => {
      const response = getGuideResponse(query);
      soundFx.playChime(900);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: response.text,
          actionLabel: response.actionLabel,
          targetWorld: response.targetWorld,
          time: 'Just now'
        }
      ]);
    }, 450);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  return (
    <div className="rounded-3xl glass-panel-glow border border-purple-500/30 p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-purple-900/40">
        <div>
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white text-glow">
            Crystal Guide
          </h3>
          <p className="font-outfit text-xs text-purple-300/80">
            Your Personal Guide & Cosmic Assistant
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-600/40 text-[10px] font-mono text-purple-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>LOCAL INTELLIGENCE</span>
        </div>
      </div>

      {/* Main Container: Left mini orb + Right conversation stream */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left Side: Animated Crystal Orb with dais (Faithful to reference image) */}
        <div className="md:col-span-4 flex flex-col items-center justify-center p-2">
          <div className="relative">
            <MiniCrystalOrb size={170} theme="purple" />
          </div>
          <span className="font-mono text-[10px] text-purple-300/60 tracking-wider uppercase mt-1">
            Orb Frequency 432Hz
          </span>
        </div>

        {/* Right Side: Chat Conversation stream & controls */}
        <div className="md:col-span-8 flex flex-col h-[320px] justify-between">
          
          {/* Messages list */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-2 select-text custom-scroll">
            {messages.map((m, idx) => {
              const isAssistant = m.sender === 'assistant';

              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed transition-all ${
                      isAssistant
                        ? 'bg-purple-950/70 border border-purple-500/30 text-purple-100 rounded-tl-sm shadow-[0_2px_12px_rgba(168,85,247,0.15)]'
                        : 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-tr-sm shadow-[0_2px_15px_rgba(147,51,234,0.3)]'
                    }`}
                  >
                    <p>{m.text}</p>

                    {/* Direct navigate button attached to response */}
                    {m.actionLabel && m.targetWorld && (
                      <button
                        onClick={() => {
                          soundFx.playPulse();
                          onNavigateToWorld(m.targetWorld);
                        }}
                        className="mt-2.5 px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                      >
                        <span>{m.actionLabel}</span>
                      </button>
                    )}
                  </div>

                  {/* Quick world pills attached to opening greeting */}
                  {m.showPills && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      <button
                        onClick={() => onNavigateToWorld('dreams')}
                        className="p-1.5 px-2 rounded-lg bg-purple-900/40 hover:bg-purple-800/50 border border-purple-500/40 text-purple-200 text-xs flex items-center gap-1 transition-colors"
                        title="Go to Dream World"
                      >
                        <Heart className="w-3.5 h-3.5 text-purple-400" />
                        <span>Dreams</span>
                      </button>
                      <button
                        onClick={() => onNavigateToWorld('creative')}
                        className="p-1.5 px-2 rounded-lg bg-amber-900/30 hover:bg-amber-800/40 border border-amber-500/40 text-amber-200 text-xs flex items-center gap-1 transition-colors"
                        title="Go to Creative World"
                      >
                        <Compass className="w-3.5 h-3.5 text-amber-400" />
                        <span>Ideas</span>
                      </button>
                      <button
                        onClick={() => onNavigateToWorld('knowledge')}
                        className="p-1.5 px-2 rounded-lg bg-cyan-900/30 hover:bg-cyan-800/40 border border-cyan-500/40 text-cyan-200 text-xs flex items-center gap-1 transition-colors"
                        title="Go to Knowledge World"
                      >
                        <Brain className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Knowledge</span>
                      </button>
                      <button
                        onClick={() => onNavigateToWorld('future')}
                        className="p-1.5 px-2 rounded-lg bg-emerald-900/30 hover:bg-emerald-800/40 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-1 transition-colors"
                        title="Go to Future World"
                      >
                        <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Future</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-purple-950/60 border border-purple-600/30 text-purple-300 text-xs max-w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                <span className="font-mono text-[11px]">Resonating crystal thoughts...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-2 no-scrollbar">
            {GUIDE_SUGGESTIONS.map((sug, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(sug.prompt)}
                className="shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-950/50 hover:bg-purple-900/60 border border-purple-600/30 text-purple-200 transition-colors"
              >
                {sug.label}
              </button>
            ))}
          </div>

          {/* Input Form with glowing send button */}
          <form onSubmit={handleFormSubmit} className="relative mt-1">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full px-4 py-2.5 pr-11 rounded-full bg-purple-950/70 border border-purple-500/40 text-white text-xs placeholder:text-purple-300/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white flex items-center justify-center transition-all shadow-[0_0_12px_rgba(168,85,247,0.5)] focus:outline-none"
              aria-label="Send message to crystal guide"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
};
