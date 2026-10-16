import React, { useState } from 'react';
import {
  Heart,
  MessageSquare,
  CheckCircle2,
  Clock,
  ChevronRight,
  ChevronLeft,
  ShieldAlert,
  Send,
  CheckCheck,
  ShieldCheck,
  MapPin,
  Sparkles,
  Search,
  Lock,
  UserCheck
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

  // Selected chat partner - null means show the list of available conversations!
  const [selectedChatPartner, setSelectedChatPartner] = useState<UserProfile | null>(null);
  const [chatSearchQuery, setChatSearchQuery] = useState('');
  const [unreadCounts, setUnreadCounts] = useState<{ [key: string]: number }>({
    [profiles[1]?.id || 'zainab-26']: 1
  });

  // Conversation partner threads
  const [chatMessages, setChatMessages] = useState<{ [key: string]: ChatMessage[] }>({
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
        time: 'Yesterday'
      }
    ],
    [profiles[3]?.id || 'hina-25']: [
      {
        id: '1',
        sender: 'them',
        text: 'JazakAllah khair for expressing interest. Can we schedule an intro call with both family walis this weekend?',
        time: '2 days ago'
      },
      {
        id: '2',
        sender: 'me',
        text: 'Wa iyyakum! Insha’Allah that would be ideal. I will have my father call your Wali on Sunday afternoon.',
        time: '2 days ago'
      }
    ]
  });

  const [inputVal, setInputVal] = useState('');

  // Predefined active conversation partners list
  const availableChatPartners = [
    {
      profile: profiles[0],
      tag: 'Family Connected',
      tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      status: 'Active now'
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
    setSelectedChatPartner(partner);
    // Mark as read
    if (unreadCounts[partner.id]) {
      setUnreadCounts((prev) => {
        const next = { ...prev };
        delete next[partner.id];
        return next;
      });
    }
  };

  const handleSendMessage = (customText?: string) => {
    const textToSend = customText || inputVal;
    if (!textToSend.trim() || !selectedChatPartner) return;

    const partnerId = selectedChatPartner.id;
    const currentList = chatMessages[partnerId] || [];
    setChatMessages({
      ...chatMessages,
      [partnerId]: [
        ...currentList,
        {
          id: Date.now().toString(),
          sender: 'me',
          text: textToSend,
          time: 'Just now'
        }
      ]
    });
    if (!customText) {
      setInputVal('');
    }
  };

  // Quick reply options
  const quickReplies = [
    'Assalamu Alaikum wa Rahmatullah',
    'Alhamdulillah, insha\'Allah',
    'Can we arrange a family call?',
    'My parents will contact your Wali'
  ];

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
          onClick={() => {
            setActiveTab('received');
            setSelectedChatPartner(null);
          }}
          className={`flex-1 py-1.5 sm:py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'received'
              ? 'bg-white text-[#9B1B47] shadow-xs'
              : 'text-[#7A6670] hover:text-[#2A1620]'
          }`}
        >
          Received (1)
        </button>

        <button
          onClick={() => {
            setActiveTab('sent');
            setSelectedChatPartner(null);
          }}
          className={`flex-1 py-1.5 sm:py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'sent'
              ? 'bg-white text-[#9B1B47] shadow-xs'
              : 'text-[#7A6670] hover:text-[#2A1620]'
          }`}
        >
          Sent (2)
        </button>

        <button
          onClick={() => {
            setActiveTab('chat');
            setSelectedChatPartner(null); // Show list of available chats when clicking chat tab
          }}
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
                onClick={() => {
                  setSelectedChatPartner(profiles[0]);
                  setActiveTab('chat');
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#9B1B47] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#83143B] transition-colors"
              >
                <MessageSquare size={14} />
                <span>Open Secure Chat</span>
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

      {/* TAB 3: SECURE CHAT (LIST FIRST -> CLICK OPENS CHAT SCREEN) */}
      {activeTab === 'chat' && (
        <div className="space-y-3">
          {/* VIEW A: CHAT LIST INBOX (WHEN NO PARTNER IS ACTIVELY OPENED) */}
          {selectedChatPartner === null ? (
            <div className="space-y-3 animate-fade-in">
              {/* Header Box showing How Many Chats are Available */}
              <div className="p-3.5 bg-gradient-to-r from-[#FFF0F4] to-[#FFF8FA] rounded-2xl border border-[#FADCE3] shadow-xs flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-extrabold text-[#2A1620] flex items-center gap-1.5">
                    <MessageSquare size={14} className="text-[#9B1B47]" />
                    <span>Active Conversations ({availableChatPartners.length})</span>
                  </h3>
                  <p className="text-[11px] text-[#7A6670] mt-0.5">
                    Select a conversation to start halal matrimonial discussion
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
                {filteredChatPartners.map(({ profile, tag, tagColor, status }) => {
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
          ) : (
            /* VIEW B: CHAT SCREEN WITH SELECTED PARTNER (WITH BACK BUTTON TO CHAT LIST) */
            <div className="bg-white rounded-3xl border border-[#F3D5DD] shadow-card overflow-hidden animate-fade-in">
              {/* Back to All Chats + Active Partner Header */}
              <div className="p-3 bg-gradient-to-r from-[#FFF5F7] to-white border-b border-[#F3D5DD] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedChatPartner(null)}
                    className="flex items-center gap-1 py-1.5 px-2 bg-white hover:bg-[#FFF0F3] border border-[#EAC5CE] hover:border-[#9B1B47] rounded-xl text-xs font-bold text-[#9B1B47] transition-all shadow-xs"
                    title="Return to Chat List"
                  >
                    <ChevronLeft size={16} strokeWidth={2.4} />
                    <span>All Chats ({availableChatPartners.length})</span>
                  </button>

                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#9B1B47]/30 shrink-0 ml-1">
                    <img
                      src={selectedChatPartner.photoUrl}
                      alt={selectedChatPartner.name}
                      className="w-full h-full object-cover filter blur-[1.5px]"
                    />
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full ring-1 ring-white" />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#2A1620] flex items-center gap-1">
                      <span>{selectedChatPartner.name}, {selectedChatPartner.age}</span>
                      <CheckCircle2 size={11} className="text-emerald-600" />
                    </h4>
                    <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      Family Monitored
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectProfile(selectedChatPartner)}
                  className="text-[11px] font-bold text-[#9B1B47] hover:underline px-2 py-1 bg-[#FFF0F3] rounded-lg"
                >
                  Biodata &gt;
                </button>
              </div>

              {/* Halal Privacy Etiquette Notice */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#FFF0F4] border-b border-[#FADCE3] text-[10px] text-[#83143B]">
                <ShieldAlert size={13} className="shrink-0 text-[#9B1B47]" />
                <span>In-app chat is encrypted. Keep discussions focused on deen and marriage compatibility.</span>
              </div>

              {/* Messages Thread */}
              <div className="p-3.5 space-y-2.5 max-h-72 overflow-y-auto bg-[#FFFDFE]">
                {(chatMessages[selectedChatPartner.id] || []).map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-2.5 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'me'
                          ? 'bg-gradient-to-r from-[#9B1B47] to-[#B01A44] text-white rounded-br-xs shadow-xs'
                          : 'bg-white text-[#2A1620] border border-[#F3D5DD] rounded-bl-xs shadow-xs'
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                    <span className="text-[9px] text-[#8E7B85] mt-0.5 px-1 flex items-center gap-0.5">
                      <span>{msg.time}</span>
                      {msg.sender === 'me' && <CheckCheck size={11} className="text-[#9B1B47]" />}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Suggestion Chips */}
              <div className="px-3 pt-2 pb-1.5 bg-[#FFF9FA] border-t border-[#F5D7DF]/60 overflow-x-auto scrollbar-none flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-[#8E7B85] shrink-0 mr-0.5">Quick:</span>
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() => handleSendMessage(reply)}
                    className="px-2.5 py-1 bg-white hover:bg-[#FFF0F3] text-[#7A6670] hover:text-[#9B1B47] border border-[#EAC5CE] rounded-full text-[10px] font-semibold whitespace-nowrap transition-colors shadow-2xs"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              {/* Message Input Box */}
              <div className="p-2.5 bg-white border-t border-[#F3D5DD] flex items-center gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type respectful message..."
                  className="flex-1 py-2 px-3 bg-[#FFF9FA] border border-[#EAC5CE] focus:border-[#9B1B47] rounded-xl text-xs text-[#2A1620] focus:outline-none"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="p-2.5 rounded-xl bg-[#9B1B47] text-white hover:bg-[#83143B] active:scale-95 transition-all shadow-xs"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
