import React, { useState, useEffect } from 'react';
import type { ThemeMode } from '../types';
import { 
  Search, 
  Volume2, 
  VolumeX, 
  Bookmark, 
  Palette, 
  Sparkles, 
  ChevronDown,
  Radio
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface NavbarProps {
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  onOpenSearch: () => void;
  bookmarkCount: number;
  onOpenBookmarks: () => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  setTheme,
  onOpenSearch,
  bookmarkCount,
  onOpenBookmarks,
  activeSection,
  setActiveSection
}) => {
  const [timeStr, setTimeStr] = useState<string>('');
  const [isAudioActive, setIsAudioActive] = useState<boolean>(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleAudio = () => {
    const active = audioSynth.toggleAmbient();
    setIsAudioActive(active);
  };

  const themeOptions: { mode: ThemeMode; label: string; color: string }[] = [
    { mode: 'dark', label: 'Dark Aurora', color: '#3b82f6' },
    { mode: 'cyberpunk', label: 'Cyberpunk 2077', color: '#00ffcc' },
    { mode: 'midnight', label: 'Midnight Blue', color: '#6366f1' },
    { mode: 'ocean', label: 'Deep Ocean', color: '#06b6d4' },
    { mode: 'purpleneon', label: 'Purple Neon', color: '#c084fc' },
    { mode: 'light', label: 'Light Horizon', color: '#2563eb' }
  ];

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'categories', label: 'Categories' },
    { id: 'featured', label: 'Featured' },
    { id: 'stats', label: 'Telemetry' },
    { id: 'timeline', label: 'Timeline' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Brand Logo & Live Clock */}
        <div className="flex items-center space-x-6">
          <a 
            href="#" 
            className="flex items-center space-x-3 group"
            onClick={() => audioSynth.playClick()}
          >
            <div className="relative w-10 h-10 rounded-xl p-0.5 bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-500 shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300 overflow-hidden shrink-0">
              <img 
                src="/nexus-logo.jpg" 
                alt="Nexus Innovation Logo" 
                className="w-full h-full object-cover rounded-[9px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-gradient leading-none">NEXUS</span>
              <span className="text-[9px] font-bold tracking-widest text-purple-400 uppercase mt-0.5">INNOVATION</span>
            </div>
          </a>

          {/* Live Digital Clock */}
          <div className="hidden md:flex items-center space-x-2 text-xs text-[var(--text-muted)] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="font-mono">{timeStr || '12:00:00 PM'}</span>
          </div>
        </div>

        {/* Center: Navigation Items */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                audioSynth.playClick();
                setActiveSection(link.id);
                const el = document.getElementById(link.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-white bg-white/10 border border-white/15 shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              audioSynth.playClick();
              onOpenSearch();
            }}
            className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-[var(--text-muted)] hover:text-white transition-all shadow-inner"
            title="Search projects (Ctrl + K)"
          >
            <Search className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-block bg-white/10 text-[10px] font-mono px-1.5 py-0.5 rounded border border-white/15 text-white/70">
              Ctrl K
            </kbd>
          </button>

          {/* GitHub Repository Link */}
          <a
            href="https://github.com/Neej03/Nexus"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioSynth.playClick()}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-all flex items-center justify-center"
            title="GitHub Repository (Neej03/Nexus)"
          >
            <svg className="w-4 h-4 fill-current text-gray-300 hover:text-white" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* Ambient Soundscape Toggle */}
          <button
            onClick={() => {
              audioSynth.playClick();
              handleToggleAudio();
            }}
            className={`p-2 rounded-xl border transition-all duration-300 ${
              isAudioActive
                ? 'bg-purple-500/20 border-purple-500/40 text-purple-300 shadow-md shadow-purple-500/20'
                : 'bg-white/5 border-white/10 text-[var(--text-muted)] hover:text-white hover:bg-white/10'
            }`}
            title={isAudioActive ? 'Mute Ambient Audio' : 'Play Ambient Audio'}
          >
            {isAudioActive ? <Volume2 className="w-4 h-4 text-purple-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Bookmarks Drawer Trigger */}
          <button
            onClick={() => {
              audioSynth.playClick();
              onOpenBookmarks();
            }}
            className="relative p-2 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-all"
            title="Bookmarked Projects"
          >
            <Bookmark className="w-4 h-4 text-amber-400" />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-black font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {bookmarkCount}
              </span>
            )}
          </button>

          {/* Theme Selector */}
          <div className="relative">
            <button
              onClick={() => {
                audioSynth.playClick();
                setIsThemeMenuOpen(!isThemeMenuOpen);
              }}
              className="flex items-center space-x-1.5 p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-all"
              title="Change Theme"
            >
              <Palette className="w-4 h-4 text-pink-400" />
              <span className="hidden md:inline capitalize">{theme}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {isThemeMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 rounded-2xl glass-panel p-2 shadow-2xl z-50 animate-in fade-in zoom-in duration-200 border border-white/15"
                onClick={() => setIsThemeMenuOpen(false)}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 py-1">
                  Theme Presets
                </div>
                {themeOptions.map((opt) => (
                  <button
                    key={opt.mode}
                    onClick={() => {
                      audioSynth.playClick();
                      setTheme(opt.mode);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl transition-all ${
                      theme === opt.mode
                        ? 'bg-white/15 text-white font-semibold'
                        : 'text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: opt.color }}></span>
                      <span>{opt.label}</span>
                    </span>
                    {theme === opt.mode && <Sparkles className="w-3 h-3 text-amber-300" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};
