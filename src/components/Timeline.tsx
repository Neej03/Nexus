import React from 'react';
import { TIMELINE_ITEMS } from '../data/projects';
import { Milestone, GitCommit } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5" />
            <span>Chronology & Evolution</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">The Nexus Journey</h2>
          <p className="text-xs text-[var(--text-muted)] max-w-xl mx-auto">
            From initial WebGL particle engines to a 16-platform AI & utility powerhouse
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-8">
          {TIMELINE_ITEMS.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center text-blue-400 group-hover:scale-125 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-500/20">
                <GitCommit className="w-4 h-4" />
              </div>

              {/* Year badge on desktop */}
              <div className="hidden sm:block absolute -left-32 top-2 text-xs font-mono font-bold text-blue-400 w-24 text-right">
                {item.year}
              </div>

              {/* Content Card */}
              <div className="p-6 rounded-2xl glass-panel border border-white/10 group-hover:border-blue-500/40 transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <span className="sm:hidden text-xs font-mono font-bold text-blue-400">
                    {item.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-purple-300 border border-white/15">
                    {item.tag}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {item.projectsCount} Platforms Active
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
