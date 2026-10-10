import React, { useEffect, useRef } from 'react';

/**
 * Animated High-Fidelity Crystal Orb Canvas Component
 * Suspended in space with gentle floating, breathing luminescence,
 * 3D internal sparkling particles, specular crescent, and energy dais.
 */
export const CrystalOrb = ({
  size = 440,
  theme = 'purple', // 'purple' | 'amber' | 'cyan' | 'emerald' | 'magenta' | 'blue' | 'silver' | 'teal'
  showPlatform = true,
  interactive = true,
  className = '',
  onClick = null,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameRef = useRef(null);

  const getThemePalette = () => {
    switch (theme) {
      case 'amber':
        return {
          primary: '#f59e0b',
          glow: '#fbbf24',
          highlight: '#fef3c7',
          deep: '#451a03',
          platform: 'rgba(245, 158, 11, ',
          spark: ['#ffffff', '#fef08a', '#fbbf24', '#f97316']
        };
      case 'cyan':
        return {
          primary: '#06b6d4',
          glow: '#38bdf8',
          highlight: '#e0f2fe',
          deep: '#082f49',
          platform: 'rgba(6, 182, 212, ',
          spark: ['#ffffff', '#bae6fd', '#38bdf8', '#0284c7']
        };
      case 'emerald':
        return {
          primary: '#10b981',
          glow: '#34d399',
          highlight: '#d1fae5',
          deep: '#022c22',
          platform: 'rgba(16, 185, 129, ',
          spark: ['#ffffff', '#a7f3d0', '#34d399', '#059669']
        };
      case 'magenta':
        return {
          primary: '#ec4899',
          glow: '#f43f5e',
          highlight: '#ffe4e6',
          deep: '#4c0519',
          platform: 'rgba(236, 72, 153, ',
          spark: ['#ffffff', '#fbcfe8', '#f472b6', '#db2777']
        };
      case 'blue':
        return {
          primary: '#3b82f6',
          glow: '#60a5fa',
          highlight: '#dbeafe',
          deep: '#172554',
          platform: 'rgba(59, 130, 246, ',
          spark: ['#ffffff', '#bfdbfe', '#60a5fa', '#2563eb']
        };
      case 'silver':
        return {
          primary: '#cbd5e1',
          glow: '#e2e8f0',
          highlight: '#ffffff',
          deep: '#1e293b',
          platform: 'rgba(203, 213, 225, ',
          spark: ['#ffffff', '#f1f5f9', '#e2e8f0', '#94a3b8']
        };
      case 'teal':
        return {
          primary: '#14b8a6',
          glow: '#2dd4bf',
          highlight: '#ccfbf1',
          deep: '#042f2e',
          platform: 'rgba(20, 184, 166, ',
          spark: ['#ffffff', '#99f6e4', '#2dd4bf', '#0d9488']
        };
      case 'purple':
      default:
        return {
          primary: '#a855f7',
          glow: '#c084fc',
          highlight: '#ffffff',
          deep: '#0f051d',
          platform: 'rgba(168, 85, 247, ',
          spark: ['#ffffff', '#f3e8ff', '#d8b4fe', '#c084fc', '#9333ea']
        };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = size;
    let height = showPlatform ? size * 1.2 : size;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const colors = getThemePalette();
    const orbRadius = size * 0.36;
    const orbCenterX = width / 2;
    const orbCenterY = showPlatform ? size * 0.44 : height / 2;

    // 1. Internal 3D Spherical Particles
    const internalCount = 360;
    const internalParticles = [];
    for (let i = 0; i < internalCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const rRatio = Math.pow(Math.random(), 0.58);
      const r = orbRadius * 0.94 * rRatio;

      internalParticles.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        baseRadius: Math.random() * 1.8 + 0.6,
        color: colors.spark[Math.floor(Math.random() * colors.spark.length)],
        twinkleSpeed: Math.random() * 0.04 + 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // 2. Glittering Rim & Lower Cluster Particles
    const rimCount = 220;
    const rimParticles = [];
    for (let i = 0; i < rimCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const isLower = Math.random() > 0.32;
      const angleBiased = isLower
        ? Math.PI * 0.18 + Math.random() * Math.PI * 0.64
        : angle;
      const distance = orbRadius * (0.87 + Math.random() * 0.18);

      rimParticles.push({
        angle: angleBiased,
        distance,
        orbitSpeed: (Math.random() - 0.5) * 0.005,
        radius: Math.random() * 2.2 + 0.7,
        color: colors.spark[Math.floor(Math.random() * colors.spark.length)],
        sparkleSpeed: Math.random() * 0.07 + 0.03,
        sparklePhase: Math.random() * Math.PI * 2,
        isDiamond: Math.random() > 0.5,
      });
    }

    // 3. Ascending External Cosmic Stardust
    const dustCount = 65;
    const dustParticles = [];
    for (let i = 0; i < dustCount; i++) {
      dustParticles.push({
        x: orbCenterX + (Math.random() - 0.5) * orbRadius * 2.5,
        y: orbCenterY + orbRadius * 0.8 + Math.random() * (height - orbCenterY),
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.6 + 0.25),
        size: Math.random() * 1.6 + 0.5,
        alpha: Math.random() * 0.7 + 0.2,
        color: colors.spark[Math.floor(Math.random() * colors.spark.length)],
        maxLife: Math.random() * 140 + 90,
        life: Math.random() * 90,
      });
    }

    let time = 0;

    const drawSparkle = (cx, cy, r, color, alpha) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(cx, cy - r * 2.2);
      ctx.lineTo(cx + r * 0.5, cy);
      ctx.lineTo(cx + r * 2.2, cy);
      ctx.lineTo(cx + r * 0.5, cy + r * 0.2);
      ctx.lineTo(cx, cy + r * 2.2);
      ctx.lineTo(cx - r * 0.5, cy + r * 0.2);
      ctx.lineTo(cx - r * 2.2, cy);
      ctx.lineTo(cx - r * 0.5, cy);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      time += 0.016;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Gentle floating oscillation & subtle breathing luminescence
      const floatY = Math.sin(time * 1.2) * 7;
      const breatheLuminosity = 0.85 + Math.sin(time * 0.9) * 0.15;
      const currentOrbY = orbCenterY + floatY;

      ctx.clearRect(0, 0, width, height);

      // --- 1. AURA & BACKGROUND LIGHT SCATTERING ---
      const backGlow = ctx.createRadialGradient(
        orbCenterX, currentOrbY, orbRadius * 0.2,
        orbCenterX, currentOrbY, orbRadius * 1.85
      );
      backGlow.addColorStop(0, `${colors.platform}${0.32 * breatheLuminosity})`);
      backGlow.addColorStop(0.5, `${colors.platform}${0.12 * breatheLuminosity})`);
      backGlow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = backGlow;
      ctx.fillRect(0, 0, width, height);

      // --- 2. CIRCULAR ENERGY PLATFORM (BENEATH ORB) ---
      if (showPlatform) {
        const platformY = orbCenterY + orbRadius * 1.18;
        const platWidth = orbRadius * 2.2;
        const platHeight = orbRadius * 0.52;

        ctx.save();

        // Floor light pool
        const floorPool = ctx.createRadialGradient(
          orbCenterX, platformY + 10, 5,
          orbCenterX, platformY + 10, platWidth * 1.15
        );
        floorPool.addColorStop(0, `${colors.platform}${0.55 * breatheLuminosity})`);
        floorPool.addColorStop(0.5, `${colors.platform}0.18)`);
        floorPool.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = floorPool;
        ctx.beginPath();
        ctx.ellipse(orbCenterX, platformY + 10, platWidth * 1.15, platHeight * 0.9, 0, 0, Math.PI * 2);
        ctx.fill();

        // Base disc
        const daisGrad = ctx.createLinearGradient(0, platformY, 0, platformY + 26);
        daisGrad.addColorStop(0, 'rgba(38, 16, 68, 0.95)');
        daisGrad.addColorStop(0.5, 'rgba(18, 6, 36, 0.98)');
        daisGrad.addColorStop(1, 'rgba(8, 3, 18, 1)');
        ctx.fillStyle = daisGrad;
        ctx.beginPath();
        ctx.ellipse(orbCenterX, platformY + 12, platWidth * 0.92, platHeight * 0.74, 0, 0, Math.PI * 2);
        ctx.fill();

        // Glowing concentric animated rings
        const ringTiers = [
          { rX: platWidth * 0.95, rY: platHeight * 0.78, alpha: 0.85, dash: [8, 4], rot: time * 0.25 },
          { rX: platWidth * 0.75, rY: platHeight * 0.62, alpha: 0.7, dash: [4, 6], rot: -time * 0.35 },
          { rX: platWidth * 0.55, rY: platHeight * 0.45, alpha: 0.9, dash: [], rot: 0 },
          { rX: platWidth * 0.35, rY: platHeight * 0.28, alpha: 0.95, dash: [2, 3], rot: time * 0.55 }
        ];

        ringTiers.forEach((ring) => {
          ctx.save();
          ctx.translate(orbCenterX, platformY);
          ctx.rotate(ring.rot * 0.05);
          ctx.beginPath();
          ctx.ellipse(0, 0, ring.rX, ring.rY, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `${colors.platform}${ring.alpha * breatheLuminosity})`;
          ctx.lineWidth = 1.6;
          if (ring.dash.length > 0) ctx.setLineDash(ring.dash);
          ctx.shadowColor = colors.glow;
          ctx.shadowBlur = 12;
          ctx.stroke();
          ctx.restore();
        });

        // Vertical light projector beam
        const beamGrad = ctx.createLinearGradient(orbCenterX, platformY, orbCenterX, currentOrbY);
        beamGrad.addColorStop(0, `${colors.platform}0.38)`);
        beamGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(orbCenterX - orbRadius * 0.5, platformY);
        ctx.lineTo(orbCenterX + orbRadius * 0.5, platformY);
        ctx.lineTo(orbCenterX + orbRadius * 0.2, currentOrbY + orbRadius * 0.55);
        ctx.lineTo(orbCenterX - orbRadius * 0.2, currentOrbY + orbRadius * 0.55);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      // --- 3. THE CRYSTAL SPHERE CORE ---
      ctx.save();
      ctx.beginPath();
      ctx.arc(orbCenterX, currentOrbY, orbRadius, 0, Math.PI * 2);
      ctx.closePath();

      // Deep obsidian gradient
      const sphereFill = ctx.createRadialGradient(
        orbCenterX - orbRadius * 0.25,
        currentOrbY - orbRadius * 0.25,
        orbRadius * 0.1,
        orbCenterX,
        currentOrbY,
        orbRadius
      );
      sphereFill.addColorStop(0, 'rgba(30, 12, 58, 0.95)');
      sphereFill.addColorStop(0.65, 'rgba(15, 5, 30, 0.98)');
      sphereFill.addColorStop(0.92, `${colors.deep}`);
      sphereFill.addColorStop(1, `${colors.platform}0.85)`);

      ctx.fillStyle = sphereFill;
      ctx.fill();
      ctx.clip(); // clip to inside of sphere

      // 3D Particles rotation inside
      const rotY = time * 0.22 + mouseRef.current.x * 0.7;
      const rotX = time * 0.12 + mouseRef.current.y * 0.5;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      internalParticles.forEach((p) => {
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        const scale = (z2 + orbRadius * 1.5) / (orbRadius * 2);
        const projX = orbCenterX + x1;
        const projY = currentOrbY + y1;

        const twinkle = Math.sin(time * p.twinkleSpeed * 40 + p.twinklePhase);
        const alpha = Math.max(0.15, Math.min(1, (0.4 + twinkle * 0.5) * scale * breatheLuminosity));
        const pSize = Math.max(0.6, p.baseRadius * scale);

        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(projX, projY, pSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Internal nebula swirl
      const swirlGrad = ctx.createRadialGradient(
        orbCenterX, currentOrbY + orbRadius * 0.35, 10,
        orbCenterX, currentOrbY, orbRadius
      );
      swirlGrad.addColorStop(0, `${colors.platform}${0.42 * breatheLuminosity})`);
      swirlGrad.addColorStop(0.7, 'rgba(0,0,0,0)');
      ctx.fillStyle = swirlGrad;
      ctx.fill();

      ctx.restore(); // remove clip

      // --- 4. LUMINOUS RIM & SPECTRAL HALO ---
      ctx.save();
      ctx.beginPath();
      ctx.arc(orbCenterX, currentOrbY, orbRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `${colors.platform}${0.95 * breatheLuminosity})`;
      ctx.lineWidth = 3.6;
      ctx.shadowColor = colors.glow;
      ctx.shadowBlur = 24 * breatheLuminosity;
      ctx.stroke();

      // Fine white-violet highlight edge
      ctx.beginPath();
      ctx.arc(orbCenterX, currentOrbY, orbRadius + 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.88)';
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.restore();

      // --- 5. DENSE GLITTERING RIM & LOWER CLUSTER ---
      rimParticles.forEach((rp) => {
        rp.angle += rp.orbitSpeed;
        const px = orbCenterX + Math.cos(rp.angle) * rp.distance;
        const py = currentOrbY + Math.sin(rp.angle) * rp.distance;

        const twinkle = Math.sin(time * rp.sparkleSpeed * 45 + rp.sparklePhase);
        const alpha = Math.max(0.2, (0.55 + twinkle * 0.45) * breatheLuminosity);

        if (rp.isDiamond && twinkle > 0.35) {
          drawSparkle(px, py, rp.radius * 1.3, rp.color, alpha);
        } else {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = rp.color;
          ctx.shadowColor = colors.highlight;
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(px, py, rp.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      // --- 6. SPECULAR CRESCENT HIGHLIGHT ---
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(
        orbCenterX - orbRadius * 0.45,
        currentOrbY - orbRadius * 0.45,
        orbRadius * 0.35,
        orbRadius * 0.16,
        -Math.PI / 4,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `rgba(255, 255, 255, ${0.48 * breatheLuminosity})`;
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 16;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(orbCenterX - orbRadius * 0.52, currentOrbY - orbRadius * 0.52, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();

      // --- 7. ASCENDING STARDUST ---
      dustParticles.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        d.life++;

        if (d.y < 0 || d.life > d.maxLife) {
          d.y = orbCenterY + orbRadius * 0.7 + Math.random() * (height - orbCenterY);
          d.x = orbCenterX + (Math.random() - 0.5) * orbRadius * 2.4;
          d.life = 0;
        }

        const lifeRatio = Math.sin((d.life / d.maxLife) * Math.PI);
        const currentAlpha = d.alpha * lifeRatio * breatheLuminosity;

        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = d.color;
        ctx.shadowColor = colors.glow;
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e) => {
      if (!interactive || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseRef.current.targetX = normX;
      mouseRef.current.targetY = normY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    const container = containerRef.current;
    if (container && interactive) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (container && interactive) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [size, theme, showPlatform, interactive]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center select-none ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      style={{ width: `${size}px`, height: `${showPlatform ? size * 1.2 : size}px` }}
    >
      <canvas ref={canvasRef} className="block pointer-events-none" />
    </div>
  );
};
