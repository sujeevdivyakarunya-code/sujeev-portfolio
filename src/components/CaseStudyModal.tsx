import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';
import { X, ArrowUpRight, CheckCircle2, AlertTriangle, Lightbulb, Wrench, Shield, Sparkles, ChevronLeft, ChevronRight, Eye, ShoppingBag, Layers, Play, RefreshCw, Maximize2 } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [organicScreenTab, setOrganicScreenTab] = useState<'home' | 'tomato' | 'onions' | 'brinjal'>('home');
  const [isLoginProtoPlaying, setIsLoginProtoPlaying] = useState(false);
  const [loginProtoKey, setLoginProtoKey] = useState(0);
  const totalSlides = 10;

  useEffect(() => {
    setCurrentSlide(1);
    setOrganicScreenTab('home');
    setIsLoginProtoPlaying(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project?.mockupType === 'pop-upi') {
        setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
      }
      if (e.key === 'ArrowLeft' && project?.mockupType === 'pop-upi') {
        setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const loginPrototypeEmbedUrl = project.prototypeUrl
    ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.prototypeUrl)}`
    : '';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="glass-panel w-full max-w-4xl max-h-[92vh] rounded-3xl overflow-y-auto border border-white/15 shadow-2xl bg-surface-300/95 flex flex-col animate-in zoom-in-95 duration-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-surface-300/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-violet/20 text-brand-purple border border-purple-500/30">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">{project.year}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.prototypeUrl ? (
              <a
                href={project.prototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 transition-all"
              >
                <span>Figma Prototype</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-cyan bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all"
              >
                <span>LinkedIn Discussion</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-surface-100 hover:bg-surface-50 border border-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close Case Study Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Context */}
          <div>
            <h2 id="modal-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-brand-cyan font-medium mb-4">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono pb-4 border-b border-white/10">
              <div><strong className="text-slate-200">Role:</strong> {project.role}</div>
              <div><strong className="text-slate-200">Context:</strong> {project.clientOrContext}</div>
            </div>
          </div>

          {/* DYNAMIC VISUAL SECTION BASED ON PROJECT */}

          {/* 1. DARK MODE LOGIN: Live Embedded Interactive Figma Animation Player */}
          {project.mockupType === 'dark-mode-login' && project.prototypeUrl && (
            <div className="rounded-2xl p-4 sm:p-6 bg-surface-400 border border-purple-500/30 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-purple-300 font-bold text-xs font-mono">
                  <Sparkles className="w-4 h-4 text-purple-400" /> Live Interactive Figma Prototype & Animation
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    Smart Animate Live
                  </span>
                  <a
                    href={project.prototypeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-cyan-300 hover:underline flex items-center gap-1 font-mono"
                  >
                    Open in Figma <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Embedded Interactive Canvas */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black h-[520px] flex items-center justify-center shadow-2xl">
                {!isLoginProtoPlaying ? (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-surface-300/95 via-surface-400/95 to-black">
                    <div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-violet to-purple-500 flex items-center justify-center text-white shadow-glow-purple mb-4 cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setIsLoginProtoPlaying(true)}
                    >
                      <Play className="w-7 h-7 fill-white ml-1" />
                    </div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                      Play Dark Mode Login Prototype
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mb-5 leading-relaxed">
                      Click to initialize the live Figma prototype. Test the login field validation, button interactions, and dark mode state transitions.
                    </p>
                    <button
                      onClick={() => setIsLoginProtoPlaying(true)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-violet to-purple-600 hover:opacity-95 transition-all shadow-glow-purple flex items-center gap-2"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Start Interactive Session</span>
                    </button>
                  </div>
                ) : (
                  <iframe
                    key={loginProtoKey}
                    title="Minimal Dark Mode Login Figma Prototype"
                    className="w-full h-full border-0"
                    src={loginPrototypeEmbedUrl}
                    allowFullScreen
                  />
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
                <span>Figma Variables • WCAG AAA Contrast • Smart Animate</span>
                {isLoginProtoPlaying && (
                  <button
                    onClick={() => setLoginProtoKey((prev) => prev + 1)}
                    className="text-slate-300 hover:text-white flex items-center gap-1 text-xs"
                  >
                    <RefreshCw className="w-3 h-3" /> Reload Prototype
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 2. ORGANIC VEGETABLES APP: Interactive Screen Switcher */}
          {project.mockupType === 'organic-app' && (
            <div className="rounded-2xl p-4 sm:p-6 bg-surface-400 border border-emerald-500/30 shadow-2xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-emerald-300 font-bold text-xs font-mono">
                  <ShoppingBag className="w-4 h-4 text-emerald-400" /> High-Fidelity UI Screens: Home & Product Details
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  Figma Mobile System
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 p-1 bg-surface-300 rounded-xl border border-white/10">
                {[
                  { key: 'home', label: '1. Home Screen' },
                  { key: 'tomato', label: '2. PDP: Tomato' },
                  { key: 'onions', label: '3. PDP: Onions' },
                  { key: 'brinjal', label: '4. PDP: Brinjal' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setOrganicScreenTab(tab.key as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      organicScreenTab === tab.key
                        ? 'bg-emerald-500 text-slate-950 shadow-md font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0c0c10] flex justify-center p-2 sm:p-4 min-h-[460px]">
                {organicScreenTab === 'home' && (
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/organic/organic-home.jpg"
                      alt="Organic Vegetables Delivery Home Screen by Sujeev"
                      className="max-h-[520px] w-auto object-contain rounded-xl shadow-2xl"
                    />
                    <div className="text-[11px] text-slate-400 font-mono mt-3 text-center">
                      Home Screen: 10-minute delivery promise, category chips, best sellers, and Ask AI navigation.
                    </div>
                  </div>
                )}

                {organicScreenTab === 'tomato' && (
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/organic/organic-pdp-tomato.jpg"
                      alt="Organic Vegetables Product Detail Screen - Tomato"
                      className="max-h-[520px] w-auto object-contain rounded-xl shadow-2xl"
                    />
                    <div className="text-[11px] text-slate-400 font-mono mt-3 text-center">
                      Product Detail Screen: Tomato (1 Kg - ₹30), 48 hours replacement guarantee, sticky Add to Cart.
                    </div>
                  </div>
                )}

                {organicScreenTab === 'onions' && (
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/organic/organic-pdp-onions.jpg"
                      alt="Organic Vegetables Product Detail Screen - Onions"
                      className="max-h-[520px] w-auto object-contain rounded-xl shadow-2xl"
                    />
                    <div className="text-[11px] text-slate-400 font-mono mt-3 text-center">
                      Product Detail Screen: Onions (1 Kg - ₹28, MRP ₹35), category recommendations.
                    </div>
                  </div>
                )}

                {organicScreenTab === 'brinjal' && (
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/organic/organic-pdp-brinjal.jpg"
                      alt="Organic Vegetables Product Detail Screen - Brinjal"
                      className="max-h-[520px] w-auto object-contain rounded-xl shadow-2xl"
                    />
                    <div className="text-[11px] text-slate-400 font-mono mt-3 text-center">
                      Product Detail Screen: Brinjal (1 Kg - ₹32), high-resolution imagery and weight pricing.
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 3. POP UPI: Full Interactive 10-Slide Presentation Carousel */}
          {project.mockupType === 'pop-upi' && (
            <div className="rounded-2xl p-4 sm:p-6 bg-surface-400 border border-purple-500/30 shadow-2xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-2 text-brand-purple font-bold">
                  <Sparkles className="w-4 h-4" /> Full LinkedIn Case Study Carousel ({currentSlide} of {totalSlides})
                </span>
                <span className="text-slate-400">Use arrows or click buttons</span>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0f0f14] flex items-center justify-center min-h-[380px] p-2">
                <img
                  src={`/assets/pop-upi/slide-${currentSlide}.jpg`}
                  alt={`POP UPI UX Case Study Slide ${currentSlide} by Sujeev`}
                  className="max-h-[500px] w-auto object-contain rounded-lg shadow-2xl transition-all duration-200"
                />

                <button
                  onClick={() => setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-sm transition-all"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-sm transition-all"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 flex-wrap pt-2">
                {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentSlide(num)}
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${
                      currentSlide === num
                        ? 'bg-brand-violet text-white shadow-glow-purple scale-110'
                        : 'bg-surface-200 text-slate-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 4. District App: Side-by-Side High-Res View */}
          {project.mockupType === 'district-ia' && (
            <div className="rounded-2xl p-4 sm:p-6 bg-surface-400 border border-cyan-500/30 shadow-2xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-300 font-bold">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Before vs After: 4-Tab Bottom Navigation & Notifications
                </span>
                <span className="text-slate-400">High-Resolution Screens</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="text-xs font-mono text-red-400 font-bold mb-2">Original Interface</div>
                  <div className="rounded-xl overflow-hidden border border-red-500/20 bg-black max-w-[260px] shadow-lg">
                    <img src="/assets/district/district-original.jpg" alt="Original District App" className="w-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-xs font-mono text-emerald-400 font-bold mb-2">Sujeev's 4-Tab Redesign</div>
                  <div className="rounded-xl overflow-hidden border border-emerald-500/30 bg-black max-w-[260px] shadow-glow-cyan">
                    <img src="/assets/district/district-redesign.jpg" alt="Redesigned District App by Sujeev" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. Blinkit Recreation High-Res View */}
          {project.mockupType === 'blinkit-spotify' && (
            <div className="rounded-2xl p-4 sm:p-6 bg-surface-400 border border-yellow-500/30 shadow-2xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-yellow-300 font-bold">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Pixel-Accurate Figma Recreation vs Live App Screen
                </span>
                <span className="text-slate-400">100% Component Precision</span>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/10 bg-black flex justify-center">
                <img
                  src="/assets/blinkit-recreation.jpg"
                  alt="Blinkit Figma Recreation vs Original Screen by Sujeev"
                  className="w-full max-h-[550px] object-contain"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1">
                <span>Left: Sujeev's Figma Recreation (Address: Sujeev, Flat No:503)</span>
                <span>Right: Live Blinkit Production App</span>
              </div>
            </div>
          )}

          {/* 1. Problem & Friction Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-red-400 text-sm font-bold tracking-wide uppercase">
              <AlertTriangle className="w-4 h-4" /> 01. The UX Friction & Mental Model Gap
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {project.frictionPoints.map((point, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/15 text-xs text-slate-300 leading-normal">
                  <span className="text-red-400 font-bold block mb-1">Friction 0{idx + 1}:</span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* 2. Sujeev's Solution & Interventions */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold tracking-wide uppercase">
              <Lightbulb className="w-4 h-4" /> 02. The UX Intervention & Solution
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal bg-surface-200 p-4 rounded-xl border border-white/10">
              {project.solution}
            </p>

            {/* Step-by-Step Breakdown */}
            <div className="space-y-3">
              {project.interventionSteps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surface-200/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1">{step.stepTitle}</h4>
                    <p className="text-xs text-slate-400">{step.description}</p>
                  </div>
                  <span className="text-[11px] font-mono text-purple-300 bg-purple-950/50 px-3 py-1 rounded-md border border-purple-500/20 flex-shrink-0 self-start sm:self-auto">
                    {step.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Verified Outcomes & Impact */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-brand-purple text-sm font-bold tracking-wide uppercase">
              <CheckCircle2 className="w-4 h-4" /> 03. Outcomes & Evidence
            </div>
            <ul className="space-y-2">
              {project.outcomes.map((out, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Tools & Skills Footer */}
          <div className="p-4 rounded-xl bg-surface-400 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-mono">Tools:</span>
              {project.tools.map((tool) => (
                <span key={tool} className="text-xs font-mono px-2 py-0.5 rounded bg-surface-200 text-slate-300 border border-white/10">
                  {tool}
                </span>
              ))}
            </div>

            {project.prototypeUrl ? (
              <a
                href={project.prototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-violet to-purple-600 hover:opacity-90 transition-all shadow-glow-purple"
              >
                <span>Launch Prototype on Figma</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : (
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:opacity-90 transition-all shadow-glow-cyan"
              >
                <span>View Discussion on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
