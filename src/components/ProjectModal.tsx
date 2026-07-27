import React from 'react';
import type { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { X, ExternalLink, Rocket, CheckCircle2, Star, Layers, Sparkles } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import confetti from 'canvas-confetti';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject
}) => {
  if (!project) return null;

  const similarProjects = PROJECTS.filter(
    (p) => p.id !== project.id && (p.category === project.category || p.featured)
  ).slice(0, 3);

  const handleLaunch = () => {
    audioSynth.playClick();
    try {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    } catch {}
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Content Window */}
      <div className="relative w-full max-w-4xl rounded-3xl glass-panel border border-white/20 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Header Banner */}
        <div className={`relative p-8 sm:p-10 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />
          
          <button
            onClick={() => {
              audioSynth.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20"
            title="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 space-y-3">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30">
                {project.categoryLabel}
              </span>
              <span className="flex items-center space-x-1 text-xs text-amber-300 font-bold bg-black/40 px-2.5 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <span>{project.rating} Rating</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {project.title}
            </h2>

            <p className="text-xs font-mono text-blue-200">
              Live URL: {project.url}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-left">
          
          {/* Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">
              Project Architecture & Overview
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              Key Capabilities & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs text-gray-200 font-mono flex items-center space-x-1"
                >
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <div className="text-xs text-gray-400 font-mono">
              Total Recorded Launches: <span className="text-white font-bold">{project.launchCount.toLocaleString()}</span>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs transition-all"
              >
                Close
              </button>

              <button
                onClick={handleLaunch}
                className="w-1/2 sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs shadow-lg shadow-blue-500/25 hover:scale-105 transition-all flex items-center justify-center space-x-2"
              >
                <Rocket className="w-4 h-4" />
                <span>Launch Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Similar Recommended Projects */}
          {similarProjects.length > 0 && (
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Similar Nexus Platforms</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {similarProjects.map((sim) => (
                  <div
                    key={sim.id}
                    onClick={() => {
                      audioSynth.playClick();
                      onSelectProject(sim);
                    }}
                    className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 cursor-pointer transition-all space-y-2"
                  >
                    <span className="text-[10px] font-bold uppercase text-blue-400">{sim.categoryLabel}</span>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{sim.title}</h4>
                    <p className="text-[10px] text-gray-400 line-clamp-2">{sim.shortDesc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
