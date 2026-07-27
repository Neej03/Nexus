import React from 'react';
import { Layers, Rocket, Users, Cpu, Shield, Zap } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    { label: 'Total Micro-Projects', value: '16', icon: <Layers className="w-5 h-5 text-blue-400" />, sub: 'Verified & Deployed' },
    { label: 'Ecosystem Domains', value: '11', icon: <Zap className="w-5 h-5 text-amber-400" />, sub: 'AI to 3D CAD' },
    { label: 'Total Platform Launches', value: '235K+', icon: <Rocket className="w-5 h-5 text-emerald-400" />, sub: 'Global User Actions' },
    { label: 'Monthly Visitors', value: '142K+', icon: <Users className="w-5 h-5 text-purple-400" />, sub: 'Active Community' },
    { label: 'Neural AI Models', value: '18', icon: <Cpu className="w-5 h-5 text-cyan-400" />, sub: 'Speech & Med AI' },
    { label: 'System Uptime SLA', value: '99.99%', icon: <Shield className="w-5 h-5 text-rose-400" />, sub: 'Vercel Edge Network' }
  ];

  return (
    <section id="stats" className="py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Real-Time Telemetry
          </h2>
          <p className="text-3xl font-extrabold text-white">Platform Statistics</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel text-center space-y-2 border border-white/10 hover:border-blue-500/40 transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                {stat.icon}
              </div>
              <div className="text-2xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-gray-300">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-400 font-mono">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
