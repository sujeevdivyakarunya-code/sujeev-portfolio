import React, { useState } from 'react';
import { Play, Sparkles, ArrowUpRight, Maximize2, Smartphone, RefreshCw, Layers } from 'lucide-react';

export const FigmaLiveEmbed: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const rawPrototypeUrl = "https://www.figma.com/proto/zNwMTszvxegCsnzDWyAIym/Untitled?node-id=11-81&viewport=-982%2C217%2C0.13&t=XJ2Z5j2miWHhLRD3-1&scaling=contain&content-scaling=fixed&starting-point-node-id=11%3A81&page-id=0%3A1";
  
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(rawPrototypeUrl)}`;

  return (
    <section id="figma-prototype" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-12 border border-purple-500/20 shadow-2xl relative overflow-hidden">
        
        {/* Ambient Backlight Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-violet/15 blur-[120px] rounded-full pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Design Engineering
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Live Figma Prototype & Animation Player
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2 font-normal">
              Test real micro-interactions, state transitions, and user flows directly in your browser without leaving the portfolio.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <a
              href={rawPrototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-brand-cyan bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all shadow-sm"
            >
              <span>Open in Figma</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Interactive Device Embed Container */}
        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/15 bg-[#09090e] shadow-2xl">
          
          {/* Top Player Chrome Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-surface-300 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-3 h-3 rounded-full bg-red-500/70 inline-block"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block"></div>
              <span className="text-slate-400 ml-2 hidden sm:inline">figma.com/proto/sujeev-design</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIframeKey((prev) => prev + 1)}
                className="p-1.5 rounded-lg bg-surface-200 hover:bg-surface-100 text-slate-400 hover:text-white transition-colors"
                title="Reload Prototype"
                aria-label="Reload Prototype"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30">
                LIVE INTERACTIVE
              </span>
            </div>
          </div>

          {/* Player Display Area */}
          <div className="relative w-full h-[540px] sm:h-[650px] bg-black flex items-center justify-center overflow-hidden">
            {!isPlaying ? (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-surface-300/90 via-surface-400/95 to-black">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-cyan flex items-center justify-center text-white shadow-glow-purple mb-4 group cursor-pointer hover:scale-105 transition-transform"
                     onClick={() => setIsPlaying(true)}>
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Launch Interactive Figma Prototype
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                  Click to initialize the live Figma prototype engine. You can tap buttons, test animations, and experience the full user journey live.
                </p>
                <button
                  onClick={() => setIsPlaying(true)}
                  className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-violet to-purple-600 hover:opacity-95 transition-all shadow-glow-purple flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Start Interactive Session</span>
                </button>
              </div>
            ) : (
              <iframe
                key={iframeKey}
                title="Sujeev Kumar Figma Interactive Prototype"
                className="w-full h-full border-0"
                src={embedUrl}
                allowFullScreen
              />
            )}
          </div>

          {/* Bottom Player Footer */}
          <div className="px-4 py-3 bg-surface-300/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse"></span>
              Smart Animate Transitions • Auto-Layout Responsive Constraints
            </span>
            <a
              href={rawPrototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-purple-300 hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              Open Full Screen on Figma <Maximize2 className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
