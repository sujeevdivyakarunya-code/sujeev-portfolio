import React from 'react';
import { creatorProfile } from '../data/portfolioData';
import { Search, Compass, Cpu, CheckCircle, Sparkles, Layers } from 'lucide-react';

export const UXPhilosophy: React.FC = () => {
  const stepIcons = [Search, Compass, Layers, CheckCircle];

  return (
    <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Design Methodology
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl">
          The 4-Stage UX Engineering Process
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-normal">
          How I deconstruct ambiguity and transform complex product friction into scalable, intuitive digital experiences.
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {creatorProfile.philosophySteps.map((step, idx) => {
          const Icon = stepIcons[idx] || Sparkles;
          return (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-6 relative flex flex-col justify-between group overflow-hidden"
            >
              {/* Step Number Ambient Watermark */}
              <div className="absolute -top-4 -right-2 text-7xl font-display font-black text-white/[0.03] select-none group-hover:text-purple-500/[0.07] transition-colors pointer-events-none">
                {step.number}
              </div>

              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-violet/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-bold tracking-wider">PHASE {step.number}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-purple transition-colors mb-1">
                  {step.title}
                </h3>
                <div className="text-xs text-brand-cyan font-medium mb-3">
                  {step.tagline}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-normal mb-6">
                  {step.description}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider mb-2">
                  Key Deliverables
                </div>
                <ul className="space-y-1">
                  {step.deliverables.map((item) => (
                    <li key={item} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
