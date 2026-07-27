import React, { useState, useEffect } from 'react';
import { Search, Sparkles, ArrowUp, Bookmark, Palette } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface QuickDockProps {
  onOpenSearch: () => void;
  onRandomProject: () => void;
  onOpenBookmarks: () => void;
  bookmarkCount: number;
  onCycleTheme: () => void;
}

export const QuickDock: React.FC<QuickDockProps> = ({
  onOpenSearch,
  onRandomProject,
  onOpenBookmarks,
  bookmarkCount,
  onCycleTheme
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    audioSynth.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center space-x-2 p-2 rounded-2xl glass-panel border border-white/20 shadow-2xl backdrop-blur-xl">
        <button
          onClick={() => {
            audioSynth.playClick();
            onOpenSearch();
          }}
          className="p-3 rounded-xl bg-white/5 hover:bg-white/15 text-blue-400 hover:text-white transition-all"
          title="Search Palette (Ctrl + K)"
        >
          <Search className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            audioSynth.playClick();
            onRandomProject();
          }}
          className="p-3 rounded-xl bg-white/5 hover:bg-white/15 text-amber-400 hover:text-white transition-all"
          title="Random Project"
        >
          <Sparkles className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            audioSynth.playClick();
            onOpenBookmarks();
          }}
          className="relative p-3 rounded-xl bg-white/5 hover:bg-white/15 text-pink-400 hover:text-white transition-all"
          title="Bookmarked Projects"
        >
          <Bookmark className="w-4 h-4" />
          {bookmarkCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-pink-500 text-black font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
              {bookmarkCount}
            </span>
          )}
        </button>

        <button
          onClick={() => {
            audioSynth.playClick();
            onCycleTheme();
          }}
          className="p-3 rounded-xl bg-white/5 hover:bg-white/15 text-purple-400 hover:text-white transition-all"
          title="Cycle Visual Theme"
        >
          <Palette className="w-4 h-4" />
        </button>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-blue-600 text-white shadow-lg hover:scale-110 transition-all animate-in fade-in zoom-in duration-200"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
