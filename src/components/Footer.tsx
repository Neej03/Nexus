import React from 'react';
import { Globe, Shield, Terminal, ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

export const Footer: React.FC = () => {
  const email = 'nexus.innovation12@gmail.com';
  const githubUrl = 'https://github.com/Neej03/Nexus';

  const scrollToTop = () => {
    audioSynth.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    audioSynth.playClick();
    navigator.clipboard.writeText(email);
    alert(`Copied email to clipboard:\n${email}`);
  };

  return (
    <footer className="relative border-t border-white/10 glass-nav pt-16 pb-24 mt-20 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Contact */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl p-0.5 bg-gradient-to-tr from-purple-600 to-pink-500 shadow-lg overflow-hidden shrink-0">
                <img 
                  src="/nexus-logo.jpg" 
                  alt="Nexus Innovation Logo" 
                  className="w-full h-full object-cover rounded-[9px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-gradient leading-none">NEXUS</span>
                <span className="text-[9px] font-bold tracking-widest text-purple-400 uppercase mt-0.5">INNOVATION</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              Nexus Innovation serves as the central gateway for AI models, Data Science tools, 3D engines, healthcare diagnostics, and developer utilities.
            </p>

            {/* Direct Contact & Social Links */}
            <div className="space-y-2 pt-1">
              <a
                href={`mailto:${email}`}
                onClick={handleCopyEmail}
                className="flex items-center space-x-2 text-xs text-purple-300 hover:text-white bg-white/5 border border-white/10 hover:border-purple-500/40 px-3 py-1.5 rounded-xl transition-all w-fit"
                title="Click to Send Mail / Copy Email"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-mono">{email}</span>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioSynth.playClick()}
                className="flex items-center space-x-2 text-xs text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-blue-500/40 px-3 py-1.5 rounded-xl transition-all w-fit"
                title="Visit GitHub Repository"
              >
                <svg className="w-3.5 h-3.5 fill-current text-blue-400" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="font-mono">Neej03/Nexus</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Project Index</a></li>
              <li><a href="#categories" className="hover:text-blue-400 transition-colors">Categories</a></li>
              <li><a href="#featured" className="hover:text-blue-400 transition-colors">Featured Spotlight</a></li>
              <li><a href="#stats" className="hover:text-blue-400 transition-colors">System Telemetry</a></li>
              <li><a href="#timeline" className="hover:text-blue-400 transition-colors">Evolution Timeline</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Ecosystem Domains</h4>
            <ul className="space-y-2 text-gray-400">
              <li>🤖 Artificial Intelligence</li>
              <li>📊 Data Science & ML</li>
              <li>🎨 UI/UX & Design Pro</li>
              <li>🏥 Health & Medical AI</li>
              <li>🛡️ Cyber Security Operations</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Infrastructure & Open Source</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Global Vercel Edge Network</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>SSL Encrypted Gateways</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>Ctrl + K Command Palette</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <svg className="w-3.5 h-3.5 fill-current text-amber-400" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>Open Source Repository</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-gray-500 font-mono text-[11px]">
          <p>
            Built with ❤️ using Next.js, React, Tailwind CSS, Framer Motion, and Three.js.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
