import React from 'react';

export const FloralCornerBottom: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none opacity-40 ${className}`}
  >
    <path
      d="M190 200C190 145 160 110 115 110C95 110 75 125 70 145C65 125 50 115 35 120C15 125 5 155 0 200"
      stroke="#DE7C95"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M175 165C165 150 145 145 130 155C125 140 105 135 95 148C85 138 68 140 60 155C55 170 65 185 85 195"
      fill="#F9D4DC"
      fillOpacity="0.6"
    />
    <path
      d="M185 180C170 160 140 162 135 180C130 165 110 165 105 180"
      fill="#F3AFBE"
      fillOpacity="0.5"
    />
    <path
      d="M140 120C150 105 170 108 175 125C185 120 195 130 195 145"
      fill="#F9D4DC"
      fillOpacity="0.7"
    />
    <circle cx="120" cy="115" r="4" fill="#DE7C95" fillOpacity="0.5" />
    <circle cx="160" cy="100" r="3" fill="#DE7C95" fillOpacity="0.4" />
    <circle cx="85" cy="130" r="3" fill="#DE7C95" fillOpacity="0.4" />
  </svg>
);

export const FloralArchTop: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 360 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none opacity-40 ${className}`}
  >
    <path
      d="M10 20C40 25 60 40 85 45C110 50 140 25 180 20C220 25 250 50 275 45C300 40 320 25 350 20"
      stroke="#E5B8C3"
      strokeWidth="1"
      strokeDasharray="2 3"
    />
    <path
      d="M25 15C35 5 50 8 52 20C55 10 70 12 72 24"
      fill="#FCE7EC"
    />
    <path
      d="M335 15C325 5 310 8 308 20C305 10 290 12 288 24"
      fill="#FCE7EC"
    />
  </svg>
);
