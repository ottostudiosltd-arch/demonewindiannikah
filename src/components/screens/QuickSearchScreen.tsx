import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronDown,
  Check,
  Heart,
  Cake,
  MapPin,
  Building2,
  Search,
  Sparkles,
  Minus,
  Plus
} from 'lucide-react';
import { FloralCornerBottom } from '../common/FloralPattern';

interface QuickSearchScreenProps {
  onBack: () => void;
  onExecuteSearch: (filters: any) => void;
}

export const QuickSearchScreen: React.FC<QuickSearchScreenProps> = ({
  onBack,
  onExecuteSearch
}) => {
  // Matrimonial looking for: Bride (Dulhan) or Groom (Dulha)
  const [lookingFor, setLookingFor] = useState<'Bride' | 'Groom'>('Bride');
  const [maritalStatus, setMaritalStatus] = useState<string>('Never Married');
  const [minAge, setMinAge] = useState<number>(20);
  const [maxAge, setMaxAge] = useState<number>(28);
  const [state, setState] = useState<string>('Maharashtra');
  const [city, setCity] = useState<string>('Pune');

  // Custom Dropdown open states
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);

  const indianStates = [
    'All States',
    'Maharashtra',
    'Karnataka',
    'Delhi NCR',
    'Telangana',
    'Uttar Pradesh',
    'Gujarat',
    'Kerala',
    'West Bengal',
    'Bihar'
  ];

  const citiesMap: { [key: string]: string[] } = {
    'Maharashtra': ['All Cities', 'Pune', 'Mumbai', 'Nagpur', 'Nashik', 'Aurangabad'],
    'Karnataka': ['All Cities', 'Bangalore', 'Mysore', 'Hubli', 'Mangalore'],
    'Delhi NCR': ['All Cities', 'Central Delhi', 'South Delhi', 'Noida', 'Gurgaon'],
    'Telangana': ['All Cities', 'Hyderabad', 'Secunderabad', 'Warangal'],
    'Uttar Pradesh': ['All Cities', 'Lucknow', 'Kanpur', 'Agra', 'Aligarh'],
    'Gujarat': ['All Cities', 'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot']
  };

  const availableCities = citiesMap[state] || ['All Cities', 'Pune', 'Mumbai', 'Bangalore', 'Delhi', 'Hyderabad'];

  const maritalOptions = [
    { id: 'Any status', label: 'Any Status' },
    { id: 'Never Married', label: 'Never Married' },
    { id: 'Divorced', label: 'Divorced' },
    { id: 'Widowed', label: 'Widowed' },
  ];

  const agePresets = [
    { min: 18, max: 24, label: '18 - 24' },
    { min: 20, max: 28, label: '20 - 28' },
    { min: 24, max: 30, label: '24 - 30' },
    { min: 28, max: 35, label: '28 - 35' },
  ];

  const handleSearch = () => {
    onExecuteSearch({
      gender: lookingFor === 'Bride' ? 'Sister' : 'Brother',
      maritalStatus,
      minAge,
      maxAge,
      state,
      city
    });
  };

  return (
    <div className="relative min-h-[90vh] pb-28 px-4 pt-2 animate-fade-in select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between py-2 mb-4 border-b border-[#F5D7DF]/60">
        <button
          onClick={onBack}
          className="p-1.5 -ml-1 text-[#3E2330] hover:text-[#9B1B47] rounded-lg transition-colors"
        >
          <ChevronLeft size={22} strokeWidth={2.2} />
        </button>
        <div className="text-center">
          <h1 className="text-base font-extrabold text-[#2A1620] tracking-tight">
            Quick Match Search
          </h1>
          <p className="text-[10px] text-[#7A6670]">Find your life partner in accordance with Sunnah</p>
        </div>
        <div className="w-8" />
      </div>

      <div className="space-y-5 max-w-sm mx-auto">
        {/* 1. I AM LOOKING FOR - ANIMATED BRIDE / GROOM SELECTOR */}
        <div>
          <label className="block text-xs font-extrabold text-[#2A1620] mb-2 flex items-center justify-between">
            <span>I am looking for:</span>
            <span className="text-[10px] text-[#9B1B47] font-semibold bg-[#FFF0F3] px-2 py-0.5 rounded-full">
              {lookingFor === 'Bride' ? '👰 Seeking Bride (Dulhan)' : '🤵 Seeking Groom (Dulha)'}
            </span>
          </label>

          <div className="grid grid-cols-2 gap-2.5 p-1 bg-[#FFF0F3] rounded-2xl border border-[#F3D5DD]">
            <button
              type="button"
              onClick={() => setLookingFor('Bride')}
              className={`relative flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs transition-all duration-300 ${
                lookingFor === 'Bride'
                  ? 'bg-gradient-to-r from-[#9B1B47] to-[#C51E50] text-white shadow-md shadow-[#9B1B47]/25 scale-[1.02]'
                  : 'text-[#523B47] hover:text-[#9B1B47] hover:bg-white/60'
              }`}
            >
              <span className="text-base">👰</span>
              <span>Bride (Dulhan)</span>
              {lookingFor === 'Bride' && (
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping ml-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setLookingFor('Groom')}
              className={`relative flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs transition-all duration-300 ${
                lookingFor === 'Groom'
                  ? 'bg-gradient-to-r from-[#9B1B47] to-[#C51E50] text-white shadow-md shadow-[#9B1B47]/25 scale-[1.02]'
                  : 'text-[#523B47] hover:text-[#9B1B47] hover:bg-white/60'
              }`}
            >
              <span className="text-base">🤵</span>
              <span>Groom (Dulha)</span>
              {lookingFor === 'Groom' && (
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping ml-0.5" />
              )}
            </button>
          </div>
        </div>

        {/* 2. MARITAL STATUS - ANIMATED PILL SELECTOR (REPLACING NATIVE SELECT) */}
        <div>
          <label className="block text-xs font-extrabold text-[#2A1620] mb-2 flex items-center gap-1.5">
            <Heart size={14} className="text-[#9B1B47]" />
            <span>Marital Status</span>
          </label>

          <div className="grid grid-cols-2 gap-2">
            {maritalOptions.map((opt) => {
              const isSelected = maritalStatus === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setMaritalStatus(opt.id)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 active:scale-95 ${
                    isSelected
                      ? 'bg-[#9B1B47] border-[#9B1B47] text-white shadow-xs'
                      : 'bg-white border-[#EAC5CE] text-[#3E2330] hover:border-[#9B1B47] hover:bg-[#FFF9FA]'
                  }`}
                >
                  <span>{opt.label}</span>
                  {isSelected && (
                    <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                      <Check size={11} strokeWidth={3} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. AGE RANGE - ANIMATED STEPPER & QUICK PRESETS */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-extrabold text-[#2A1620] flex items-center gap-1.5">
              <Cake size={14} className="text-[#9B1B47]" />
              <span>Age Range</span>
            </label>
            <span className="text-xs font-extrabold text-[#9B1B47] bg-[#FFF0F3] px-2.5 py-0.5 rounded-full border border-[#F3D5DD]">
              {minAge} to {maxAge} Years
            </span>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center justify-between gap-3 p-3 bg-white rounded-2xl border border-[#EAC5CE] shadow-xs">
            {/* Min Age Stepper */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#7A6670] font-medium">Min:</span>
              <button
                type="button"
                onClick={() => setMinAge(Math.max(18, minAge - 1))}
                className="w-7 h-7 rounded-lg bg-[#FFF0F3] hover:bg-[#9B1B47] hover:text-white text-[#9B1B47] flex items-center justify-center transition-colors active:scale-90"
              >
                <Minus size={13} />
              </button>
              <span className="text-xs font-bold text-[#2A1620] w-6 text-center">{minAge}</span>
              <button
                type="button"
                onClick={() => setMinAge(Math.min(maxAge - 1, minAge + 1))}
                className="w-7 h-7 rounded-lg bg-[#FFF0F3] hover:bg-[#9B1B47] hover:text-white text-[#9B1B47] flex items-center justify-center transition-colors active:scale-90"
              >
                <Plus size={13} />
              </button>
            </div>

            <span className="text-xs text-[#8E7B85] font-bold">—</span>

            {/* Max Age Stepper */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#7A6670] font-medium">Max:</span>
              <button
                type="button"
                onClick={() => setMaxAge(Math.max(minAge + 1, maxAge - 1))}
                className="w-7 h-7 rounded-lg bg-[#FFF0F3] hover:bg-[#9B1B47] hover:text-white text-[#9B1B47] flex items-center justify-center transition-colors active:scale-90"
              >
                <Minus size={13} />
              </button>
              <span className="text-xs font-bold text-[#2A1620] w-6 text-center">{maxAge}</span>
              <button
                type="button"
                onClick={() => setMaxAge(Math.min(50, maxAge + 1))}
                className="w-7 h-7 rounded-lg bg-[#FFF0F3] hover:bg-[#9B1B47] hover:text-white text-[#9B1B47] flex items-center justify-center transition-colors active:scale-90"
              >
                <Plus size={13} />
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-1.5 mt-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[10px] text-[#8E7B85] font-semibold mr-0.5">Presets:</span>
            {agePresets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => {
                  setMinAge(preset.min);
                  setMaxAge(preset.max);
                }}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${
                  minAge === preset.min && maxAge === preset.max
                    ? 'bg-[#9B1B47] text-white'
                    : 'bg-[#FFF0F3] text-[#7A6670] hover:text-[#9B1B47]'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. STATE - CUSTOM ANIMATED POPUP SELECTOR */}
        <div className="relative">
          <label className="block text-xs font-extrabold text-[#2A1620] mb-1.5 flex items-center gap-1.5">
            <MapPin size={14} className="text-[#9B1B47]" />
            <span>State / Region</span>
          </label>

          <button
            type="button"
            onClick={() => {
              setIsStateOpen(!isStateOpen);
              setIsCityOpen(false);
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white border border-[#EAC5CE] hover:border-[#9B1B47] rounded-xl text-xs font-semibold text-[#2A1620] shadow-xs transition-colors"
          >
            <span>{state}</span>
            <ChevronDown
              size={15}
              className={`text-[#7A6670] transition-transform duration-200 ${isStateOpen ? 'rotate-180 text-[#9B1B47]' : ''}`}
            />
          </button>

          {isStateOpen && (
            <div className="absolute left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-white border border-[#EAC5CE] rounded-2xl shadow-xl z-50 p-1 space-y-0.5 animate-fade-in">
              {indianStates.map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => {
                    setState(st);
                    setCity('All Cities');
                    setIsStateOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-left transition-colors ${
                    state === st
                      ? 'bg-[#FFF0F3] text-[#9B1B47] font-bold'
                      : 'text-[#3E2330] hover:bg-[#FFF9FA]'
                  }`}
                >
                  <span>{st}</span>
                  {state === st && <Check size={14} className="text-[#9B1B47]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 5. CITY - CUSTOM ANIMATED POPUP SELECTOR */}
        <div className="relative">
          <label className="block text-xs font-extrabold text-[#2A1620] mb-1.5 flex items-center gap-1.5">
            <Building2 size={14} className="text-[#9B1B47]" />
            <span>City / District</span>
          </label>

          <button
            type="button"
            onClick={() => {
              setIsCityOpen(!isCityOpen);
              setIsStateOpen(false);
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white border border-[#EAC5CE] hover:border-[#9B1B47] rounded-xl text-xs font-semibold text-[#2A1620] shadow-xs transition-colors"
          >
            <span>{city}</span>
            <ChevronDown
              size={15}
              className={`text-[#7A6670] transition-transform duration-200 ${isCityOpen ? 'rotate-180 text-[#9B1B47]' : ''}`}
            />
          </button>

          {isCityOpen && (
            <div className="absolute left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-white border border-[#EAC5CE] rounded-2xl shadow-xl z-50 p-1 space-y-0.5 animate-fade-in">
              {availableCities.map((ct) => (
                <button
                  key={ct}
                  type="button"
                  onClick={() => {
                    setCity(ct);
                    setIsCityOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-left transition-colors ${
                    city === ct
                      ? 'bg-[#FFF0F3] text-[#9B1B47] font-bold'
                      : 'text-[#3E2330] hover:bg-[#FFF9FA]'
                  }`}
                >
                  <span>{ct}</span>
                  {city === ct && <Check size={14} className="text-[#9B1B47]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* CTA ACTION BUTTON */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleSearch}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#9B1B47] to-[#C51E50] hover:from-[#83143B] hover:to-[#B01A44] active:scale-[0.99] text-white text-sm font-extrabold rounded-2xl shadow-md shadow-[#9B1B47]/25 transition-all"
          >
            <Search size={16} strokeWidth={2.4} />
            <span>Search Compatible {lookingFor === 'Bride' ? 'Brides' : 'Grooms'}</span>
          </button>
        </div>
      </div>

      <FloralCornerBottom className="absolute bottom-4 right-0 w-36 h-36 pointer-events-none" />
    </div>
  );
};
