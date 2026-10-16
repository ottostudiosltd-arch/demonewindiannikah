import { UserProfile, RecentSearchItem } from '../types';

export const CURRENT_USER: UserProfile = {
  id: 'tausif-23',
  name: 'Tausif',
  age: 23,
  gender: 'Brother',
  city: 'Pune',
  state: 'Maharashtra',
  education: 'B.Tech, Computer Engineering',
  occupation: 'Software Engineer',
  practiceLevel: 'Practicing',
  sect: 'Sunni / Hanafi',
  motherTongue: 'Urdu',
  height: "5'10\"",
  maritalStatus: 'Never Married',
  photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  isVerified: true,
  isOnline: true,
  isSaved: false,
  aboutMe: "I'm a simple and practicing Muslim, currently pursuing B.Tech in Computer Engineering. I value deen, family, and a peaceful life partner who shares similar values.",
  aboutDeen: 'Observing 5 daily prayers, halal earnings, and striving to implement Quran & Sunnah in daily family affairs.',
  expectations: 'Looking for a pious, kind-hearted, deen-conscious sister who values Islamic family harmony, mutual respect, and peaceful companionship.',
  waliContact: {
    name: 'Shaikh Farooq (Father)',
    relation: 'Father',
    phone: '+91 98230 11223'
  }
};

export const SAMPLE_PROFILES: UserProfile[] = [
  {
    id: 'ayesha-24',
    name: 'Ayesha',
    age: 24,
    gender: 'Sister',
    city: 'Pune',
    state: 'Maharashtra',
    education: 'B.Tech, Software Engineer',
    occupation: 'Software Engineer',
    practiceLevel: 'Practicing',
    sect: 'Sunni / Hanafi',
    motherTongue: 'Urdu',
    height: "5'4\"",
    maritalStatus: 'Never Married',
    photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=500&q=80',
    isVerified: true,
    isOnline: true,
    isSaved: true,
    isNew: true,
    aboutMe: 'Working at a reputable IT MNC in Pune. Balancing professional ambition with Islamic deen, daily salah, and Quranic recitation. Love reading and baking.',
    aboutDeen: 'Observes hijab, prays 5 daily salah, keeps fasts in Ramadan, seeks halal earnings, and values sunnah in daily conduct.',
    expectations: 'Looking for a pious, kind-hearted brother who strives on the path of Allah, respects his parents, and wants to build a home of peace.',
    waliContact: {
      name: 'Farooq Ahmed (Father)',
      relation: 'Father / Wali',
      phone: '+91 98221 44812'
    }
  },
  {
    id: 'zainab-26',
    name: 'Zainab',
    age: 26,
    gender: 'Sister',
    city: 'Mumbai',
    state: 'Maharashtra',
    education: 'M.Sc, Research',
    occupation: 'Clinical Research Associate',
    practiceLevel: 'Practicing',
    sect: 'Sunni',
    motherTongue: 'Hindi / Urdu',
    height: "5'3\"",
    maritalStatus: 'Never Married',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    isVerified: true,
    isOnline: true,
    isSaved: true,
    isNew: true,
    aboutMe: 'Passionate about scientific research and healthcare. Enjoys nature, community service, and family gatherings. Values humility and honesty.',
    aboutDeen: 'Regular in 5 daily prayers, hijab observed, continuously learning Islamic history and Seerah.',
    expectations: 'Seeking an educated, practicing Muslim professional who values honesty, family values, and spiritual growth.',
    waliContact: {
      name: 'Dr. Rashid Khan',
      relation: 'Father',
      phone: '+91 98190 22345'
    }
  },
  {
    id: 'sara-23',
    name: 'Sara',
    age: 23,
    gender: 'Sister',
    city: 'Delhi',
    state: 'Delhi',
    education: 'B.A, Student',
    occupation: 'Pursuing Masters in Literature',
    practiceLevel: 'Practicing',
    sect: 'Sunni',
    motherTongue: 'Urdu',
    height: "5'5\"",
    maritalStatus: 'Never Married',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
    isVerified: false,
    isOnline: true,
    isSaved: false,
    isNew: true,
    aboutMe: 'Final year university student with interests in creative writing, calligraphy, and Islamic art. Raised in a loving, values-driven family.',
    aboutDeen: 'Prays regularly, observes modest dress, values patience and kindness as taught by Prophet Muhammad ﷺ.',
    expectations: 'Looking for a mature, respectful partner who understands the sunnah of marriage and supports learning and deen.',
    waliContact: {
      name: 'Mohammad Tariq',
      relation: 'Brother / Wali',
      phone: '+91 98111 67890'
    }
  },
  {
    id: 'hina-25',
    name: 'Hina',
    age: 25,
    gender: 'Sister',
    city: 'Bangalore',
    state: 'Karnataka',
    education: 'MBA, Finance',
    occupation: 'Financial Analyst',
    practiceLevel: 'Practicing',
    sect: 'Sunni',
    motherTongue: 'English / Urdu',
    height: "5'4\"",
    maritalStatus: 'Never Married',
    photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80',
    isVerified: true,
    isOnline: true,
    isSaved: false,
    isNew: true,
    aboutMe: 'Working in fintech sector in Bangalore. Simple lifestyle, loves cooking, traveling, and spending quality time with family.',
    aboutDeen: 'Firm belief in Islamic principles, striving to keep heart clean and perform prayers on time with mindfulness.',
    expectations: 'Seeking a well-educated brother with high moral standards, good humor, and dedication to deen.',
    waliContact: {
      name: 'Ibrahim Siddiqui',
      relation: 'Father',
      phone: '+91 98450 11223'
    }
  },
  {
    id: 'noor-24',
    name: 'Noor',
    age: 24,
    gender: 'Sister',
    city: 'Hyderabad',
    state: 'Telangana',
    education: 'BDS, Doctor',
    occupation: 'Dental Surgeon',
    practiceLevel: 'Practicing',
    sect: 'Sunni',
    motherTongue: 'Urdu',
    height: "5'5\"",
    maritalStatus: 'Never Married',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
    isVerified: true,
    isOnline: true,
    isSaved: false,
    isNew: true,
    aboutMe: 'Practicing dental surgeon with deep family roots in Hyderabad. Enjoys interior design, calligraphy, and Quranic study circles.',
    aboutDeen: 'Values modest attire, regular salah, and keeping halal principles foremost in both personal and professional spheres.',
    expectations: 'Looking for a respectful, career-driven brother who honors Islamic principles and values family ties.',
    waliContact: {
      name: 'Dr. Anwaruddin',
      relation: 'Father',
      phone: '+91 98480 99887'
    }
  },
  {
    id: 'mehwish-27',
    name: 'Mehwish',
    age: 27,
    gender: 'Sister',
    city: 'Ahmedabad',
    state: 'Gujarat',
    education: 'MCA, Developer',
    occupation: 'Full Stack Engineer',
    practiceLevel: 'Practicing',
    sect: 'Sunni',
    motherTongue: 'Gujarati / Urdu',
    height: "5'3\"",
    maritalStatus: 'Never Married',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    isVerified: false,
    isOnline: true,
    isSaved: false,
    isNew: true,
    aboutMe: 'Software developer who loves problem solving, reading Islamic books, and quiet family life. Grounded and optimistic.',
    aboutDeen: 'Committed to prayers, Islamic ethics in speech, and mutual respect in domestic partnership.',
    expectations: 'Looking for an understanding, deen-oriented partner with good character and positive outlook on life.',
    waliContact: {
      name: 'Salim Merchant',
      relation: 'Father',
      phone: '+91 98250 44332'
    }
  }
];

export const RECENT_SEARCHES: RecentSearchItem[] = [
  { id: '1', title: 'Girls, 22 - 28, Maharashtra' },
  { id: '2', title: 'Boys, 25 - 30, Any state' }
];

export const USER_PHOTOS = [
  { id: 'p1', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', isMain: true },
  { id: 'p2', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', isMain: false },
  { id: 'p3', url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80', isMain: false },
  { id: 'p4', url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80', isMain: false },
];

export const FAQ_ITEMS = [
  {
    q: 'Is IndiaNikah really 100% free?',
    a: 'Yes, completely free forever. There are no registration charges, no subscription tiers, no paywalls to send proposals or chat.'
  },
  {
    q: 'How is privacy protected for sisters?',
    a: 'Profiles can enable photo blur by default. Photos are only revealed upon mutual interest approval. Contact details are never shared publicly.'
  },
  {
    q: 'What is the role of the Wali / Family?',
    a: 'We strongly encourage family and Wali involvement at every stage. Wali contact details can be listed for respectful elder-to-elder communication.'
  },
  {
    q: 'How does proposal sending work?',
    a: 'You can express interest or send a sincere proposal with a short polite message. Once accepted, secure in-app messaging unlocks.'
  }
];

export const BOOKS_LIST = [
  {
    title: 'A Gift for the Muslim Couple',
    author: 'Hazrat Maulana Ashraf Ali Thanvi',
    category: 'Marriage Advice',
    pages: '280 pages',
    description: 'Comprehensive guidelines for newly-wed couples on rights, duties, and mutual compassion.'
  },
  {
    title: 'Islamic Guide to a Successful Marriage',
    author: 'Dr. Muhammad Abdul Bari',
    category: 'Family Life',
    pages: '195 pages',
    description: 'Practical contemporary advice on communication, resolving differences, and nurturing love.'
  },
  {
    title: 'The Rights of Husband and Wife in Islam',
    author: 'Mufti Muhammad Shafi',
    category: 'Fiqh & Sunnah',
    pages: '140 pages',
    description: 'Detailed explanation of marital rights in the light of the Quran and Hadith.'
  }
];
