import React from 'react';
import { creatorProfile } from '../data/portfolioData';
import { ArrowDown, Sparkles, MapPin, CheckCircle2, Layout, Zap, Layers, ArrowUpRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      
      {/* Background Ambient Aura Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] md:w-[750px] h-[350px] sm:h-[550px] bg-gradient-to-tr from-brand-violet/20 via-brand-purple/15 to-brand-cyan/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Verified Badge Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-medium text-slate-300 mb-6 border border-purple-500/20 shadow-glow-purple animate-in fade-in duration-700">
          <span className="w-2 h-2 rounded-full bg-brand-violet"></span>
          <span className="font-semibold text-slate-200">Decode Labs UI/UX Alumni</span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3 h-3 text-brand-cyan" /> {creatorProfile.location.split(',')[0]}
          </span>
        </div>

        {/* Impactful Typographic Headline */}
        <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-6">
          Designing Intuitive Interfaces Through <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">Rigorous UX Thinking.</span>
        </h1>

        {/* Clear Subtitle & Value Proposition */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
          I am <span className="text-white font-semibold">{creatorProfile.name}</span>, a product-minded UI/UX Designer. I deconstruct user friction, craft evidence-based case studies, and build scalable design systems with Figma variables and auto layout.
        </p>

        {/* Interactive Floating Micro-Skill Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl mb-10">
          {[
            { label: '❖ Figma Auto Layout 5.0', bg: 'hover:border-purple-400/50' },
            { label: '⚡ Live Interactive Prototypes', bg: 'hover:border-cyan-400/50' },
            { label: '🎨 Tokenized Variables', bg: 'hover:border-pink-400/50' },
            { label: '📱 Mobile IA Architecture', bg: 'hover:border-emerald-400/50' },
            { label: '🎯 Micro-Copy Optimization', bg: 'hover:border-amber-400/50' },
          ].map((chip) => (
            <span
              key={chip.label}
              className={`px-3 py-1 text-xs font-mono text-slate-300 bg-surface-200/90 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-200 cursor-default ${chip.bg}`}
            >
              {chip.label}
            </span>
          ))}
        </div>

        {/* Primary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#figma-prototype"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-purple hover:opacity-90 transition-all shadow-glow-purple"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Test Live Figma Prototype</span>
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-slate-200 glass-panel hover:bg-white/10 transition-all border border-white/15"
          >
            <span>Explore Case Studies</span>
            <ArrowDown className="w-4 h-4 text-brand-cyan" />
          </a>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-slate-200 glass-panel hover:bg-white/10 transition-all border border-white/15"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4 text-purple-300" />
          </button>
        </div>

        {/* Proof & Fact Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl sm:text-2xl font-display font-bold text-white">5+</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">UX Case Studies & Teardowns</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-display font-bold text-brand-cyan">Decode Labs</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">UI/UX Design Internship</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-display font-bold text-purple-300">100% Tokenized</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Figma Variables & Auto Layout</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-display font-bold text-emerald-400">RGUKT</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">B.Tech Engineering Foundation</div>
          </div>
        </div>

      </div>
    </section>
  );
};
