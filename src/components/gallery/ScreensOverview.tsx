import React from 'react';
import { ScreenType } from '../../types';

interface ScreensOverviewProps {
  onSelectScreen: (screen: ScreenType) => void;
}

export const ScreensOverview: React.FC<ScreensOverviewProps> = ({ onSelectScreen }) => {
  const screens = [
    {
      id: 'home' as ScreenType,
      num: '1',
      title: 'Home Screen',
      subtitle: '(Clean & Focused)',
      description: 'Islamic arch hero, 3 trust pillars (Verified, Family, Safe), quick search launcher, and horizontal new profiles carousel.',
      color: 'bg-rose-50 border-rose-200 text-rose-800'
    },
    {
      id: 'search-options' as ScreenType,
      num: '2',
      title: 'Search Options',
      subtitle: '(Bottom Sheet)',
      description: 'Modal sheet offering Quick Search, Advanced Search, and instant Recent Searches recall.',
      color: 'bg-rose-50 border-rose-200 text-rose-800'
    },
    {
      id: 'quick-search' as ScreenType,
      num: '3',
      title: 'Quick Search',
      subtitle: '(Simple & Clean)',
      description: 'Looking for, Marital status, Age range (18-40), State & City selectors with high-contrast primary search CTA.',
      color: 'bg-rose-50 border-rose-200 text-rose-800'
    },
    {
      id: 'advanced-search' as ScreenType,
      num: '4',
      title: 'Advanced Search',
      subtitle: '(Organized Filters)',
      description: 'Categorized filters: Basic Details, Education & Profession, Religious Background, Family, Lifestyle, and Appearance.',
      color: 'bg-rose-50 border-rose-200 text-rose-800'
    },
    {
      id: 'search-results' as ScreenType,
      num: '5',
      title: 'Search Results',
      subtitle: '(Clean List View)',
      description: 'Results count (8,563), filter pills (All, Verified, New, Nearby), and card list view with verified badges and online indicators.',
      color: 'bg-rose-50 border-rose-200 text-rose-800'
    },
    {
      id: 'sidebar-menu' as ScreenType,
      num: '6',
      title: 'Sidebar Menu',
      subtitle: '(Keep Existing Features)',
      description: '100% Free Forever badge, full Matrimony navigation, Guidance & Content library, FAQ, and resources.',
      color: 'bg-slate-900 border-slate-700 text-white'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 animate-fade-in select-none">
      <div className="text-center mb-6">
        <span className="px-3 py-1 bg-[#FFF0F3] text-[#9B1B47] text-xs font-bold rounded-full border border-[#F3D5DD]">
          Complete UI/UX Transformation
        </span>
        <h2 className="text-xl md:text-2xl font-extrabold text-[#2A1620] mt-2">
          New IndiaNikah Design System
        </h2>
        <p className="text-xs md:text-sm text-[#7A6670] mt-1 max-w-lg mx-auto">
          All 6 core screens redesigned with Islamic elegance, modern touch ergonomics, and strict preservation of all original IndiaNikah features.
        </p>
      </div>

      {/* Grid of 6 Screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {screens.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectScreen(item.id)}
            className="group relative bg-white rounded-3xl border border-[#F3D5DD] p-4 shadow-sm hover:shadow-card hover:border-[#9B1B47] cursor-pointer transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="w-7 h-7 rounded-full bg-[#9B1B47] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {item.num}
                </span>
                <span className="text-[11px] font-semibold text-[#9B1B47] group-hover:underline">
                  Launch Screen →
                </span>
              </div>

              <h3 className="text-sm font-bold text-[#2A1620] group-hover:text-[#9B1B47] transition-colors">
                {item.title} <span className="font-normal text-xs text-[#7A6670]">{item.subtitle}</span>
              </h3>

              <p className="text-xs text-[#523B47] mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F5D7DF]/60 flex items-center justify-between text-[11px] font-medium text-[#8E7B85]">
              <span>Click to interact</span>
              <span className="w-2 h-2 rounded-full bg-[#9B1B47] group-hover:scale-125 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
