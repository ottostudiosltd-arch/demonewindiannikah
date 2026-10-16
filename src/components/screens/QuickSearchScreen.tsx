import React, { useState } from 'react';
import { ChevronLeft, User, Heart, Cake, MapPin, Building2, Search } from 'lucide-react';
import { FloralCornerBottom } from '../common/FloralPattern';

interface QuickSearchScreenProps {
  onBack: () => void;
  onExecuteSearch: (filters: any) => void;
}

export const QuickSearchScreen: React.FC<QuickSearchScreenProps> = ({
  onBack,
  onExecuteSearch
}) => {
  const [gender, setGender] = useState('Sister');
  const [maritalStatus, setMaritalStatus] = useState('Any status');
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(40);
  const [state, setState] = useState('Any state');
  const [city, setCity] = useState('Any city');

  const indianStates = [
    'Any state',
    'Maharashtra',
    'Karnataka',
    'Delhi',
    'Telangana',
    'Uttar Pradesh',
    'Gujarat',
    'Kerala',
    'West Bengal',
    'Bihar'
  ];

  const citiesMap: { [key: string]: string[] } = {
    'Maharashtra': ['Any city', 'Pune', 'Mumbai', 'Nagpur', 'Nashik', 'Aurangabad'],
    'Karnataka': ['Any city', 'Bangalore', 'Mysore', 'Hubli', 'Mangalore'],
    'Delhi': ['Any city', 'Central Delhi', 'South Delhi', 'North Delhi'],
    'Telangana': ['Any city', 'Hyderabad', 'Secunderabad', 'Warangal'],
    'Uttar Pradesh': ['Any city', 'Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Aligarh']
  };

  const availableCities = citiesMap[state] || ['Any city', 'Pune', 'Mumbai', 'Bangalore', 'Delhi', 'Hyderabad'];

  const handleSearch = () => {
    onExecuteSearch({
      gender,
      maritalStatus,
      minAge,
      maxAge,
      state,
      city
    });
  };

  return (
    <div className="relative min-h-[90vh] pb-24 px-4 pt-1 animate-fade-in select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between py-2 mb-4 border-b border-[#F5D7DF]/60">
        <button
          onClick={onBack}
          className="p-1.5 -ml-1 text-[#3E2330] hover:text-[#9B1B47] rounded-lg transition-colors"
        >
          <ChevronLeft size={22} strokeWidth={2.2} />
        </button>
        <h1 className="text-base font-extrabold text-[#2A1620] tracking-tight">
          Quick Search
        </h1>
        <div className="w-8" /> {/* Spacer */}
      </div>

      {/* Form Fields Stack */}
      <div className="space-y-4 max-w-sm mx-auto">
        {/* 1. I am looking for */}
        <div>
          <label className="block text-xs font-bold text-[#2A1620] mb-1.5">
            I am looking for
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B1B47]">
              <User size={16} />
            </div>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 bg-white border border-[#EAC5CE] rounded-xl text-xs font-medium text-[#2A1620] focus:outline-none focus:border-[#9B1B47] shadow-xs appearance-none cursor-pointer"
            >
              <option value="Sister">Sister</option>
              <option value="Brother">Brother</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#7A6670] text-xs">
              ⌵
            </div>
          </div>
        </div>

        {/* 2. Marital Status */}
        <div>
          <label className="block text-xs font-bold text-[#2A1620] mb-1.5">
            Marital status
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B1B47]">
              <Heart size={16} />
            </div>
            <select
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 bg-white border border-[#EAC5CE] rounded-xl text-xs font-medium text-[#2A1620] focus:outline-none focus:border-[#9B1B47] shadow-xs appearance-none cursor-pointer"
            >
              <option value="Any status">Any status</option>
              <option value="Never Married">Never Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#7A6670] text-xs">
              ⌵
            </div>
          </div>
        </div>

        {/* 3. Age Range */}
        <div>
          <label className="block text-xs font-bold text-[#2A1620] mb-1.5">
            Age range
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B1B47]">
                <Cake size={16} />
              </div>
              <select
                value={minAge}
                onChange={(e) => setMinAge(Number(e.target.value))}
                className="w-full pl-9 pr-6 py-2.5 bg-white border border-[#EAC5CE] rounded-xl text-xs font-medium text-[#2A1620] focus:outline-none focus:border-[#9B1B47] shadow-xs appearance-none cursor-pointer"
              >
                {Array.from({ length: 43 }, (_, i) => 18 + i).map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-[#7A6670] text-xs">
                ⌵
              </div>
            </div>

            <span className="text-xs text-[#7A6670] font-medium">to</span>

            <div className="relative flex-1">
              <select
                value={maxAge}
                onChange={(e) => setMaxAge(Number(e.target.value))}
                className="w-full px-3 pr-6 py-2.5 bg-white border border-[#EAC5CE] rounded-xl text-xs font-medium text-[#2A1620] focus:outline-none focus:border-[#9B1B47] shadow-xs appearance-none cursor-pointer"
              >
                {Array.from({ length: 43 }, (_, i) => 18 + i).map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-[#7A6670] text-xs">
                ⌵
              </div>
            </div>
          </div>
        </div>

        {/* 4. State */}
        <div>
          <label className="block text-xs font-bold text-[#2A1620] mb-1.5">
            State
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B1B47]">
              <MapPin size={16} />
            </div>
            <select
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setCity('Any city');
              }}
              className="w-full pl-9 pr-8 py-2.5 bg-white border border-[#EAC5CE] rounded-xl text-xs font-medium text-[#2A1620] focus:outline-none focus:border-[#9B1B47] shadow-xs appearance-none cursor-pointer"
            >
              {indianStates.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#7A6670] text-xs">
              ⌵
            </div>
          </div>
        </div>

        {/* 5. City */}
        <div>
          <label className="block text-xs font-bold text-[#2A1620] mb-1.5">
            City
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B1B47]">
              <Building2 size={16} />
            </div>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 bg-white border border-[#EAC5CE] rounded-xl text-xs font-medium text-[#2A1620] focus:outline-none focus:border-[#9B1B47] shadow-xs appearance-none cursor-pointer"
            >
              {availableCities.map((ct) => (
                <option key={ct} value={ct}>{ct}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#7A6670] text-xs">
              ⌵
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <button
            onClick={handleSearch}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#9B1B47] hover:bg-[#83143B] active:scale-[0.99] text-white text-sm font-bold rounded-2xl shadow-md shadow-[#9B1B47]/25 transition-all"
          >
            <Search size={16} strokeWidth={2.4} />
            <span>Search Profiles</span>
          </button>
        </div>
      </div>

      {/* Botanical floral art bottom */}
      <FloralCornerBottom className="absolute bottom-4 right-0 w-36 h-36" />
    </div>
  );
};
