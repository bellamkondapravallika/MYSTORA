import React, { useEffect, useRef } from 'react';

/**
 * High performance ambient stardust & deep purple nebula canvas background
 */
export const CosmicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Star collection
    const starCount = Math.min(160, Math.floor((width * height) / 9000));
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        color: Math.random() > 0.4 ? '#ffffff' : Math.random() > 0.5 ? '#d8b4fe' : '#c084fc',
        vy: -(Math.random() * 0.15 + 0.05),
      });
    }

    let animId;
    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Render stars
      stars.forEach((star) => {
        star.y += star.vy;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        const twinkle = Math.sin(time * star.twinkleSpeed * 40 + star.x);
        const currentAlpha = Math.max(0.1, star.alpha + twinkle * 0.3);

        ctx.save();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.min(1, currentAlpha);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05010e]">
      {/* Deep cosmic purple nebula glow spots */}
      <div className="absolute top-[-10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-purple-900/15 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-violet-950/20 blur-[130px]" />
      <div className="absolute top-[40%] right-[2%] w-[35vw] h-[35vw] rounded-full bg-fuchsia-950/10 blur-[120px]" />
      
      {/* Canvas stardust */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};
