import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, Play, Pause, Compass, Heart, Brain, Rocket, Palette, Code2, BookOpen, Telescope, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const PLANETS_META = [
  {
    id: 'dreams',
    num: 1,
    name: 'DREAMORA',
    theme: 'Goal Setting & Growth',
    colorName: 'Violet',
    primary: '#c084fc',
    glow: '#a855f7',
    dark: '#2e1065',
    radius: 17,
    orbitA: 110,
    orbitB: 75,
    speed: 0.0075,
    hasRings: false,
    icon: Heart,
    tagline: 'Set deadlines, track personal milestones, and stay inspired.',
  },
  {
    id: 'creative',
    num: 2,
    name: 'CREATIVA',
    theme: 'Project Idea Lab',
    colorName: 'Gold & Orange',
    primary: '#fbbf24',
    glow: '#f59e0b',
    dark: '#451a03',
    radius: 23,
    orbitA: 155,
    orbitB: 105,
    speed: 0.0058,
    hasRings: false,
    icon: Compass,
    tagline: 'Discover practical student and builder project blueprints.',
  },
  {
    id: 'knowledge',
    num: 3,
    name: 'KNOWLITH',
    theme: 'Technical Learning Lab',
    colorName: 'Cyan & Blue',
    primary: '#38bdf8',
    glow: '#06b6d4',
    dark: '#082f49',
    radius: 16,
    orbitA: 200,
    orbitB: 135,
    speed: 0.0046,
    hasRings: false,
    icon: Brain,
    tagline: 'Master CS foundations, JavaScript, React, and test your knowledge.',
  },
  {
    id: 'future',
    num: 4,
    name: 'FUTURON',
    theme: 'Future & Innovation Lab',
    colorName: 'Emerald & Violet',
    primary: '#34d399',
    glow: '#10b981',
    dark: '#022c22',
    radius: 21,
    orbitA: 245,
    orbitB: 165,
    speed: 0.0036,
    hasRings: true,
    ringColor: 'rgba(52, 211, 153, 0.45)',
    icon: Rocket,
    tagline: 'Explore frontier architectures and speculative future technologies.',
  },
  {
    id: 'artelia',
    num: 5,
    name: 'ARTELIA',
    theme: 'Visual Design Studio',
    colorName: 'Magenta & Pink',
    primary: '#f43f5e',
    glow: '#ec4899',
    dark: '#4c0519',
    radius: 25,
    orbitA: 295,
    orbitB: 200,
    speed: 0.0029,
    hasRings: true,
    ringColor: 'rgba(244, 63, 94, 0.5)',
    icon: Palette,
    tagline: 'Harmonic color palettes, live UI previews, and design prompts.',
  },
  {
    id: 'codeverse',
    num: 6,
    name: 'CODEVERSE',
    theme: 'Interactive Coding Lab',
    colorName: 'Electric Blue',
    primary: '#60a5fa',
    glow: '#3b82f6',
    dark: '#172554',
    radius: 18,
    orbitA: 345,
    orbitB: 235,
    speed: 0.0023,
    hasRings: false,
    icon: Code2,
    tagline: 'Practice algorithms and execute code in live automated test runners.',
  },
  {
    id: 'memoira',
    num: 7,
    name: 'MEMOIRA',
    theme: 'Personal Learning Journal',
    colorName: 'Silver & Lavender',
    primary: '#e2e8f0',
    glow: '#c084fc',
    dark: '#1e293b',
    radius: 15,
    orbitA: 395,
    orbitB: 270,
    speed: 0.0018,
    hasRings: false,
    icon: BookOpen,
    tagline: 'Record milestones, debug victories, and daily learning reflections.',
  },
  {
    id: 'explorix',
    num: 8,
    name: 'EXPLORIX',
    theme: 'Discovery & Science Lab',
    colorName: 'Turquoise',
    primary: '#2dd4bf',
    glow: '#14b8a6',
    dark: '#042f2e',
    radius: 19,
    orbitA: 445,
    orbitB: 305,
    speed: 0.0014,
    hasRings: false,
    icon: Telescope,
    tagline: 'Explore mind-bending scientific phenomena and quantum paradoxes.',
  }
];

export const UniverseSystem = ({ onSelectPlanet, onBackToAwakening }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [isOrbiting, setIsOrbiting] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [transitioningPlanet, setTransitioningPlanet] = useState(null);

  const planetsStateRef = useRef(
    PLANETS_META.map((p, idx) => ({
      ...p,
      angle: (idx * (Math.PI * 2)) / PLANETS_META.length + (idx * 0.4),
      x: 0,
      y: 0,
      currentScale: 1,
      targetScale: 1,
      trail: []
    }))
  );

  const mousePosRef = useRef({ x: -9999, y: -9999 });

  const handlePlanetClick = useCallback((planet) => {
    soundFx.playWorldEntry(planet.id);
    setTransitioningPlanet(planet);
    setTimeout(() => {
      onSelectPlanet(planet.id);
    }, 450);
  }, [onSelectPlanet]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let time = 0;

    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) {
        animId = requestAnimationFrame(render);
        return;
      }

      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;

      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      const orbitScale = Math.min(1, Math.max(0.48, width / 1100));
      const sunPulse = 0.9 + Math.sin(time * 1.5) * 0.1;
      const sunRadius = (width < 640 ? 32 : 46) * sunPulse;

      // 1. Central Ambient Nebula Flare
      const sunAura = ctx.createRadialGradient(
        centerX, centerY, sunRadius * 0.2,
        centerX, centerY, sunRadius * 4.2
      );
      sunAura.addColorStop(0, 'rgba(192, 132, 252, 0.45)');
      sunAura.addColorStop(0.35, 'rgba(147, 51, 234, 0.2)');
      sunAura.addColorStop(0.7, 'rgba(88, 28, 135, 0.06)');
      sunAura.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = sunAura;
      ctx.beginPath();
      ctx.arc(centerX, centerY, sunRadius * 4.2, 0, Math.PI * 2);
      ctx.fill();

      let currentHover = null;

      // Update Planet Positions
      planetsStateRef.current.forEach((p) => {
        if (isOrbiting) {
          p.angle += p.speed * speedMultiplier;
        }

        const a = p.orbitA * orbitScale;
        const b = p.orbitB * orbitScale;

        p.x = centerX + Math.cos(p.angle) * a;
        p.y = centerY + Math.sin(p.angle) * b;

        const distToMouse = Math.hypot(p.x - mousePosRef.current.x, p.y - mousePosRef.current.y);
        const hitRadius = (p.radius + 14) * orbitScale;

        if (distToMouse < hitRadius) {
          currentHover = p;
        }

        const isThisHovered = currentHover?.id === p.id;
        p.targetScale = isThisHovered ? 1.3 : 1;
        p.currentScale += (p.targetScale - p.currentScale) * 0.15;

        // Particle trail
        if (time % 0.08 < 0.02) {
          p.trail.unshift({ x: p.x, y: p.y, alpha: 0.6, radius: Math.max(1, p.radius * 0.2) });
          if (p.trail.length > 8) p.trail.pop();
        }
      });

      if (currentHover?.id !== hoveredPlanet?.id) {
        setHoveredPlanet(currentHover);
      }

      // 2. Draw Elliptical Orbit Tracks
      planetsStateRef.current.forEach((p) => {
        const a = p.orbitA * orbitScale;
        const b = p.orbitB * orbitScale;
        const isHighlighted = hoveredPlanet?.id === p.id;

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, a, b, 0, 0, Math.PI * 2);
        
        if (isHighlighted) {
          ctx.strokeStyle = p.glow;
          ctx.lineWidth = 2.0;
          ctx.shadowColor = p.primary;
          ctx.shadowBlur = 16;
          ctx.setLineDash([8, 4]);
        } else {
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.16)';
          ctx.lineWidth = 1.0;
          ctx.shadowBlur = 0;
          ctx.setLineDash([3, 5]);
        }
        ctx.stroke();
        ctx.restore();
      });

      // 3. Draw Central Crystal Sun
      ctx.save();
      const sunGrad = ctx.createRadialGradient(
        centerX - sunRadius * 0.25, centerY - sunRadius * 0.25, 4,
        centerX, centerY, sunRadius
      );
      sunGrad.addColorStop(0, '#ffffff');
      sunGrad.addColorStop(0.2, '#f3e8ff');
      sunGrad.addColorStop(0.5, '#c084fc');
      sunGrad.addColorStop(0.85, '#7e22ce');
      sunGrad.addColorStop(1, '#2e1065');

      ctx.fillStyle = sunGrad;
      ctx.shadowColor = '#c084fc';
      ctx.shadowBlur = 32;
      ctx.beginPath();
      ctx.arc(centerX, centerY, sunRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.2;
      ctx.stroke();

      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.1);
      ctx.strokeStyle = 'rgba(233, 213, 255, 0.4)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 8; i++) {
        ctx.rotate((Math.PI * 2) / 8);
        ctx.beginPath();
        ctx.moveTo(0, sunRadius * 0.9);
        ctx.lineTo(0, sunRadius * 1.35);
        ctx.stroke();
      }
      ctx.restore();

      // 4. Draw The Eight Luminous Planets
      planetsStateRef.current.forEach((p) => {
        const rad = p.radius * orbitScale * p.currentScale;
        const isHov = hoveredPlanet?.id === p.id;

        // Particle trail
        p.trail.forEach((tr) => {
          tr.alpha -= 0.02;
          if (tr.alpha > 0) {
            ctx.save();
            ctx.globalAlpha = tr.alpha * 0.5;
            ctx.fillStyle = p.primary;
            ctx.beginPath();
            ctx.arc(tr.x, tr.y, tr.radius * orbitScale, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        });

        ctx.save();

        // Atmospheric aura glow
        const atmoGlow = ctx.createRadialGradient(p.x, p.y, rad * 0.5, p.x, p.y, rad * 2.2);
        atmoGlow.addColorStop(0, `${p.glow}${isHov ? '99' : '44'}`);
        atmoGlow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = atmoGlow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Planetary Rings: Back half
        if (p.hasRings) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(-Math.PI / 6);
          ctx.beginPath();
          ctx.ellipse(0, 0, rad * 2.1, rad * 0.65, 0, Math.PI, Math.PI * 2);
          ctx.strokeStyle = p.ringColor || p.glow;
          ctx.lineWidth = 2.4;
          ctx.shadowColor = p.primary;
          ctx.shadowBlur = 8;
          ctx.stroke();
          ctx.restore();
        }

        // 3D Spherical Light Gradient (Facing Sun at center)
        const lightAngle = Math.atan2(p.y - centerY, p.x - centerX);
        const lightOffsetDist = rad * 0.35;
        const lightX = p.x - Math.cos(lightAngle) * lightOffsetDist;
        const lightY = p.y - Math.sin(lightAngle) * lightOffsetDist;

        const sphereGrad = ctx.createRadialGradient(
          lightX, lightY, rad * 0.05,
          p.x, p.y, rad
        );
        sphereGrad.addColorStop(0, '#ffffff');
        sphereGrad.addColorStop(0.25, p.primary);
        sphereGrad.addColorStop(0.7, p.glow);
        sphereGrad.addColorStop(1, p.dark);

        ctx.fillStyle = sphereGrad;
        ctx.shadowColor = p.glow;
        ctx.shadowBlur = isHov ? 24 : 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Planetary Rings: Front half
        if (p.hasRings) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(-Math.PI / 6);
          ctx.beginPath();
          ctx.ellipse(0, 0, rad * 2.1, rad * 0.65, 0, 0, Math.PI);
          ctx.strokeStyle = p.ringColor || p.glow;
          ctx.lineWidth = 2.4;
          ctx.shadowColor = p.primary;
          ctx.shadowBlur = 8;
          ctx.stroke();
          ctx.restore();
        }

        // Readable Label Tag
        const labelY = p.y > centerY ? p.y + rad + 18 : p.y - rad - 14;
        ctx.font = `600 ${isHov ? 12 : 10}px 'Cinzel', serif`;
        ctx.fillStyle = isHov ? '#ffffff' : 'rgba(243, 232, 255, 0.85)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = p.glow;
        ctx.shadowBlur = isHov ? 10 : 4;
        ctx.fillText(p.name, p.x, labelY);

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    const handleCanvasMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mousePosRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleCanvasMouseLeave = () => {
      mousePosRef.current = { x: -9999, y: -9999 };
      setHoveredPlanet(null);
    };

    const handleCanvasClick = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const orbitScale = Math.min(1, Math.max(0.48, rect.width / 1100));

      const clicked = planetsStateRef.current.find((p) => {
        const hitRad = (p.radius + 15) * orbitScale;
        return Math.hypot(p.x - clickX, p.y - clickY) < hitRad;
      });

      if (clicked) {
        handlePlanetClick(clicked);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleCanvasMouseMove);
      container.addEventListener('mouseleave', handleCanvasMouseLeave);
      container.addEventListener('click', handleCanvasClick);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animId) cancelAnimationFrame(animId);
      if (container) {
        container.removeEventListener('mousemove', handleCanvasMouseMove);
        container.removeEventListener('mouseleave', handleCanvasMouseLeave);
        container.removeEventListener('click', handleCanvasClick);
      }
    };
  }, [isOrbiting, speedMultiplier, hoveredPlanet, handlePlanetClick]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen min-h-[640px] flex flex-col justify-between select-none overflow-hidden bg-transparent"
    >
      {/* Top Header Info Bar */}
      <div className="relative z-30 pt-20 px-6 max-w-7xl mx-auto w-full flex items-center justify-between pointer-events-none">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-1.5 pointer-events-auto">
            <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-spin-slow" />
            <span>Interactive Learning Galaxy</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-[0.25em] text-white text-glow-white">
            The Universe
          </h2>
          <p className="font-outfit text-xs sm:text-sm text-purple-200/80">
            Eight purposeful worlds in orbital revolution. Click any planet to enter its domain.
          </p>
        </div>

        {/* Orbit Motion & Speed Controls */}
        <div className="flex items-center gap-2 pointer-events-auto bg-purple-950/50 p-2 rounded-2xl border border-purple-800/40 backdrop-blur-md">
          <button
            onClick={() => {
              soundFx.playChime(680, 0.4);
              setIsOrbiting(!isOrbiting);
            }}
            className="p-2 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-white transition-colors"
            title={isOrbiting ? 'Pause Orbits' : 'Resume Orbits'}
            aria-label={isOrbiting ? 'Pause Orbits' : 'Resume Orbits'}
          >
            {isOrbiting ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <div className="flex items-center gap-1 text-[11px] font-mono text-purple-200">
            {[0.5, 1, 2].map((spd) => (
              <button
                key={spd}
                onClick={() => {
                  soundFx.playChime(750, 0.4);
                  setSpeedMultiplier(spd);
                }}
                className={`px-2 py-1 rounded-lg transition-colors ${
                  speedMultiplier === spd
                    ? 'bg-purple-600 text-white font-bold'
                    : 'text-purple-300/70 hover:text-white'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interactive Solar System Canvas */}
      <div className="absolute inset-0 z-10 cursor-pointer">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      {/* Comprehensive Hover HUD Card */}
      {hoveredPlanet && (
        <div className="absolute top-36 left-1/2 -translate-x-1/2 z-30 pointer-events-none animate-in fade-in zoom-in-95 duration-200">
          <div
            className="px-6 py-4 rounded-3xl glass-panel-glow border flex items-center gap-4 shadow-2xl max-w-md"
            style={{ borderColor: `${hoveredPlanet.glow}90` }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0"
              style={{ backgroundColor: hoveredPlanet.dark, border: `1.5px solid ${hoveredPlanet.primary}` }}
            >
              <hoveredPlanet.icon className="w-6 h-6" style={{ color: hoveredPlanet.primary }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-cinzel font-bold text-white tracking-widest">
                  {hoveredPlanet.name}
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/50 text-slate-300">
                  Planet {hoveredPlanet.num}
                </span>
              </div>
              <div className="text-xs font-semibold text-purple-200 font-mono">
                {hoveredPlanet.theme}
              </div>
              <div className="text-xs font-outfit text-slate-300 mt-0.5 leading-relaxed">
                {hoveredPlanet.tagline}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Planet Selector Dock (Accessible on all devices & quick selection) */}
      <div className="relative z-30 pb-6 px-4 max-w-6xl mx-auto w-full">
        <div className="p-2 sm:p-2.5 rounded-2xl glass-panel border border-purple-500/25 flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
          {PLANETS_META.map((p) => {
            const Icon = p.icon;
            const isHovered = hoveredPlanet?.id === p.id;

            return (
              <button
                key={p.id}
                onClick={() => handlePlanetClick(p)}
                onMouseEnter={() => setHoveredPlanet(p)}
                onMouseLeave={() => setHoveredPlanet(null)}
                className={`flex-1 min-w-[70px] sm:min-w-[95px] py-2 px-1.5 sm:px-2 rounded-xl flex flex-col items-center gap-1 transition-all duration-200 text-center ${
                  isHovered
                    ? 'bg-purple-600/30 border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] scale-105'
                    : 'hover:bg-purple-950/40 border border-transparent'
                }`}
                title={`Enter ${p.name}`}
              >
                <div
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-transform"
                  style={{
                    backgroundColor: `${p.dark}`,
                    border: `1.5px solid ${p.primary}`,
                    boxShadow: isHovered ? `0 0 10px ${p.glow}` : 'none'
                  }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: p.primary }} />
                </div>
                <span className="font-cinzel text-[10px] sm:text-[11px] font-bold text-white tracking-wider truncate max-w-[85px]">
                  {p.name}
                </span>
                <span className="text-[9px] font-mono text-purple-300/70 hidden sm:block truncate max-w-[85px]">
                  {p.theme.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cinematic Portal Zoom Transition Overlay */}
      {transitioningPlanet && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-black animate-in fade-in duration-500">
          <div
            className="w-44 h-44 rounded-full animate-ping opacity-75 blur-md"
            style={{ backgroundColor: transitioningPlanet.glow }}
          />
          <div className="absolute text-center">
            <span className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              Entering {transitioningPlanet.name}...
            </span>
            <div className="text-xs font-mono text-purple-200 mt-2 tracking-widest">
              {transitioningPlanet.theme}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
