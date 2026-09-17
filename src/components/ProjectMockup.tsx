import React from 'react';
import { Sparkles, QrCode, Smartphone, Bell, ShoppingBag, Music, ShieldCheck, Check, ArrowRight, Eye } from 'lucide-react';

interface ProjectMockupProps {
  type: 'pop-upi' | 'district-ia' | 'organic-app' | 'blinkit-spotify' | 'dark-mode-login';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  switch (type) {
    case 'pop-upi':
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-surface-100 to-surface-300 rounded-2xl p-4 flex flex-col justify-between border border-white/10 relative overflow-hidden group/mockup">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-white/5 pb-2">
            <span>POP UPI • Payment Intent</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Verified
            </span>
          </div>

          <div className="my-auto py-2">
            <div className="bg-surface-200/90 rounded-xl p-3.5 border border-purple-500/20 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-cyan flex items-center justify-center text-white shadow-inner">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Universal UPI Transfer</div>
                  <div className="text-[10px] text-slate-400">Merchant QR • Phone • UPI ID</div>
                </div>
              </div>

              <div className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-brand-violet to-purple-600 text-white font-bold text-xs flex items-center justify-between shadow-glow-purple">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  Pay Anyone
                </span>
                <span className="text-[9px] font-mono bg-white/20 px-1.5 py-0.5 rounded text-white">Zero Friction</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/5">
            <span className="text-slate-400 font-mono">Cognitive Copy Alignment</span>
            <span className="text-purple-300 font-medium font-mono">Figma Auto-Layout</span>
          </div>
        </div>
      );

    case 'district-ia':
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-surface-100 to-surface-300 rounded-2xl p-4 flex flex-col justify-between border border-white/10 relative overflow-hidden group/mockup">
          <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan text-[10px] font-bold">D</div>
              <span className="text-xs font-bold text-white">District</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-medium">
              <Bell className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>Show Alerts (2)</span>
            </div>
          </div>

          <div className="my-2 bg-surface-200/90 rounded-xl p-3 border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400 font-mono">ACTIVE PASS • 1 TAP</div>
              <div className="text-xs font-bold text-white mt-0.5">Coldplay Mumbai Live Pass</div>
            </div>
            <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">READY</span>
          </div>

          <div className="bg-surface-300/95 rounded-xl p-2 border border-cyan-500/20 grid grid-cols-4 gap-1 text-center shadow-lg">
            {[
              { label: 'Home', active: false },
              { label: 'Experiences', active: true },
              { label: 'Wishlist', active: false },
              { label: 'Profile', active: false },
            ].map((tab) => (
              <div
                key={tab.label}
                className={`py-1 rounded-md text-[10px] font-medium transition-all ${
                  tab.active ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm' : 'text-slate-500'
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>
      );

    case 'organic-app':
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-surface-100 to-surface-300 rounded-2xl p-3 flex flex-col justify-between border border-white/10 relative overflow-hidden group/mockup">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" /> Real High-Fidelity UI Screens
            </span>
            <span className="text-[9px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/20">
              Home + Product Details
            </span>
          </div>

          {/* Embedded Real Visual Screen Thumbnails */}
          <div className="relative my-2 rounded-xl overflow-hidden border border-white/10 bg-black grid grid-cols-2 gap-1.5 p-1">
            <div className="rounded-lg overflow-hidden max-h-[135px]">
              <img
                src="/assets/organic/organic-home.jpg"
                alt="Organic Vegetables Delivery Home Screen by Sujeev"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/mockup:scale-105"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden max-h-[135px]">
              <img
                src="/assets/organic/organic-pdp-tomato.jpg"
                alt="Organic Vegetables Product Detail Screen by Sujeev"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/mockup:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
            <span className="text-emerald-300">Click to Inspect All 4 Screens</span>
            <span className="text-slate-400">Interactive Prototype</span>
          </div>
        </div>
      );

    case 'blinkit-spotify':
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-surface-100 to-surface-300 rounded-2xl p-3 flex flex-col justify-between border border-white/10 relative overflow-hidden group/mockup">
          <div className="absolute inset-0 bg-yellow-500/5 pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-yellow-300 font-semibold">
              <Sparkles className="w-3 h-3 text-yellow-400" /> Real Recreation in Figma
            </span>
            <span className="text-slate-400">Side-by-Side</span>
          </div>

          <div className="relative my-2 rounded-xl overflow-hidden border border-white/10 max-h-[140px] bg-black">
            <img
              src="/assets/blinkit-recreation.jpg"
              alt="Blinkit Figma Recreation vs Original Screen by Sujeev"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/mockup:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2">
              <span className="text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                Recreated vs Original
              </span>
              <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                100% Pixel Match
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
            <span className="text-purple-300">Click to Inspect Full Resolution</span>
            <span className="text-slate-400">LinkedIn Showcase</span>
          </div>
        </div>
      );

    case 'dark-mode-login':
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-surface-100 to-surface-300 rounded-2xl p-4 flex flex-col justify-between border border-white/10 relative overflow-hidden group/mockup">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-slate-400">
            <span>Figma Variables Architecture</span>
            <span className="text-purple-300">WCAG AAA Contrast</span>
          </div>

          <div className="my-2 bg-surface-200/90 p-3 rounded-xl border border-purple-500/30 shadow-lg">
            <div className="text-[10px] font-mono text-slate-400 mb-1">var(--input-surface)</div>
            <div className="w-full py-1.5 px-2.5 rounded-lg bg-surface-300 border border-purple-400/50 text-[11px] text-slate-200 flex items-center justify-between shadow-inner">
              <span>sujeev@design.io</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="w-full mt-2 py-1.5 rounded-lg bg-gradient-to-r from-brand-violet to-purple-600 text-white font-semibold text-[11px] text-center shadow-glow-purple">
              Sign In with Tokens
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
            <span className="text-slate-400">Light / Dark Dynamic</span>
            <span className="text-cyan-300">Design System Ready</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
