import React from 'react';
import {
  ShieldCheck,
  Users,
  Lock,
  Search,
  SlidersHorizontal,
  ChevronRight,
  Heart,
  MapPin,
  CheckCircle2,
  Share2,
  BookOpen,
  FileText,
  HelpCircle,
  Video,
  Sparkles,
  MessageSquare,
  MailCheck
} from 'lucide-react';
import { UserProfile, ScreenType } from '../../types';
import { FloralCornerBottom, FloralArchTop } from '../common/FloralPattern';

interface HomeScreenProps {
  profiles: UserProfile[];
  onOpenSearchBottomSheet: () => void;
  onOpenQuickSearch: () => void;
  onSelectProfile: (profile: UserProfile) => void;
  onToggleSave: (profileId: string) => void;
  onViewAllProfiles: () => void;
  onNavigateTo: (screen: ScreenType) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  profiles,
  onOpenSearchBottomSheet,
  onOpenQuickSearch,
  onSelectProfile,
  onToggleSave,
  onViewAllProfiles,
  onNavigateTo
}) => {
  return (
    <div className="pb-16 select-none animate-fade-in">
      {/* 1. HERO ARCH CARD (RESPONSIVE ON PC & MOBILE) */}
      <section className="relative max-w-5xl mx-auto mt-2 sm:mt-6 pt-6 sm:pt-10 pb-8 sm:pb-12 px-4 sm:px-8 bg-gradient-to-b from-[#FFF0F4] via-[#FFF5F7] to-white rounded-3xl sm:rounded-[36px] border border-[#FADCE3] shadow-card overflow-hidden">
        {/* Decorative Arch & Botanical Leaves */}
        <FloralArchTop className="absolute -top-1 left-0 right-0 w-full" />
        <FloralCornerBottom className="absolute -bottom-10 -right-10 w-44 h-44 sm:w-60 sm:h-60" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-[#9B1B47] text-[11px] font-bold border border-[#F3D5DD] shadow-xs mb-3">
            <Sparkles size={12} />
            <span>Pure Islamic Matrimony · 100% Free</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#2A1620] tracking-tight leading-tight">
            Your Journey to<br />
            <span className="text-[#9B1B47]">Nikah Starts Here</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-[#7A6670] max-w-md mx-auto leading-relaxed">
            Discover genuine profiles with privacy, sincerity and Islamic values. No agents, no brokers, completely free forever.
          </p>

          {/* 3 Value Props Badges (Verified, Family, Safe) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mt-6 sm:mt-8 max-w-lg mx-auto">
            <div className="flex flex-col items-center p-2.5 sm:p-3.5 rounded-2xl bg-white/85 border border-[#F5D7DF] shadow-xs hover:border-[#9B1B47] transition-all">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-1.5 shadow-xs">
                <ShieldCheck size={18} strokeWidth={2.2} />
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#2A1620] text-center leading-tight">
                Verified<br />Profiles
              </span>
            </div>

            <div className="flex flex-col items-center p-2.5 sm:p-3.5 rounded-2xl bg-white/85 border border-[#F5D7DF] shadow-xs hover:border-[#9B1B47] transition-all">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-1.5 shadow-xs">
                <Users size={18} strokeWidth={2.2} />
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#2A1620] text-center leading-tight">
                Family<br />Involvement
              </span>
            </div>

            <div className="flex flex-col items-center p-2.5 sm:p-3.5 rounded-2xl bg-white/85 border border-[#F5D7DF] shadow-xs hover:border-[#9B1B47] transition-all">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-1.5 shadow-xs">
                <Lock size={17} strokeWidth={2.2} />
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-[#2A1620] text-center leading-tight">
                Safe &amp;<br />Private
              </span>
            </div>
          </div>

          {/* Search Trigger Input Bar */}
          <div className="mt-6 sm:mt-8 max-w-lg mx-auto">
            <div
              onClick={() => {
                if (window.innerWidth < 768) {
                  onOpenSearchBottomSheet();
                } else {
                  onOpenQuickSearch();
                }
              }}
              className="flex items-center justify-between w-full px-4 py-3 bg-white border border-[#EAC5CE] hover:border-[#9B1B47] rounded-2xl sm:rounded-full shadow-sm hover:shadow-card cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#8E7B85] w-full">
                <Search size={18} className="text-[#9B1B47]" />
                <span className="truncate">Search by age, state, profession, city...</span>
              </div>
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[#9B1B47] bg-[#FFF0F3] group-hover:bg-[#9B1B47] group-hover:text-white transition-colors text-xs font-bold"
              >
                <SlidersHorizontal size={13} />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEW PROFILES (CAROUSEL ON MOBILE, RESPONSIVE GRID ON PC) */}
      <section className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[#2A1620]">Recently Joined Profiles</h2>
            <p className="text-xs text-[#7A6670] mt-0.5">Explore active profiles seeking marriage</p>
          </div>
          <button
            onClick={onViewAllProfiles}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-[#9B1B47] hover:underline"
          >
            <span>View all profiles</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Responsive Grid: Horizontal Scroll on Mobile, 4-Columns on Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 scrollbar-none snap-x">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => onSelectProfile(profile)}
              className="min-w-[170px] sm:min-w-0 bg-white rounded-2xl border border-[#F3D5DD] p-3 shadow-xs hover:border-[#9B1B47] hover:shadow-card cursor-pointer snap-start transition-all flex flex-col justify-between group"
            >
              {/* Profile Image with Privacy Blur and Heart */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#FFF0F3]">
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover filter blur-[2px] scale-105 group-hover:scale-110 transition-transform duration-300"
                />

                {/* Online Indicator */}
                {profile.isOnline && (
                  <span className="absolute top-2.5 left-2.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full shadow-xs" />
                )}

                {/* Favorite Heart Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSave(profile.id);
                  }}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/85 backdrop-blur-xs text-[#9B1B47] hover:scale-110 active:scale-95 transition-transform shadow-xs"
                >
                  <Heart
                    size={15}
                    fill={profile.isSaved ? '#9B1B47' : 'none'}
                    className={profile.isSaved ? 'text-[#9B1B47]' : 'text-[#7A6670]'}
                  />
                </button>

                {/* Verified Badge */}
                {profile.isVerified && (
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 text-emerald-700 text-[10px] font-bold shadow-xs">
                    <CheckCircle2 size={11} className="text-emerald-600" />
                    <span>Verified</span>
                  </div>
                )}
              </div>

              {/* Information */}
              <div className="mt-3 text-left">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#2A1620] truncate">
                    {profile.name}, {profile.age}
                  </h3>
                  <span className="text-[10px] text-[#9B1B47] font-semibold bg-[#FFF0F3] px-1.5 py-0.2 rounded-md">
                    {profile.practiceLevel}
                  </span>
                </div>

                <p className="flex items-center gap-1 text-xs text-[#7A6670] mt-1 truncate">
                  <MapPin size={12} className="shrink-0 text-[#9B1B47]" />
                  <span>{profile.city}, {profile.state}</span>
                </p>

                <p className="text-[11px] text-[#523B47] mt-0.5 truncate font-medium">
                  {profile.education}
                </p>
              </div>

              {/* View Biodata Button */}
              <div className="mt-3 pt-2.5 border-t border-[#F5D7DF]/60">
                <button
                  type="button"
                  className="w-full py-1.5 text-center text-xs font-bold text-[#9B1B47] bg-[#FFF0F3] hover:bg-[#9B1B47] hover:text-white rounded-xl transition-colors"
                >
                  View Biodata
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ISLAMIC AYAH & SUNNAH FOUNDATION */}
      <section className="max-w-4xl mx-auto mt-12 px-4">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EED4DB] text-center shadow-card relative overflow-hidden">
          <FloralCornerBottom className="absolute -bottom-6 -right-6 w-32 h-32" />
          <span className="text-xs font-bold text-[#9B1B47] uppercase tracking-widest block mb-2">
            Surah An-Naba · 78:8
          </span>
          <p className="font-arabic text-2xl sm:text-3xl font-bold text-[#2A1620] my-2 leading-relaxed">
            وَخَلَقْنَاكُمْ أَزْوَاجًا
          </p>
          <p className="text-sm sm:text-base italic text-[#523B47] font-serif">
            “And We created you in pairs.”
          </p>
          <p className="text-xs text-[#7A6670] mt-3 max-w-lg mx-auto">
            The Prophet ﷺ said: “Marriage is of my Sunnah. Whoever does not follow my Sunnah has nothing to do with me.” (Ibn Majah)
          </p>
        </div>
      </section>

      {/* 4. LEARN FOR A BETTER TOMORROW (INDIANIKAH KNOWLEDGE MODULES) */}
      <section className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-[#2A1620]">
            Learn for a Better Tomorrow
          </h2>
          <p className="text-xs text-[#7A6670] mt-0.5">
            Guidance, books and answers to common questions to help you build a successful married life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => onNavigateTo('guidelines')}
            className="p-4 bg-white rounded-2xl border border-[#F3D5DD] hover:border-[#9B1B47] hover:shadow-card cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <FileText size={20} />
            </div>
            <h4 className="text-sm font-bold text-[#2A1620] group-hover:text-[#9B1B47] transition-colors">
              Marriage Guidelines
            </h4>
            <p className="text-xs text-[#7A6670] mt-1 leading-relaxed">
              Rules, etiquette, and essential guidelines for a safe, halal matchmaking experience.
            </p>
          </div>

          <div
            onClick={() => onNavigateTo('books')}
            className="p-4 bg-white rounded-2xl border border-[#F3D5DD] hover:border-[#9B1B47] hover:shadow-card cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <BookOpen size={20} />
            </div>
            <h4 className="text-sm font-bold text-[#2A1620] group-hover:text-[#9B1B47] transition-colors">
              Free Islamic Books
            </h4>
            <p className="text-xs text-[#7A6670] mt-1 leading-relaxed">
              Download Islamic marriage &amp; family preparation books for knowledge and barakah.
            </p>
          </div>

          <div
            onClick={() => onNavigateTo('faq')}
            className="p-4 bg-white rounded-2xl border border-[#F3D5DD] hover:border-[#9B1B47] hover:shadow-card cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <HelpCircle size={20} />
            </div>
            <h4 className="text-sm font-bold text-[#2A1620] group-hover:text-[#9B1B47] transition-colors">
              Education FAQ
            </h4>
            <p className="text-xs text-[#7A6670] mt-1 leading-relaxed">
              Find authentic answers about Nikah, Wali requirements, Mahr, and matrimonial rights.
            </p>
          </div>

          <div
            onClick={() => alert('Dulha Dulhan Course: Opening free video modules...')}
            className="p-4 bg-white rounded-2xl border border-[#F3D5DD] hover:border-[#9B1B47] hover:shadow-card cursor-pointer transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Video size={20} />
            </div>
            <h4 className="text-sm font-bold text-[#2A1620] group-hover:text-[#9B1B47] transition-colors">
              Dulha Dulhan Course
            </h4>
            <p className="text-xs text-[#7A6670] mt-1 leading-relaxed">
              Learn practical responsibilities and moral guidance for husband and wife.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHY INDIANIKAH (KEY VALUES FROM ORIGINAL SITE) */}
      <section className="max-w-7xl mx-auto mt-14 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-[#9B1B47] uppercase tracking-wider">
            Why IndiaNikah
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2A1620] mt-1">
            Built for Serious, Respectful Matrimony
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#F3D5DD] shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#E6F4EA] text-emerald-700 flex items-center justify-center mb-2 font-black text-sm">
              100%
            </div>
            <h4 className="text-xs font-bold text-[#2A1620]">100% Free Forever</h4>
            <p className="text-xs text-[#7A6670] mt-1">No registration fees, no subscriptions, no paywalls.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#F3D5DD] shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-2 font-black text-sm">
              <Lock size={16} />
            </div>
            <h4 className="text-xs font-bold text-[#2A1620]">Privacy First</h4>
            <p className="text-xs text-[#7A6670] mt-1">Photos can remain blurred until mutual interest is approved.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#F3D5DD] shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-2 font-black text-sm">
              <MessageSquare size={16} />
            </div>
            <h4 className="text-xs font-bold text-[#2A1620]">Secure In-App Chat</h4>
            <p className="text-xs text-[#7A6670] mt-1">Communicate with modesty before sharing contact details.</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#F3D5DD] shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mb-2 font-black text-sm">
              <MailCheck size={16} />
            </div>
            <h4 className="text-xs font-bold text-[#2A1620]">Verified Updates</h4>
            <p className="text-xs text-[#7A6670] mt-1">Receive email alerts for proposals, messages, and profile views.</p>
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY SHARE BANNER */}
      <section className="max-w-5xl mx-auto mt-12 px-4">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#FFF0F4] to-[#FFE8EE] border border-[#F6CFD9] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-[#2A1620]">Know someone looking for marriage?</h4>
            <p className="text-xs text-[#7A6670] mt-1">
              Share IndiaNikah with your family and friends. It is free, privacy-focused, and built for serious Nikah.
            </p>
          </div>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'IndiaNikah - Free Muslim Matrimony',
                  url: 'https://www.indianikah.com'
                }).catch(() => {});
              } else {
                alert('Copied link: https://www.indianikah.com');
              }
            }}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-[#9B1B47] text-white text-xs font-bold rounded-2xl shadow-sm hover:bg-[#83143B] transition-colors"
          >
            <Share2 size={15} />
            <span>Share IndiaNikah</span>
          </button>
        </div>
      </section>
    </div>
  );
};
