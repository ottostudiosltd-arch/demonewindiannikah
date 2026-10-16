import { UserProfile, RecentSearchItem } from '../types';

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
    photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    isOnline: true,
    isSaved: true,
    aboutMe: 'Working at a reputable IT MNC in Pune. Balancing professional ambition with Islamic deen, daily salah, and Quranic recitation. Love reading and baking.',
    aboutDeen: 'Observes hijab, prays 5 daily salah, keeps fasts in Ramadan, seeks halal earnings, and values sunnah in daily household conduct.',
    expectations: 'Looking for a pious, kind-hearted brother who strives on the path of Allah, respects his parents, and wants to build a home of peace and tranquility.',
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
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    isOnline: true,
    isSaved: false,
    aboutMe: 'Passionate about scientific research and healthcare. Enjoys nature, community service, and family gatherings. Values humility and honesty.',
    aboutDeen: 'Regular in 5 times daily prayers, hijab observed, continuously learning Islamic history and Seerah.',
    expectations: 'Seeking an educated, practicing Muslim professional who values honesty, family values, and mutual emotional and spiritual growth.',
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
    occupation: 'Pursuing Masters & Literature',
    practiceLevel: 'Practicing',
    sect: 'Sunni',
    motherTongue: 'Urdu',
    height: "5'5\"",
    maritalStatus: 'Never Married',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    isVerified: false,
    isOnline: true,
    isSaved: false,
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
    photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    isOnline: true,
    isSaved: false,
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
    id: 'fatima-25',
    name: 'Fatima',
    age: 25,
    gender: 'Sister',
    city: 'Hyderabad',
    state: 'Telangana',
    education: 'MBBS, Doctor',
    occupation: 'Resident Doctor',
    practiceLevel: 'Practicing',
    sect: 'Sunni',
    motherTongue: 'Urdu',
    height: "5'6\"",
    maritalStatus: 'Never Married',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    isOnline: false,
    isSaved: true,
    aboutMe: 'Dedicated medical doctor with a compassion for healing. Values peaceful domestic life grounded in Islamic traditions.',
    aboutDeen: 'Regular in daily prayers, modest demeanor, respects Islamic boundaries.',
    expectations: 'Looking for an educated, career-oriented yet deen-conscious life partner.',
    waliContact: {
      name: 'Syed Mansoor',
      relation: 'Father',
      phone: '+91 98490 33445'
    }
  },
  {
    id: 'ahmed-28',
    name: 'Ahmed',
    age: 28,
    gender: 'Brother',
    city: 'Pune',
    state: 'Maharashtra',
    education: 'M.Tech, Computer Science',
    occupation: 'Lead AI Engineer',
    practiceLevel: 'Practicing',
    sect: 'Sunni / Hanafi',
    motherTongue: 'Urdu',
    height: "5'11\"",
    maritalStatus: 'Never Married',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    isVerified: true,
    isOnline: true,
    isSaved: false,
    aboutMe: 'Software professional in Pune. Values sincerity, mutual respect, family bonding, and simple living.',
    aboutDeen: 'Practicing Muslim following Quran and Sunnah, praying in congregation when possible.',
    expectations: 'Seeking a deen-conscious sister who values peace, respect, and mutual understanding.',
    waliContact: {
      name: 'Ahmed (Self / Father contact available)',
      relation: 'Self',
      phone: '+91 98220 77889'
    }
  }
];

export const RECENT_SEARCHES: RecentSearchItem[] = [
  { id: '1', title: 'Girls, 22 - 28, Maharashtra' },
  { id: '2', title: 'Boys, 25 - 30, Any state' }
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
