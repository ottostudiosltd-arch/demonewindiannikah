import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Home,
  Users,
  Search,
  Layers,
  Heart,
  MessageSquare,
  FileText,
  BookOpen,
  HelpCircle,
  Newspaper,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { ScreenType } from '../../types';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: ScreenType) => void;
  activeScreen: ScreenType;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  activeScreen
}) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex select-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="relative w-4/5 max-w-xs bg-[#1F2228] text-white h-full shadow-2xl flex flex-col z-10 animate-fade-in overflow-y-auto">
        {/* Top Header with Brand Mark and Close Button */}
        <div className="flex items-center justify-between p-4 pb-2 border-b border-white/10">
          <div className="w-8 h-8 rounded-xl bg-white text-[#9B1B47] flex items-center justify-center font-extrabold text-base shadow-xs">
            <span>b</span>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-[#9B1B47] text-white flex items-center justify-center hover:bg-[#83143B] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* 100% Free Forever Notice Card */}
        <div className="p-3 mx-4 my-3 rounded-2xl bg-[#142A27] border border-[#214D46]">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span className="text-xs font-bold text-white">100% Free Forever</span>
          </div>
          <p className="text-[11px] text-[#A3C7C0] leading-snug">
            No paid membership or hidden charges.
          </p>
        </div>

        {/* Navigation Section: MATRIMONY */}
        <div className="px-4 py-2">
          <span className="text-[11px] font-bold text-[#DE1C52] tracking-wider uppercase block mb-2">
            MATRIMONY
          </span>

          <div className="space-y-1 text-xs">
            <button
              onClick={() => { onNavigate('home'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'home' ? 'bg-[#9B1B47] text-white font-bold' : 'text-[#D5D8DC] hover:bg-white/5'
              }`}
            >
              <Home size={15} />
              <span>Home</span>
            </button>

            <button
              onClick={() => { onNavigate('new-profiles'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'new-profiles' ? 'bg-[#9B1B47] text-white font-bold' : 'text-[#D5D8DC] hover:bg-white/5'
              }`}
            >
              <Users size={15} />
              <span>New Profiles</span>
            </button>

            <button
              onClick={() => { onNavigate('search-results'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'search-results' ? 'bg-[#9B1B47] text-white font-bold' : 'text-[#D5D8DC] hover:bg-white/5'
              }`}
            >
              <Search size={15} />
              <span>Search Profiles (8,563)</span>
            </button>

            <button
              onClick={() => { onNavigate('quick-search'); onClose(); }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#D5D8DC] hover:bg-white/5 transition-colors"
            >
              <Layers size={15} />
              <span>Profile Categories</span>
            </button>

            <button
              onClick={() => { onNavigate('proposals'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'proposals' ? 'bg-[#9B1B47] text-white font-bold' : 'text-[#D5D8DC] hover:bg-white/5'
              }`}
            >
              <Heart size={15} />
              <span>My Proposals</span>
            </button>

            <button
              onClick={() => { onNavigate('favorites'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'favorites' ? 'bg-[#9B1B47] text-white font-bold' : 'text-[#D5D8DC] hover:bg-white/5'
              }`}
            >
              <Heart size={15} />
              <span>My Favorites</span>
            </button>

            <button
              onClick={() => { onNavigate('secure-chat'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'secure-chat' ? 'bg-[#9B1B47] text-white font-bold' : 'text-[#D5D8DC] hover:bg-white/5'
              }`}
            >
              <MessageSquare size={15} />
              <span>Secure Chat</span>
            </button>
          </div>
        </div>

        {/* Navigation Section: GUIDANCE & CONTENT */}
        <div className="px-4 py-2 border-t border-white/10 mt-1">
          <span className="text-[11px] font-bold text-[#DE1C52] tracking-wider uppercase block mb-2">
            GUIDANCE &amp; CONTENT
          </span>

          <div className="space-y-1 text-xs">
            <button
              onClick={() => { onNavigate('guidelines'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'guidelines' ? 'bg-[#9B1B47] text-white font-bold' : 'text-[#D5D8DC] hover:bg-white/5'
              }`}
            >
              <FileText size={15} />
              <span>Marriage Guidelines</span>
            </button>

            <button
              onClick={() => { onNavigate('books'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'books' ? 'bg-[#9B1B47] text-white font-bold' : 'text-[#D5D8DC] hover:bg-white/5'
              }`}
            >
              <BookOpen size={15} />
              <span>Books</span>
            </button>

            <button
              onClick={() => { onNavigate('faq'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'faq' ? 'bg-[#9B1B47] text-white font-bold' : 'text-[#D5D8DC] hover:bg-white/5'
              }`}
            >
              <HelpCircle size={15} />
              <span>Frequently asked questions</span>
            </button>

            <button
              onClick={() => { alert('News & Community Updates'); onClose(); }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#D5D8DC] hover:bg-white/5 transition-colors"
            >
              <Newspaper size={15} />
              <span>News</span>
            </button>
          </div>
        </div>

        {/* Collapsible Resources */}
        <div className="px-4 py-2 border-t border-white/10 mt-1 pb-6">
          <button
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className="w-full flex items-center justify-between text-xs font-semibold text-[#8E95A0] hover:text-white transition-colors"
          >
            <span>Resources</span>
            {isResourcesOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>

          {isResourcesOpen && (
            <div className="mt-2 space-y-1.5 pl-3 text-[11px] text-[#A6ADB8]">
              <p className="cursor-pointer hover:text-white">Privacy Policy</p>
              <p className="cursor-pointer hover:text-white">Terms of Free Service</p>
              <p className="cursor-pointer hover:text-white">Community Code of Conduct</p>
              <p className="cursor-pointer hover:text-white">Contact &amp; WhatsApp Support</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
