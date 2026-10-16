import React, { useState } from 'react';
import {
  ChevronLeft,
  Send,
  ShieldAlert,
  Users,
  Phone,
  PhoneCall,
  CheckCheck,
  CheckCircle2,
  Lock,
  MoreVertical,
  Paperclip,
  Smile,
  X
} from 'lucide-react';
import { UserProfile } from '../../types';

interface SecureChatScreenProps {
  partner: UserProfile;
  onBack: () => void;
}

export const SecureChatScreen: React.FC<SecureChatScreenProps> = ({
  partner,
  onBack
}) => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'them' as const,
      text: 'Assalamu alaikum wa rahmatullah. My family reviewed your biodata and would like to understand more about your career plans in Pune.',
      time: '10:30 AM'
    },
    {
      id: '2',
      sender: 'me' as const,
      text: 'Walaikum assalam wa rahmatullah! Glad to connect. I work as a Lead Engineer in Pune and live with my parents. We are open to discussions.',
      time: '10:34 AM'
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [showWaliModal, setShowWaliModal] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);

  const handleSend = (customText?: string) => {
    const textToSend = customText || inputVal;
    if (!textToSend.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'me',
        text: textToSend,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    if (!customText) {
      setInputVal('');
    }
  };

  const quickReplies = [
    'Assalamu Alaikum wa Rahmatullah',
    'Alhamdulillah, insha\'Allah',
    'Can we arrange a family call?',
    'My parents will contact your Wali',
    'I have reviewed your biodata'
  ];

  return (
    <div className="fixed inset-0 z-[150] flex flex-col bg-[#FFF9FA] h-screen w-screen overflow-hidden select-none animate-fade-in">
      {/* 1. WHATSAPP TOP APP BAR */}
      <div className="bg-[#FFF0F4] border-b border-[#F0CDD5] px-2.5 sm:px-4 py-2 flex items-center justify-between shadow-xs shrink-0">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            className="p-1.5 -ml-1 text-[#2A1620] hover:text-[#9B1B47] hover:bg-white/80 rounded-full transition-colors active:scale-95"
            title="Back to Chats"
          >
            <ChevronLeft size={24} strokeWidth={2.4} />
          </button>

          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#9B1B47]/30 shrink-0">
            <img
              src={partner.photoUrl}
              alt={partner.name}
              className="w-full h-full object-cover filter blur-[1.5px]"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white ring-1 ring-emerald-300" />
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-extrabold text-[#2A1620] leading-tight flex items-center gap-1">
              <span>{partner.name}, {partner.age}</span>
              <CheckCircle2 size={12} className="text-emerald-600" />
            </h3>
            <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>Online · Wali Monitored</span>
            </span>
          </div>
        </div>

        {/* Right side: Phone/Wali contact button, More menu */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => setShowWaliModal(true)}
            className="p-2 text-[#9B1B47] hover:bg-white/80 rounded-full transition-colors"
            title="View Father / Wali Contact"
          >
            <Phone size={18} strokeWidth={2.2} />
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowMenuDropdown(!showMenuDropdown)}
              className="p-2 text-[#7A6670] hover:text-[#2A1620] hover:bg-white/80 rounded-full transition-colors"
            >
              <MoreVertical size={18} />
            </button>

            {showMenuDropdown && (
              <div className="absolute right-0 mt-1 w-44 bg-white border border-[#EAC5CE] rounded-2xl shadow-xl z-50 p-1.5 space-y-1 text-xs animate-fade-in">
                <button
                  type="button"
                  onClick={() => {
                    setShowWaliModal(true);
                    setShowMenuDropdown(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-[#2A1620] hover:bg-[#FFF0F3] font-semibold"
                >
                  Call Wali (Father)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onBack();
                    setShowMenuDropdown(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-[#9B1B47] hover:bg-[#FFF0F3] font-bold"
                >
                  Close Chat
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. WHATSAPP CHAT CANVAS */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-3 space-y-3 bg-[#FAF2F4]">
        {/* Halal Matrimonial Encryption Banner (WhatsApp Style) */}
        <div className="max-w-md mx-auto p-2 bg-[#FFF0F3] border border-[#F3D5DD] rounded-xl text-center shadow-2xs">
          <p className="text-[10px] text-[#83143B] flex items-center justify-center gap-1 font-semibold leading-relaxed">
            <Lock size={11} className="text-[#9B1B47] shrink-0" />
            <span>Messages are halal-monitored &amp; end-to-end encrypted. Respectful matrimonial intent only.</span>
          </p>
        </div>

        {/* Date divider pill (WhatsApp style) */}
        <div className="flex justify-center">
          <span className="px-3 py-1 bg-white/90 border border-[#F0CDD5] text-[#7A6670] text-[10px] font-bold rounded-full shadow-2xs uppercase tracking-wider">
            Today
          </span>
        </div>

        {/* Chat Messages */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`relative max-w-[85%] sm:max-w-[70%] p-3 rounded-2xl text-xs leading-relaxed shadow-xs ${
                msg.sender === 'me'
                  ? 'bg-gradient-to-r from-[#9B1B47] to-[#C51E50] text-white rounded-tr-xs'
                  : 'bg-white text-[#2A1620] border border-[#F0CDD5] rounded-tl-xs'
              }`}
            >
              <p className="pr-4">{msg.text}</p>
              <div
                className={`flex items-center justify-end gap-1 text-[9px] mt-1 ${
                  msg.sender === 'me' ? 'text-white/80' : 'text-[#8E7B85]'
                }`}
              >
                <span>{msg.time}</span>
                {msg.sender === 'me' && <CheckCheck size={12} className="text-cyan-200" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. QUICK ISLAMIC SUGGESTION CHIPS */}
      <div className="px-3 pt-2 pb-1.5 bg-[#FFF0F4] border-t border-[#F0CDD5] overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
        <span className="text-[10px] font-bold text-[#8E7B85] shrink-0 mr-0.5">Quick:</span>
        {quickReplies.map((reply) => (
          <button
            key={reply}
            type="button"
            onClick={() => handleSend(reply)}
            className="px-2.5 py-1 bg-white hover:bg-[#FFF0F3] text-[#7A6670] hover:text-[#9B1B47] border border-[#EAC5CE] hover:border-[#9B1B47] rounded-full text-[10px] font-semibold whitespace-nowrap transition-colors shadow-2xs active:scale-95"
          >
            {reply}
          </button>
        ))}
      </div>

      {/* 4. WHATSAPP BOTTOM INPUT BAR */}
      <div className="p-2 sm:p-3 bg-white border-t border-[#F0CDD5] flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={() => handleSend('🌸')}
          className="p-2 text-[#7A6670] hover:text-[#9B1B47] rounded-full hover:bg-[#FFF0F3] transition-colors"
        >
          <Smile size={20} />
        </button>

        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a respectful message..."
          className="flex-1 py-2.5 px-4 bg-[#FFF9FA] border border-[#EAC5CE] focus:border-[#9B1B47] rounded-full text-xs text-[#2A1620] placeholder-[#8E7B85] focus:outline-none shadow-xs"
        />

        <button
          type="button"
          onClick={() => setShowWaliModal(true)}
          className="p-2 text-[#7A6670] hover:text-[#9B1B47] rounded-full hover:bg-[#FFF0F3] transition-colors"
          title="Share / Contact Wali"
        >
          <Paperclip size={18} />
        </button>

        <button
          type="button"
          onClick={() => handleSend()}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9B1B47] to-[#C51E50] text-white flex items-center justify-center hover:from-[#83143B] hover:to-[#B01A44] active:scale-95 shadow-md shadow-[#9B1B47]/30 transition-all shrink-0"
          title="Send Message"
        >
          <Send size={16} strokeWidth={2.4} />
        </button>
      </div>

      {/* 5. WALI CONTACT SHEET / MODAL */}
      {showWaliModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 border border-[#F3D5DD] shadow-2xl relative animate-scale-up">
            <button
              type="button"
              onClick={() => setShowWaliModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-[#7A6670] hover:text-[#9B1B47]"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center">
                <PhoneCall size={22} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#2A1620]">
                  Wali (Guardian) Contact
                </h3>
                <p className="text-[11px] text-[#7A6670]">
                  For serious matrimonial discussion
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#FFF9FA] border border-[#F3D5DD] rounded-2xl space-y-2 mb-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#7A6670]">Guardian:</span>
                <span className="font-bold text-[#2A1620]">
                  {partner.waliContact?.name || `${partner.name}'s Father`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#7A6670]">Relation:</span>
                <span className="font-bold text-[#2A1620]">
                  {partner.waliContact?.relation || 'Father / Wali'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#7A6670]">Contact Number:</span>
                <span className="font-mono font-bold text-[#9B1B47]">
                  {partner.waliContact?.phone || '+91 98221 44812'}
                </span>
              </div>
            </div>

            <p className="text-[10px] text-[#7A6670] leading-relaxed mb-4 text-center">
              In accordance with Sunnah, parents/guardians should connect early to establish mutual understanding and blessings.
            </p>

            <div className="flex gap-2">
              <a
                href={`tel:${partner.waliContact?.phone || '+919822144812'}`}
                className="flex-1 py-2.5 px-4 bg-[#9B1B47] hover:bg-[#83143B] text-white text-xs font-bold rounded-xl text-center shadow-xs flex items-center justify-center gap-1.5"
              >
                <Phone size={14} />
                <span>Call Wali Directly</span>
              </a>
              <button
                type="button"
                onClick={() => setShowWaliModal(false)}
                className="py-2.5 px-3 bg-[#FFF0F3] text-[#7A6670] hover:text-[#2A1620] text-xs font-bold rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
