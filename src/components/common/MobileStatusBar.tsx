import React from 'react';
import { Wifi, Battery } from 'lucide-react';

export const MobileStatusBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 py-2.5 text-xs font-semibold text-[#3E2330] select-none bg-transparent">
      <span>8:12</span>
      <div className="flex items-center gap-1.5">
        {/* Cellular Signal Bars */}
        <div className="flex items-end gap-0.5 h-3">
          <span className="w-0.5 h-1.5 bg-[#3E2330] rounded-xs" />
          <span className="w-0.5 h-2 bg-[#3E2330] rounded-xs" />
          <span className="w-0.5 h-2.5 bg-[#3E2330] rounded-xs" />
          <span className="w-0.5 h-3 bg-[#3E2330] rounded-xs" />
        </div>
        <Wifi size={13} className="text-[#3E2330]" strokeWidth={2.5} />
        <Battery size={15} className="text-[#3E2330]" strokeWidth={2.5} />
      </div>
    </div>
  );
};
