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
  ChevronRight,
  User
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
        className="fixed inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity"
      />

      {/* Drawer Panel - Using the soft cream/blush/rose theme matching the entire app */}
      <div className="relative w-4/5 max-w-xs bg-[#FFF9FA] text-[#2A1620] h-full shadow-2xl flex flex-col z-10 border-r border-[#F3D5DD] animate-fade-in overflow-y-auto">
        {/* Top Header with Brand Mark and Close Button */}
        <div className="flex items-center justify-between p-4 pb-3 border-b border-[#F5D7DF]/80 bg-white/70">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#9B1B47] to-[#DE1C52] text-white flex items-center justify-center font-extrabold text-base shadow-xs">
              <span>b</span>
            </div>
            <span className="text-sm font-black text-[#2A1620] tracking-tight">IndiaNikah</span>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-[#9B1B47] text-white flex items-center justify-center hover:bg-[#83143B] transition-colors shadow-xs"
          >
            <X size={16} />
          </button>
        </div>

        {/* 100% Free Forever Notice Card - Clean Halal Emerald Theme */}
        <div className="p-3 mx-4 my-3.5 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] shadow-xs">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span className="text-xs font-bold text-emerald-900">100% Free Forever</span>
          </div>
          <p className="text-[11px] text-emerald-700 leading-snug">
            No paid membership or hidden charges. Non-profit Indian Muslim matrimony.
          </p>
        </div>

        {/* Navigation Section: MATRIMONY */}
        <div className="px-3 py-1">
          <span className="text-[10px] font-extrabold text-[#9B1B47] tracking-wider uppercase block px-3 mb-1.5">
            MATRIMONY
          </span>

          <div className="space-y-0.5 text-xs">
            <button
              onClick={() => { onNavigate('home'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'home'
                  ? 'bg-[#9B1B47] text-white font-bold shadow-xs'
                  : 'text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47]'
              }`}
            >
              <Home size={15} />
              <span>Home</span>
            </button>

            <button
              onClick={() => { onNavigate('new-profiles'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'new-profiles'
                  ? 'bg-[#9B1B47] text-white font-bold shadow-xs'
                  : 'text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47]'
              }`}
            >
              <Users size={15} />
              <span>New Profiles</span>
            </button>

            <button
              onClick={() => { onNavigate('search-results'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'search-results'
                  ? 'bg-[#9B1B47] text-white font-bold shadow-xs'
                  : 'text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47]'
              }`}
            >
              <Search size={15} />
              <span>Search Profiles (8,563)</span>
            </button>

            <button
              onClick={() => { onNavigate('quick-search'); onClose(); }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47] transition-colors"
            >
              <Layers size={15} />
              <span>Quick Match Filter</span>
            </button>

            <button
              onClick={() => { onNavigate('proposals'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'proposals'
                  ? 'bg-[#9B1B47] text-white font-bold shadow-xs'
                  : 'text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47]'
              }`}
            >
              <Heart size={15} />
              <span>My Proposals</span>
            </button>

            <button
              onClick={() => { onNavigate('favorites'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'favorites'
                  ? 'bg-[#9B1B47] text-white font-bold shadow-xs'
                  : 'text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47]'
              }`}
            >
              <Heart size={15} />
              <span>My Favorites</span>
            </button>

            <button
              onClick={() => { onNavigate('secure-chat'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'secure-chat'
                  ? 'bg-[#9B1B47] text-white font-bold shadow-xs'
                  : 'text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47]'
              }`}
            >
              <MessageSquare size={15} />
              <span>Secure Chat</span>
            </button>

            <button
              onClick={() => { onNavigate('profile'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'profile'
                  ? 'bg-[#9B1B47] text-white font-bold shadow-xs'
                  : 'text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47]'
              }`}
            >
              <User size={15} />
              <span>My Profile</span>
            </button>
          </div>
        </div>

        {/* Navigation Section: GUIDANCE & CONTENT */}
        <div className="px-3 py-2 border-t border-[#F5D7DF]/80 mt-1">
          <span className="text-[10px] font-extrabold text-[#9B1B47] tracking-wider uppercase block px-3 mb-1.5">
            GUIDANCE &amp; CONTENT
          </span>

          <div className="space-y-0.5 text-xs">
            <button
              onClick={() => { onNavigate('guidelines'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'guidelines'
                  ? 'bg-[#9B1B47] text-white font-bold shadow-xs'
                  : 'text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47]'
              }`}
            >
              <FileText size={15} />
              <span>Marriage Guidelines</span>
            </button>

            <button
              onClick={() => { onNavigate('books'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'books'
                  ? 'bg-[#9B1B47] text-white font-bold shadow-xs'
                  : 'text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47]'
              }`}
            >
              <BookOpen size={15} />
              <span>Free Books</span>
            </button>

            <button
              onClick={() => { onNavigate('faq'); onClose(); }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${
                activeScreen === 'faq'
                  ? 'bg-[#9B1B47] text-white font-bold shadow-xs'
                  : 'text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47]'
              }`}
            >
              <HelpCircle size={15} />
              <span>Frequently asked questions</span>
            </button>

            <button
              onClick={() => { alert('News & Articles'); onClose(); }}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#4A323F] hover:bg-[#FFF0F3] hover:text-[#9B1B47] transition-colors"
            >
              <Newspaper size={15} />
              <span>News &amp; Articles</span>
            </button>
          </div>
        </div>

        {/* Collapsible Resources */}
        <div className="px-4 py-2 border-t border-[#F5D7DF]/80 mt-1 pb-6">
          <button
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className="w-full flex items-center justify-between text-xs font-semibold text-[#7A6670] hover:text-[#9B1B47] transition-colors"
          >
            <span>Resources</span>
            {isResourcesOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>

          {isResourcesOpen && (
            <div className="mt-2 space-y-1.5 pl-2 text-[11px] text-[#7A6670]">
              <p className="cursor-pointer hover:text-[#9B1B47]">Privacy Policy</p>
              <p className="cursor-pointer hover:text-[#9B1B47]">Terms of Free Service</p>
              <p className="cursor-pointer hover:text-[#9B1B47]">Community Code of Conduct</p>
              <p className="cursor-pointer hover:text-[#9B1B47]">WhatsApp Support</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
