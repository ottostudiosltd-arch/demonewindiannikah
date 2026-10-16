import React, { useState } from 'react';
import {
  ScreenType,
  BottomTabType,
  ViewportMode,
  UserProfile
} from './types';
import { SAMPLE_PROFILES, RECENT_SEARCHES } from './data/mockData';
import { TopControlBar } from './components/common/TopControlBar';
import { MobileStatusBar } from './components/common/MobileStatusBar';
import { MobileHeader } from './components/common/MobileHeader';
import { BottomNavigation } from './components/common/BottomNavigation';
import { HomeScreen } from './components/screens/HomeScreen';
import { SearchBottomSheet } from './components/screens/SearchBottomSheet';
import { QuickSearchScreen } from './components/screens/QuickSearchScreen';
import { AdvancedSearchScreen } from './components/screens/AdvancedSearchScreen';
import { SearchResultsScreen } from './components/screens/SearchResultsScreen';
import { SidebarMenu } from './components/screens/SidebarMenu';
import { ProfileDetailModal } from './components/screens/ProfileDetailModal';
import { ProposalsScreen } from './components/screens/ProposalsScreen';
import { SecureChatScreen } from './components/screens/SecureChatScreen';
import { GuidanceBooksScreen } from './components/screens/GuidanceBooksScreen';
import { ScreensOverview } from './components/gallery/ScreensOverview';

export default function App() {
  const [viewportMode, setViewportMode] = useState<ViewportMode>('mobile');
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [currentTab, setCurrentTab] = useState<BottomTabType>('home');
  
  // Modals & Sheets
  const [isSearchSheetOpen, setIsSearchSheetOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  
  // Data State
  const [profiles, setProfiles] = useState<UserProfile[]>(SAMPLE_PROFILES);
  const [recentSearches, setRecentSearches] = useState(RECENT_SEARCHES);
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

  // Tab Change Handler
  const handleTabChange = (tab: BottomTabType) => {
    setCurrentTab(tab);
    if (tab === 'home') setCurrentScreen('home');
    if (tab === 'new-profiles') setCurrentScreen('new-profiles');
    if (tab === 'search') setCurrentScreen('search-results');
    if (tab === 'proposals') setCurrentScreen('proposals');
    if (tab === 'profile') {
      setSelectedProfile(profiles[0]);
    }
  };

  // Open Chat
  const handleOpenChat = (partner: UserProfile) => {
    setChatPartner(partner);
    setCurrentScreen('secure-chat');
  };

  // Screen Content Renderer
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
            onViewAllProfiles={() => setCurrentScreen('search-results')}
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
      case 'new-profiles':
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
            onBack={() => setCurrentScreen('proposals')}
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
            onViewAllProfiles={() => setCurrentScreen('search-results')}
            onNavigateTo={(screen) => setCurrentScreen(screen)}
          />
        );
    }
  };

  const showBottomNav =
    currentScreen === 'home' ||
    currentScreen === 'search-results' ||
    currentScreen === 'new-profiles' ||
    currentScreen === 'proposals' ||
    currentScreen === 'favorites';

  return (
    <div className="min-h-screen bg-[#FDF4F6] text-[#2A1620] flex flex-col font-sans">
      {/* Top Floating Control Bar */}
      <TopControlBar
        mode={viewportMode}
        onModeChange={setViewportMode}
        activeScreen={currentScreen}
        onScreenChange={(scr) => {
          if (scr === 'search-options') {
            setIsSearchSheetOpen(true);
          } else if (scr === 'sidebar-menu') {
            setIsSidebarOpen(true);
          } else {
            setCurrentScreen(scr);
          }
        }}
      />

      {/* Main View Area */}
      <main className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {viewportMode === 'gallery' ? (
          /* ALL 6 SCREENS OVERVIEW (MATCHING USER'S UPLOADED IMAGE) */
          <ScreensOverview
            onSelectScreen={(screen) => {
              if (screen === 'search-options') {
                setCurrentScreen('home');
                setIsSearchSheetOpen(true);
              } else if (screen === 'sidebar-menu') {
                setCurrentScreen('home');
                setIsSidebarOpen(true);
              } else {
                setCurrentScreen(screen);
              }
              setViewportMode('mobile');
            }}
          />
        ) : (
          /* MOBILE SIMULATOR DEVICE FRAME */
          <div
            className={`w-full transition-all duration-300 ${
              viewportMode === 'mobile'
                ? 'max-w-[400px] h-[844px] bg-[#FFF9FA] rounded-[48px] border-[10px] border-[#2A1620] shadow-[0_25px_60px_-15px_rgba(155,27,71,0.25)] relative overflow-hidden flex flex-col'
                : 'max-w-4xl bg-[#FFF9FA] rounded-3xl border border-[#F0D5DD] shadow-lg min-h-[85vh] relative flex flex-col overflow-hidden'
            }`}
          >
            {/* iPhone Top Notch/Island pill for Mobile Mode */}
            {viewportMode === 'mobile' && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#2A1620] rounded-full z-50 pointer-events-none" />
            )}

            {/* Mobile Status Bar */}
            <MobileStatusBar />

            {/* Mobile Header (Hidden in inner form sub-screens) */}
            {currentScreen === 'home' && (
              <MobileHeader
                onOpenSidebar={() => setIsSidebarOpen(true)}
              />
            )}

            {/* Screen Viewport */}
            <div className="flex-1 overflow-y-auto relative">
              {renderScreenContent()}
            </div>

            {/* Bottom Navigation */}
            {showBottomNav && (
              <BottomNavigation
                currentTab={currentTab}
                onTabChange={handleTabChange}
                proposalCount={sentProposalIds.length}
              />
            )}

            {/* Search Options Bottom Sheet (Screen 2) */}
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

            {/* Sidebar Menu (Screen 6) */}
            <SidebarMenu
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              onNavigate={(scr) => setCurrentScreen(scr)}
              activeScreen={currentScreen}
            />

            {/* Profile Detail Modal */}
            <ProfileDetailModal
              profile={selectedProfile}
              isOpen={!!selectedProfile}
              onClose={() => setSelectedProfile(null)}
              onToggleSave={handleToggleSave}
              onSendProposal={handleSendProposal}
              hasProposed={selectedProfile ? sentProposalIds.includes(selectedProfile.id) : false}
            />
          </div>
        )}
      </main>
    </div>
  );
}
