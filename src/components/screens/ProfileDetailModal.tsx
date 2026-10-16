import React, { useState } from 'react';
import {
  X,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  Heart,
  Eye,
  EyeOff,
  Send,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';
import { UserProfile } from '../../types';

interface ProfileDetailModalProps {
  profile: UserProfile | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleSave: (id: string) => void;
  onSendProposal: (id: string) => void;
  hasProposed: boolean;
}

export const ProfileDetailModal: React.FC<ProfileDetailModalProps> = ({
  profile,
  isOpen,
  onClose,
  onToggleSave,
  onSendProposal,
  hasProposed
}) => {
  const [isPhotoBlurred, setIsPhotoBlurred] = useState(true);
  const [proposalSent, setProposalSent] = useState(hasProposed);

  if (!isOpen || !profile) return null;

  const handleProposal = () => {
    onSendProposal(profile.id);
    setProposalSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 select-none">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-xs" />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-sm max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-y-auto z-10 border border-[#F3D5DD] animate-fade-in flex flex-col">
        {/* Sticky Header with Close and Save */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-3.5 bg-white/90 backdrop-blur-md border-b border-[#F5D7DF]/60">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-[#2A1620]">Biodata Preview</span>
            {profile.isVerified && (
              <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                <CheckCircle2 size={10} className="text-emerald-600" />
                Verified
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggleSave(profile.id)}
              className="p-1.5 rounded-full text-[#9B1B47] hover:bg-[#FFF0F3] transition-colors"
            >
              <Heart
                size={18}
                fill={profile.isSaved ? '#9B1B47' : 'none'}
                className={profile.isSaved ? 'text-[#9B1B47]' : 'text-[#8E7B85]'}
              />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#7A6670] hover:text-[#2A1620] hover:bg-gray-100 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-4">
          {/* Main Photo with Privacy Blur Toggle */}
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-[#FFF0F3] shadow-inner">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className={`w-full h-full object-cover transition-all duration-300 ${
                isPhotoBlurred ? 'filter blur-md scale-105' : 'filter-none scale-100'
              }`}
            />

            {/* Privacy Blur Toggle Button */}
            <button
              onClick={() => setIsPhotoBlurred(!isPhotoBlurred)}
              className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-[10px] font-medium backdrop-blur-xs transition-colors"
            >
              {isPhotoBlurred ? (
                <>
                  <Eye size={12} />
                  <span>Reveal Photo</span>
                </>
              ) : (
                <>
                  <EyeOff size={12} />
                  <span>Blur Photo</span>
                </>
              )}
            </button>

            {/* Online Badge */}
            {profile.isOnline && (
              <span className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 text-[10px] font-bold text-emerald-700 shadow-xs">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Active Now
              </span>
            )}
          </div>

          {/* Profile Name & Primary Headline */}
          <div>
            <h2 className="text-lg font-extrabold text-[#2A1620]">
              {profile.name}, {profile.age}
            </h2>
            <p className="flex items-center gap-1 text-xs text-[#7A6670] mt-0.5">
              <MapPin size={12} className="text-[#9B1B47]" />
              <span>{profile.city}, {profile.state} · {profile.maritalStatus || 'Never Married'}</span>
            </p>
          </div>

          {/* Key Attributes Tags */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#FFF5F7] border border-[#FADCE3]">
              <span className="text-[10px] text-[#8E7B85] block mb-0.5">Education</span>
              <p className="font-semibold text-[#2A1620] truncate">{profile.education}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FFF5F7] border border-[#FADCE3]">
              <span className="text-[10px] text-[#8E7B85] block mb-0.5">Occupation</span>
              <p className="font-semibold text-[#2A1620] truncate">{profile.occupation}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FFF5F7] border border-[#FADCE3]">
              <span className="text-[10px] text-[#8E7B85] block mb-0.5">Religious Practice</span>
              <p className="font-semibold text-[#2A1620] truncate">{profile.practiceLevel}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-[#FFF5F7] border border-[#FADCE3]">
              <span className="text-[10px] text-[#8E7B85] block mb-0.5">Sect / Maslak</span>
              <p className="font-semibold text-[#2A1620] truncate">{profile.sect || 'Sunni'}</p>
            </div>
          </div>

          {/* About Me */}
          {profile.aboutMe && (
            <div className="p-3 bg-[#FFF9FA] rounded-2xl border border-[#F3D5DD]">
              <h4 className="text-xs font-bold text-[#2A1620] mb-1">About Me</h4>
              <p className="text-xs text-[#523B47] leading-relaxed">{profile.aboutMe}</p>
            </div>
          )}

          {/* About Deen */}
          {profile.aboutDeen && (
            <div className="p-3 bg-[#FFF9FA] rounded-2xl border border-[#F3D5DD]">
              <h4 className="text-xs font-bold text-[#2A1620] mb-1">Religious Values &amp; Deen</h4>
              <p className="text-xs text-[#523B47] leading-relaxed">{profile.aboutDeen}</p>
            </div>
          )}

          {/* Partner Expectations */}
          {profile.expectations && (
            <div className="p-3 bg-[#FFF9FA] rounded-2xl border border-[#F3D5DD]">
              <h4 className="text-xs font-bold text-[#2A1620] mb-1">Partner Expectations</h4>
              <p className="text-xs text-[#523B47] leading-relaxed">{profile.expectations}</p>
            </div>
          )}

          {/* Wali / Guardian Contact Card */}
          {profile.waliContact && (
            <div className="p-3 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0]">
              <div className="flex items-center gap-1.5 mb-1 text-emerald-800">
                <Users size={14} />
                <h4 className="text-xs font-bold">Wali / Family Contact</h4>
              </div>
              <p className="text-xs text-emerald-900 font-medium">
                {profile.waliContact.name} ({profile.waliContact.relation})
              </p>
              <p className="text-xs text-emerald-700 mt-0.5 font-mono">
                {profile.waliContact.phone}
              </p>
              <span className="text-[10px] text-emerald-600 block mt-1">
                Elder-to-elder contact is encouraged for halal matrimony discussions.
              </span>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="sticky bottom-0 p-3 bg-white border-t border-[#F5D7DF]/60">
          {proposalSent ? (
            <div className="flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-2xl text-xs font-bold">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Matrimonial Proposal Sent! Insha’Allah you will be notified.</span>
            </div>
          ) : (
            <button
              onClick={handleProposal}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#9B1B47] hover:bg-[#83143B] active:scale-[0.99] text-white text-xs font-bold rounded-2xl shadow-md shadow-[#9B1B47]/20 transition-all"
            >
              <Send size={15} />
              <span>Send Sincere Proposal</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
