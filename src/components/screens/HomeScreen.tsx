import React, { useState } from 'react';
import { ShieldCheck, Users, Lock, Search, SlidersHorizontal, ChevronRight, Heart, MapPin, CheckCircle2, Share2, BookOpen, FileText, HelpCircle, Video } from 'lucide-react';
import { UserProfile } from '../../types';
import { FloralCornerBottom, FloralArchTop } from '../common/FloralPattern';

interface HomeScreenProps {
  profiles: UserProfile[];
  onOpenSearchBottomSheet: () => void;
  onOpenQuickSearch: () => void;
  onSelectProfile: (profile: UserProfile) => void;
  onToggleSave: (profileId: string) => void;
  onViewAllProfiles: () => void;
  onNavigateTo: (screen: any) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  profiles,
  onOpenSearchBottomSheet,
  onSelectProfile,
  onToggleSave,
  onViewAllProfiles,
  onNavigateTo
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pb-24 overflow-x-hidden animate-fade-in">
      {/* 1. HERO ARCH CARD (MATCHING SCREENSHOT 1) */}
      <section className="relative mx-3 mt-1.5 pt-5 pb-6 px-4 bg-gradient-to-b from-[#FFF0F4] via-[#FFF5F7] to-white rounded-3xl border border-[#FADCE3] shadow-card overflow-hidden">
        {/* Subtle Decorative Arch Background SVG */}
        <FloralArchTop className="absolute -top-1 left-0 right-0 w-full" />
        <FloralCornerBottom className="absolute -bottom-8 -right-8 w-36 h-36" />

        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-extrabold text-[#2A1620] tracking-tight leading-tight">
            Your Journey to<br />
            <span className="text-[#9B1B47]">Nikah Starts Here</span>
          </h1>

          <p className="mt-2 text-xs text-[#7A6670] max-w-xs mx-auto leading-relaxed">
            Discover genuine profiles with privacy, sincerity and Islamic values.
          </p>

          {/* 3 Value Props Badges (Verified, Family, Safe) */}
          <div className="grid grid-cols-3 gap-2 mt-5">
            <div className="flex flex-col items-center p-2 rounded-2xl bg-white/80 border border-[#F5D7DF] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-1">
                <ShieldCheck size={16} strokeWidth={2.2} />
              </div>
              <span className="text-[11px] font-bold text-[#2A1620] text-center leading-tight">
                Verified<br />Profiles
              </span>
            </div>

            <div className="flex flex-col items-center p-2 rounded-2xl bg-white/80 border border-[#F5D7DF] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-1">
                <Users size={16} strokeWidth={2.2} />
              </div>
              <span className="text-[11px] font-bold text-[#2A1620] text-center leading-tight">
                Family<br />Involvement
              </span>
            </div>

            <div className="flex flex-col items-center p-2 rounded-2xl bg-white/80 border border-[#F5D7DF] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-1">
                <Lock size={15} strokeWidth={2.2} />
              </div>
              <span className="text-[11px] font-bold text-[#2A1620] text-center leading-tight">
                Safe &amp;<br />Private
              </span>
            </div>
          </div>

          {/* Search Bar Input (Triggers Search Options Modal on click) */}
          <div className="mt-5">
            <div
              onClick={onOpenSearchBottomSheet}
              className="flex items-center justify-between w-full px-3.5 py-2.5 bg-white border border-[#EAC5CE] rounded-2xl shadow-xs cursor-pointer hover:border-[#9B1B47] transition-all group"
            >
              <div className="flex items-center gap-2 text-xs text-[#8E7B85] w-full">
                <Search size={16} className="text-[#9B1B47]" />
                <span className="truncate">Search profiles, age, location...</span>
              </div>
              <button
                type="button"
                className="p-1 rounded-lg text-[#9B1B47] bg-[#FFF0F3] group-hover:bg-[#9B1B47] group-hover:text-white transition-colors"
              >
                <SlidersHorizontal size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEW PROFILES HORIZONTAL CAROUSEL (MATCHING SCREENSHOT 1) */}
      <section className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-[#2A1620]">New Profiles</h2>
          <button
            onClick={onViewAllProfiles}
            className="flex items-center text-xs font-semibold text-[#9B1B47] hover:underline"
          >
            <span>View all</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Scrollable Cards Container */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => onSelectProfile(profile)}
              className="min-w-[145px] max-w-[155px] bg-white rounded-2xl border border-[#F3D5DD] p-2 shadow-xs cursor-pointer snap-start hover:shadow-card transition-all flex flex-col justify-between"
            >
              {/* Profile Image with Privacy Blur and Heart */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#FFF0F3]">
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover filter blur-[2px] scale-105"
                />

                {/* Online Indicator */}
                {profile.isOnline && (
                  <span className="absolute top-2 left-2 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full shadow-xs" />
                )}

                {/* Favorite Heart Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSave(profile.id);
                  }}
                  className="absolute top-1.5 right-1.5 p-1 rounded-full bg-white/80 backdrop-blur-xs text-[#9B1B47] hover:scale-110 active:scale-95 transition-transform"
                >
                  <Heart
                    size={14}
                    fill={profile.isSaved ? '#9B1B47' : 'none'}
                    className={profile.isSaved ? 'text-[#9B1B47]' : 'text-[#7A6670]'}
                  />
                </button>

                {/* Verified Badge Overlay */}
                {profile.isVerified && (
                  <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/90 text-emerald-700 text-[9px] font-bold shadow-xs">
                    <CheckCircle2 size={10} className="text-emerald-600" />
                    <span>Verified</span>
                  </div>
                )}
              </div>

              {/* Name and Location */}
              <div className="mt-2 text-left">
                <h3 className="text-xs font-bold text-[#2A1620] truncate">
                  {profile.name}, {profile.age}
                </h3>
                <p className="flex items-center gap-0.5 text-[10px] text-[#7A6670] mt-0.5 truncate">
                  <MapPin size={10} className="shrink-0 text-[#9B1B47]" />
                  <span>{profile.city}, {profile.state}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ISLAMIC AYAH & SUNNAH FOUNDATION (KEEPING EXISTING INDIANIKAH SOUL) */}
      <section className="mt-6 mx-4 p-4 rounded-2xl bg-white border border-[#EED4DB] text-center shadow-xs">
        <span className="text-xs font-semibold text-[#9B1B47] uppercase tracking-wider block mb-1">
          Surah An-Naba · 78:8
        </span>
        <p className="font-arabic text-xl font-bold text-[#2A1620] my-1 leading-relaxed">
          وَخَلَقْنَاكُمْ أَزْوَاجًا
        </p>
        <p className="text-xs italic text-[#7A6670]">
          “And We created you in pairs.”
        </p>
      </section>

      {/* 4. LEARN FOR A BETTER TOMORROW (INDIANIKAH GUIDANCE) */}
      <section className="mt-6 px-4">
        <h2 className="text-base font-bold text-[#2A1620] mb-2.5">
          Learn for a Better Tomorrow
        </h2>

        <div className="grid grid-cols-2 gap-2.5">
          <div
            onClick={() => onNavigateTo('guidelines')}
            className="p-3 bg-white rounded-2xl border border-[#F3D5DD] hover:border-[#9B1B47] cursor-pointer shadow-xs transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-1.5">
              <FileText size={15} />
            </div>
            <h4 className="text-xs font-bold text-[#2A1620]">Guidelines</h4>
            <p className="text-[10px] text-[#7A6670] mt-0.5 line-clamp-2">Rules &amp; safe matrimonial practices</p>
          </div>

          <div
            onClick={() => onNavigateTo('books')}
            className="p-3 bg-white rounded-2xl border border-[#F3D5DD] hover:border-[#9B1B47] cursor-pointer shadow-xs transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-1.5">
              <BookOpen size={15} />
            </div>
            <h4 className="text-xs font-bold text-[#2A1620]">Free Books</h4>
            <p className="text-[10px] text-[#7A6670] mt-0.5 line-clamp-2">Marriage and family advice library</p>
          </div>

          <div
            onClick={() => onNavigateTo('faq')}
            className="p-3 bg-white rounded-2xl border border-[#F3D5DD] hover:border-[#9B1B47] cursor-pointer shadow-xs transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-1.5">
              <HelpCircle size={15} />
            </div>
            <h4 className="text-xs font-bold text-[#2A1620]">Education FAQ</h4>
            <p className="text-[10px] text-[#7A6670] mt-0.5 line-clamp-2">Common answers on Nikah &amp; Mahr</p>
          </div>

          <div
            onClick={() => alert('Dulha Dulhan Course: Opening free video learning modules...')}
            className="p-3 bg-white rounded-2xl border border-[#F3D5DD] hover:border-[#9B1B47] cursor-pointer shadow-xs transition-all"
          >
            <div className="w-7 h-7 rounded-lg bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-1.5">
              <Video size={15} />
            </div>
            <h4 className="text-xs font-bold text-[#2A1620]">Dulha Dulhan</h4>
            <p className="text-[10px] text-[#7A6670] mt-0.5 line-clamp-2">Responsibilities &amp; life guidance</p>
          </div>
        </div>
      </section>

      {/* 5. SHARE INDIA NIKAH PROMPT */}
      <section className="mt-6 mx-4 p-4 rounded-2xl bg-[#FFF0F4] border border-[#F6CFD9] flex items-center justify-between">
        <div>
          <h4 className="text-xs font-bold text-[#2A1620]">Know someone looking for Nikah?</h4>
          <p className="text-[11px] text-[#7A6670] mt-0.5">Share 100% free, halal matchmaking</p>
        </div>
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'IndiaNikah - Free Muslim Matrimony',
                url: 'https://www.indianikah.com'
              }).catch(() => {});
            } else {
              alert('Link copied: https://www.indianikah.com');
            }
          }}
          className="flex items-center gap-1 px-3 py-1.5 bg-[#9B1B47] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#83143B] transition-colors"
        >
          <Share2 size={13} />
          <span>Share</span>
        </button>
      </section>
    </div>
  );
};
