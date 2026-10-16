import React from 'react';
import { Smartphone, LayoutGrid, Monitor, Sparkles } from 'lucide-react';
import { ViewportMode, ScreenType } from '../../types';

interface TopControlBarProps {
  mode: ViewportMode;
  onModeChange: (mode: ViewportMode) => void;
  activeScreen: ScreenType;
  onScreenChange: (screen: ScreenType) => void;
}

export const TopControlBar: React.FC<TopControlBarProps> = ({
  mode,
  onModeChange,
  activeScreen,
  onScreenChange
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#F0D5DD] px-3 py-2 shadow-xs select-none">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Brand Label */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#9B1B47] text-white flex items-center justify-center font-black text-xs">
            b
          </div>
          <div>
            <h1 className="text-xs font-bold text-[#2A1620] flex items-center gap-1">
              <span>IndiaNikah UI/UX Redesign</span>
              <span className="px-1.5 py-0.2 rounded-full bg-[#FFF0F3] text-[#9B1B47] text-[10px] font-semibold border border-[#F3D5DD]">
                Live Demo
              </span>
            </h1>
          </div>
        </div>

        {/* Viewport Mode Switcher */}
        <div className="flex items-center bg-[#FFF0F3] p-1 rounded-xl border border-[#F3D5DD]">
          <button
            onClick={() => onModeChange('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              mode === 'mobile' ? 'bg-[#9B1B47] text-white shadow-xs' : 'text-[#7A6670] hover:text-[#2A1620]'
            }`}
          >
            <Smartphone size={13} />
            <span>Mobile View</span>
          </button>

          <button
            onClick={() => onModeChange('gallery')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              mode === 'gallery' ? 'bg-[#9B1B47] text-white shadow-xs' : 'text-[#7A6670] hover:text-[#2A1620]'
            }`}
          >
            <LayoutGrid size={13} />
            <span>All 6 Screens</span>
          </button>

          <button
            onClick={() => onModeChange('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              mode === 'desktop' ? 'bg-[#9B1B47] text-white shadow-xs' : 'text-[#7A6670] hover:text-[#2A1620]'
            }`}
          >
            <Monitor size={13} />
            <span>Responsive Web</span>
          </button>
        </div>

        {/* Quick Screen Jumper */}
        <div className="hidden sm:flex items-center gap-1 text-[11px]">
          <span className="text-[#8E7B85] mr-1">Quick jump:</span>
          {(['home', 'quick-search', 'advanced-search', 'search-results'] as ScreenType[]).map((scr) => (
            <button
              key={scr}
              onClick={() => {
                onScreenChange(scr);
                if (mode === 'gallery') onModeChange('mobile');
              }}
              className={`px-2 py-0.5 rounded-md border text-xs capitalize ${
                activeScreen === scr
                  ? 'bg-[#FFF0F3] text-[#9B1B47] border-[#9B1B47] font-semibold'
                  : 'bg-white text-[#7A6670] border-[#EAC5CE] hover:border-[#9B1B47]'
              }`}
            >
              {scr.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
