import React, { useState } from 'react';
import {
  ScreenType,
  BottomTabType,
  UserProfile
} from './types';
import { SAMPLE_PROFILES, RECENT_SEARCHES } from './data/mockData';
import { DesktopHeader } from './components/common/DesktopHeader';
import { MobileHeader } from './components/common/MobileHeader';
import { BottomNavigation } from './components/common/BottomNavigation';
import { SiteFooter } from './components/common/SiteFooter';
import { HomeScreen } from './components/screens/HomeScreen';
import { NewProfilesScreen } from './components/screens/NewProfilesScreen';
import { SearchBottomSheet } from './components/screens/SearchBottomSheet';
import { QuickSearchScreen } from './components/screens/QuickSearchScreen';
import { AdvancedSearchScreen } from './components/screens/AdvancedSearchScreen';
import { SearchResultsScreen } from './components/screens/SearchResultsScreen';
import { SidebarMenu } from './components/screens/SidebarMenu';
import { ProfileDetailModal } from './components/screens/ProfileDetailModal';
import { ProposalsScreen } from './components/screens/ProposalsScreen';
import { SecureChatScreen } from './components/screens/SecureChatScreen';
import { GuidanceBooksScreen } from './components/screens/GuidanceBooksScreen';
import { ProfileHubScreen } from './components/screens/ProfileHubScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [currentTab, setCurrentTab] = useState<BottomTabType>('home');
  
  // Modals & Bottom Sheets
  const [isSearchSheetOpen, setIsSearchSheetOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  
  // Data State
  const [profiles, setProfiles] = useState<UserProfile[]>(SAMPLE_PROFILES);
  const [recentSearches] = useState(RECENT_SEARCHES);
  const [sentProposalIds, setSentProposalIds] = useState<string[]>(['ayesha-24']);
  const [chatPartner, setChatPartner] = useState<UserProfile>(SAMPLE_PROFILES[0]);

  // Toggle Save Profile
  const handleToggleSave = (profileId: string) => {
    setProfiles((prev) =>
      prev.map((p) => (p.id === profileId ? { ...p, isSaved: !p.isSaved } : p))
    );
  };

  // Send Proposal
  const handleSendProposal = (profileId: string) => {
    if (!sentProposalIds.includes(profileId)) {
      setSentProposalIds([...sentProposalIds, profileId]);
    }
  };

  // Mobile Bottom Tab Change Handler
  const handleTabChange = (tab: BottomTabType) => {
    setCurrentTab(tab);
    if (tab === 'home') setCurrentScreen('home');
    if (tab === 'new-profiles') setCurrentScreen('new-profiles');
    if (tab === 'search') {
      if (window.innerWidth < 768) {
        setIsSearchSheetOpen(true);
      } else {
        setCurrentScreen('quick-search');
      }
    }
    if (tab === 'proposals') setCurrentScreen('proposals');
    if (tab === 'profile') setCurrentScreen('profile');
  };

  // Open Chat
  const handleOpenChat = (partner: UserProfile) => {
    setChatPartner(partner);
    setCurrentScreen('secure-chat');
  };

  // Render Screen Content
  const renderScreenContent = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            profiles={profiles}
            onOpenSearchBottomSheet={() => setIsSearchSheetOpen(true)}
            onOpenQuickSearch={() => setCurrentScreen('quick-search')}
            onSelectProfile={(p) => setSelectedProfile(p)}
            onToggleSave={handleToggleSave}
            onViewAllProfiles={() => {
              setCurrentScreen('new-profiles');
              setCurrentTab('new-profiles');
            }}
            onNavigateTo={(screen) => setCurrentScreen(screen)}
          />
        );

      case 'new-profiles':
        return (
          <NewProfilesScreen
            profiles={profiles}
            onSelectProfile={(p) => setSelectedProfile(p)}
            onToggleSave={handleToggleSave}
          />
        );

      case 'profile':
        return (
          <ProfileHubScreen
            onBackToHome={() => {
              setCurrentScreen('home');
              setCurrentTab('home');
            }}
            onNavigateTo={(screen) => setCurrentScreen(screen)}
          />
        );

      case 'quick-search':
        return (
          <QuickSearchScreen
            onBack={() => setCurrentScreen('home')}
            onExecuteSearch={() => setCurrentScreen('search-results')}
          />
        );

      case 'advanced-search':
        return (
          <AdvancedSearchScreen
            onBack={() => setCurrentScreen('home')}
            onExecuteSearch={() => setCurrentScreen('search-results')}
          />
        );

      case 'search-results':
        return (
          <SearchResultsScreen
            profiles={profiles}
            onBack={() => setCurrentScreen('home')}
            onOpenFilters={() => setIsSearchSheetOpen(true)}
            onSelectProfile={(p) => setSelectedProfile(p)}
            onToggleSave={handleToggleSave}
          />
        );

      case 'proposals':
        return (
          <ProposalsScreen
            profiles={profiles}
            onOpenChat={handleOpenChat}
            onSelectProfile={(p) => setSelectedProfile(p)}
          />
        );

      case 'favorites':
        return (
          <SearchResultsScreen
            profiles={profiles.filter((p) => p.isSaved)}
            onBack={() => setCurrentScreen('home')}
            onOpenFilters={() => setIsSearchSheetOpen(true)}
            onSelectProfile={(p) => setSelectedProfile(p)}
            onToggleSave={handleToggleSave}
          />
        );

      case 'secure-chat':
        return (
          <SecureChatScreen
            partner={chatPartner}
            onBack={() => {
              setCurrentScreen('proposals');
              setCurrentTab('proposals');
            }}
            onSelectProfile={(p) => setSelectedProfile(p)}
          />
        );

      case 'guidelines':
      case 'books':
      case 'faq':
        return (
          <GuidanceBooksScreen
            initialTab={currentScreen as any}
            onBack={() => setCurrentScreen('home')}
          />
        );

      default:
        return (
          <HomeScreen
            profiles={profiles}
            onOpenSearchBottomSheet={() => setIsSearchSheetOpen(true)}
            onOpenQuickSearch={() => setCurrentScreen('quick-search')}
            onSelectProfile={(p) => setSelectedProfile(p)}
            onToggleSave={handleToggleSave}
            onViewAllProfiles={() => {
              setCurrentScreen('new-profiles');
              setCurrentTab('new-profiles');
            }}
            onNavigateTo={(screen) => setCurrentScreen(screen)}
          />
        );
    }
  };

  const isChatOpen = currentScreen === 'secure-chat';

  const showMobileBottomNav =
    !isChatOpen &&
    (currentScreen === 'home' ||
    currentScreen === 'new-profiles' ||
    currentScreen === 'search-results' ||
    currentScreen === 'proposals' ||
    currentScreen === 'favorites' ||
    currentScreen === 'profile');

  return (
    <div className="min-h-screen bg-[#FFF9FA] text-[#2A1620] flex flex-col font-sans selection:bg-[#FFE4EA] selection:text-[#9B1B47]">
      {/* 1. DESKTOP HEADER (Visible on PC & Tablets, hidden on Mobile, hidden in Chat) */}
      {!isChatOpen && (
        <div className="hidden md:block">
          <DesktopHeader
            currentScreen={currentScreen}
            onNavigate={(scr) => {
              setCurrentScreen(scr);
              if (scr === 'home') setCurrentTab('home');
              if (scr === 'new-profiles') setCurrentTab('new-profiles');
              if (scr === 'proposals') setCurrentTab('proposals');
              if (scr === 'profile') setCurrentTab('profile');
            }}
            proposalCount={sentProposalIds.length}
          />
        </div>
      )}

      {/* 2. MOBILE HEADER (Visible on Mobile screens, hidden on PC, hidden in Chat) */}
      {!isChatOpen && (
        <div className="md:hidden">
          <MobileHeader
            onOpenSidebar={() => setIsSidebarOpen(true)}
            onNavigateToProfile={() => {
              setCurrentScreen('profile');
              setCurrentTab('profile');
            }}
          />
        </div>
      )}

      {/* 3. MAIN CONTENT VIEWPORT */}
      <main className={`flex-1 w-full ${isChatOpen ? 'h-screen overflow-hidden p-0 m-0' : ''}`}>
        {renderScreenContent()}
      </main>

      {/* 4. FOOTER (Hidden when Chat is active) */}
      {!isChatOpen && (
        <SiteFooter
          onNavigate={(scr) => {
            setCurrentScreen(scr);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* 5. MOBILE BOTTOM NAVIGATION (Hidden when Chat is active) */}
      {showMobileBottomNav && (
        <div className="md:hidden">
          <BottomNavigation
            currentTab={currentTab}
            onTabChange={handleTabChange}
            proposalCount={sentProposalIds.length}
          />
        </div>
      )}

      {/* 6. SEARCH OPTIONS BOTTOM SHEET */}
      <SearchBottomSheet
        isOpen={isSearchSheetOpen}
        onClose={() => setIsSearchSheetOpen(false)}
        onSelectQuickSearch={() => {
          setIsSearchSheetOpen(false);
          setCurrentScreen('quick-search');
        }}
        onSelectAdvancedSearch={() => {
          setIsSearchSheetOpen(false);
          setCurrentScreen('advanced-search');
        }}
        recentSearches={recentSearches}
        onSelectRecentSearch={(query) => {
          setIsSearchSheetOpen(false);
          setCurrentScreen('search-results');
        }}
      />

      {/* 7. SIDEBAR MENU DRAWER (Updated to match soft blush/cream theme) */}
      <SidebarMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={(scr) => {
          setCurrentScreen(scr);
          if (scr === 'home') setCurrentTab('home');
          if (scr === 'new-profiles') setCurrentTab('new-profiles');
          if (scr === 'proposals') setCurrentTab('proposals');
          if (scr === 'profile') setCurrentTab('profile');
        }}
        activeScreen={currentScreen}
      />

      {/* 8. PROFILE DETAIL MODAL */}
      <ProfileDetailModal
        profile={selectedProfile}
        isOpen={!!selectedProfile}
        onClose={() => setSelectedProfile(null)}
        onToggleSave={handleToggleSave}
        onSendProposal={handleSendProposal}
        hasProposed={selectedProfile ? sentProposalIds.includes(selectedProfile.id) : false}
      />
    </div>
  );
}
