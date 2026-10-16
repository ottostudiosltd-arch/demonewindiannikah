import React from 'react';
import { X, Search, SlidersHorizontal, ChevronRight, Clock } from 'lucide-react';
import { RecentSearchItem } from '../../types';
import { FloralCornerBottom } from '../common/FloralPattern';

interface SearchBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuickSearch: () => void;
  onSelectAdvancedSearch: () => void;
  recentSearches: RecentSearchItem[];
  onSelectRecentSearch: (query: string) => void;
}

export const SearchBottomSheet: React.FC<SearchBottomSheetProps> = ({
  isOpen,
  onClose,
  onSelectQuickSearch,
  onSelectAdvancedSearch,
  recentSearches,
  onSelectRecentSearch
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center select-none">
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity"
      />

      {/* Bottom Sheet Container */}
      <div className="relative w-full max-w-md bg-[#FFF9FA] rounded-t-[32px] p-5 pb-8 shadow-sheet z-10 border-t border-[#F8D2DC] animate-slide-up overflow-hidden">
        {/* Soft Floral Botanical corner */}
        <FloralCornerBottom className="absolute -bottom-6 -right-6 w-32 h-32" />

        {/* Drag Handle */}
        <div className="w-12 h-1.5 bg-[#E6BAC5] rounded-full mx-auto mb-4" />

        {/* Sheet Header with Close Button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-extrabold text-[#2A1620] tracking-tight">
            How would you like to search?
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#7A6670] hover:text-[#9B1B47] hover:bg-[#FFF0F3] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search Mode Option Cards */}
        <div className="space-y-3">
          {/* Option 1: Quick Search */}
          <div
            onClick={onSelectQuickSearch}
            className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs cursor-pointer hover:border-[#9B1B47] hover:shadow-card active:scale-[0.99] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center shrink-0 group-hover:bg-[#9B1B47] group-hover:text-white transition-colors">
                <Search size={18} strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#2A1620] group-hover:text-[#9B1B47] transition-colors">
                  Quick Search
                </h3>
                <p className="text-xs text-[#7A6670]">
                  Essential filters for faster results
                </p>
              </div>
            </div>
            <ChevronRight size={18} className="text-[#8E7B85] group-hover:text-[#9B1B47] transition-colors" />
          </div>

          {/* Option 2: Advanced Search */}
          <div
            onClick={onSelectAdvancedSearch}
            className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs cursor-pointer hover:border-[#9B1B47] hover:shadow-card active:scale-[0.99] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center shrink-0 group-hover:bg-[#9B1B47] group-hover:text-white transition-colors">
                <SlidersHorizontal size={18} strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#2A1620] group-hover:text-[#9B1B47] transition-colors">
                  Advanced Search
                </h3>
                <p className="text-xs text-[#7A6670]">
                  More filters for better matching
                </p>
              </div>
            </div>
            <ChevronRight size={18} className="text-[#8E7B85] group-hover:text-[#9B1B47] transition-colors" />
          </div>
        </div>

        {/* Section: Recent Searches */}
        <div className="mt-6">
          <span className="text-[11px] font-bold text-[#8E7B85] uppercase tracking-wider block mb-2.5">
            RECENT SEARCHES
          </span>

          <div className="space-y-2">
            {recentSearches.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectRecentSearch(item.title)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white border border-[#F3D5DD] cursor-pointer text-xs font-medium text-[#2A1620] transition-colors"
              >
                <Clock size={14} className="text-[#9B1B47] shrink-0" />
                <span className="truncate">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
