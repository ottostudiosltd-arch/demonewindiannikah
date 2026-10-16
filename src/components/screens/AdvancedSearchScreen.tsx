import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
  BadgeCheck,
  GraduationCap,
  Sparkles,
  Users2,
  CheckCircle2,
  Compass,
  User,
  Globe
} from 'lucide-react';
import { FloralCornerBottom } from '../common/FloralPattern';

interface AdvancedSearchScreenProps {
  onBack: () => void;
  onExecuteSearch: (filters: any) => void;
}

export const AdvancedSearchScreen: React.FC<AdvancedSearchScreenProps> = ({
  onBack,
  onExecuteSearch
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('religious');

  // Filter states
  const [selectedSects, setSelectedSects] = useState<string[]>(['Sunni']);
  const [selectedPractice, setSelectedPractice] = useState<string>('Practicing');
  const [selectedEducation, setSelectedEducation] = useState<string[]>(['B.Tech / Engineering', 'Masters']);

  const categories = [
    {
      id: 'basic',
      icon: BadgeCheck,
      title: 'Basic Details',
      subtitle: 'Age, Location, Marital Status',
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education & Profession',
      subtitle: 'Qualification, Occupation',
    },
    {
      id: 'religious',
      icon: Sparkles,
      title: 'Religious Background',
      subtitle: 'Practice level, Sect (optional)',
    },
    {
      id: 'family',
      icon: Users2,
      title: 'Family Details',
      subtitle: 'Family type, Values',
    },
    {
      id: 'lifestyle',
      icon: Compass,
      title: 'Lifestyle',
      subtitle: 'Habits, Preferences',
    },
    {
      id: 'appearance',
      icon: User,
      title: 'Appearance',
      subtitle: 'Height, Body type (optional)',
    },
    {
      id: 'more',
      icon: Globe,
      title: 'More Preferences',
      subtitle: 'Language, Reverts, etc.',
    },
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const handleSearch = () => {
    onExecuteSearch({
      sects: selectedSects,
      practice: selectedPractice,
      education: selectedEducation
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
          Advanced Search
        </h1>
        <div className="w-8" />
      </div>

      {/* Categories Stack */}
      <div className="space-y-2.5 max-w-sm mx-auto">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isExpanded = expandedSection === cat.id;

          return (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-[#F3D5DD] shadow-xs overflow-hidden transition-all"
            >
              <div
                onClick={() => toggleSection(cat.id)}
                className="flex items-center justify-between p-3.5 cursor-pointer hover:bg-[#FFF9FA] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center shrink-0">
                    <Icon size={17} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#2A1620]">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-[#7A6670]">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-[#8E7B85]">
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
              </div>

              {/* Accordion Expandable Filter Options */}
              {isExpanded && (
                <div className="px-4 pb-3.5 pt-1 border-t border-[#F5D7DF]/60 bg-[#FFFDFE] text-xs space-y-2.5">
                  {cat.id === 'religious' && (
                    <>
                      <div>
                        <span className="font-semibold text-[#3E2330] block mb-1.5">Practice Level:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {['Practicing', 'Very Practicing', 'Moderately Practicing'].map((level) => (
                            <button
                              key={level}
                              onClick={() => setSelectedPractice(level)}
                              className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                                selectedPractice === level
                                  ? 'bg-[#9B1B47] text-white font-semibold'
                                  : 'bg-white border border-[#EAC5CE] text-[#3E2330]'
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-semibold text-[#3E2330] block mb-1.5">Sect / Maslak:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {['Sunni', 'Hanafi', 'Shafi\'i', 'Ahle Hadees', 'No Sect / Just Muslim'].map((sect) => (
                            <button
                              key={sect}
                              onClick={() => {
                                if (selectedSects.includes(sect)) {
                                  setSelectedSects(selectedSects.filter(s => s !== sect));
                                } else {
                                  setSelectedSects([...selectedSects, sect]);
                                }
                              }}
                              className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                                selectedSects.includes(sect)
                                  ? 'bg-[#9B1B47] text-white font-semibold'
                                  : 'bg-white border border-[#EAC5CE] text-[#3E2330]'
                              }`}
                            >
                              {sect}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {cat.id === 'education' && (
                    <div>
                      <span className="font-semibold text-[#3E2330] block mb-1.5">Preferred Qualification:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {['B.Tech / Engineering', 'Doctor / MBBS', 'Masters', 'Chartered Accountant', 'Bachelors'].map((ed) => (
                          <button
                            key={ed}
                            onClick={() => {
                              if (selectedEducation.includes(ed)) {
                                setSelectedEducation(selectedEducation.filter(e => e !== ed));
                              } else {
                                setSelectedEducation([...selectedEducation, ed]);
                              }
                            }}
                            className={`px-2.5 py-1 rounded-full text-xs transition-colors ${
                              selectedEducation.includes(ed)
                                ? 'bg-[#9B1B47] text-white font-semibold'
                                : 'bg-white border border-[#EAC5CE] text-[#3E2330]'
                            }`}
                          >
                            {ed}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {cat.id !== 'religious' && cat.id !== 'education' && (
                    <p className="text-[#7A6670] italic text-[11px]">
                      Filter preferences saved for {cat.title.toLowerCase()}.
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Big Search CTA */}
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

      <FloralCornerBottom className="absolute bottom-4 right-0 w-36 h-36" />
    </div>
  );
};
