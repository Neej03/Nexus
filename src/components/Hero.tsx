import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Zap, Dna } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface HeroProps {
  onExploreClick: () => void;
  onRandomClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onRandomClick }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angleX = 0;
    let angleY = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 400;
      canvas.height = 360;
    };
    resize();
    window.addEventListener('resize', resize);

    const vertices = [
      { x: 0, y: -1, z: 0 },
      { x: 1, y: 0, z: 0 },
      { x: 0, y: 0, z: 1 },
      { x: -1, y: 0, z: 0 },
      { x: 0, y: 0, z: -1 },
      { x: 0, y: 1, z: 0 }
    ];

    const edges = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [5, 1], [5, 2], [5, 3], [5, 4],
      [1, 2], [2, 3], [3, 4], [4, 1]
    ];

    const project = (x: number, y: number, z: number, w: number, h: number) => {
      const fov = 180;
      const scale = fov / (fov + z * 100);
      return {
        x: x * scale * 120 + w / 2,
        y: y * scale * 120 + h / 2
      };
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angleX += 0.008;
      angleY += 0.012;

      const rotatedVertices = vertices.map((v) => {
        let x = v.x * Math.cos(angleY) - v.z * Math.sin(angleY);
        let z = v.x * Math.sin(angleY) + v.z * Math.cos(angleY);
        let y = v.y;

        let yRot = y * Math.cos(angleX) - z * Math.sin(angleX);
        let zRot = y * Math.sin(angleX) + z * Math.cos(angleX);

        return { x, y: yRot, z: zRot };
      });

      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 12;

      edges.forEach(([i, j]) => {
        const p1 = project(rotatedVertices[i].x, rotatedVertices[i].y, rotatedVertices[i].z, canvas.width, canvas.height);
        const p2 = project(rotatedVertices[j].x, rotatedVertices[j].y, rotatedVertices[j].z, canvas.width, canvas.height);

        const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        grad.addColorStop(0, 'rgba(59, 130, 246, 0.9)');
        grad.addColorStop(1, 'rgba(236, 72, 153, 0.9)');
        ctx.strokeStyle = grad;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      rotatedVertices.forEach((v) => {
        const p = project(v.x, v.y, v.z, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffcc';
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-300 font-mono">16 Sub-Platforms Active</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300 flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-blue-400" /> Nexus OS Core
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              Welcome to <br />
              <span className="text-gradient">NEXUS</span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              One Platform. <span className="text-white font-medium">Infinite Possibilities.</span> <br />
              The unified gateway for next-generation AI models, data analytics, 3D engines, healthcare tools, and developer utilities.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => {
                  audioSynth.playClick();
                  onExploreClick();
                }}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Explore 16 Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  audioSynth.playClick();
                  onRandomClick();
                }}
                className="px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Launch Random</span>
              </button>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-xs text-[var(--text-muted)]">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Vite + React 19</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[var(--text-muted)]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Vercel Hub</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[var(--text-muted)]">
                <Dna className="w-4 h-4 text-purple-400" />
                <span>60FPS 3D Canvas</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square glass-panel rounded-3xl p-6 flex flex-col items-center justify-center shadow-2xl border border-white/15 overflow-hidden group">
              <div className="absolute top-4 left-4 flex items-center space-x-1.5 text-[10px] font-mono uppercase text-blue-400 tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                3D Geometric Core Matrix
              </div>
              
              <canvas ref={canvasRef} className="w-full h-72 cursor-grab active:cursor-grabbing" />

              <div className="text-center space-y-1">
                <div className="text-xs font-bold text-white tracking-widest uppercase">
                  NEXUS ORBITAL NODE
                </div>
                <div className="text-[11px] text-[var(--text-muted)]">
                  Interactive GPU-Accelerated Vector Wireframe
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
