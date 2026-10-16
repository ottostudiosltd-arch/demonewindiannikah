import React from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';
import { ScreenType } from '../../types';

interface SiteFooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-8 sm:mt-16 bg-gradient-to-b from-[#FFF5F7] to-[#FFF0F4] text-[#2A1620] border-t border-[#F3D5DD] select-none">
      {/* 1. SIMPLE CLEAN FOOTER FOR MOBILE (EXACT MATCH WITH USER IMAGE media_1792169568657.png) */}
      <div className="md:hidden py-5 px-3 pb-24 text-center">
        <p className="text-xs text-[#7A6670] leading-snug">
          © 2026 IndiaNikah. Built with sincerity for the Muslim Ummah.
        </p>
        <div className="flex items-center justify-center gap-2 mt-2 text-[11px] text-[#8E7B85]">
          <span onClick={() => onNavigate('guidelines')} className="hover:text-[#9B1B47] cursor-pointer">Privacy First</span>
          <span>·</span>
          <span onClick={() => onNavigate('guidelines')} className="hover:text-[#9B1B47] cursor-pointer">Terms of Service</span>
          <span>·</span>
          <span onClick={() => onNavigate('home')} className="hover:text-[#9B1B47] cursor-pointer">Halal Matchmaking</span>
        </div>
      </div>

      {/* 2. RICH 4-COLUMN FOOTER FOR DESKTOP (PC & TABLET ONLY) */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Islamic Mission */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#9B1B47] to-[#DE1C52] text-white flex items-center justify-center font-extrabold text-base shadow-xs">
                <span>b</span>
              </div>
              <span className="text-lg font-black tracking-tight text-[#2A1620]">IndiaNikah</span>
            </div>

            <p className="text-xs text-[#7A6670] leading-relaxed mb-4">
              India's 100% free (non-profit), privacy-conscious Muslim matrimonial platform. No brokers, no agents, no membership fees. Built for genuine, halal Nikah.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-emerald-800 text-xs font-bold shadow-xs">
              <ShieldCheck size={15} className="text-emerald-600" />
              <span>100% Free Forever Guarantee</span>
            </div>
          </div>

          {/* Col 2: Matrimony Navigation */}
          <div>
            <h4 className="text-xs font-bold text-[#9B1B47] tracking-wider uppercase mb-3.5">
              Matrimony
            </h4>
            <ul className="space-y-2 text-xs text-[#523B47]">
              <li>
                <button
                  onClick={() => onNavigate('search-results')}
                  className="hover:text-[#9B1B47] transition-colors"
                >
                  Search Compatible Profiles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('new-profiles')}
                  className="hover:text-[#9B1B47] transition-colors"
                >
                  Recently Joined Profiles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quick-search')}
                  className="hover:text-[#9B1B47] transition-colors"
                >
                  Quick Match Filter
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('proposals')}
                  className="hover:text-[#9B1B47] transition-colors"
                >
                  My Proposals &amp; Interests
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('secure-chat')}
                  className="hover:text-[#9B1B47] transition-colors"
                >
                  Secure In-App Chat
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Knowledge & Sunnah */}
          <div>
            <h4 className="text-xs font-bold text-[#9B1B47] tracking-wider uppercase mb-3.5">
              Knowledge &amp; Sunnah
            </h4>
            <ul className="space-y-2 text-xs text-[#523B47]">
              <li>
                <button
                  onClick={() => onNavigate('guidelines')}
                  className="hover:text-[#9B1B47] transition-colors"
                >
                  Matrimonial Guidelines &amp; Rules
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('books')}
                  className="hover:text-[#9B1B47] transition-colors"
                >
                  Free Islamic Library &amp; Books
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#9B1B47] transition-colors"
                >
                  Education FAQs on Nikah &amp; Mahr
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Dulha Dulhan Guidance Course')}
                  className="hover:text-[#9B1B47] transition-colors"
                >
                  Dulha Dulhan Guidance Course
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Community Support */}
          <div>
            <h4 className="text-xs font-bold text-[#9B1B47] tracking-wider uppercase mb-3.5">
              Support &amp; Feedback
            </h4>
            <p className="text-xs text-[#7A6670] mb-3 leading-relaxed">
              Need help with your profile or have feedback? Reach out to our dedicated community support.
            </p>
            <a
              href="https://wa.me/918482833177?text=Assalamu%20alaikum"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-emerald-800 text-xs font-bold hover:bg-[#25D366]/25 transition-colors mb-3 shadow-xs"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              <span>WhatsApp Support</span>
            </a>
            <p className="text-[11px] text-[#8E7B85]">
              Your positive feedback helps other Muslim families discover IndiaNikah.
            </p>
          </div>
        </div>

        {/* Desktop Bottom Bar (Matching media_1792169568657.png style) */}
        <div className="pt-6 border-t border-[#F3D5DD] flex items-center justify-between gap-3 text-xs text-[#7A6670]">
          <p>© 2026 IndiaNikah. Built with sincerity for the Muslim Ummah.</p>
          <div className="flex items-center gap-4">
            <span onClick={() => onNavigate('guidelines')} className="hover:text-[#9B1B47] cursor-pointer">Privacy First</span>
            <span>·</span>
            <span onClick={() => onNavigate('guidelines')} className="hover:text-[#9B1B47] cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span onClick={() => onNavigate('home')} className="hover:text-[#9B1B47] cursor-pointer">Halal Matchmaking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
