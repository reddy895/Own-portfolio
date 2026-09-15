'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t-2 border-black pt-14 pb-10 z-10 select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-center text-center space-y-6">
        {/* Small Red Web Graphic */}
        <div className="relative flex items-center justify-center">
          <svg
            className="w-12 h-12 text-[#E31B23]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
            <circle cx="12" cy="12" r="3" strokeDasharray="1 1" />
            <circle cx="12" cy="12" r="7" strokeDasharray="2 2" />
          </svg>
          <div className="absolute w-2 h-2 bg-black" />
        </div>

        {/* Identity */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold font-pixel text-black tracking-wider uppercase">
            PRAVEEN.EXE
          </h2>
          <p className="text-xs sm:text-sm font-pixel text-[#E31B23] font-bold tracking-wide">
            AI/ML ENGINEER &bull; FULL-STACK DEVELOPER
          </p>
          <p className="text-xs text-neutral-500 font-sans italic pt-1">
            “Built with curiosity, code &amp; caffeine.”
          </p>
        </div>

        {/* Social & Contact Links */}
        <div className="flex items-center gap-4 text-xs font-pixel text-black font-bold">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E31B23] transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>
          <span>&bull;</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E31B23] transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LINKEDIN</span>
          </a>
          <span>&bull;</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#E31B23] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#E31B23]" />
            <span>EMAIL</span>
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="mt-2 text-black hover:text-[#E31B23] text-xs font-pixel font-bold flex items-center gap-1 border-2 border-black px-3 py-1 bg-white shadow-[2px_2px_0px_#111] transition-all"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#E31B23]" />
          <span>RETURN TO TOP</span>
        </button>

        {/* Copyright */}
        <div className="pt-4 border-t border-neutral-300 w-full flex flex-col sm:flex-row items-center justify-between text-[10px] font-pixel text-neutral-500 gap-2">
          <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.</span>
          <span className="text-black font-bold">
            SYSTEM // NEXT.JS + THREE.JS + PIXEL ENGINE
          </span>
        </div>
      </div>
    </footer>
  );
}
