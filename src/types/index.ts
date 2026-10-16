export type ScreenType = 
  | 'home' 
  | 'new-profiles'
  | 'search-results' 
  | 'quick-search' 
  | 'advanced-search' 
  | 'sidebar-menu'
  | 'proposals'
  | 'favorites'
  | 'secure-chat'
  | 'guidelines'
  | 'books'
  | 'faq'
  | 'profile'
  | 'edit-profile'
  | 'my-photos'
  | 'profile-completion'
  | 'privacy-settings'
  | 'profile-menu';

export type BottomTabType = 'home' | 'new-profiles' | 'search' | 'proposals' | 'profile';

export type ViewportMode = 'mobile' | 'desktop' | 'gallery';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  gender: 'Sister' | 'Brother';
  city: string;
  state: string;
  education: string;
  occupation: string;
  practiceLevel: string; // e.g., 'Practicing', 'Very Practicing'
  sect?: string;
  motherTongue?: string;
  height?: string;
  maritalStatus?: string;
  photoUrl: string;
  isVerified: boolean;
  isOnline: boolean;
  isSaved: boolean;
  isNew?: boolean;
  aboutMe?: string;
  aboutDeen?: string;
  expectations?: string;
  waliContact?: {
    name: string;
    relation: string;
    phone: string;
  };
}

export interface QuickSearchFilter {
  gender: string;
  maritalStatus: string;
  minAge: number;
  maxAge: number;
  state: string;
  city: string;
}

export interface RecentSearchItem {
  id: string;
  title: string;
}
