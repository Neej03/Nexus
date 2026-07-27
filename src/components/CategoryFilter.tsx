import React from 'react';
import type { CategoryId } from '../types';
import { CATEGORIES } from '../data/projects';
import { 
  Layers, 
  BrainCircuit, 
  Palette, 
  Database, 
  GraduationCap, 
  Activity, 
  CloudSun, 
  ShoppingCart, 
  ShieldAlert, 
  Sparkles, 
  RefreshCw, 
  Compass 
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface CategoryFilterProps {
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
}

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Layers': return <Layers className="w-4 h-4" />;
    case 'BrainCircuit': return <BrainCircuit className="w-4 h-4" />;
    case 'Palette': return <Palette className="w-4 h-4" />;
    case 'Database': return <Database className="w-4 h-4" />;
    case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
    case 'Activity': return <Activity className="w-4 h-4" />;
    case 'CloudSun': return <CloudSun className="w-4 h-4" />;
    case 'ShoppingCart': return <ShoppingCart className="w-4 h-4" />;
    case 'ShieldAlert': return <ShieldAlert className="w-4 h-4" />;
    case 'Sparkles': return <Sparkles className="w-4 h-4" />;
    case 'RefreshCw': return <RefreshCw className="w-4 h-4" />;
    case 'Compass': return <Compass className="w-4 h-4" />;
    default: return <Layers className="w-4 h-4" />;
  }
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div id="categories" className="py-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Ecosystem Explorer
            </h2>
            <p className="text-2xl font-bold text-white">Filter by Domain</p>
          </div>
          <span className="text-xs text-[var(--text-muted)] font-mono">
            Showing {selectedCategory === 'all' ? 'All 16' : CATEGORIES.find(c => c.id === selectedCategory)?.count} Projects
          </span>
        </div>

        <div className="flex items-center space-x-3 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  audioSynth.playClick();
                  onSelectCategory(cat.id);
                }}
                className={`flex items-center space-x-2.5 px-4 py-2.5 rounded-2xl text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105 border border-blue-400/40'
                    : 'bg-white/5 hover:bg-white/10 text-[var(--text-muted)] hover:text-white border border-white/10'
                }`}
              >
                <span className={isSelected ? 'text-white' : 'text-blue-400'}>
                  {getCategoryIcon(cat.icon)}
                </span>
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
