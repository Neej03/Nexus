import React, { useState, useEffect } from 'react';
import type { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { ExternalLink, ChevronLeft, ChevronRight, Sparkles, Star, Rocket } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface FeaturedCarouselProps {
  onSelectProject: (p: Project) => void;
}

export const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ onSelectProject }) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const handlePrev = () => {
    audioSynth.playClick();
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const handleNext = () => {
    audioSynth.playClick();
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const project = featuredProjects[currentIndex];

  if (!project) return null;

  return (
    <section id="featured" className="py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Spotlight</h2>
              <p className="text-xs text-[var(--text-muted)]">Handpicked high-impact AI & 3D micro-applications</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
              title="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all"
              title="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Spotlight Glass Card */}
        <div className="relative rounded-3xl glass-panel p-8 sm:p-12 overflow-hidden transition-all duration-500 border border-white/15">
          {/* Ambient Glow */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.gradient} opacity-20 blur-[100px] pointer-events-none`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
                {project.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {project.badge}
                  </span>
                )}
                <div className="flex items-center space-x-1 text-xs text-amber-400 font-bold ml-auto">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{project.rating}</span>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                {project.title}
              </h3>

              <p className="text-base text-[var(--text-muted)] leading-relaxed font-light">
                {project.fullDesc}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-gray-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioSynth.playClick()}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-blue-500/25 hover:scale-105 transition-all flex items-center space-x-2"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Launch Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => {
                    audioSynth.playClick();
                    onSelectProject(project);
                  }}
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs transition-all"
                >
                  Quick Preview
                </button>
              </div>

            </div>

            {/* Right Abstract Visual Graphic */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${project.gradient} p-1 shadow-2xl relative group cursor-pointer overflow-hidden`}
                   onClick={() => onSelectProject(project)}>
                <div className="w-full h-full rounded-xl bg-slate-950/90 backdrop-blur-md p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-gray-400">STATUS: LIVE</span>
                    <span className="text-xs font-mono text-blue-400">{project.launchCount.toLocaleString()} Launches</span>
                  </div>
                  <div className="text-center py-8">
                    <div className="text-5xl font-black text-white opacity-20 tracking-tighter uppercase">
                      {project.id}
                    </div>
                    <div className="text-xs font-semibold text-gray-300 mt-2">
                      Click for detailed architecture breakdown
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  audioSynth.playClick();
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-blue-500' : 'w-2 bg-white/20'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
