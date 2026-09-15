'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const HERO_PIXEL_TAGS = [
  { num: '01', label: 'AI' },
  { num: '02', label: 'ML' },
  { num: '03', label: 'RAG' },
  { num: '04', label: 'CV' },
  { num: '05', label: 'NLP' },
  { num: '06', label: 'FULL STACK' },
];

export default function Hero({ onOpenResume }: HeroProps) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 flex items-center bg-[#F7F7F5] border-b-2 border-black"
    >
      <div className="max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Typography, CTAs, Domain Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 flex flex-col space-y-5 z-10"
        >
          {/* Status Label */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_#111]">
            <span className="w-2 h-2 bg-[#E31B23] rounded-none animate-pulse" />
            <span className="text-xs font-pixel font-bold tracking-wider text-black">
              &gt; SYSTEM ONLINE
            </span>
          </div>

          {/* Hello & Name */}
          <div className="space-y-1">
            <div className="text-sm sm:text-base font-pixel font-bold text-[#E31B23] tracking-wider uppercase">
              HELLO, I'M PRAVEEN.
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-pixel font-bold text-black tracking-tight leading-none uppercase">
              PRAVEEN L <span className="text-[#E31B23]">KUMBALUR</span>
            </h1>

            <div className="pt-2 text-xs sm:text-sm font-pixel font-bold tracking-wider text-neutral-800">
              AI/ML ENGINEER <span className="text-[#E31B23] font-bold">+</span> FULL-STACK DEVELOPER
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-[#555555] max-w-xl leading-relaxed font-sans font-normal pt-1">
            Building intelligent systems with AI/ML, RAG, computer vision, NLP, and modern web technologies.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={scrollToProjects}
              data-cursor="cta"
              className="pixel-btn-primary text-xs sm:text-sm group"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              data-cursor="cta"
              className="pixel-btn-secondary text-xs sm:text-sm"
            >
              <FileText className="w-4 h-4 text-[#E31B23]" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>

          {/* Technical Domain Badges */}
          <div className="pt-4 border-t border-neutral-300">
            <div className="text-[10px] font-pixel text-[#555555] font-bold uppercase mb-2">
              TECHNICAL DOMAINS:
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {HERO_PIXEL_TAGS.map((tag) => (
                <div
                  key={tag.num + tag.label}
                  className="p-1.5 bg-white text-black border border-black shadow-[2px_2px_0px_#111] text-center"
                >
                  <div className="text-[9px] font-pixel font-bold text-[#E31B23]">
                    {tag.num}
                  </div>
                  <div className="text-[10px] font-pixel font-bold truncate">
                    {tag.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Picture Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-6 flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-sm mx-auto">
            {/* Pixel Profile Card */}
            <div className="bg-white border-2 border-black p-4 sm:p-5 shadow-[8px_8px_0px_#111] hover:shadow-[10px_10px_0px_#E31B23] transition-shadow duration-300">
              {/* Card Top Bar */}
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#E31B23] rounded-none animate-pulse" />
                  <span className="text-xs font-pixel font-bold text-black tracking-wider uppercase">
                    PRAVEEN_L_K // DEV
                  </span>
                </div>
                <span className="text-[10px] font-pixel px-2 py-0.5 bg-[#F7F7F5] text-black border border-black font-bold">
                  DEV::ONLINE
                </span>
              </div>

              {/* Profile Photo */}
              <div className="relative w-full aspect-[4/5] border-2 border-black overflow-hidden bg-black shadow-[4px_4px_0px_#111] group mb-4">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* HUD Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#E31B23] text-white text-[9px] font-pixel font-bold shadow-[2px_2px_0px_#111] border border-black">
                  DEV::ACTIVE
                </div>
                {/* Corner crosshair */}
                <span className="absolute bottom-2 left-2.5 text-[10px] font-pixel text-[#E31B23] font-bold">
                  [ + ]
                </span>
              </div>

              {/* Name & Location */}
              <div className="text-center space-y-1">
                <div className="text-sm font-pixel font-bold text-black tracking-wider uppercase">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-xs text-[#E31B23] font-pixel flex items-center justify-center gap-1 font-bold">
                  <MapPin className="w-3 h-3" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Footer Telemetry */}
              <div className="mt-3 pt-2.5 border-t border-neutral-200 flex items-center justify-between text-[10px] font-pixel">
                <span className="font-bold text-black">FOCUS // AI + FULL STACK</span>
                <span className="text-[#E31B23] font-bold">[ OPEN TO WORK ]</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
