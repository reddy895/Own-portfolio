'use client';

import React, { useState } from 'react';
import { Scan, Volume2 } from 'lucide-react';

export default function KrishiScanner() {
  const [scanning, setScanning] = useState(false);
  const [activeCrop, setActiveCrop] = useState<'Tomato' | 'Paddy'>('Tomato');

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
    }, 900);
  };

  return (
    <div className="bg-white border-2 border-black p-4 text-xs font-pixel select-none shadow-[3px_3px_0px_#111]">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b-2 border-black">
        <div className="flex items-center gap-1.5 text-black font-bold">
          <Scan className="w-3.5 h-3.5 text-[#E31B23]" />
          <span>CV LEAF PATHOLOGY SCANNER</span>
        </div>
        <div className="flex gap-1 text-[10px]">
          <button
            onClick={() => setActiveCrop('Tomato')}
            className={`px-2 py-0.5 border border-black font-bold ${
              activeCrop === 'Tomato'
                ? 'bg-black text-white'
                : 'bg-[#F7F7F5] text-black hover:bg-neutral-200'
            }`}
          >
            Tomato
          </button>
          <button
            onClick={() => setActiveCrop('Paddy')}
            className={`px-2 py-0.5 border border-black font-bold ${
              activeCrop === 'Paddy'
                ? 'bg-black text-white'
                : 'bg-[#F7F7F5] text-black hover:bg-neutral-200'
            }`}
          >
            Paddy
          </button>
        </div>
      </div>

      {/* Visual Canvas Area (Light Theme) */}
      <div className="relative h-44 w-full bg-[#F7F7F5] border border-black flex items-center justify-center overflow-hidden">
        {/* Pixel agricultural soil grid */}
        <div className="absolute inset-0 pixel-dot-grid-light opacity-50" />

        {/* Leaf Geometry SVG */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-24 h-24 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)]" viewBox="0 0 100 100" fill="none">
            <path
              d="M 50 10 C 20 30 15 70 50 90 C 85 70 80 30 50 10 Z"
              fill="#FFFFFF"
              stroke="#111111"
              strokeWidth="2.5"
            />
            <path d="M 50 15 L 50 85" stroke="#111111" strokeWidth="2" />
            <path d="M 50 35 L 30 45 M 50 50 L 25 62 M 50 65 L 32 75" stroke="#E31B23" strokeWidth="1.5" />
            <path d="M 50 35 L 70 45 M 50 50 L 75 62 M 50 65 L 68 75" stroke="#E31B23" strokeWidth="1.5" />
          </svg>

          {/* Computer Vision Bounding Box */}
          <div className="absolute top-7 left-6 w-16 h-14 border-2 border-[#E31B23] bg-[#E31B23]/10">
            <span className="absolute -top-4 -left-1 px-1 bg-[#E31B23] text-[8px] font-bold text-white uppercase">
              {activeCrop === 'Tomato' ? 'Early Blight (98%)' : 'Blast Lesion (94%)'}
            </span>
          </div>

          {/* Scanner laser bar */}
          <div
            className={`absolute left-0 right-0 h-0.5 bg-[#E31B23] shadow-[0_0_8px_#E31B23] ${
              scanning ? 'animate-bounce' : 'top-1/2'
            }`}
          />
        </div>

        {/* Scan trigger button */}
        <button
          onClick={handleScan}
          className="absolute bottom-2 right-2 px-2 py-1 bg-black hover:bg-[#E31B23] text-white text-[9px] font-pixel font-bold flex items-center gap-1 shadow-[2px_2px_0px_#111] transition-colors"
        >
          <Scan className="w-2.5 h-2.5" />
          <span>RE-SCAN</span>
        </button>
      </div>

      {/* Advisory Snippet */}
      <div className="mt-3 p-2 bg-[#F7F7F5] border border-black flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5 text-black">
          <Volume2 className="w-3.5 h-3.5 text-[#E31B23] shrink-0" />
          <span>Multilingual Advisory: Copper fungicide treatment advised</span>
        </div>
        <span className="text-[#E31B23] font-bold">ACTIVE</span>
      </div>
    </div>
  );
}
