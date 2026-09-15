'use client';

import React, { useState } from 'react';
import { MapPin, Layers } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  type: string;
  reports: number;
  priority: string;
  x: number;
  y: number;
}

const DEMO_HOTSPOTS: Hotspot[] = [
  { id: 'h1', name: 'Sector 4 North Corridor', type: 'Severe Pothole Cluster', reports: 38, priority: 'HIGH (9.4/10)', x: 38, y: 42 },
  { id: 'h2', name: 'East Lake Drainage Canal', type: 'Canal Waste Blockage', reports: 24, priority: 'CRITICAL (8.9/10)', x: 68, y: 28 },
  { id: 'h3', name: 'Old Market Junction', type: 'Streetlight Outage Grid', reports: 19, priority: 'MEDIUM (7.2/10)', x: 55, y: 72 },
];

export default function CivicPulseMap() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(DEMO_HOTSPOTS[0]);

  return (
    <div className="bg-white border-2 border-black p-4 text-xs font-pixel select-none shadow-[3px_3px_0px_#111]">
      {/* Header with simulation notice */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b-2 border-black">
        <div className="flex items-center gap-1.5 text-black font-bold">
          <Layers className="w-3.5 h-3.5 text-[#E31B23]" />
          <span>GIS HOTSPOT SIMULATOR</span>
        </div>
        <span className="text-[10px] px-1.5 py-0.5 bg-red-100 border border-[#E31B23] text-[#E31B23] font-bold">
          [SIMULATED DEMO DATA]
        </span>
      </div>

      {/* Interactive Map Canvas Grid (Light Theme) */}
      <div className="relative h-44 w-full bg-[#F7F7F5] border border-black overflow-hidden">
        {/* Geographic Grid Lines */}
        <div className="absolute inset-0 pixel-grid-light opacity-60" />

        {/* Road & Sector SVG Vectors */}
        <svg className="absolute inset-0 w-full h-full stroke-neutral-400" fill="none">
          <path d="M 0 50 Q 80 80 180 50 T 400 120" strokeWidth="2" />
          <path d="M 120 0 L 150 200" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 280 0 L 260 200" strokeWidth="2" />
          <circle cx="38%" cy="42%" r="28" className="stroke-[#E31B23]/40 fill-[#E31B23]/10 animate-pulse" />
          <circle cx="68%" cy="28%" r="22" className="stroke-[#E31B23]/40 fill-[#E31B23]/10 animate-pulse" />
          <circle cx="55%" cy="72%" r="18" className="stroke-[#E31B23]/40 fill-[#E31B23]/10 animate-pulse" />
        </svg>

        {/* Interactive Hotspot Nodes */}
        {DEMO_HOTSPOTS.map((spot) => {
          const isSelected = activeHotspot.id === spot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
              title={spot.name}
            >
              <div
                className={`w-5 h-5 flex items-center justify-center border-2 transition-all ${
                  isSelected
                    ? 'bg-[#E31B23] border-black shadow-[2px_2px_0px_#111] scale-125'
                    : 'bg-white border-black hover:scale-110 shadow-[1px_1px_0px_#111]'
                }`}
              >
                <div className={`w-1.5 h-1.5 ${isSelected ? 'bg-white' : 'bg-[#E31B23]'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Hotspot Intelligence Box */}
      <div className="mt-3 p-2.5 bg-[#F7F7F5] border border-black space-y-1">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-bold text-black flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#E31B23]" />
            {activeHotspot.name}
          </span>
          <span className="text-[#E31B23] font-bold">{activeHotspot.priority}</span>
        </div>

        <div className="text-[10px] text-[#555555] flex items-center justify-between">
          <span>Type: {activeHotspot.type}</span>
          <span>DBSCAN Density: {activeHotspot.reports} reports</span>
        </div>
      </div>
    </div>
  );
}
