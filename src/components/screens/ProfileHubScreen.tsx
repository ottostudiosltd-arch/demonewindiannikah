import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  CheckCircle2,
  MapPin,
  GraduationCap,
  Sparkles,
  Heart,
  Eye,
  Users,
  Edit3,
  BadgeCheck,
  Users2,
  Compass,
  User,
  FileText,
  Image as ImageIcon,
  Lock,
  Plus,
  ShieldCheck,
  Check,
  Trash2,
  Download,
  Ban,
  MessageSquare,
  HelpCircle,
  LogOut,
  Bell,
  Globe
} from 'lucide-react';
import { CURRENT_USER, USER_PHOTOS } from '../../data/mockData';
import { FloralArchTop, FloralCornerBottom } from '../common/FloralPattern';

interface ProfileHubScreenProps {
  onBackToHome: () => void;
  onNavigateTo: (screen: any) => void;
}

type ProfileSubView =
  | 'overview'
  | 'edit-profile'
  | 'my-photos'
  | 'completion'
  | 'privacy-settings'
  | 'profile-menu';

export const ProfileHubScreen: React.FC<ProfileHubScreenProps> = ({
  onBackToHome,
  onNavigateTo
}) => {
  const [subView, setSubView] = useState<ProfileSubView>('overview');
  const [user, setUser] = useState(CURRENT_USER);
  const [photos, setPhotos] = useState(USER_PHOTOS);

  // Settings State
  const [visibility, setVisibility] = useState<'all' | 'verified' | 'hidden'>('all');
  const [allowProposals, setAllowProposals] = useState(true);
  const [allowChat, setAllowChat] = useState(true);
  const [showContact, setShowContact] = useState(false);

  /* ----------------------------------------------------
     1. SUBVIEW: PROFILE OVERVIEW (SCREEN 1 OF IMAGE 2)
  ---------------------------------------------------- */
  const renderOverview = () => (
    <div className="space-y-4 pb-20 animate-fade-in select-none">
      {/* Top Profile Card */}
      <div className="relative pt-6 pb-6 px-4 bg-gradient-to-b from-[#FFF0F4] via-[#FFF5F7] to-white rounded-3xl border border-[#FADCE3] shadow-card text-center">
        <FloralArchTop className="absolute -top-1 left-0 right-0 w-full opacity-40 pointer-events-none" />

        {/* Circular Avatar with Camera Badge */}
        <div className="relative w-24 h-24 mx-auto mb-3">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#9B1B47] ring-4 ring-[#FFF0F3] shadow-md">
            <img
              src={user.photoUrl}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => setSubView('my-photos')}
            className="absolute bottom-0 right-0 p-2 rounded-full bg-[#9B1B47] text-white shadow-md hover:bg-[#83143B] transition-transform active:scale-95"
            title="Update Photo"
          >
            <Camera size={14} />
          </button>
        </div>

        {/* Name & Verification */}
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <h2 className="text-xl font-black text-[#2A1620]">
            {user.name}, {user.age}
          </h2>
          <span className="flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
            <CheckCircle2 size={11} className="text-emerald-600" />
            Verified
          </span>
        </div>

        {/* Meta Info */}
        <p className="flex items-center justify-center gap-1 text-xs text-[#7A6670] mb-2 font-medium">
          <MapPin size={12} className="text-[#9B1B47]" />
          <span>{user.city}, {user.state}</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] text-[#523B47] mb-4">
          <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-[#F3D5DD]">
            <GraduationCap size={12} className="text-[#9B1B47]" />
            {user.education}
          </span>
          <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-[#F3D5DD]">
            <Sparkles size={12} className="text-[#9B1B47]" />
            {user.practiceLevel}
          </span>
          <span className="bg-white px-2 py-0.5 rounded-md border border-[#F3D5DD]">
            {user.maritalStatus}
          </span>
        </div>

        {/* Edit Profile CTA Button */}
        <button
          onClick={() => setSubView('edit-profile')}
          className="w-full max-w-xs mx-auto flex items-center justify-center gap-2 py-2.5 px-4 bg-[#9B1B47] hover:bg-[#83143B] text-white text-xs font-bold rounded-2xl shadow-sm transition-all"
        >
          <Edit3 size={14} />
          <span>Edit Profile</span>
        </button>

        {/* 3 Stats Badges (Views, Favorites, Proposals) */}
        <div className="grid grid-cols-3 gap-2 mt-5 max-w-sm mx-auto">
          <div className="p-2.5 rounded-2xl bg-white border border-[#F5D7DF] shadow-xs">
            <div className="flex items-center justify-center gap-1 text-[#9B1B47] mb-0.5">
              <Eye size={14} />
              <span className="text-sm font-extrabold text-[#2A1620]">245</span>
            </div>
            <span className="text-[10px] text-[#7A6670] font-medium">Profile Views</span>
          </div>

          <div
            onClick={() => onNavigateTo('favorites')}
            className="p-2.5 rounded-2xl bg-white border border-[#F5D7DF] shadow-xs cursor-pointer hover:border-[#9B1B47]"
          >
            <div className="flex items-center justify-center gap-1 text-[#9B1B47] mb-0.5">
              <Heart size={14} fill="#9B1B47" />
              <span className="text-sm font-extrabold text-[#2A1620]">18</span>
            </div>
            <span className="text-[10px] text-[#7A6670] font-medium">Favorites</span>
          </div>

          <div
            onClick={() => onNavigateTo('proposals')}
            className="p-2.5 rounded-2xl bg-white border border-[#F5D7DF] shadow-xs cursor-pointer hover:border-[#9B1B47]"
          >
            <div className="flex items-center justify-center gap-1 text-[#9B1B47] mb-0.5">
              <Users size={14} />
              <span className="text-sm font-extrabold text-[#2A1620]">7</span>
            </div>
            <span className="text-[10px] text-[#7A6670] font-medium">Proposals</span>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-[#2A1620]">About Me</h3>
          <button
            onClick={() => setSubView('edit-profile')}
            className="text-xs font-bold text-[#9B1B47] hover:underline"
          >
            Edit
          </button>
        </div>
        <p className="text-xs text-[#523B47] leading-relaxed">
          {user.aboutMe}
        </p>
      </div>

      {/* Quick Access Menu Cards matching image */}
      <div className="space-y-2">
        <div
          onClick={() => setSubView('edit-profile')}
          className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs hover:border-[#9B1B47] cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center">
              <BadgeCheck size={16} />
            </div>
            <span className="text-xs font-bold text-[#2A1620]">My Basic Details</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </div>

        <div
          onClick={() => setSubView('completion')}
          className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs hover:border-[#9B1B47] cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
              80%
            </div>
            <div>
              <span className="text-xs font-bold text-[#2A1620] block">Profile Completion</span>
              <span className="text-[10px] text-emerald-600">Great progress! Add lifestyle to reach 100%</span>
            </div>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </div>

        <div
          onClick={() => setSubView('my-photos')}
          className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs hover:border-[#9B1B47] cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center">
              <ImageIcon size={16} />
            </div>
            <span className="text-xs font-bold text-[#2A1620]">My Photos ({photos.length})</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </div>

        <div
          onClick={() => setSubView('privacy-settings')}
          className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs hover:border-[#9B1B47] cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center">
              <Lock size={16} />
            </div>
            <span className="text-xs font-bold text-[#2A1620]">Privacy &amp; Settings</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </div>

        <div
          onClick={() => setSubView('profile-menu')}
          className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs hover:border-[#9B1B47] cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center">
              <User size={16} />
            </div>
            <span className="text-xs font-bold text-[#2A1620]">Profile Menu &amp; Quick Access</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </div>
      </div>
    </div>
  );

  /* ----------------------------------------------------
     2. SUBVIEW: EDIT PROFILE (SCREEN 2 OF IMAGE 2)
  ---------------------------------------------------- */
  const renderEditProfile = () => {
    const editSections = [
      { id: 'basic', icon: BadgeCheck, title: 'Basic Information', sub: 'Age, City, Marital Status' },
      { id: 'education', icon: GraduationCap, title: 'Education & Profession', sub: 'Qualification, Occupation' },
      { id: 'religious', icon: Sparkles, title: 'Religious Background', sub: 'Practice level, Sect (optional)' },
      { id: 'family', icon: Users2, title: 'Family Details', sub: 'Family type, Values' },
      { id: 'lifestyle', icon: Compass, title: 'Lifestyle', sub: 'Habits, Preferences' },
      { id: 'appearance', icon: User, title: 'Appearance', sub: 'Height, Body type (optional)' },
      { id: 'aboutme', icon: FileText, title: 'About Me', sub: 'Short bio, Interests' },
      { id: 'expectations', icon: Users, title: 'Expectations', sub: 'Partner preferences' },
      { id: 'photos', icon: ImageIcon, title: 'Photos', sub: 'Add, Remove, Reorder' },
      { id: 'privacy', icon: Lock, title: 'Privacy Settings', sub: 'Profile visibility, Contact preferences' },
    ];

    return (
      <div className="space-y-3 pb-20 animate-fade-in select-none">
        <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#F5D7DF]">
          <button
            onClick={() => setSubView('overview')}
            className="p-1 -ml-1 text-[#3E2330] hover:text-[#9B1B47]"
          >
            <ChevronLeft size={22} />
          </button>
          <h2 className="text-base font-extrabold text-[#2A1620]">Edit Profile</h2>
        </div>

        <div className="space-y-2">
          {editSections.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => {
                  if (item.id === 'photos') setSubView('my-photos');
                  else if (item.id === 'privacy') setSubView('privacy-settings');
                  else alert(`Editing ${item.title}...`);
                }}
                className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs hover:border-[#9B1B47] cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2A1620]">{item.title}</h4>
                    <p className="text-[11px] text-[#7A6670]">{item.sub}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[#8E7B85]" />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  /* ----------------------------------------------------
     3. SUBVIEW: MY PHOTOS (SCREEN 3 OF IMAGE 2)
  ---------------------------------------------------- */
  const renderMyPhotos = () => (
    <div className="space-y-4 pb-20 animate-fade-in select-none">
      <div className="flex items-center justify-between pb-2 border-b border-[#F5D7DF]">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSubView('overview')}
            className="p-1 -ml-1 text-[#3E2330] hover:text-[#9B1B47]"
          >
            <ChevronLeft size={22} />
          </button>
          <h2 className="text-base font-extrabold text-[#2A1620]">My Photos</h2>
        </div>
        <button
          onClick={() => alert('Manage Photo Privacy')}
          className="text-xs font-bold text-[#9B1B47] hover:underline"
        >
          Manage
        </button>
      </div>

      <div>
        <h3 className="text-xs font-bold text-[#2A1620]">Add clear and recent photos</h3>
        <p className="text-xs text-[#7A6670] mt-0.5">Good photos help you get better responses.</p>
      </div>

      {/* Privacy Notice Box */}
      <div className="p-3 bg-[#FFF0F4] rounded-2xl border border-[#FADCE3] flex items-center gap-2.5">
        <ShieldCheck size={18} className="text-[#9B1B47] shrink-0" />
        <p className="text-xs text-[#83143B] leading-relaxed">
          Your photos are safe and only visible to relevant users as per your privacy settings.
        </p>
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-3 gap-2.5">
        {photos.map((item, idx) => (
          <div
            key={item.id}
            className="relative aspect-square rounded-2xl overflow-hidden bg-[#FFF0F3] border border-[#F3D5DD] shadow-xs group"
          >
            <img src={item.url} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
            {item.isMain && (
              <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-full bg-[#9B1B47] text-white text-[9px] font-bold shadow-xs">
                Main
              </span>
            )}
          </div>
        ))}

        {/* Add Photo Button */}
        <button
          onClick={() => alert('Select a new halal, decent photo to upload.')}
          className="aspect-square rounded-2xl border-2 border-dashed border-[#EAC5CE] hover:border-[#9B1B47] bg-white flex flex-col items-center justify-center text-[#9B1B47] hover:bg-[#FFF0F3] transition-colors"
        >
          <Plus size={22} />
          <span className="text-[10px] font-bold mt-1">Add Photo</span>
        </button>
      </div>

      {/* Photo Guidelines */}
      <div className="p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
        <h4 className="text-xs font-bold text-[#2A1620] mb-2 flex items-center gap-1.5">
          <Sparkles size={14} className="text-[#9B1B47]" />
          Photo Guidelines
        </h4>
        <div className="space-y-1.5 text-xs text-[#523B47]">
          <p className="flex items-center gap-2">
            <Check size={14} className="text-emerald-600" />
            <span>Use clear and recent photos</span>
          </p>
          <p className="flex items-center gap-2">
            <Check size={14} className="text-emerald-600" />
            <span>Avoid group photos</span>
          </p>
          <p className="flex items-center gap-2">
            <Check size={14} className="text-emerald-600" />
            <span>No inappropriate content</span>
          </p>
          <p className="flex items-center gap-2">
            <Check size={14} className="text-emerald-600" />
            <span>Prefer natural and decent photos</span>
          </p>
        </div>
      </div>
    </div>
  );

  /* ----------------------------------------------------
     4. SUBVIEW: PROFILE COMPLETION (SCREEN 4 OF IMAGE 2)
  ---------------------------------------------------- */
  const renderCompletion = () => {
    const checklist = [
      { id: '1', title: 'Basic Information', status: 'Completed', isDone: true },
      { id: '2', title: 'Education & Profession', status: 'Completed', isDone: true },
      { id: '3', title: 'Religious Background', status: 'Completed', isDone: true },
      { id: '4', title: 'Family Details', status: 'Completed', isDone: true },
      { id: '5', title: 'Lifestyle', status: 'Pending', isDone: false, btn: 'Add Now' },
      { id: '6', title: 'Photos', status: '3 of 4 added', isDone: false, btn: 'Add More' },
      { id: '7', title: 'Partner Expectations', status: 'Pending', isDone: false, btn: 'Add Now' },
    ];

    return (
      <div className="space-y-4 pb-20 animate-fade-in select-none">
        <div className="flex items-center gap-2 pb-2 border-b border-[#F5D7DF]">
          <button
            onClick={() => setSubView('overview')}
            className="p-1 -ml-1 text-[#3E2330] hover:text-[#9B1B47]"
          >
            <ChevronLeft size={22} />
          </button>
          <h2 className="text-base font-extrabold text-[#2A1620]">Profile Completion</h2>
        </div>

        {/* Circular Progress Banner */}
        <div className="p-4 bg-white rounded-3xl border border-[#F3D5DD] shadow-xs flex items-center gap-4">
          <div className="relative w-18 h-18 rounded-full flex items-center justify-center shrink-0 border-4 border-emerald-500 bg-emerald-50">
            <span className="text-lg font-black text-emerald-800">80%</span>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#2A1620]">Profile Completion</h3>
            <p className="text-xs text-[#7A6670] mt-0.5 leading-relaxed">
              Complete your profile to get 3x better matches and verified badge priority.
            </p>
          </div>
        </div>

        {/* Checklist */}
        <div className="space-y-2">
          {checklist.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    item.isDone ? 'bg-emerald-100 text-emerald-700' : 'bg-[#FFF0F3] text-[#9B1B47]'
                  }`}
                >
                  {item.isDone ? <Check size={14} strokeWidth={2.5} /> : <Sparkles size={14} />}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2A1620]">{item.title}</h4>
                  <span
                    className={`text-[10px] font-semibold ${
                      item.isDone ? 'text-emerald-700' : 'text-[#8E7B85]'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              {item.isDone ? (
                <ChevronRight size={16} className="text-[#8E7B85]" />
              ) : (
                <button
                  onClick={() => alert(`Adding ${item.title}...`)}
                  className="px-3 py-1 rounded-xl bg-[#9B1B47] text-white text-[10px] font-bold hover:bg-[#83143B] transition-colors"
                >
                  {item.btn}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  /* ----------------------------------------------------
     5. SUBVIEW: PRIVACY & SETTINGS (SCREEN 5 OF IMAGE 2)
  ---------------------------------------------------- */
  const renderPrivacySettings = () => (
    <div className="space-y-4 pb-20 animate-fade-in select-none">
      <div className="flex items-center gap-2 pb-2 border-b border-[#F5D7DF]">
        <button
          onClick={() => setSubView('overview')}
          className="p-1 -ml-1 text-[#3E2330] hover:text-[#9B1B47]"
        >
          <ChevronLeft size={22} />
        </button>
        <h2 className="text-base font-extrabold text-[#2A1620]">Privacy &amp; Settings</h2>
      </div>

      {/* Profile Visibility */}
      <div className="p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs space-y-3">
        <h3 className="text-xs font-extrabold text-[#2A1620]">Profile Visibility</h3>

        <div className="space-y-2 text-xs">
          <label
            onClick={() => setVisibility('all')}
            className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-colors ${
              visibility === 'all'
                ? 'bg-[#FFF0F3] border-[#9B1B47] text-[#9B1B47] font-bold'
                : 'border-[#F3D5DD] text-[#3E2330]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Globe size={15} />
              <span>Visible to all</span>
            </div>
            <input
              type="radio"
              checked={visibility === 'all'}
              onChange={() => setVisibility('all')}
              className="accent-[#9B1B47]"
            />
          </label>

          <label
            onClick={() => setVisibility('verified')}
            className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-colors ${
              visibility === 'verified'
                ? 'bg-[#FFF0F3] border-[#9B1B47] text-[#9B1B47] font-bold'
                : 'border-[#F3D5DD] text-[#3E2330]'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} />
              <span>Visible to verified users only</span>
            </div>
            <input
              type="radio"
              checked={visibility === 'verified'}
              onChange={() => setVisibility('verified')}
              className="accent-[#9B1B47]"
            />
          </label>

          <label
            onClick={() => setVisibility('hidden')}
            className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-colors ${
              visibility === 'hidden'
                ? 'bg-[#FFF0F3] border-[#9B1B47] text-[#9B1B47] font-bold'
                : 'border-[#F3D5DD] text-[#3E2330]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Lock size={15} />
              <span>Hide my profile</span>
            </div>
            <input
              type="radio"
              checked={visibility === 'hidden'}
              onChange={() => setVisibility('hidden')}
              className="accent-[#9B1B47]"
            />
          </label>
        </div>
      </div>

      {/* Contact Preferences */}
      <div className="p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs space-y-3">
        <h3 className="text-xs font-extrabold text-[#2A1620]">Contact Preferences</h3>

        <div className="space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[#3E2330] font-medium">Allow proposals</span>
            <input
              type="checkbox"
              checked={allowProposals}
              onChange={() => setAllowProposals(!allowProposals)}
              className="toggle-switch accent-[#9B1B47] w-4 h-4 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#3E2330] font-medium">Allow secure chat (after acceptance)</span>
            <input
              type="checkbox"
              checked={allowChat}
              onChange={() => setAllowChat(!allowChat)}
              className="toggle-switch accent-[#9B1B47] w-4 h-4 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#3E2330] font-medium">Show my contact details</span>
            <input
              type="checkbox"
              checked={showContact}
              onChange={() => setShowContact(!showContact)}
              className="toggle-switch accent-[#9B1B47] w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Other Actions */}
      <div className="space-y-2 text-xs">
        <button
          onClick={() => alert('No blocked users.')}
          className="w-full flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-[#3E2330] hover:border-[#9B1B47] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Ban size={15} className="text-[#8E7B85]" />
            <span>Blocked Users</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </button>

        <button
          onClick={() => alert('Download requested. An encrypted copy of your data will be emailed.')}
          className="w-full flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-[#3E2330] hover:border-[#9B1B47] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Download size={15} className="text-[#8E7B85]" />
            <span>Download My Data</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </button>

        <button
          onClick={() => alert('Are you sure you want to delete your account?')}
          className="w-full flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-red-600 hover:bg-red-50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Trash2 size={15} />
            <span>Delete Account</span>
          </div>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );

  /* ----------------------------------------------------
     6. SUBVIEW: PROFILE MENU (SCREEN 6 OF IMAGE 2)
  ---------------------------------------------------- */
  const renderProfileMenu = () => (
    <div className="space-y-3 pb-20 animate-fade-in select-none">
      <div className="flex items-center gap-2 pb-2 border-b border-[#F5D7DF]">
        <button
          onClick={() => setSubView('overview')}
          className="p-1 -ml-1 text-[#3E2330] hover:text-[#9B1B47]"
        >
          <ChevronLeft size={22} />
        </button>
        <h2 className="text-base font-extrabold text-[#2A1620]">Profile Menu</h2>
      </div>

      {/* Mini Profile Card */}
      <div
        onClick={() => setSubView('overview')}
        className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs hover:border-[#9B1B47] cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#9B1B47]">
            <img src={user.photoUrl} alt={user.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h3 className="text-xs font-bold text-[#2A1620]">{user.name}, {user.age}</h3>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-bold">Verified</span>
            </div>
            <p className="text-[11px] text-[#7A6670] mt-0.5">{user.city}, {user.state}</p>
          </div>
        </div>
        <ChevronRight size={16} className="text-[#8E7B85]" />
      </div>

      {/* Menu List */}
      <div className="space-y-1.5 text-xs">
        <button
          onClick={() => setSubView('edit-profile')}
          className="w-full flex items-center justify-between p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-[#3E2330] hover:border-[#9B1B47] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Edit3 size={15} className="text-[#9B1B47]" />
            <span>Edit Profile</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </button>

        <button
          onClick={() => setSubView('completion')}
          className="w-full flex items-center justify-between p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-[#3E2330] hover:border-[#9B1B47] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <BadgeCheck size={15} className="text-[#9B1B47]" />
            <span>Profile Completion</span>
          </div>
          <span className="text-xs text-emerald-600 font-bold">80% &gt;</span>
        </button>

        <button
          onClick={() => setSubView('my-photos')}
          className="w-full flex items-center justify-between p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-[#3E2330] hover:border-[#9B1B47] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <ImageIcon size={15} className="text-[#9B1B47]" />
            <span>My Photos</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </button>

        <button
          onClick={() => onNavigateTo('favorites')}
          className="w-full flex items-center justify-between p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-[#3E2330] hover:border-[#9B1B47] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Heart size={15} className="text-[#9B1B47]" />
            <span>My Favorites</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </button>

        <button
          onClick={() => onNavigateTo('proposals')}
          className="w-full flex items-center justify-between p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-[#3E2330] hover:border-[#9B1B47] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Users size={15} className="text-[#9B1B47]" />
            <span>My Proposals</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </button>

        <button
          onClick={() => onNavigateTo('secure-chat')}
          className="w-full flex items-center justify-between p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-[#3E2330] hover:border-[#9B1B47] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <MessageSquare size={15} className="text-[#9B1B47]" />
            <span>Secure Chat</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </button>

        <button
          onClick={() => setSubView('privacy-settings')}
          className="w-full flex items-center justify-between p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-[#3E2330] hover:border-[#9B1B47] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Lock size={15} className="text-[#9B1B47]" />
            <span>Privacy &amp; Settings</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </button>

        <button
          onClick={() => onNavigateTo('faq')}
          className="w-full flex items-center justify-between p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-[#3E2330] hover:border-[#9B1B47] transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <HelpCircle size={15} className="text-[#9B1B47]" />
            <span>Help &amp; Support</span>
          </div>
          <ChevronRight size={16} className="text-[#8E7B85]" />
        </button>

        <button
          onClick={() => alert('Logged out successfully.')}
          className="w-full flex items-center justify-between p-3 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs text-red-600 hover:bg-red-50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <LogOut size={15} />
            <span className="font-bold">Logout</span>
          </div>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto px-4 py-4 select-none">
      {subView === 'overview' && renderOverview()}
      {subView === 'edit-profile' && renderEditProfile()}
      {subView === 'my-photos' && renderMyPhotos()}
      {subView === 'completion' && renderCompletion()}
      {subView === 'privacy-settings' && renderPrivacySettings()}
      {subView === 'profile-menu' && renderProfileMenu()}
    </div>
  );
};
