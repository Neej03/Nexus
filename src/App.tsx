import React, { useState, useEffect } from 'react';
import type { CategoryId, ThemeMode, Project } from './types';
import { PROJECTS } from './data/projects';
import { AuroraCanvas } from './components/AuroraCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectModal } from './components/ProjectModal';
import { CommandPalette } from './components/CommandPalette';
import { StatsCounter } from './components/StatsCounter';
import { Timeline } from './components/Timeline';
import { QuickDock } from './components/QuickDock';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem('nexus_theme') as ThemeMode) || 'dark';
  });

  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nexus_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('projects');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nexus_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('nexus_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRandomProject = () => {
    const randomIndex = Math.floor(Math.random() * PROJECTS.length);
    setSelectedProject(PROJECTS[randomIndex]);
  };

  const handleCycleTheme = () => {
    const themes: ThemeMode[] = ['dark', 'cyberpunk', 'midnight', 'ocean', 'purpleneon', 'light'];
    const nextIdx = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIdx]);
  };

  const filteredProjects = PROJECTS.filter((project) => {
    if (showBookmarksOnly) {
      return bookmarks.includes(project.id);
    }
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-400">
      {/* Dynamic Theme Adaptive Custom Cursor */}
      <CustomCursor />

      {/* Background Interactive Aurora Canvas */}
      <AuroraCanvas />

      {/* Main Container */}
      <div className="relative z-10">
        <Navbar
          theme={theme}
          setTheme={setTheme}
          onOpenSearch={() => setIsSearchOpen(true)}
          bookmarkCount={bookmarks.length}
          onOpenBookmarks={() => setShowBookmarksOnly(!showBookmarksOnly)}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {showBookmarksOnly && (
          <div className="bg-amber-500/20 border-b border-amber-500/30 px-4 py-2 text-center text-xs font-semibold text-amber-300 flex items-center justify-center space-x-2">
            <span>Showing Bookmarked Projects Only ({bookmarks.length})</span>
            <button
              onClick={() => setShowBookmarksOnly(false)}
              className="underline font-bold hover:text-white"
            >
              Clear Filter
            </button>
          </div>
        )}

        <main>
          <Hero
            onExploreClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onRandomClick={handleRandomProject}
          />

          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setShowBookmarksOnly(false);
            }}
          />

          <FeaturedCarousel onSelectProject={setSelectedProject} />

          <ProjectGrid
            projects={filteredProjects}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onSelectProject={setSelectedProject}
          />

          <StatsCounter />
          <Timeline />
        </main>

        <Footer />

        <QuickDock
          onOpenSearch={() => setIsSearchOpen(true)}
          onRandomProject={handleRandomProject}
          onOpenBookmarks={() => setShowBookmarksOnly(!showBookmarksOnly)}
          bookmarkCount={bookmarks.length}
          onCycleTheme={handleCycleTheme}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={setSelectedProject}
        />

        <CommandPalette
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectProject={setSelectedProject}
        />
      </div>
    </div>
  );
};

export default App;
