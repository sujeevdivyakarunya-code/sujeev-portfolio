import React, { useState, useEffect } from 'react';
import { creatorProfile } from '../data/portfolioData';
import { ArrowUp, Clock, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-surface-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding and Location */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-violet to-brand-cyan flex items-center justify-center font-display font-bold text-white text-xs shadow-inner">
            SM
          </div>
          <div>
            <div className="text-sm font-bold text-white">{creatorProfile.name}</div>
            <div className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
              <MapPin className="w-3 h-3 text-brand-cyan" />
              <span>Vijayawada, Andhra Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* Center: Real-time Digital Clock (IST) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-200 border border-white/10 text-xs font-mono text-slate-300">
          <Clock className="w-3.5 h-3.5 text-purple-400" />
          <span>Local Time: {localTime || '12:00:00 PM'} IST</span>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500">
            © {new Date().getFullYear()} • Crafted with Figma & Code
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-surface-200 hover:bg-surface-100 border border-white/10 text-slate-400 hover:text-white transition-all shadow-sm"
            aria-label="Back to Top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
