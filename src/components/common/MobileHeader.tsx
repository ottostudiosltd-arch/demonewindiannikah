import React, { useState } from 'react';
import { Menu, Globe, Bell, ChevronDown } from 'lucide-react';

interface MobileHeaderProps {
  onOpenSidebar: () => void;
  onOpenNotifications?: () => void;
  onNavigateToProfile?: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ onOpenSidebar, onNavigateToProfile }) => {
  const [selectedLang, setSelectedLang] = useState('English');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = ['English', 'हिंदी', 'اردو', 'বাংলা', 'தமிழ்'];

  return (
    <header className="relative flex items-center justify-between px-4 py-2 bg-transparent select-none">
      {/* Left: Hamburger Menu and Brand Logo */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={onOpenSidebar}
          aria-label="Open Navigation Menu"
          className="p-1.5 text-[#3E2330] hover:text-[#9B1B47] transition-colors rounded-lg active:scale-95"
        >
          <Menu size={22} strokeWidth={2.2} />
        </button>

        {/* Brand Logo "b" / Nikah Icon */}
        <div className="flex items-center gap-1.5 cursor-pointer">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#9B1B47] to-[#DE1C52] flex items-center justify-center shadow-sm shadow-[#9B1B47]/20 text-white font-extrabold text-base tracking-tighter">
            <span>b</span>
          </div>
        </div>
      </div>

      {/* Right Controls: Language Selector, Bell, Avatar */}
      <div className="flex items-center gap-2">
        {/* Language Pill Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#3E2330] bg-white border border-[#EAC5CE] rounded-full shadow-xs hover:border-[#9B1B47] transition-all"
          >
            <Globe size={12} className="text-[#9B1B47]" />
            <span>{selectedLang}</span>
            <ChevronDown size={11} className="text-[#7A6670]" />
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-1 w-28 bg-white border border-[#EAC5CE] rounded-xl shadow-lg py-1 z-50 animate-fade-in text-xs font-medium">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLang(lang);
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 hover:bg-[#FFF0F3] transition-colors ${
                    selectedLang === lang ? 'text-[#9B1B47] font-semibold bg-[#FFF5F7]' : 'text-[#3E2330]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notification Bell with Dot */}
        <button
          aria-label="Notifications"
          className="relative p-1.5 text-[#3E2330] hover:text-[#9B1B47] transition-colors rounded-full active:scale-95"
        >
          <Bell size={18} strokeWidth={2} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#9B1B47] rounded-full ring-2 ring-white" />
        </button>

        {/* User Avatar */}
        <div
          onClick={onNavigateToProfile}
          className="w-7 h-7 rounded-full overflow-hidden border border-[#9B1B47]/30 ring-1 ring-[#9B1B47]/10 cursor-pointer shadow-xs active:scale-95 transition-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
            alt="My Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};
