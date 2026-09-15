'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS, HACKATHONS, CERTIFICATIONS } from '@/data/portfolioData';
import { Trophy, Award, Flag, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Achievements() {
  const triggerTrophyConfetti = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x, y },
      colors: ['#E31B23', '#111111', '#B51219', '#FDE8E9'],
      shapes: ['square'],
      ticks: 100,
      scalar: 0.8,
    });
  };

  return (
    <section id="achievements" className="py-24 bg-white border-b-2 border-black relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-7 bg-[#E31B23]" />
          <div>
            <div className="text-[11px] font-pixel tracking-wider text-[#E31B23] font-bold uppercase">
              05 // HONORS &amp; MILESTONES
            </div>
            <h2 className="text-3xl sm:text-4xl font-pixel font-bold tracking-tight text-black uppercase">
              ACHIEVEMENTS_UNLOCKED
            </h2>
          </div>
          <div className="flex-1 h-0.5 bg-black ml-4" />
        </div>

        {/* 1. Main Pixel Trophy Card (1st Place) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-pixel text-neutral-600 font-bold">
            <Trophy className="w-4 h-4 text-[#E31B23]" />
            <span>EXCELLENCE IN AI ENGINEERING</span>
          </div>

          {ACHIEVEMENTS.map((ach) => (
            <motion.div
              key={ach.id}
              onMouseEnter={triggerTrophyConfetti}
              className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#111] hover:shadow-[6px_6px_0px_#E31B23] relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group transition-all"
            >
              {/* Corner pixel marks */}
              <span className="absolute top-0 left-0 w-3 h-3 bg-[#E31B23]" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-[#E31B23]" />
              <span className="absolute bottom-0 left-0 w-3 h-3 bg-[#E31B23]" />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#E31B23]" />

              {/* Large Pixel Trophy Graphic */}
              <div className="relative shrink-0 flex items-center justify-center w-36 h-36 bg-[#F7F7F5] border-2 border-black shadow-[4px_4px_0px_#111]">
                <svg className="w-20 h-20 text-[#E31B23] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="3" width="12" height="8" />
                  <rect x="3" y="4" width="3" height="4" />
                  <rect x="18" y="4" width="3" height="4" />
                  <rect x="10" y="11" width="4" height="5" />
                  <rect x="6" y="16" width="12" height="4" />
                </svg>

                <div className="absolute bottom-1 text-[9px] font-pixel font-bold text-white bg-black px-1.5 py-0.5 border border-black">
                  1ST
                </div>
              </div>

              {/* Achievement Content */}
              <div className="flex-1 text-center md:text-left space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E31B23] text-white font-pixel font-bold text-xs tracking-wider shadow-[2px_2px_0px_#111]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{ach.placement}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-pixel font-bold text-black">
                  {ach.title}
                </h3>

                <div className="text-sm font-pixel text-neutral-800 font-bold">
                  {ach.institution} &bull; <span className="text-[#E31B23]">{ach.date}</span>
                </div>

                {ach.description && (
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans pt-1 max-w-2xl">
                    {ach.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Hackathon Log */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-black pb-3">
            <div className="flex items-center gap-2 text-xs font-pixel text-black font-bold">
              <Flag className="w-4 h-4 text-[#E31B23]" />
              <span>HACKATHON_LOG</span>
            </div>
            <span className="text-[10px] font-pixel text-neutral-500 font-bold">
              MISSION_COUNT // {HACKATHONS.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HACKATHONS.map((hack) => (
              <div
                key={hack.id}
                className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_#111] hover:shadow-[4px_4px_0px_#E31B23] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3">
                    <span
                      className={`inline-block text-[10px] font-pixel font-bold px-2 py-0.5 border-2 border-black ${
                        hack.role === 'TEAM CAPTAIN'
                          ? 'bg-[#E31B23] text-white shadow-[2px_2px_0px_#111]'
                          : 'bg-[#F7F7F5] text-black'
                      }`}
                    >
                      {hack.role}
                    </span>
                  </div>

                  <h4 className="font-pixel text-sm font-bold text-black mb-1">
                    {hack.name}
                  </h4>

                  {hack.organizer && (
                    <p className="text-xs text-neutral-600 font-sans">
                      {hack.organizer}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-2 border-t border-neutral-200 flex items-center justify-between text-[9px] font-pixel text-neutral-500 font-bold">
                  <span>RECORDED</span>
                  <span className="w-2 h-2 bg-[#E31B23]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Certifications */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-black pb-3">
            <div className="flex items-center gap-2 text-xs font-pixel text-black font-bold">
              <Shield className="w-4 h-4 text-[#E31B23]" />
              <span>CERTIFICATIONS</span>
            </div>
            <span className="text-[10px] font-pixel text-neutral-500 font-bold">
              ACCREDITATIONS // {CERTIFICATIONS.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_#111] hover:shadow-[4px_4px_0px_#E31B23] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-pixel font-bold px-1.5 py-0.5 bg-black text-white">
                      CERTIFIED
                    </span>
                    <Award className="w-4 h-4 text-[#E31B23]" />
                  </div>

                  <h4 className="font-pixel text-sm font-bold text-black mb-1 leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-[#E31B23] font-pixel font-bold">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-neutral-200 flex items-center gap-1 text-[10px] font-pixel text-neutral-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E31B23]" />
                  <span>VERIFIED ISSUER</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
