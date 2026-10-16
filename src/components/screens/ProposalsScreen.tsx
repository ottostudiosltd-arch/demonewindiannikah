import React, { useState } from 'react';
import {
  Heart,
  MessageSquare,
  CheckCircle2,
  Clock,
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
  MapPin,
  Sparkles,
  Search,
  Lock,
  Phone,
  FileText
} from 'lucide-react';
import { UserProfile } from '../../types';

interface ProposalsScreenProps {
  profiles: UserProfile[];
  onOpenChat: (profile: UserProfile) => void;
  onSelectProfile: (profile: UserProfile) => void;
}

interface ChatMessage {
  id: string;
  sender: 'me' | 'them';
  text: string;
  time: string;
}

export const ProposalsScreen: React.FC<ProposalsScreenProps> = ({
  profiles,
  onOpenChat,
  onSelectProfile
}) => {
  const [activeTab, setActiveTab] = useState<'received' | 'sent' | 'chat'>('received');
  const [chatSearchQuery, setChatSearchQuery] = useState('');
  const [unreadCounts, setUnreadCounts] = useState<{ [key: string]: number }>({
    [profiles[1]?.id || 'zainab-26']: 1
  });

  // Sample conversation partner threads for last message preview
  const chatMessages: { [key: string]: ChatMessage[] } = {
    [profiles[0]?.id || 'ayesha-24']: [
      {
        id: '1',
        sender: 'them',
        text: 'Assalamu alaikum wa rahmatullah. My family reviewed your biodata and would like to understand more about your career in Pune.',
        time: '10:30 AM'
      },
      {
        id: '2',
        sender: 'me',
        text: 'Walaikum assalam wa rahmatullah. Glad to connect! I work as a Lead Engineer in Pune and live with my parents. We can arrange a family call.',
        time: '10:34 AM'
      }
    ],
    [profiles[1]?.id || 'zainab-26']: [
      {
        id: '1',
        sender: 'them',
        text: 'Assalamu alaikum brother Tausif, my father reviewed your biodata and wanted to know about your future career plans.',
        time: 'Yesterday 04:15 PM'
      }
    ],
    [profiles[3]?.id || 'hina-25']: [
      {
        id: '1',
        sender: 'them',
        text: 'JazakAllah khair for expressing interest. Can we schedule an intro call with both family walis this weekend?',
        time: 'Oct 14, 02:20 PM'
      },
      {
        id: '2',
        sender: 'me',
        text: 'Wa iyyakum! Insha’Allah that would be ideal. I will have my father call your Wali on Sunday afternoon.',
        time: 'Oct 14, 02:45 PM'
      }
    ]
  };

  // Predefined active conversation partners list
  const availableChatPartners = [
    {
      profile: profiles[0],
      tag: 'Family Connected',
      tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      status: 'Online'
    },
    {
      profile: profiles[1],
      tag: 'Mutual Match',
      tagColor: 'bg-rose-50 text-rose-800 border-rose-200',
      status: 'Online 2h ago'
    },
    {
      profile: profiles[3] || profiles[2],
      tag: 'Wali Approved',
      tagColor: 'bg-purple-50 text-purple-800 border-purple-200',
      status: 'Active yesterday'
    }
  ].filter((item) => item.profile !== undefined);

  // Filtered chats based on search query
  const filteredChatPartners = availableChatPartners.filter((item) => {
    if (!chatSearchQuery.trim()) return true;
    const q = chatSearchQuery.toLowerCase();
    const p = item.profile;
    return (
      p.name.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      item.tag.toLowerCase().includes(q)
    );
  });

  const handleSelectPartner = (partner: UserProfile) => {
    if (unreadCounts[partner.id]) {
      setUnreadCounts((prev) => {
        const next = { ...prev };
        delete next[partner.id];
        return next;
      });
    }
    // Triggers full screen WhatsApp chat in App.tsx (hides top & bottom navbars completely)
    onOpenChat(partner);
  };

  return (
    <div className="max-w-3xl mx-auto pb-24 px-3 sm:px-6 pt-3 animate-fade-in select-none">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="text-base sm:text-lg font-extrabold text-[#2A1620]">
            My Proposals &amp; Connections
          </h1>
          <p className="text-xs text-[#7A6670] mt-0.5">
            Manage your matrimonial proposals and halal chats
          </p>
        </div>
      </div>

      {/* 3 TABS: RECEIVED (1) | SENT (2) | SECURE CHAT (3) */}
      <div className="flex bg-[#FFF0F3] p-1 rounded-2xl mb-4 border border-[#F3D5DD]">
        <button
          onClick={() => setActiveTab('received')}
          className={`flex-1 py-1.5 sm:py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'received'
              ? 'bg-white text-[#9B1B47] shadow-xs'
              : 'text-[#7A6670] hover:text-[#2A1620]'
          }`}
        >
          Received (1)
        </button>

        <button
          onClick={() => setActiveTab('sent')}
          className={`flex-1 py-1.5 sm:py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'sent'
              ? 'bg-white text-[#9B1B47] shadow-xs'
              : 'text-[#7A6670] hover:text-[#2A1620]'
          }`}
        >
          Sent (2)
        </button>

        <button
          onClick={() => setActiveTab('chat')}
          className={`flex-1 py-1.5 sm:py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'chat'
              ? 'bg-white text-[#9B1B47] shadow-xs'
              : 'text-[#7A6670] hover:text-[#2A1620]'
          }`}
        >
          <MessageSquare size={13} className={activeTab === 'chat' ? 'text-[#9B1B47]' : 'text-[#7A6670]'} />
          <span>Secure Chat</span>
          <span className="px-1.5 py-0.2 bg-[#9B1B47] text-white text-[10px] rounded-full font-bold">
            {availableChatPartners.length}
          </span>
        </button>
      </div>

      {/* TAB 1: RECEIVED PROPOSALS */}
      {activeTab === 'received' && (
        <div className="space-y-3">
          <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs hover:border-[#9B1B47] transition-all">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#FFF0F3] shrink-0">
                <img
                  src={profiles[0]?.photoUrl}
                  alt={profiles[0]?.name}
                  className="w-full h-full object-cover filter blur-[2px]"
                />
                <span className="absolute top-1 left-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#2A1620] truncate">
                    {profiles[0]?.name}, {profiles[0]?.age}
                  </h3>
                  <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-bold border border-emerald-200">
                    Mutual Interest
                  </span>
                </div>
                <p className="text-xs text-[#7A6670] mt-0.5 truncate">
                  {profiles[0]?.city}, {profiles[0]?.state} · {profiles[0]?.occupation}
                </p>
                <p className="text-[11px] text-[#9B1B47] font-semibold mt-0.5">
                  Verified Family Involved
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs text-[#523B47] bg-[#FFF9FA] p-3 rounded-xl border border-[#F3D5DD] italic leading-relaxed">
              “Assalamu alaikum, we reviewed your profile with family and found mutual compatibility in deen and lifestyle.”
            </p>

            <div className="flex gap-2.5 mt-3 pt-2 border-t border-[#F5D7DF]/60">
              <button
                onClick={() => handleSelectPartner(profiles[0])}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#9B1B47] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#83143B] transition-colors"
              >
                <MessageSquare size={14} />
                <span>Open WhatsApp-Style Chat</span>
              </button>
              <button
                onClick={() => onSelectProfile(profiles[0])}
                className="py-2 px-3.5 bg-white border border-[#EAC5CE] text-[#3E2330] text-xs font-bold rounded-xl hover:border-[#9B1B47] transition-colors"
              >
                View Biodata
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SENT PROPOSALS */}
      {activeTab === 'sent' && (
        <div className="space-y-3">
          <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#FFF0F3] shrink-0">
                <img
                  src={profiles[1]?.photoUrl}
                  alt={profiles[1]?.name}
                  className="w-full h-full object-cover filter blur-[2px]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#2A1620] truncate">
                    {profiles[1]?.name}, {profiles[1]?.age}
                  </h3>
                  <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full font-bold border border-amber-200">
                    Sent · Under Review
                  </span>
                </div>
                <p className="text-xs text-[#7A6670] mt-0.5 truncate">
                  {profiles[1]?.city}, {profiles[1]?.state} · {profiles[1]?.occupation}
                </p>
                <div className="flex items-center gap-1 mt-1 text-[11px] text-[#7A6670]">
                  <Clock size={12} className="text-[#9B1B47]" />
                  <span>Awaiting family response</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-[#F5D7DF]/60 flex items-center justify-between">
              <span className="text-[11px] text-[#7A6670]">Sent on Oct 14, 2026</span>
              <button
                onClick={() => onSelectProfile(profiles[1])}
                className="py-1 px-3 bg-white border border-[#EAC5CE] text-[#3E2330] text-xs font-semibold rounded-lg hover:border-[#9B1B47]"
              >
                View Biodata
              </button>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#FFF0F3] shrink-0">
                <img
                  src={profiles[2]?.photoUrl}
                  alt={profiles[2]?.name}
                  className="w-full h-full object-cover filter blur-[2px]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#2A1620] truncate">
                    {profiles[2]?.name}, {profiles[2]?.age}
                  </h3>
                  <span className="text-[10px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full font-bold border border-amber-200">
                    Sent · Under Review
                  </span>
                </div>
                <p className="text-xs text-[#7A6670] mt-0.5 truncate">
                  {profiles[2]?.city}, {profiles[2]?.state} · {profiles[2]?.education}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SECURE CHAT INBOX (CLICK ANY CONVERSATION OPENS FULL-SCREEN WHATSAPP CHAT) */}
      {activeTab === 'chat' && (
        <div className="space-y-3 animate-fade-in">
          {/* Header Box showing How Many Chats are Available */}
          <div className="p-3.5 bg-gradient-to-r from-[#FFF0F4] to-[#FFF8FA] rounded-2xl border border-[#FADCE3] shadow-xs flex items-center justify-between">
            <div>
              <h3 className="text-xs font-extrabold text-[#2A1620] flex items-center gap-1.5">
                <MessageSquare size={14} className="text-[#9B1B47]" />
                <span>Active Conversations ({availableChatPartners.length})</span>
              </h3>
              <p className="text-[11px] text-[#7A6670] mt-0.5">
                Tap any conversation to open full-screen WhatsApp chat
              </p>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 border border-[#F3D5DD] rounded-full text-[10px] text-[#9B1B47] font-bold shadow-xs">
              <Lock size={11} />
              <span>Wali Supervised</span>
            </div>
          </div>

          {/* Chat Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9B1B47]">
              <Search size={14} />
            </div>
            <input
              type="text"
              value={chatSearchQuery}
              onChange={(e) => setChatSearchQuery(e.target.value)}
              placeholder="Search chats by name or city..."
              className="w-full pl-8 pr-3 py-2 bg-white border border-[#EAC5CE] focus:border-[#9B1B47] rounded-xl text-xs text-[#2A1620] placeholder-[#8E7B85] focus:outline-none shadow-xs transition-colors"
            />
          </div>

          {/* Conversations List */}
          <div className="space-y-2">
            {filteredChatPartners.map(({ profile, tag, tagColor }) => {
              const msgs = chatMessages[profile.id] || [];
              const lastMsg = msgs[msgs.length - 1];
              const unread = unreadCounts[profile.id] || 0;

              return (
                <div
                  key={profile.id}
                  onClick={() => handleSelectPartner(profile)}
                  className="p-3 bg-white hover:bg-[#FFF9FA] border border-[#F3D5DD] hover:border-[#9B1B47] rounded-2xl shadow-xs cursor-pointer transition-all duration-200 group active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    {/* Profile Avatar with online green ring */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#FFF0F3] border border-[#F3D5DD] shrink-0">
                      <img
                        src={profile.photoUrl}
                        alt={profile.name}
                        className="w-full h-full object-cover filter blur-[1.5px]"
                      />
                      <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white ring-1 ring-emerald-300" />
                    </div>

                    {/* Partner Details & Last message */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="text-xs font-bold text-[#2A1620] group-hover:text-[#9B1B47] transition-colors truncate flex items-center gap-1">
                          <span>{profile.name}, {profile.age}</span>
                          <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                        </h4>
                        <span className="text-[10px] text-[#8E7B85] shrink-0">
                          {lastMsg ? lastMsg.time : 'New'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`text-[9px] px-2 py-0.2 rounded-full font-bold border ${tagColor}`}>
                          {tag}
                        </span>
                        <span className="text-[10px] text-[#7A6670] truncate">
                          · {profile.city}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-[11px] text-[#523B47] truncate pr-2">
                          {lastMsg ? (
                            <>
                              <span className="font-semibold text-[#8E7B85]">
                                {lastMsg.sender === 'me' ? 'You: ' : ''}
                              </span>
                              {lastMsg.text}
                            </>
                          ) : (
                            <span className="italic text-[#8E7B85]">Start conversation...</span>
                          )}
                        </p>

                        {unread > 0 ? (
                          <span className="px-1.5 py-0.5 bg-[#9B1B47] text-white text-[9px] font-bold rounded-full shrink-0 shadow-xs">
                            {unread} new
                          </span>
                        ) : (
                          <ChevronRight size={15} className="text-[#8E7B85] group-hover:text-[#9B1B47] shrink-0 transition-colors" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredChatPartners.length === 0 && (
              <div className="text-center py-8 bg-white rounded-2xl border border-[#F3D5DD] p-4">
                <p className="text-xs text-[#7A6670]">No conversations matching "{chatSearchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
