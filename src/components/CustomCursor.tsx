import React, { useEffect, useState, useRef } from 'react';

interface TrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxLife: number;
  life: number;
  color: string;
  rotation: number;
  vRot: number;
}

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [followerPos, setFollowerPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<TrailParticle[]>([]);
  const requestRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const followerRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const prevMouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const themeColors = ['#3b82f6', '#8b5cf6', '#ec4899', '#00ffcc', '#f59e0b', '#06b6d4'];

    const spawnParticles = (x: number, y: number, speed: number) => {
      const count = Math.min(Math.floor(speed / 2) + 2, 8);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 2 + 0.5;
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity - 0.6, // drift upwards
          size: Math.random() * 5 + 2.5,
          maxLife: Math.random() * 30 + 20,
          life: 0,
          color: themeColors[Math.floor(Math.random() * themeColors.length)],
          rotation: Math.random() * Math.PI,
          vRot: (Math.random() - 0.5) * 0.15
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - prevMouseRef.current.x;
      const dy = e.clientY - prevMouseRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      mouseRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });

      if (speed > 1) {
        spawnParticles(e.clientX, e.clientY, speed);
      }
      prevMouseRef.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, .glass-panel'
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      if (mouseRef.current.x > 0) {
        spawnParticles(mouseRef.current.x, mouseRef.current.y, 30);
      }
    };

    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation & particle render loop
    const animate = () => {
      const ease = 0.22;
      followerRef.current.x += (mouseRef.current.x - followerRef.current.x) * ease;
      followerRef.current.y += (mouseRef.current.y - followerRef.current.y) * ease;
      setFollowerPos({ x: followerRef.current.x, y: followerRef.current.y });

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;
        p.rotation += p.vRot;
        p.size *= 0.95;

        const alpha = 1 - p.life / p.maxLife;

        if (alpha > 0 && p.size > 0.3) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.globalAlpha = Math.max(0, alpha);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;

          // Draw 4-point star sparkle particle
          ctx.beginPath();
          const r = p.size;
          ctx.moveTo(0, -r * 1.6);
          ctx.quadraticCurveTo(0, 0, r * 1.6, 0);
          ctx.quadraticCurveTo(0, 0, 0, r * 1.6);
          ctx.quadraticCurveTo(0, 0, -r * 1.6, 0);
          ctx.quadraticCurveTo(0, 0, 0, -r * 1.6);
          ctx.fill();

          ctx.restore();
        } else {
          particlesRef.current.splice(i, 1);
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Floating Sparkle Trail Overlay Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9998]" />

      {/* Outer Follower Star Ring */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-14 h-14 scale-125'
            : isClicked
            ? 'w-8 h-8 scale-90'
            : 'w-10 h-10 scale-100'
        }`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`w-full h-full text-[var(--accent)] transition-all duration-300 ${
            isHovered ? 'animate-spin-slow filter drop-shadow-[0_0_15px_var(--accent)] opacity-95' : 'opacity-50'
          }`}
        >
          <path
            d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Inner Glowing Star Cursor Core */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out flex items-center justify-center ${
          isHovered ? 'scale-150 filter drop-shadow-[0_0_12px_#ffffff]' : isClicked ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 filter drop-shadow-[0_0_10px_var(--accent)]"
        >
          <path
            d="M12 2L14.85 8.76L22 9.27L16.54 13.97L18.18 21L12 17.27L5.82 21L7.46 13.97L2 9.27L9.15 8.76L12 2Z"
            fill="var(--accent)"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
};
