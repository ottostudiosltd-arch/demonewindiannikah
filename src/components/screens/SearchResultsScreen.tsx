import React, { useState } from 'react';
import {
  ChevronLeft,
  SlidersHorizontal,
  MapPin,
  Sparkles,
  Heart,
  CheckCircle2,
  GraduationCap,
  Search,
  Filter,
  UserCheck
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
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedEducation, setSelectedEducation] = useState('All');

  const filterChips: ('All' | 'Verified' | 'New' | 'Nearby')[] = [
    'All',
    'Verified',
    'New',
    'Nearby'
  ];

  const filteredProfiles = profiles.filter((p) => {
    if (activeChip === 'Verified' && !p.isVerified) return false;
    if (activeChip === 'Nearby' && p.city !== 'Pune' && p.city !== 'Mumbai') return false;
    if (selectedCity !== 'All' && p.city !== selectedCity) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 animate-fade-in select-none">
      {/* Top Header & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#F5D7DF]/60">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="p-1.5 -ml-1 text-[#3E2330] hover:text-[#9B1B47] rounded-lg transition-colors"
          >
            <ChevronLeft size={22} strokeWidth={2.2} />
          </button>
          <div>
            <h1 className="text-lg sm:text-xl font-extrabold text-[#2A1620] tracking-tight">
              Matrimonial Profiles <span className="text-[#8E7B85] font-normal text-xs sm:text-sm">({filteredProfiles.length * 1240} Available)</span>
            </h1>
            <p className="text-xs text-[#7A6670] hidden sm:block">
              100% Free halal profiles verified with privacy protection
            </p>
          </div>
        </div>

        {/* Mobile Filter Trigger Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenFilters}
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#9B1B47] bg-[#FFF0F3] border border-[#EAC5CE]"
          >
            <SlidersHorizontal size={14} />
            <span>Search Filters</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Desktop Left Sidebar + Right Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Desktop Left Filter Sidebar (Hidden on mobile) */}
        <aside className="hidden md:block col-span-1 space-y-4">
          <div className="p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F5D7DF]">
              <span className="text-xs font-extrabold text-[#2A1620] flex items-center gap-1.5">
                <Filter size={14} className="text-[#9B1B47]" />
                Filter Profiles
              </span>
              <button
                onClick={() => {
                  setActiveChip('All');
                  setSelectedCity('All');
                }}
                className="text-[11px] text-[#9B1B47] hover:underline font-semibold"
              >
                Reset
              </button>
            </div>

            {/* City Filter */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-[#2A1620] mb-1.5">Location / City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full p-2 bg-[#FFF9FA] border border-[#EAC5CE] rounded-xl text-xs text-[#2A1620] focus:outline-none focus:border-[#9B1B47]"
              >
                <option value="All">All Cities</option>
                <option value="Pune">Pune, Maharashtra</option>
                <option value="Mumbai">Mumbai, Maharashtra</option>
                <option value="Bangalore">Bangalore, Karnataka</option>
                <option value="Delhi">Delhi, NCR</option>
                <option value="Hyderabad">Hyderabad, Telangana</option>
              </select>
            </div>

            {/* Verification Status */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-[#2A1620] mb-1.5">Verification</label>
              <div className="space-y-1.5 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeChip === 'Verified'}
                    onChange={() => setActiveChip(activeChip === 'Verified' ? 'All' : 'Verified')}
                    className="accent-[#9B1B47]"
                  />
                  <span>Verified Identity &amp; Family</span>
                </label>
              </div>
            </div>

            {/* Religious Practice */}
            <div>
              <label className="block text-xs font-bold text-[#2A1620] mb-1.5">Practice Level</label>
              <div className="space-y-1.5 text-xs text-[#523B47]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="practice" defaultChecked className="accent-[#9B1B47]" />
                  <span>Any Practice Level</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="practice" className="accent-[#9B1B47]" />
                  <span>Practicing (Daily Salah)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="practice" className="accent-[#9B1B47]" />
                  <span>Very Practicing (Sunnah Focused)</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Area: Chips + Profile Cards */}
        <div className="col-span-1 md:col-span-3">
          {/* Filter Chips Pills Row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-2 scrollbar-none">
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

          {/* Results List: List View on Mobile, Multi-column Cards on PC */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => onSelectProfile(profile)}
                className="flex sm:flex-col items-center sm:items-stretch gap-3 p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs hover:border-[#9B1B47] hover:shadow-card cursor-pointer transition-all active:scale-[0.99] group"
              >
                {/* Photo Thumbnail */}
                <div className="relative w-18 h-18 sm:w-full sm:aspect-4/3 rounded-xl overflow-hidden shrink-0 bg-[#FFF0F3]">
                  <img
                    src={profile.photoUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover filter blur-[2px] scale-105 group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Online Indicator */}
                  {profile.isOnline && (
                    <span className="absolute top-2 left-2 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full shadow-xs" />
                  )}

                  {/* Favorite Save Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(profile.id);
                    }}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white/85 backdrop-blur-xs text-[#9B1B47] hover:scale-110 transition-transform shadow-xs"
                  >
                    <Heart
                      size={15}
                      fill={profile.isSaved ? '#9B1B47' : 'none'}
                      className={profile.isSaved ? 'text-[#9B1B47]' : 'text-[#8E7B85]'}
                    />
                  </button>

                  {/* Verified Badge */}
                  {profile.isVerified && (
                    <div className="hidden sm:flex absolute bottom-2 left-2 items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 text-emerald-700 text-[10px] font-bold shadow-xs">
                      <CheckCircle2 size={11} className="text-emerald-600" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                {/* Details Stack */}
                <div className="flex-1 min-w-0 sm:mt-1">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-[#2A1620] truncate">
                      {profile.name}, {profile.age}
                    </h3>
                    {profile.isVerified && (
                      <span className="sm:hidden inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                        <CheckCircle2 size={10} className="text-emerald-600" />
                        Verified
                      </span>
                    )}
                    <span className="hidden sm:inline-block text-[10px] text-[#9B1B47] font-semibold bg-[#FFF0F3] px-1.5 py-0.2 rounded">
                      {profile.practiceLevel}
                    </span>
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
                    <p className="sm:hidden flex items-center gap-1 truncate">
                      <Sparkles size={11} className="shrink-0 text-[#9B1B47]" />
                      <span className="font-medium text-[#2A1620]">{profile.practiceLevel}</span>
                    </p>
                  </div>

                  {/* Desktop Action Button */}
                  <div className="hidden sm:block mt-3 pt-2.5 border-t border-[#F5D7DF]/60">
                    <button
                      type="button"
                      className="w-full py-1.5 bg-[#FFF0F3] hover:bg-[#9B1B47] hover:text-white text-[#9B1B47] text-xs font-bold rounded-xl transition-colors"
                    >
                      View Full Biodata
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
