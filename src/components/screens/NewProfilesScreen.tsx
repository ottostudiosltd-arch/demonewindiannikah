import React, { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  GraduationCap,
  Sparkles,
  Heart,
  CheckCircle2,
  X,
  Cake,
  RotateCcw
} from 'lucide-react';
import { UserProfile } from '../../types';
import { FloralArchTop } from '../common/FloralPattern';

interface NewProfilesScreenProps {
  profiles: UserProfile[];
  onSelectProfile: (profile: UserProfile) => void;
  onToggleSave: (profileId: string) => void;
}

export const NewProfilesScreen: React.FC<NewProfilesScreenProps> = ({
  profiles,
  onSelectProfile,
  onToggleSave
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChip, setActiveChip] = useState<'All' | 'Verified' | 'Nearby'>('All');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Filter States
  const [minAge, setMinAge] = useState(20);
  const [maxAge, setMaxAge] = useState(28);
  const [selectedState, setSelectedState] = useState('All');
  const [selectedPractice, setSelectedPractice] = useState('Any');
  const [appliedFilters, setAppliedFilters] = useState<{
    age?: string;
    state?: string;
    practice?: string;
  }>({
    age: 'Age 20 - 28',
    state: 'Maharashtra',
    practice: 'Practicing'
  });

  const removeFilter = (key: 'age' | 'state' | 'practice') => {
    setAppliedFilters((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleApplyFilters = () => {
    setAppliedFilters({
      age: `Age ${minAge} - ${maxAge}`,
      state: selectedState !== 'All' ? selectedState : undefined,
      practice: selectedPractice !== 'Any' ? selectedPractice : undefined
    });
    setIsFilterModalOpen(false);
  };

  const handleResetFilters = () => {
    setMinAge(18);
    setMaxAge(40);
    setSelectedState('All');
    setSelectedPractice('Any');
    setAppliedFilters({});
    setIsFilterModalOpen(false);
  };

  const filteredProfiles = profiles.filter((p) => {
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matches =
        p.name.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q) ||
        p.education.toLowerCase().includes(q) ||
        p.occupation.toLowerCase().includes(q);
      if (!matches) return false;
    }

    // Top chip filter
    if (activeChip === 'Verified' && !p.isVerified) return false;
    if (activeChip === 'Nearby' && p.city !== 'Pune' && p.city !== 'Mumbai') return false;

    // Applied filter tags
    if (appliedFilters.state && p.state.toLowerCase() !== appliedFilters.state.toLowerCase()) {
      return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 animate-fade-in select-none">
      {/* Header Matching Image 1 */}
      <div className="relative text-center sm:text-left mb-4 sm:mb-6">
        <FloralArchTop className="absolute -top-2 left-0 right-0 w-full opacity-30 pointer-events-none" />
        <h1 className="text-xl sm:text-2xl font-black text-[#2A1620] tracking-tight flex items-center justify-center sm:justify-start gap-2">
          <span>New Profiles</span>
          <span className="text-[#9B1B47] font-normal text-lg">♡</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#7A6670] mt-0.5">
          Recently joined profiles. Find your compatible life partner, insha'Allah.
        </p>
      </div>

      {/* Search Input Bar with Filter Button */}
      <div className="relative flex items-center gap-2 mb-3.5">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9B1B47]">
            <Search size={16} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, city, profession..."
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#EAC5CE] hover:border-[#9B1B47] focus:border-[#9B1B47] rounded-2xl text-xs sm:text-sm text-[#2A1620] focus:outline-none shadow-xs transition-colors"
          />
        </div>

        {/* Filter Slider Trigger */}
        <button
          onClick={() => setIsFilterModalOpen(true)}
          className="p-2.5 rounded-2xl bg-white border border-[#EAC5CE] hover:border-[#9B1B47] text-[#9B1B47] shadow-xs hover:bg-[#FFF0F3] transition-colors"
        >
          <SlidersHorizontal size={17} strokeWidth={2.2} />
        </button>
      </div>

      {/* Filter Pills Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-2">
        <button
          onClick={() => setActiveChip('All')}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
            activeChip === 'All'
              ? 'bg-[#9B1B47] text-white shadow-xs'
              : 'bg-white border border-[#EAC5CE] text-[#3E2330] hover:border-[#9B1B47]'
          }`}
        >
          All
        </button>

        <button
          onClick={() => setActiveChip('Verified')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
            activeChip === 'Verified'
              ? 'bg-[#9B1B47] text-white shadow-xs'
              : 'bg-white border border-[#EAC5CE] text-[#3E2330] hover:border-[#9B1B47]'
          }`}
        >
          <CheckCircle2 size={12} className={activeChip === 'Verified' ? 'text-white' : 'text-[#9B1B47]'} />
          <span>Verified</span>
        </button>

        <button
          onClick={() => setActiveChip('Nearby')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
            activeChip === 'Nearby'
              ? 'bg-[#9B1B47] text-white shadow-xs'
              : 'bg-white border border-[#EAC5CE] text-[#3E2330] hover:border-[#9B1B47]'
          }`}
        >
          <MapPin size={12} className={activeChip === 'Nearby' ? 'text-white' : 'text-[#9B1B47]'} />
          <span>Nearby</span>
        </button>
      </div>

      {/* Applied Filter Tags Row (with 'x' to dismiss) */}
      {Object.keys(appliedFilters).length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {appliedFilters.age && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF0F3] border border-[#F3D5DD] text-[#9B1B47] text-xs font-semibold">
              <span>{appliedFilters.age}</span>
              <button onClick={() => removeFilter('age')} className="hover:text-black">
                <X size={12} />
              </button>
            </span>
          )}

          {appliedFilters.state && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF0F3] border border-[#F3D5DD] text-[#9B1B47] text-xs font-semibold">
              <span>{appliedFilters.state}</span>
              <button onClick={() => removeFilter('state')} className="hover:text-black">
                <X size={12} />
              </button>
            </span>
          )}

          {appliedFilters.practice && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF0F3] border border-[#F3D5DD] text-[#9B1B47] text-xs font-semibold">
              <span>{appliedFilters.practice}</span>
              <button onClick={() => removeFilter('practice')} className="hover:text-black">
                <X size={12} />
              </button>
            </span>
          )}
        </div>
      )}

      {/* PROFILES GRID - FIXED NO OVERLAPPING (2 COLUMNS ON MOBILE, 3-4 ON DESKTOP) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 pb-20 sm:pb-8">
        {filteredProfiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => onSelectProfile(profile)}
            className="bg-white rounded-2xl border border-[#F3D5DD] p-2 sm:p-3 shadow-xs hover:border-[#9B1B47] hover:shadow-card cursor-pointer transition-all flex flex-col justify-between group overflow-hidden"
          >
            {/* Photo Container with Fixed Aspect Ratio (Never overlaps) */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#FFF0F3] shrink-0">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="w-full h-full object-cover filter blur-[2px] scale-105 group-hover:scale-110 transition-transform duration-300"
              />

              {/* 'New' Badge Top Left */}
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#9B1B47] text-white text-[9px] font-extrabold shadow-xs">
                New
              </span>

              {/* Favorite Heart Top Right */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(profile.id);
                }}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-white/85 backdrop-blur-xs text-[#9B1B47] hover:scale-110 active:scale-95 transition-transform shadow-xs"
              >
                <Heart
                  size={14}
                  fill={profile.isSaved ? '#9B1B47' : 'none'}
                  className={profile.isSaved ? 'text-[#9B1B47]' : 'text-[#8E7B85]'}
                />
              </button>

              {/* Verified Badge Bottom Overlay */}
              {profile.isVerified && (
                <div className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/95 text-emerald-700 text-[9px] font-bold shadow-xs">
                  <CheckCircle2 size={10} className="text-emerald-600" />
                  <span>Verified</span>
                </div>
              )}
            </div>

            {/* Profile Meta Details (Consistent Line Heights & Truncation) */}
            <div className="mt-2 text-left flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#2A1620] truncate">
                  {profile.name}, {profile.age}
                </h3>

                <p className="flex items-center gap-1 text-[11px] text-[#7A6670] mt-0.5 truncate">
                  <MapPin size={10} className="shrink-0 text-[#9B1B47]" />
                  <span>{profile.city}, {profile.state}</span>
                </p>

                <p className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#523B47] mt-0.5 truncate">
                  <GraduationCap size={10} className="shrink-0 text-[#9B1B47]" />
                  <span>{profile.education}</span>
                </p>

                <p className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#2A1620] font-medium mt-0.5 truncate">
                  <Sparkles size={10} className="shrink-0 text-[#9B1B47]" />
                  <span>{profile.practiceLevel}</span>
                </p>
              </div>

              {/* View Biodata CTA */}
              <button
                type="button"
                className="mt-2.5 w-full py-1 text-center text-[11px] font-bold text-[#9B1B47] bg-[#FFF0F3] group-hover:bg-[#9B1B47] group-hover:text-white rounded-lg transition-colors"
              >
                View Biodata
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FILTER BOTTOM SHEET MODAL (FIXED OVERLAY ABOVE BOTTOM NAV) */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center select-none">
          <div
            onClick={() => setIsFilterModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          <div className="relative w-full max-w-md max-h-[88vh] overflow-y-auto bg-[#FFF9FA] rounded-t-[32px] p-5 pb-10 shadow-2xl z-[101] border-t border-[#F8D2DC] animate-slide-up">
            <div className="w-12 h-1.5 bg-[#E6BAC5] rounded-full mx-auto mb-4" />

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-extrabold text-[#2A1620]">
                Filter New Profiles
              </h2>
              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="p-1 rounded-full text-[#7A6670] hover:text-[#9B1B47]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              {/* Age Range */}
              <div>
                <label className="block font-bold text-[#2A1620] mb-1.5">Age range</label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B1B47]">
                      <Cake size={15} />
                    </div>
                    <select
                      value={minAge}
                      onChange={(e) => setMinAge(Number(e.target.value))}
                      className="w-full pl-8 pr-6 py-2 bg-white border border-[#EAC5CE] rounded-xl text-xs font-semibold text-[#2A1620] focus:outline-none focus:border-[#9B1B47]"
                    >
                      {[18, 20, 22, 24, 26, 28, 30].map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                  <span className="text-xs text-[#7A6670]">to</span>
                  <div className="relative flex-1">
                    <select
                      value={maxAge}
                      onChange={(e) => setMaxAge(Number(e.target.value))}
                      className="w-full px-3 pr-6 py-2 bg-white border border-[#EAC5CE] rounded-xl text-xs font-semibold text-[#2A1620] focus:outline-none focus:border-[#9B1B47]"
                    >
                      {[22, 24, 26, 28, 30, 32, 35, 40].map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* State */}
              <div>
                <label className="block font-bold text-[#2A1620] mb-1.5">State</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B1B47]">
                    <MapPin size={15} />
                  </div>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full pl-8 pr-6 py-2 bg-white border border-[#EAC5CE] rounded-xl text-xs font-semibold text-[#2A1620] focus:outline-none focus:border-[#9B1B47]"
                  >
                    <option value="All">All States</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Gujarat">Gujarat</option>
                  </select>
                </div>
              </div>

              {/* Practicing */}
              <div>
                <label className="block font-bold text-[#2A1620] mb-1.5">Practicing</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B1B47]">
                    <Sparkles size={15} />
                  </div>
                  <select
                    value={selectedPractice}
                    onChange={(e) => setSelectedPractice(e.target.value)}
                    className="w-full pl-8 pr-6 py-2 bg-white border border-[#EAC5CE] rounded-xl text-xs font-semibold text-[#2A1620] focus:outline-none focus:border-[#9B1B47]"
                  >
                    <option value="Any">Any</option>
                    <option value="Practicing">Practicing (Daily Salah)</option>
                    <option value="Very Practicing">Very Practicing (Sunnah Focused)</option>
                  </select>
                </div>
              </div>

              {/* CTA Apply */}
              <div className="pt-2">
                <button
                  onClick={handleApplyFilters}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#9B1B47] hover:bg-[#83143B] text-white text-xs font-bold rounded-2xl shadow-sm transition-all"
                >
                  <SlidersHorizontal size={14} />
                  <span>Apply Filters</span>
                </button>

                <button
                  onClick={handleResetFilters}
                  className="w-full py-2 text-center text-xs text-[#7A6670] hover:text-[#9B1B47] font-semibold mt-1"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
