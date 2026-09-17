import React, { useState } from 'react';
import { ArrowRight, Check, X, Sparkles, HelpCircle, Eye, ArrowLeftRight, Smartphone } from 'lucide-react';

export const BeforeAfterComparator: React.FC = () => {
  const [activeStudy, setActiveStudy] = useState<'pop-upi' | 'district' | 'blinkit'>('pop-upi');

  return (
    <section id="comparator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <ArrowLeftRight className="w-3.5 h-3.5" /> Interactive UX Teardown
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl">
          Friction vs Clarity: Real Before & After Comparisons
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3 font-normal">
          Inspect Sujeev's real case study breakdowns. Compare original app friction against evidence-based UX refinements and pixel-accurate Figma recreations.
        </p>
      </div>

      {/* Case Study Switcher Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveStudy('pop-upi')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeStudy === 'pop-upi'
              ? 'bg-brand-violet text-white shadow-glow-purple'
              : 'bg-surface-200 text-slate-400 hover:text-slate-200 border border-white/5'
          }`}
        >
          01. POP UPI: "Pay Friends" → "Pay Anyone"
        </button>
        <button
          onClick={() => setActiveStudy('district')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeStudy === 'district'
              ? 'bg-brand-violet text-white shadow-glow-purple'
              : 'bg-surface-200 text-slate-400 hover:text-slate-200 border border-white/5'
          }`}
        >
          02. District App: 4-Tab Bottom IA Redesign
        </button>
        <button
          onClick={() => setActiveStudy('blinkit')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeStudy === 'blinkit'
              ? 'bg-brand-violet text-white shadow-glow-purple'
              : 'bg-surface-200 text-slate-400 hover:text-slate-200 border border-white/5'
          }`}
        >
          03. Blinkit: Figma Recreation vs Live App
        </button>
      </div>

      {/* COMPARATOR DISPLAY CONTAINER */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* TAB 1: POP UPI CAROUSEL SLIDE COMPARISON */}
        {activeStudy === 'pop-upi' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-cyan-400">FINTECH MICRO-COPY UX CRITIQUE</span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                  Eliminating Split-Second Payment Hesitation
                </h3>
              </div>
              <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/20">
                Cognitive Mental Models
              </span>
            </div>

            {/* Real Slide Image Frame */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111116] flex justify-center p-2 sm:p-4">
              <img
                src="/assets/pop-upi/slide-7.jpg"
                alt="POP UPI Original vs Refined Slide Breakdown by Sujeev"
                className="max-h-[520px] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Cognitive Analysis Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-xs leading-relaxed">
                <span className="text-red-400 font-bold block mb-1">Original: "Pay Friends"</span>
                Creates mental friction. Implies payments are restricted to saved contacts, causing doubt when paying barbers, merchants, or strangers.
              </div>
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs leading-relaxed">
                <span className="text-emerald-400 font-bold block mb-1">Refined: "Pay Anyone"</span>
                Matches Jakob Nielsen's 'Match with User Mental Model' heuristic. Instantly communicates universal transaction capability without app redesign.
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DISTRICT APP 4-TAB NAVIGATION REDESIGN */}
        {activeStudy === 'district' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-cyan-400">MOBILE INFORMATION ARCHITECTURE REDESIGN</span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                  Direct 4-Tab Bottom Navigation & Notification Gateway
                </h3>
              </div>
              <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20">
                Thumb Zone Ergonomics
              </span>
            </div>

            {/* Side by Side Mockup Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
              
              {/* Original Screen */}
              <div className="flex flex-col items-center">
                <div className="text-xs font-mono text-red-400 font-semibold mb-2 flex items-center gap-1.5">
                  <X className="w-4 h-4" /> Original District App
                </div>
                <div className="rounded-2xl overflow-hidden border border-red-500/20 bg-black max-w-[280px] shadow-xl">
                  <img
                    src="/assets/district/district-original.jpg"
                    alt="Original District App Screen"
                    className="w-full object-cover"
                  />
                </div>
                <div className="text-[11px] text-slate-400 text-center mt-2 max-w-[260px]">
                  No bottom navigation. Active passes & booking tickets buried deep in secondary profile screens.
                </div>
              </div>

              {/* Sujeev's Redesign Screen */}
              <div className="flex flex-col items-center">
                <div className="text-xs font-mono text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Sujeev's Redesigned Interface
                </div>
                <div className="rounded-2xl overflow-hidden border border-emerald-500/30 bg-black max-w-[280px] shadow-glow-cyan">
                  <img
                    src="/assets/district/district-redesign.jpg"
                    alt="District App Redesign with 4-Tab Bottom Navigation by Sujeev"
                    className="w-full object-cover"
                  />
                </div>
                <div className="text-[11px] text-emerald-300 text-center mt-2 max-w-[260px] font-medium">
                  Persistent 4-tab bottom navigation (Home, Experiences, Wishlist, Profile) + Top Notification bell with live badge.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: BLINKIT FIGMA RECREATION */}
        {activeStudy === 'blinkit' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-yellow-400">HIGH-DENSITY COMPONENT ARCHITECTURE</span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                  Blinkit Figma Recreation vs Live App Screen
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/20">
                100% Auto-Layout Match
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black flex justify-center p-2 sm:p-4">
              <img
                src="/assets/blinkit-recreation.jpg"
                alt="Blinkit Figma Recreation vs Original Screen by Sujeev"
                className="max-h-[520px] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300 bg-surface-300 p-4 rounded-xl border border-white/5">
              <span><strong>Left:</strong> Sujeev's exact Figma auto-layout build (Personalized Address: "HOME - Sujeev, Flat No:503")</span>
              <span><strong>Right:</strong> Live Blinkit production screen</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
