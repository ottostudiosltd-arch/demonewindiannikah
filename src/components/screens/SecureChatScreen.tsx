import React, { useState } from 'react';
import { ChevronLeft, Send, ShieldAlert, Users, Phone, CheckCheck } from 'lucide-react';
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

  const handleSend = () => {
    if (!inputVal.trim()) return;
    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        sender: 'me',
        text: inputVal,
        time: 'Just now'
      }
    ]);
    setInputVal('');
  };

  return (
    <div className="flex flex-col h-[90vh] bg-[#FFF9FA] select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between p-3 bg-white border-b border-[#F3D5DD] shadow-xs">
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="p-1 -ml-1 text-[#3E2330] hover:text-[#9B1B47]">
            <ChevronLeft size={22} />
          </button>
          <div className="w-9 h-9 rounded-full overflow-hidden bg-[#FFF0F3] border border-[#F3D5DD]">
            <img src={partner.photoUrl} alt={partner.name} className="w-full h-full object-cover filter blur-[2px]" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-[#2A1620]">{partner.name}</h3>
            <span className="text-[10px] text-emerald-600 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              Active in Chat
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-[10px] bg-[#FFF0F3] text-[#9B1B47] px-2 py-0.5 rounded-full font-bold">
            Family Monitored
          </span>
        </div>
      </div>

      {/* Islamic Etiquette Banner */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFF0F4] border-b border-[#FADCE3] text-[10px] text-[#83143B]">
        <ShieldAlert size={13} className="shrink-0 text-[#9B1B47]" />
        <span>Keep communications respectful, halal, and focused on Nikah intentions.</span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                msg.sender === 'me'
                  ? 'bg-[#9B1B47] text-white rounded-br-xs shadow-xs'
                  : 'bg-white text-[#2A1620] border border-[#F3D5DD] rounded-bl-xs shadow-xs'
              }`}
            >
              <p>{msg.text}</p>
            </div>
            <span className="text-[9px] text-[#8E7B85] mt-1 px-1 flex items-center gap-0.5">
              <span>{msg.time}</span>
              {msg.sender === 'me' && <CheckCheck size={11} className="text-[#9B1B47]" />}
            </span>
          </div>
        ))}
      </div>

      {/* Message Input Box */}
      <div className="p-3 bg-white border-t border-[#F3D5DD] flex items-center gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Write respectful message..."
          className="flex-1 py-2 px-3 bg-[#FFF9FA] border border-[#EAC5CE] rounded-xl text-xs text-[#2A1620] focus:outline-none focus:border-[#9B1B47]"
        />
        <button
          onClick={handleSend}
          className="p-2.5 rounded-xl bg-[#9B1B47] text-white hover:bg-[#83143B] active:scale-95 transition-transform"
        >
          <Send size={15} />
        </button>
      </div>
    </div>
  );
};
