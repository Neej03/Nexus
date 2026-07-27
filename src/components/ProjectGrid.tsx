import React from 'react';
import type { Project } from '../types';
import { 
  ExternalLink, 
  Bookmark, 
  Star, 
  Share2, 
  Sparkles, 
  Palette, 
  BrainCircuit, 
  Mic, 
  GraduationCap, 
  CloudSun, 
  FlaskConical, 
  BarChart3, 
  Activity, 
  FileCheck, 
  ShoppingCart, 
  HeartPulse, 
  ShieldAlert, 
  Database, 
  RefreshCw, 
  Compass 
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import confetti from 'canvas-confetti';

interface ProjectGridProps {
  projects: Project[];
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  onSelectProject: (p: Project) => void;
}

const renderProjectIcon = (iconName: string) => {
  const props = { className: "w-6 h-6 text-white" };
  switch (iconName) {
    case 'Palette': return <Palette {...props} />;
    case 'BrainCircuit': return <BrainCircuit {...props} />;
    case 'Mic': return <Mic {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'GraduationCap': return <GraduationCap {...props} />;
    case 'CloudSun': return <CloudSun {...props} />;
    case 'FlaskConical': return <FlaskConical {...props} />;
    case 'BarChart3': return <BarChart3 {...props} />;
    case 'Activity': return <Activity {...props} />;
    case 'FileCheck': return <FileCheck {...props} />;
    case 'ShoppingCart': return <ShoppingCart {...props} />;
    case 'HeartPulse': return <HeartPulse {...props} />;
    case 'ShieldAlert': return <ShieldAlert {...props} />;
    case 'Database': return <Database {...props} />;
    case 'RefreshCw': return <RefreshCw {...props} />;
    case 'Compass': return <Compass {...props} />;
    default: return <Sparkles {...props} />;
  }
};

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  bookmarks,
  onToggleBookmark,
  onSelectProject
}) => {

  const handleLaunch = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    audioSynth.playClick();
    
    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch {
      // Fallback
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShare = (e: React.MouseEvent, p: Project) => {
    e.stopPropagation();
    audioSynth.playClick();
    navigator.clipboard.writeText(p.url);
    alert(`Copied link to ${p.title}:\n${p.url}`);
  };

  if (projects.length === 0) {
    return (
      <div className="text-center py-16 glass-panel rounded-3xl max-w-2xl mx-auto my-8">
        <p className="text-lg font-bold text-gray-300">No matching projects found</p>
        <p className="text-xs text-gray-400 mt-1">Try adjusting your search query or category filter</p>
      </div>
    );
  }

  return (
    <section id="projects" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isBookmarked = bookmarks.includes(project.id);
            return (
              <div
                key={project.id}
                onClick={() => {
                  audioSynth.playClick();
                  onSelectProject(project);
                }}
                className="group relative rounded-3xl glass-panel p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border border-white/10 hover:border-white/25 overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-25 blur-3xl transition-opacity pointer-events-none`} />

                <div>
                  {/* Header Row: Category Badge & Bookmark Button */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-blue-300">
                      {project.categoryLabel}
                    </span>

                    <div className="flex items-center space-x-2">
                      {/* Rating */}
                      <span className="flex items-center space-x-1 text-xs text-amber-400 font-bold bg-white/5 px-2 py-0.5 rounded-lg border border-white/10">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{project.rating}</span>
                      </span>

                      {/* Bookmark toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          audioSynth.playClick();
                          onToggleBookmark(project.id);
                        }}
                        className={`p-2 rounded-xl transition-all ${
                          isBookmarked
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                        }`}
                        title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Project'}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-300' : ''}`} />
                      </button>

                      {/* Share button */}
                      <button
                        onClick={(e) => handleShare(e, project)}
                        className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white border border-white/10 transition-all"
                        title="Share Project Link"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start space-x-4 mb-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform`}>
                      {renderProjectIcon(project.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-[var(--text-muted)] font-mono">
                        {project.launchCount.toLocaleString()} launches
                      </p>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-4 font-light">
                    {project.shortDesc}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-gray-400 font-mono">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      audioSynth.playClick();
                      onSelectProject(project);
                    }}
                    className="text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                  >
                    View Details
                  </button>

                  <button
                    onClick={(e) => handleLaunch(e, project.url)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:scale-105 transition-all flex items-center space-x-1.5"
                  >
                    <span>Launch</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
