import React, { useState } from 'react';
import {
  Heart,
  MessageSquare,
  CheckCircle2,
  Clock,
  ChevronRight,
  ShieldAlert,
  Send,
  CheckCheck,
  ShieldCheck,
  MapPin,
  Sparkles
} from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'received' | 'sent' | 'chat'>('received');

  // Interactive inline chat state
  const [selectedChatPartner, setSelectedChatPartner] = useState<UserProfile>(profiles[0]);
  const [chatMessages, setChatMessages] = useState<{ [key: string]: { id: string; sender: 'me' | 'them'; text: string; time: string }[] }>({
    'ayesha-24': [
      {
        id: '1',
        sender: 'them',
        text: 'Assalamu alaikum wa rahmatullah. My family reviewed your biodata and would like to understand more about your work in Pune.',
        time: '10:30 AM'
      },
      {
        id: '2',
        sender: 'me',
        text: 'Walaikum assalam wa rahmatullah. Glad to connect! I work as a Lead Engineer in Pune and live with my parents. We can arrange a family call.',
        time: '10:34 AM'
      }
    ]
  });
  const [inputVal, setInputVal] = useState('');

  const handleSendMessage = () => {
    if (!inputVal.trim()) return;
    const partnerId = selectedChatPartner.id;
    const currentList = chatMessages[partnerId] || [];
    setChatMessages({
      ...chatMessages,
      [partnerId]: [
        ...currentList,
        {
          id: Date.now().toString(),
          sender: 'me',
          text: inputVal,
          time: 'Just now'
        }
      ]
    });
    setInputVal('');
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

      {/* 3 TABS: RECEIVED (1) | SENT (2) | SECURE CHAT (EXACT MATCH WITH media_1792169626053.png) */}
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
          <span className="w-2 h-2 rounded-full bg-[#9B1B47]" />
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
                onClick={() => setActiveTab('chat')}
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

      {/* TAB 3: SECURE CHAT DIRECT OPTION */}
      {activeTab === 'chat' && (
        <div className="space-y-3">
          {/* Active Conversations List */}
          <div className="bg-white rounded-3xl border border-[#F3D5DD] shadow-xs overflow-hidden">
            {/* Conversation Item Header */}
            <div className="p-3 bg-[#FFF5F7] border-b border-[#F3D5DD] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#9B1B47]">
                  <img
                    src={selectedChatPartner.photoUrl}
                    alt={selectedChatPartner.name}
                    className="w-full h-full object-cover filter blur-[2px]"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2A1620] flex items-center gap-1">
                    <span>{selectedChatPartner.name}, {selectedChatPartner.age}</span>
                    <CheckCircle2 size={11} className="text-emerald-600" />
                  </h4>
                  <span className="text-[10px] text-emerald-700 font-medium">Family-Monitored Halal Chat</span>
                </div>
              </div>

              <button
                onClick={() => onSelectProfile(selectedChatPartner)}
                className="text-[11px] font-bold text-[#9B1B47] hover:underline"
              >
                Biodata &gt;
              </button>
            </div>

            {/* Halal Etiquette Notice */}
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
                        ? 'bg-[#9B1B47] text-white rounded-br-xs shadow-xs'
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
                onClick={handleSendMessage}
                className="p-2.5 rounded-xl bg-[#9B1B47] text-white hover:bg-[#83143B] active:scale-95 transition-all shadow-xs"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
