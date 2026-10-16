import React, { useState, useRef } from 'react';
import {
  ChevronLeft,
  Send,
  ShieldAlert,
  Users,
  Phone,
  PhoneCall,
  Video,
  CheckCheck,
  CheckCircle2,
  Lock,
  MoreVertical,
  Paperclip,
  Smile,
  X,
  Camera,
  Image,
  FileText,
  MapPin,
  Sparkles,
  Download
} from 'lucide-react';
import { UserProfile } from '../../types';

interface SecureChatScreenProps {
  partner: UserProfile;
  onBack: () => void;
  onSelectProfile?: (profile: UserProfile) => void;
}

interface MessageItem {
  id: string;
  sender: 'me' | 'them';
  text?: string;
  imageUrl?: string;
  time: string;
}

export const SecureChatScreen: React.FC<SecureChatScreenProps> = ({
  partner,
  onBack,
  onSelectProfile
}) => {
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: '1',
      sender: 'them',
      text: 'Assalamu alaikum wa rahmatullah. My family reviewed your biodata and would like to understand more about your career plans in Pune.',
      time: '10:30 AM'
    },
    {
      id: '2',
      sender: 'me',
      text: 'Walaikum assalam wa rahmatullah! Glad to connect. I work as a Lead Engineer in Pune and live with my parents. We are open to discussions.',
      time: '10:34 AM'
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [showWaliModal, setShowWaliModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [previewPhotoModal, setPreviewPhotoModal] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = (customText?: string) => {
    const textToSend = customText !== undefined ? customText : inputVal;
    const finalMsg = textToSend.trim() ? textToSend.trim() : 'Assalamu alaikum wa rahmatullah';

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'me',
        text: finalMsg,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    if (customText === undefined) {
      setInputVal('');
    }
    setShowEmojiPicker(false);
    setShowAttachMenu(false);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'me',
          imageUrl: result,
          text: inputVal.trim() ? inputVal.trim() : '📷 Shared Photo',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setInputVal('');
      setShowAttachMenu(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSendSamplePhoto = (url: string, label: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'me',
        imageUrl: url,
        text: label,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setShowAttachMenu(false);
  };

  const quickReplies = [
    'Assalamu Alaikum wa Rahmatullah',
    'Alhamdulillah, insha\'Allah',
    'Can we arrange a family call?',
    'My parents will contact your Wali',
    'I have reviewed your biodata'
  ];

  const quickEmojis = ['🌸', '❤️', '🤲', '👍', '🌹', '✨', '💍', '🕌', '😊', '🤝'];

  return (
    <div className="fixed inset-0 top-0 bottom-0 left-0 right-0 z-[200] flex flex-col bg-[#FFF9FA] h-[100dvh] max-h-[100dvh] w-full overflow-hidden select-none animate-fade-in">
      {/* 1. WHATSAPP TOP APP BAR (NO OUTSIDE NAVBARS, 100% FULL SCREEN) */}
      <div className="bg-[#FFF0F4] border-b border-[#F0CDD5] px-2.5 sm:px-4 py-2 flex items-center justify-between shadow-xs shrink-0 z-30">
        <div className="flex items-center gap-2">
          {/* Back button */}
          <button
            type="button"
            onClick={onBack}
            className="p-1.5 -ml-1 text-[#2A1620] hover:text-[#9B1B47] hover:bg-white/80 rounded-full transition-colors active:scale-95"
            title="Back to Chats"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Partner Avatar with online dot */}
          <div
            onClick={() => onSelectProfile && onSelectProfile(partner)}
            className="relative w-10 h-10 rounded-full overflow-hidden border border-[#9B1B47]/30 shrink-0 cursor-pointer"
          >
            <img
              src={partner.photoUrl}
              alt={partner.name}
              className="w-full h-full object-cover filter blur-[1.5px]"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white ring-1 ring-emerald-300" />
          </div>

          {/* Name & Online Status */}
          <div
            onClick={() => onSelectProfile && onSelectProfile(partner)}
            className="cursor-pointer"
          >
            <h3 className="text-xs sm:text-sm font-extrabold text-[#2A1620] leading-tight flex items-center gap-1">
              <span>{partner.name}, {partner.age}</span>
              <CheckCircle2 size={12} className="text-emerald-600" />
            </h3>
            <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>online · Family Monitored</span>
            </span>
          </div>
        </div>

        {/* Right action icons: Video Call, Voice Call/Wali, Biodata, More menu */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Video Call Icon */}
          <button
            type="button"
            onClick={() => setShowVideoModal(true)}
            className="p-2 text-[#9B1B47] hover:bg-white/80 rounded-full transition-colors"
            title="Halal Video Meeting (Wali Supervised)"
          >
            <Video size={18} strokeWidth={2.2} />
          </button>

          {/* Audio Call / Wali Icon */}
          <button
            type="button"
            onClick={() => setShowWaliModal(true)}
            className="p-2 text-[#9B1B47] hover:bg-white/80 rounded-full transition-colors"
            title="Call Wali (Father)"
          >
            <Phone size={18} strokeWidth={2.2} />
          </button>

          {/* Biodata Button */}
          {onSelectProfile && (
            <button
              type="button"
              onClick={() => onSelectProfile(partner)}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-[#9B1B47] bg-white hover:bg-[#FFF0F3] border border-[#EAC5CE] rounded-full shadow-2xs transition-colors"
            >
              <FileText size={12} />
              <span>Biodata</span>
            </button>
          )}

          {/* 3-Dots More Menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowMenuDropdown(!showMenuDropdown)}
              className="p-2 text-[#7A6670] hover:text-[#2A1620] hover:bg-white/80 rounded-full transition-colors"
            >
              <MoreVertical size={18} />
            </button>

            {showMenuDropdown && (
              <div className="absolute right-0 mt-1 w-48 bg-white border border-[#EAC5CE] rounded-2xl shadow-xl z-50 p-1.5 space-y-1 text-xs animate-fade-in">
                {onSelectProfile && (
                  <button
                    type="button"
                    onClick={() => {
                      onSelectProfile(partner);
                      setShowMenuDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-[#2A1620] hover:bg-[#FFF0F3] font-semibold flex items-center gap-2"
                  >
                    <FileText size={14} className="text-[#9B1B47]" />
                    <span>View Biodata</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setShowWaliModal(true);
                    setShowMenuDropdown(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-[#2A1620] hover:bg-[#FFF0F3] font-semibold flex items-center gap-2"
                >
                  <Phone size={14} className="text-emerald-600" />
                  <span>Call Wali (Father)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowVideoModal(true);
                    setShowMenuDropdown(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-[#2A1620] hover:bg-[#FFF0F3] font-semibold flex items-center gap-2"
                >
                  <Video size={14} className="text-[#9B1B47]" />
                  <span>Video Call with Family</span>
                </button>
                <div className="border-t border-[#F5D7DF]/60 my-1" />
                <button
                  type="button"
                  onClick={() => {
                    setMessages([]);
                    setShowMenuDropdown(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-[#7A6670] hover:bg-[#FFF0F3] font-medium"
                >
                  Clear Messages
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

      {/* 2. WHATSAPP CHAT CANVAS / WALLPAPER (CRITICAL: min-h-0 PREVENTS SCROLL OVERFLOW PUSHING BOTTOM BAR OUT) */}
      <div className="flex-1 min-h-0 overflow-y-auto px-3 sm:px-6 py-3 space-y-3 bg-[#FAF2F4]">
        {/* Halal Matrimonial Encryption Banner (WhatsApp Style) */}
        <div className="max-w-md mx-auto p-2.5 bg-[#FFF0F3] border border-[#F3D5DD] rounded-xl text-center shadow-2xs">
          <p className="text-[10px] text-[#83143B] flex items-center justify-center gap-1.5 font-semibold leading-relaxed">
            <Lock size={12} className="text-[#9B1B47] shrink-0" />
            <span>Messages and calls are end-to-end encrypted &amp; family monitored. Respectful matrimonial intent only.</span>
          </p>
        </div>

        {/* WhatsApp Date divider pill */}
        <div className="flex justify-center my-1.5">
          <span className="px-3.5 py-1 bg-white/95 border border-[#F0CDD5] text-[#7A6670] text-[10px] font-bold rounded-full shadow-2xs uppercase tracking-wider">
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
              className={`relative max-w-[85%] sm:max-w-[70%] p-2.5 sm:p-3 rounded-2xl text-xs leading-relaxed shadow-xs ${
                msg.sender === 'me'
                  ? 'bg-gradient-to-r from-[#9B1B47] to-[#C51E50] text-white rounded-tr-xs'
                  : 'bg-white text-[#2A1620] border border-[#F0CDD5] rounded-tl-xs'
              }`}
            >
              {/* Photo Message Render */}
              {msg.imageUrl && (
                <div
                  onClick={() => setPreviewPhotoModal(msg.imageUrl || null)}
                  className="rounded-xl overflow-hidden mb-1.5 max-h-56 max-w-xs border border-white/20 cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <img
                    src={msg.imageUrl}
                    alt="Shared in Chat"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Text Message Render */}
              {msg.text && <p className="pr-4 break-words">{msg.text}</p>}

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

      {/* 3. QUICK ISLAMIC SUGGESTION CHIPS (WhatsApp Style) */}
      <div className="shrink-0 px-3 pt-2 pb-1.5 bg-[#FFF0F4] border-t border-[#F0CDD5] overflow-x-auto scrollbar-none flex items-center gap-1.5 z-20">
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

      {/* 4. ATTACHMENT MENU DRAWER (WhatsApp Style for Photo & Biodata Sharing) */}
      {showAttachMenu && (
        <div className="shrink-0 bg-white border-t border-[#F0CDD5] px-4 py-3 grid grid-cols-4 gap-2 animate-slide-up shadow-xl z-25">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center gap-1 text-xs text-[#2A1620] hover:text-[#9B1B47] active:scale-95"
          >
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-[#9B1B47] flex items-center justify-center shadow-xs">
              <Camera size={22} />
            </div>
            <span className="text-[10px] font-bold">Gallery/Cam</span>
          </button>

          <button
            type="button"
            onClick={() =>
              handleSendSamplePhoto(
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
                '🤵 My Verified Biodata Photo'
              )
            }
            className="flex flex-col items-center gap-1 text-xs text-[#2A1620] hover:text-[#9B1B47] active:scale-95"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-xs">
              <Image size={22} />
            </div>
            <span className="text-[10px] font-bold">My Photo</span>
          </button>

          <button
            type="button"
            onClick={() =>
              handleSendSamplePhoto(
                'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80',
                '👨‍👩‍👧 Family Gathering Photo'
              )
            }
            className="flex flex-col items-center gap-1 text-xs text-[#2A1620] hover:text-[#9B1B47] active:scale-95"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
              <Users size={22} />
            </div>
            <span className="text-[10px] font-bold">Family Photo</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setShowWaliModal(true);
              setShowAttachMenu(false);
            }}
            className="flex flex-col items-center gap-1 text-xs text-[#2A1620] hover:text-[#9B1B47] active:scale-95"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs">
              <Phone size={22} />
            </div>
            <span className="text-[10px] font-bold">Wali Contact</span>
          </button>
        </div>
      )}

      {/* 5. EMOJI PICKER DRAWER */}
      {showEmojiPicker && (
        <div className="shrink-0 bg-[#FFF8FA] border-t border-[#F0CDD5] px-4 py-2 flex items-center gap-3 overflow-x-auto scrollbar-none z-25">
          {quickEmojis.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => setInputVal((prev) => prev + emoji)}
              className="text-xl p-1 hover:scale-125 transition-transform"
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      {/* 6. WHATSAPP BOTTOM CHATTING BOARD / INPUT BAR (LOCKED TO BOTTOM, NEVER CUT OFF) */}
      <div className="shrink-0 z-30 bg-white border-t border-[#F0CDD5] px-2 sm:px-3 py-2 flex items-center gap-1.5 sm:gap-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-lg">
        {/* Hidden File Input for Real Gallery / Camera Upload */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="hidden"
        />

        {/* Emoji Button */}
        <button
          type="button"
          onClick={() => {
            setShowEmojiPicker(!showEmojiPicker);
            setShowAttachMenu(false);
          }}
          className={`p-2 rounded-full transition-colors ${
            showEmojiPicker ? 'bg-[#9B1B47] text-white' : 'text-[#7A6670] hover:text-[#9B1B47] hover:bg-[#FFF0F3]'
          }`}
          title="Emojis"
        >
          <Smile size={20} />
        </button>

        {/* Direct Camera / Photo Send Button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="p-2 text-[#7A6670] hover:text-[#9B1B47] hover:bg-[#FFF0F3] rounded-full transition-colors active:scale-95"
          title="Send Photo from Gallery / Camera"
        >
          <Camera size={20} />
        </button>

        {/* Paperclip Attachment Menu */}
        <button
          type="button"
          onClick={() => {
            setShowAttachMenu(!showAttachMenu);
            setShowEmojiPicker(false);
          }}
          className={`p-2 rounded-full transition-colors ${
            showAttachMenu ? 'bg-[#9B1B47] text-white' : 'text-[#7A6670] hover:text-[#9B1B47] hover:bg-[#FFF0F3]'
          }`}
          title="Share Photos &amp; Biodata"
        >
          <Paperclip size={19} />
        </button>

        {/* Text Input Field */}
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          className="flex-1 py-2 sm:py-2.5 px-3.5 bg-[#FFF9FA] border border-[#EAC5CE] focus:border-[#9B1B47] rounded-full text-xs sm:text-sm text-[#2A1620] placeholder-[#8E7B85] focus:outline-none shadow-xs"
        />

        {/* Send Message Button (Always Prominently Visible) */}
        <button
          type="button"
          onClick={() => handleSend()}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9B1B47] to-[#C51E50] hover:from-[#83143B] hover:to-[#B01A44] text-white flex items-center justify-center active:scale-90 shadow-md shadow-[#9B1B47]/30 transition-all shrink-0 cursor-pointer"
          title="Send Message"
        >
          <Send size={16} strokeWidth={2.4} />
        </button>
      </div>

      {/* 7. FULLSCREEN PHOTO PREVIEW MODAL */}
      {previewPhotoModal && (
        <div
          onClick={() => setPreviewPhotoModal(null)}
          className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
        >
          <button
            type="button"
            onClick={() => setPreviewPhotoModal(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/40"
          >
            <X size={24} />
          </button>
          <img
            src={previewPhotoModal}
            alt="Preview"
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}

      {/* 8. WALI CONTACT SHEET / MODAL */}
      {showWaliModal && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
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
                  Direct family connection for Sunnah Nikah
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
              In accordance with Sunnah, parents and guardians should connect early to establish mutual understanding, respect, and blessings.
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

      {/* 9. VIDEO CALL NOTICE MODAL */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 border border-[#F3D5DD] shadow-2xl relative animate-scale-up text-center">
            <button
              type="button"
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-[#7A6670] hover:text-[#9B1B47]"
            >
              <X size={18} />
            </button>

            <div className="w-14 h-14 rounded-full bg-[#FFF0F3] text-[#9B1B47] flex items-center justify-center mx-auto mb-3">
              <Video size={24} />
            </div>

            <h3 className="text-sm font-extrabold text-[#2A1620] mb-1">
              Family Halal Video Meeting
            </h3>
            <p className="text-xs text-[#7A6670] leading-relaxed mb-4">
              To honor Islamic modesty, video calls are conducted with both family Walis present. Schedule a mutually convenient time with parents.
            </p>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  handleSend('📹 Can we schedule a family video call with our Walis this Sunday?');
                  setShowVideoModal(false);
                }}
                className="w-full py-2.5 px-4 bg-[#9B1B47] hover:bg-[#83143B] text-white text-xs font-bold rounded-xl shadow-xs"
              >
                Send Video Call Request
              </button>
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="w-full py-2 text-xs text-[#7A6670] hover:text-[#2A1620] font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
