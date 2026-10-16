import React from 'react';
import { ShieldCheck, MessageCircle, Heart, Star, Sparkles } from 'lucide-react';
import { ScreenType } from '../../types';

interface SiteFooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-16 bg-[#1A1E24] text-white border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Islamic Mission */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#9B1B47] to-[#DE1C52] text-white flex items-center justify-center font-extrabold text-base shadow-xs">
                <span>b</span>
              </div>
              <span className="text-lg font-black tracking-tight">IndiaNikah</span>
            </div>

            <p className="text-xs text-[#A6ADB8] leading-relaxed mb-4">
              India's 100% free (non-profit), privacy-focused Muslim matrimonial platform. No brokers, no agents, no membership fees. Built for genuine, halal Nikah.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#142A27] border border-[#214D46] text-emerald-400 text-xs font-bold">
              <ShieldCheck size={15} />
              <span>100% Free Forever Guarantee</span>
            </div>
          </div>

          {/* Col 2: Matrimony Navigation */}
          <div>
            <h4 className="text-xs font-bold text-[#DE1C52] tracking-wider uppercase mb-3.5">
              Matrimony
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD1D8]">
              <li>
                <button
                  onClick={() => onNavigate('search-results')}
                  className="hover:text-white transition-colors"
                >
                  Search Compatible Profiles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('new-profiles')}
                  className="hover:text-white transition-colors"
                >
                  Recently Joined Profiles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quick-search')}
                  className="hover:text-white transition-colors"
                >
                  Quick Match Filter
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('proposals')}
                  className="hover:text-white transition-colors"
                >
                  My Proposals &amp; Interests
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('secure-chat')}
                  className="hover:text-white transition-colors"
                >
                  Secure In-App Chat
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Knowledge & Sunnah */}
          <div>
            <h4 className="text-xs font-bold text-[#DE1C52] tracking-wider uppercase mb-3.5">
              Knowledge &amp; Sunnah
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD1D8]">
              <li>
                <button
                  onClick={() => onNavigate('guidelines')}
                  className="hover:text-white transition-colors"
                >
                  Matrimonial Guidelines &amp; Rules
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('books')}
                  className="hover:text-white transition-colors"
                >
                  Free Islamic Library &amp; Books
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors"
                >
                  Education FAQs on Nikah &amp; Mahr
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Dulha Dulhan Video Series')}
                  className="hover:text-white transition-colors"
                >
                  Dulha Dulhan Guidance Course
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Community Support */}
          <div>
            <h4 className="text-xs font-bold text-[#DE1C52] tracking-wider uppercase mb-3.5">
              Support &amp; Feedback
            </h4>
            <p className="text-xs text-[#A6ADB8] mb-3 leading-relaxed">
              Need help with your profile or have feedback? Reach out to our dedicated support.
            </p>
            <a
              href="https://wa.me/918482833177?text=Assalamu%20alaikum"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/30 transition-colors mb-3"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Support</span>
            </a>
            <p className="text-[11px] text-[#8C94A0]">
              Your positive feedback helps other Muslim families discover IndiaNikah.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C94A0]">
          <p>© {new Date().getFullYear()} IndiaNikah. Built with sincerity for the Muslim Ummah.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Privacy First</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer">Halal Matchmaking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
