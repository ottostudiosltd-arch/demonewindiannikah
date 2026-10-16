import React, { useState } from 'react';
import {
  Globe,
  Bell,
  Search,
  ChevronDown,
  ShieldCheck,
  Heart,
  MessageSquare,
  BookOpen,
  FileText
} from 'lucide-react';
import { ScreenType } from '../../types';

interface DesktopHeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  proposalCount?: number;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  currentScreen,
  onNavigate,
  proposalCount = 2
}) => {
  const [selectedLang, setSelectedLang] = useState('English');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const languages = ['English', 'हिंदी', 'اردو', 'বাংলা', 'தமிழ்'];

  const navLinks: { id: ScreenType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'new-profiles', label: 'New Profiles' },
    { id: 'search-results', label: 'Browse Profiles' },
    { id: 'quick-search', label: 'Search' },
    { id: 'proposals', label: 'My Proposals' },
    { id: 'secure-chat', label: 'Secure Chat' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'books', label: 'Free Books' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F0D5DD] shadow-xs select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#9B1B47] to-[#DE1C52] flex items-center justify-center shadow-md shadow-[#9B1B47]/20 text-white font-extrabold text-xl tracking-tighter group-hover:scale-105 transition-transform">
            <span>b</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-[#2A1620] tracking-tight">
                IndiaNikah
              </span>
              <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                <ShieldCheck size={11} className="text-emerald-600" />
                100% Free Forever
              </span>
            </div>
            <p className="text-[11px] text-[#7A6670] -mt-0.5 hidden sm:block">
              Free &amp; Privacy-Conscious Muslim Matrimony
            </p>
          </div>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive =
              currentScreen === link.id ||
              (link.id === 'search-results' && currentScreen === 'advanced-search');
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all relative ${
                  isActive
                    ? 'text-[#9B1B47] bg-[#FFF0F3]'
                    : 'text-[#4A323F] hover:text-[#9B1B47] hover:bg-[#FFF9FA]'
                }`}
              >
                <span>{link.label}</span>
                {link.id === 'proposals' && proposalCount > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.2 bg-[#9B1B47] text-white text-[9px] font-extrabold rounded-full">
                    {proposalCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Search trigger, Language, Notifications, Profile */}
        <div className="flex items-center gap-3">
          {/* Quick Search Button */}
          <button
            onClick={() => onNavigate('quick-search')}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#FFF9FA] hover:bg-[#FFF0F3] border border-[#EAC5CE] hover:border-[#9B1B47] rounded-full text-xs text-[#7A6670] transition-colors"
          >
            <Search size={13} className="text-[#9B1B47]" />
            <span>Search profiles...</span>
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#3E2330] bg-white border border-[#EAC5CE] rounded-full shadow-xs hover:border-[#9B1B47] transition-all"
            >
              <Globe size={13} className="text-[#9B1B47]" />
              <span>{selectedLang}</span>
              <ChevronDown size={12} className="text-[#7A6670]" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-1 w-32 bg-white border border-[#EAC5CE] rounded-2xl shadow-xl py-1 z-50 animate-fade-in text-xs font-medium">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 hover:bg-[#FFF0F3] transition-colors ${
                      selectedLang === lang
                        ? 'text-[#9B1B47] font-bold bg-[#FFF5F7]'
                        : 'text-[#3E2330]'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notification Bell */}
          <button
            onClick={() => alert('You have 2 pending proposal updates.')}
            className="relative p-2 text-[#3E2330] hover:text-[#9B1B47] hover:bg-[#FFF0F3] rounded-full transition-colors"
          >
            <Bell size={18} strokeWidth={2} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#9B1B47] rounded-full ring-2 ring-white" />
          </button>

          {/* User Account Button */}
          <div
            onClick={() => onNavigate('profile')}
            className="flex items-center gap-2 pl-2 border-l border-[#F0D5DD] cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#9B1B47]/40 ring-2 ring-[#9B1B47]/10 group-hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="My Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden xl:block text-left text-xs">
              <p className="font-bold text-[#2A1620] leading-tight">Ahmed</p>
              <span className="text-[10px] text-[#7A6670]">Manage Biodata</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
