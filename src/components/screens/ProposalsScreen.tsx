import React, { useState } from 'react';
import { Heart, MessageSquare, CheckCircle2, Clock, ChevronRight, User } from 'lucide-react';
import { UserProfile } from '../../types';

interface ProposalsScreenProps {
  profiles: UserProfile[];
  onOpenChat: (profile: UserProfile) => void;
  onSelectProfile: (profile: UserProfile) => void;
}

export const ProposalsScreen: React.FC<ProposalsScreenProps> = ({
  profiles,
  onOpenChat,
  onSelectProfile
}) => {
  const [activeTab, setActiveTab] = useState<'received' | 'sent'>('received');

  return (
    <div className="pb-24 px-4 pt-2 animate-fade-in select-none">
      <h1 className="text-base font-extrabold text-[#2A1620] mb-3">
        My Proposals &amp; Interests
      </h1>

      {/* Tabs */}
      <div className="flex bg-[#FFF0F3] p-1 rounded-2xl mb-4 border border-[#F3D5DD]">
        <button
          onClick={() => setActiveTab('received')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'received' ? 'bg-white text-[#9B1B47] shadow-xs' : 'text-[#7A6670]'
          }`}
        >
          Received (1)
        </button>
        <button
          onClick={() => setActiveTab('sent')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'sent' ? 'bg-white text-[#9B1B47] shadow-xs' : 'text-[#7A6670]'
          }`}
        >
          Sent (2)
        </button>
      </div>

      {/* Proposal Cards List */}
      <div className="space-y-3">
        {activeTab === 'received' ? (
          <div className="p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#FFF0F3]">
                <img
                  src={profiles[0]?.photoUrl}
                  alt={profiles[0]?.name}
                  className="w-full h-full object-cover filter blur-[2px]"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-[#2A1620]">
                    {profiles[0]?.name}, {profiles[0]?.age}
                  </h3>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold border border-emerald-200">
                    Mutual Interest
                  </span>
                </div>
                <p className="text-[11px] text-[#7A6670]">
                  {profiles[0]?.city} · {profiles[0]?.occupation}
                </p>
              </div>
            </div>

            <p className="mt-2.5 text-xs text-[#523B47] bg-[#FFF9FA] p-2.5 rounded-xl border border-[#F3D5DD] italic">
              “Assalamu alaikum, we reviewed your profile with family and found mutual compatibility.”
            </p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => onOpenChat(profiles[0])}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#9B1B47] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#83143B] transition-colors"
              >
                <MessageSquare size={14} />
                <span>Open Secure Chat</span>
              </button>
              <button
                onClick={() => onSelectProfile(profiles[0])}
                className="py-2 px-3 bg-white border border-[#EAC5CE] text-[#3E2330] text-xs font-bold rounded-xl hover:border-[#9B1B47] transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ) : (
          <div className="p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#FFF0F3]">
                <img
                  src={profiles[1]?.photoUrl}
                  alt={profiles[1]?.name}
                  className="w-full h-full object-cover filter blur-[2px]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold text-[#2A1620]">
                  {profiles[1]?.name}, {profiles[1]?.age}
                </h3>
                <p className="text-[11px] text-[#7A6670]">
                  {profiles[1]?.city} · {profiles[1]?.occupation}
                </p>
                <div className="flex items-center gap-1 mt-1 text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full w-max border border-amber-200 font-semibold">
                  <Clock size={10} />
                  <span>Awaiting Family Review</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
