import React, { useState } from 'react';
import {
  ChevronLeft,
  SlidersHorizontal,
  MapPin,
  Briefcase,
  Sparkles,
  Heart,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { UserProfile } from '../../types';

interface SearchResultsScreenProps {
  profiles: UserProfile[];
  onBack: () => void;
  onOpenFilters: () => void;
  onSelectProfile: (profile: UserProfile) => void;
  onToggleSave: (profileId: string) => void;
}

export const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({
  profiles,
  onBack,
  onOpenFilters,
  onSelectProfile,
  onToggleSave
}) => {
  const [activeChip, setActiveChip] = useState<'All' | 'Verified' | 'New' | 'Nearby'>('All');

  const filterChips: ('All' | 'Verified' | 'New' | 'Nearby')[] = [
    'All',
    'Verified',
    'New',
    'Nearby'
  ];

  const filteredProfiles = profiles.filter((p) => {
    if (activeChip === 'Verified') return p.isVerified;
    if (activeChip === 'Nearby') return p.city === 'Pune' || p.city === 'Mumbai';
    return true;
  });

  return (
    <div className="min-h-screen pb-24 px-4 pt-1 animate-fade-in select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between py-2 mb-3 border-b border-[#F5D7DF]/60">
        <button
          onClick={onBack}
          className="p-1.5 -ml-1 text-[#3E2330] hover:text-[#9B1B47] rounded-lg transition-colors"
        >
          <ChevronLeft size={22} strokeWidth={2.2} />
        </button>

        <h1 className="text-base font-extrabold text-[#2A1620] tracking-tight">
          Search Results <span className="text-[#8E7B85] font-normal text-xs">(8,563)</span>
        </h1>

        <button
          onClick={onOpenFilters}
          className="p-1.5 text-[#9B1B47] hover:bg-[#FFF0F3] rounded-lg transition-colors"
        >
          <SlidersHorizontal size={18} strokeWidth={2.2} />
        </button>
      </div>

      {/* Filter Chips Pills Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
        {filterChips.map((chip) => {
          const isActive = activeChip === chip;
          return (
            <button
              key={chip}
              onClick={() => setActiveChip(chip)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#9B1B47] text-white shadow-xs'
                  : 'bg-white border border-[#EAC5CE] text-[#3E2330] hover:border-[#9B1B47]'
              }`}
            >
              {chip}
            </button>
          );
        })}
      </div>

      {/* Clean List View of Profiles */}
      <div className="space-y-3 mt-1">
        {filteredProfiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => onSelectProfile(profile)}
            className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs hover:border-[#9B1B47] hover:shadow-card cursor-pointer transition-all active:scale-[0.99] group"
          >
            {/* Left Photo Thumbnail */}
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#FFF0F3]">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="w-full h-full object-cover filter blur-[2px] scale-105"
              />
              {/* Online Green Dot */}
              {profile.isOnline && (
                <span className="absolute top-1 left-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full shadow-xs" />
              )}
            </div>

            {/* Middle Details Stack */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-[#2A1620] truncate">
                  {profile.name}, {profile.age}
                </h3>
                {profile.isVerified && (
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                    <CheckCircle2 size={10} className="text-emerald-600" />
                    Verified
                  </span>
                )}
              </div>

              <div className="mt-1 space-y-0.5 text-[11px] text-[#7A6670]">
                <p className="flex items-center gap-1 truncate">
                  <MapPin size={11} className="shrink-0 text-[#9B1B47]" />
                  <span>{profile.city}, {profile.state}</span>
                </p>
                <p className="flex items-center gap-1 truncate">
                  <GraduationCap size={11} className="shrink-0 text-[#9B1B47]" />
                  <span>{profile.education}</span>
                </p>
                <p className="flex items-center gap-1 truncate">
                  <Sparkles size={11} className="shrink-0 text-[#9B1B47]" />
                  <span className="font-medium text-[#2A1620]">{profile.practiceLevel}</span>
                </p>
              </div>
            </div>

            {/* Right Favorite Save Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(profile.id);
              }}
              className="p-2 rounded-full text-[#9B1B47] hover:bg-[#FFF0F3] transition-colors"
            >
              <Heart
                size={18}
                fill={profile.isSaved ? '#9B1B47' : 'none'}
                className={profile.isSaved ? 'text-[#9B1B47]' : 'text-[#8E7B85]'}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
