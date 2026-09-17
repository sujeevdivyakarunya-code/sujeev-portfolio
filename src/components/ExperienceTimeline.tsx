import React from 'react';
import { creatorProfile } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5" /> Career & Education
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl">
          Experience & Academic Foundation
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-normal">
          Hands-on product design internship at Decode Labs combined with analytical engineering principles from RGUKT.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Experience Card: Decode Labs */}
        <div className="glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between border-t-2 border-t-brand-purple">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono font-semibold border border-purple-500/20">
                <Briefcase className="w-3.5 h-3.5" /> Professional Internship
              </div>
              <span className="text-xs text-slate-400 font-mono">Decode Labs</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-1">
              UI/UX Design Intern
            </h3>
            <div className="text-sm font-semibold text-brand-purple mb-4 flex items-center gap-2">
              <span>Decode Labs</span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 font-normal">End-to-End Product Sprints</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Completed hands-on internship spanning user research, wireframing, high-fidelity UI design, and interactive prototyping.
            </p>

            <div className="space-y-2.5 pt-4 border-t border-white/10">
              {creatorProfile.experience[0]?.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 flex-shrink-0"></span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Figma • User Research • Prototyping</span>
            <span className="text-emerald-400 font-semibold">Verified Experience</span>
          </div>
        </div>

        {/* Education Card: RGUKT */}
        <div className="glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between border-t-2 border-t-brand-cyan">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/20">
                <GraduationCap className="w-3.5 h-3.5" /> Higher Education
              </div>
              <span className="text-xs text-slate-400 font-mono">B.Tech Degree</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-1">
              Bachelor of Technology (B.Tech)
            </h3>
            <div className="text-sm font-semibold text-brand-cyan mb-4">
              Electronics and Communication Engineering (ECE)
            </div>

            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              <strong className="text-white block mb-1">Rajiv Gandhi University of Knowledge Technologies (RGUKT)</strong>
              Srikakulam, Andhra Pradesh, India
            </div>

            <div className="p-4 rounded-xl bg-surface-200/80 border border-white/5 space-y-2 text-xs text-slate-300">
              <div className="font-semibold text-slate-200">Analytical & Technical Edge in UX:</div>
              <p className="text-slate-400 leading-relaxed">
                Applying rigorous analytical thinking, system architectures, and logic from engineering into intuitive, scalable digital interfaces.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>RGUKT Srikakulam</span>
            <span className="text-cyan-300 font-semibold">Undergraduate</span>
          </div>
        </div>

      </div>

    </section>
  );
};
