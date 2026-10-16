import React, { useState } from 'react';
import { ChevronLeft, BookOpen, Download, FileText, HelpCircle, CheckCircle } from 'lucide-react';
import { BOOKS_LIST, FAQ_ITEMS } from '../../data/mockData';

interface GuidanceBooksScreenProps {
  initialTab?: 'guidelines' | 'books' | 'faq';
  onBack: () => void;
}

export const GuidanceBooksScreen: React.FC<GuidanceBooksScreenProps> = ({
  initialTab = 'guidelines',
  onBack
}) => {
  const [tab, setTab] = useState<'guidelines' | 'books' | 'faq'>(initialTab);

  return (
    <div className="pb-24 px-4 pt-1 animate-fade-in select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between py-2 mb-3 border-b border-[#F5D7DF]/60">
        <button onClick={onBack} className="p-1.5 -ml-1 text-[#3E2330] hover:text-[#9B1B47]">
          <ChevronLeft size={22} />
        </button>
        <h1 className="text-base font-extrabold text-[#2A1620]">
          {tab === 'guidelines' && 'Marriage Guidelines'}
          {tab === 'books' && 'Free Islamic Library'}
          {tab === 'faq' && 'Education & FAQs'}
        </h1>
        <div className="w-8" />
      </div>

      {/* Segmented Switcher */}
      <div className="flex bg-[#FFF0F3] p-1 rounded-2xl mb-4 border border-[#F3D5DD] text-xs font-bold">
        <button
          onClick={() => setTab('guidelines')}
          className={`flex-1 py-1.5 rounded-xl transition-all ${
            tab === 'guidelines' ? 'bg-white text-[#9B1B47] shadow-xs' : 'text-[#7A6670]'
          }`}
        >
          Guidelines
        </button>
        <button
          onClick={() => setTab('books')}
          className={`flex-1 py-1.5 rounded-xl transition-all ${
            tab === 'books' ? 'bg-white text-[#9B1B47] shadow-xs' : 'text-[#7A6670]'
          }`}
        >
          Books
        </button>
        <button
          onClick={() => setTab('faq')}
          className={`flex-1 py-1.5 rounded-xl transition-all ${
            tab === 'faq' ? 'bg-white text-[#9B1B47] shadow-xs' : 'text-[#7A6670]'
          }`}
        >
          FAQ
        </button>
      </div>

      {/* Guidelines Content */}
      {tab === 'guidelines' && (
        <div className="space-y-3">
          <div className="p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
            <h3 className="text-xs font-bold text-[#2A1620] mb-1.5 flex items-center gap-1.5 text-[#9B1B47]">
              <CheckCircle size={15} />
              1. Sincerity and Halal Intentions
            </h3>
            <p className="text-xs text-[#523B47] leading-relaxed">
              IndiaNikah is strictly for Muslim brothers and sisters seeking marriage in accordance with Quran &amp; Sunnah. Casual dating or deceitful profiles are prohibited.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
            <h3 className="text-xs font-bold text-[#2A1620] mb-1.5 flex items-center gap-1.5 text-[#9B1B47]">
              <CheckCircle size={15} />
              2. Privacy &amp; Modesty
            </h3>
            <p className="text-xs text-[#523B47] leading-relaxed">
              Photos can remain blurred until mutual interest is established. Private contact details should only be exchanged once both families are comfortable.
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
            <h3 className="text-xs font-bold text-[#2A1620] mb-1.5 flex items-center gap-1.5 text-[#9B1B47]">
              <CheckCircle size={15} />
              3. Family Involvement &amp; Wali
            </h3>
            <p className="text-xs text-[#523B47] leading-relaxed">
              Involving parents and walis early ensures barakah and safeguards both parties against misunderstandings.
            </p>
          </div>
        </div>
      )}

      {/* Books Content */}
      {tab === 'books' && (
        <div className="space-y-3">
          {BOOKS_LIST.map((b, i) => (
            <div key={i} className="p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-[#9B1B47] bg-[#FFF0F3] px-2 py-0.5 rounded-full font-bold">
                  {b.category}
                </span>
                <h3 className="text-xs font-bold text-[#2A1620] mt-1.5">{b.title}</h3>
                <p className="text-[11px] text-[#7A6670] mt-0.5">By {b.author} · {b.pages}</p>
                <p className="text-xs text-[#523B47] mt-1.5 leading-relaxed">{b.description}</p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#F5D7DF]/60 flex items-center justify-between">
                <span className="text-[10px] text-emerald-700 font-semibold">Free PDF Available</span>
                <button
                  onClick={() => alert(`Starting download for "${b.title}"...`)}
                  className="flex items-center gap-1 py-1 px-3 bg-[#9B1B47] text-white text-[11px] font-bold rounded-lg hover:bg-[#83143B] transition-colors"
                >
                  <Download size={12} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FAQ Content */}
      {tab === 'faq' && (
        <div className="space-y-2.5">
          {FAQ_ITEMS.map((faq, i) => (
            <div key={i} className="p-3.5 bg-white rounded-2xl border border-[#F3D5DD] shadow-xs">
              <h3 className="text-xs font-bold text-[#2A1620] mb-1">{faq.q}</h3>
              <p className="text-xs text-[#523B47] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
