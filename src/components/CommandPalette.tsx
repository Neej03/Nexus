import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { Sparkles, Terminal, ArrowRight, X } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const filteredProjects = PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
    p.shortDesc.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredProjects.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredProjects.length) % Math.max(1, filteredProjects.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = filteredProjects[selectedIndex];
      if (target) {
        audioSynth.playClick();
        onSelectProject(target);
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-white/20 shadow-2xl overflow-hidden z-10">
        <div className="flex items-center space-x-3 px-6 py-4 border-b border-white/10 bg-white/5">
          <Terminal className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search all 16 projects, categories, tech stack..."
            className="w-full bg-transparent text-white placeholder-gray-400 text-sm outline-none font-medium"
          />
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-3 space-y-1">
          {filteredProjects.length === 0 ? (
            <div className="py-12 text-center text-xs text-gray-400">
              No matching projects or tools found.
            </div>
          ) : (
            filteredProjects.map((project, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={project.id}
                  onClick={() => {
                    audioSynth.playClick();
                    onSelectProject(project);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-600/30 border border-blue-500/40 text-white shadow-md'
                      : 'hover:bg-white/5 text-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xs font-bold`}>
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold">{project.title}</span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-blue-300">
                          {project.categoryLabel}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 line-clamp-1">{project.shortDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-[10px] font-mono text-gray-400 hidden sm:inline">Launch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="px-6 py-3 border-t border-white/10 bg-white/5 flex items-center justify-between text-[11px] text-gray-400 font-mono">
          <div className="flex items-center space-x-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>Nexus OS Command Palette</span>
        </div>
      </div>
    </div>
  );
};
