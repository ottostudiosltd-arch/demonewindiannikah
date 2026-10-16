import React from 'react';
import { Home, Users, Search, Heart, User } from 'lucide-react';
import { BottomTabType } from '../../types';

interface BottomNavigationProps {
  currentTab: BottomTabType;
  onTabChange: (tab: BottomTabType) => void;
  proposalCount?: number;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentTab,
  onTabChange,
  proposalCount = 2
}) => {
  const tabs = [
    { id: 'home' as BottomTabType, label: 'Home', icon: Home },
    { id: 'new-profiles' as BottomTabType, label: 'New Profiles', icon: Users },
    { id: 'search' as BottomTabType, label: 'Search', icon: Search },
    { id: 'proposals' as BottomTabType, label: 'Proposals', icon: Heart, badge: proposalCount },
    { id: 'profile' as BottomTabType, label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-[#F3D5DD] px-3 py-1.5 flex items-center justify-around z-30 shadow-lg select-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-2 min-w-[56px] transition-all relative ${
              isActive ? 'text-[#9B1B47]' : 'text-[#7A6670] hover:text-[#3E2330]'
            }`}
          >
            <div className="relative">
              <Icon
                size={20}
                strokeWidth={isActive ? 2.4 : 1.8}
                className={`transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}
              />
              {tab.badge && tab.badge > 0 && (
                <span className="absolute -top-1 -right-2 px-1 text-[9px] font-bold bg-[#9B1B47] text-white rounded-full min-w-[14px] text-center">
                  {tab.badge}
                </span>
              )}
            </div>
            <span
              className={`text-[10px] mt-1 transition-all ${
                isActive ? 'font-bold text-[#9B1B47]' : 'font-medium text-[#7A6670]'
              }`}
            >
              {tab.label}
            </span>
            {isActive && (
              <span className="w-1 h-1 bg-[#9B1B47] rounded-full mt-0.5" />
            )}
          </button>
        );
      })}
    </nav>
  );
};
