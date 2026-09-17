import React from 'react';
import { creatorProfile } from '../data/portfolioData';
import { Layers, Cpu, Figma, Palette, Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Capabilities & Tooling
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl">
          Figma Mastery & UX Architecture
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-normal">
          From auto-layout component kits and tokenized Figma variables to in-depth heuristic teardowns and interactive prototypes.
        </p>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Category 1: Design Tools & Systems */}
        <div className="glass-card rounded-3xl p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-brand-purple">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Design Tools & Systems</h3>
                <span className="text-xs text-purple-300 font-mono">Figma Auto-Layout 5.0 • Variables • Tokens</span>
              </div>
            </div>

            <div className="space-y-4">
              {creatorProfile.skillsMatrix[0]?.skills.map((skill) => (
                <div key={skill.name} className="p-3.5 rounded-xl bg-surface-200/80 border border-white/5 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-100">{skill.name}</span>
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/20">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category 2: UX Methodologies & Architecture */}
        <div className="glass-card rounded-3xl p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-brand-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">UX Methodologies & Research</h3>
                <span className="text-xs text-cyan-300 font-mono">Heuristics • IA • User-Centered Design</span>
              </div>
            </div>

            <div className="space-y-4">
              {creatorProfile.skillsMatrix[1]?.skills.map((skill) => (
                <div key={skill.name} className="p-3.5 rounded-xl bg-surface-200/80 border border-white/5 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-slate-100">{skill.name}</span>
                    <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Services Offering Strip */}
      <div className="mt-12 glass-panel rounded-3xl p-8 border border-white/10">
        <h3 className="font-display text-xl font-bold text-white mb-6 text-center sm:text-left">
          Core Services & Deliverables
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {creatorProfile.services.map((srv) => (
            <div key={srv.title} className="p-4 rounded-2xl bg-surface-200/60 border border-white/5 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{srv.title}</h4>
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">{srv.description}</p>
              </div>
              <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                {srv.deliverables.slice(0, 2).map((d) => (
                  <span key={d} className="text-[10px] font-mono text-slate-400 bg-surface-300 px-1.5 py-0.5 rounded">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
