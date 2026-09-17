import React, { useState, useEffect } from 'react';
import { creatorProfile } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, FileText, Sparkles, Play } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Live Prototype', href: '#figma-prototype' },
    { name: 'Featured Work', href: '#projects' },
    { name: 'UX Teardown', href: '#comparator' },
    { name: 'Process', href: '#philosophy' },
    { name: 'Skills & Figma', href: '#skills' },
    { name: 'Journey', href: '#experience' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo / Monogram */}
        <a 
          href="#" 
          className={`pointer-events-auto flex items-center gap-3 px-3.5 py-2 rounded-full transition-all duration-300 ${
            scrolled ? 'glass-panel shadow-lg' : 'bg-surface-300/60 backdrop-blur-md border border-white/5'
          }`}
          aria-label="Madiki Sujeevkumar - Home"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-violet to-brand-cyan flex items-center justify-center font-display font-bold text-white text-xs tracking-wider shadow-inner">
            SM
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xs sm:text-sm font-semibold tracking-tight text-slate-100 flex items-center gap-1.5">
              Sujeev Kumar
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium -mt-0.5">UI/UX Designer</span>
          </div>
        </a>

        {/* Desktop Navigation Pill */}
        <nav 
          className={`pointer-events-auto hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full transition-all duration-300 ${
            scrolled ? 'glass-panel shadow-xl' : 'bg-surface-300/70 backdrop-blur-md border border-white/10'
          }`}
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action: Resume & Connect buttons */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-slate-300 glass-panel hover:text-white hover:bg-white/10 transition-all border border-white/10"
          >
            <FileText className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Resume</span>
          </a>

          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-600 hover:to-brand-cyan transition-all duration-300 shadow-glow-purple"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-surface-200 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-3 max-w-sm mx-auto glass-panel rounded-2xl p-4 shadow-2xl border border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-brand-purple hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between px-2">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-brand-cyan flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" /> View Resume PDF
              </a>
              <a
                href={creatorProfile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-purple-300 hover:underline flex items-center gap-1"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
