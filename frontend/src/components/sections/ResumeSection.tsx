'use client';

import React from 'react';
import { FileText, ArrowRight, Sparkles } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export default function ResumeSection({ onOpenResume }: ResumeSectionProps) {
  return (
    <section className="py-20 bg-[#F7F7F5] border-b-2 border-black relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-white border-2 border-black p-8 sm:p-12 shadow-[6px_6px_0px_#111] flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left copy */}
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#F7F7F5] border border-black text-[10px] font-pixel text-[#E31B23] font-bold uppercase shadow-[1px_1px_0px_#111]">
              <Sparkles className="w-3 h-3 text-[#E31B23]" />
              <span>COMPREHENSIVE DOSSIER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-pixel font-bold text-black tracking-tight uppercase">
              WANT THE FULL BUILD?
            </h2>

            <p className="text-sm sm:text-base text-[#555555] max-w-xl font-sans font-normal">
              Explore my complete experience, projects, and technical background.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <button
              onClick={onOpenResume}
              data-cursor="cta"
              className="pixel-btn-primary text-sm sm:text-base flex items-center gap-2 group"
            >
              <FileText className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
