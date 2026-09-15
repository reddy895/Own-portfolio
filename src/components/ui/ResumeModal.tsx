'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, ACHIEVEMENTS, SKILL_CATEGORIES } from '@/data/portfolioData';
import { X, Printer, Mail, Phone, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 w-full max-w-4xl bg-white border-2 border-black shadow-[8px_8px_0px_#111] flex flex-col max-h-[92vh] overflow-hidden my-auto"
        >
          {/* Top Bar */}
          <div className="px-6 py-3 bg-[#F7F7F5] border-b-2 border-black flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-pixel font-bold text-black">
              <span className="w-2 h-2 bg-[#E31B23]" />
              <span>PRAVEEN_L_KUMBALUR_RESUME.PDF</span>
            </div>

            <div className="flex items-center gap-2 font-pixel">
              <button
                onClick={handlePrint}
                className="px-3 py-1 bg-black hover:bg-[#E31B23] text-white font-pixel text-xs font-bold border border-black flex items-center gap-1.5 shadow-[2px_2px_0px_#111] transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / SAVE AS PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1 bg-white hover:bg-neutral-200 text-black border border-black"
                aria-label="Close resume"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Document Body (Light Theme) */}
          <div className="p-8 overflow-y-auto space-y-6 text-black font-sans text-sm bg-white">
            {/* Header */}
            <div className="border-b-2 border-black pb-5 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-pixel font-bold text-black tracking-tight uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-sm font-pixel font-bold text-[#E31B23] mt-1">
                  {PERSONAL_INFO.role}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-pixel text-[#555555]">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#E31B23]" />
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#E31B23]" />
                    {PERSONAL_INFO.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E31B23]" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Photo Thumbnail */}
              <div className="hidden sm:block w-20 h-24 shrink-0 border-2 border-black bg-black shadow-[3px_3px_0px_#111] overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-1">
              <h2 className="text-xs font-pixel font-bold text-[#E31B23] tracking-wider uppercase">
                PROFESSIONAL PROFILE
              </h2>
              <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                {PERSONAL_INFO.aboutText}
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-pixel font-bold text-black tracking-wider uppercase border-b border-neutral-300 pb-1">
                PROFESSIONAL EXPERIENCE
              </h2>

              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span className="font-pixel font-bold text-black text-sm">
                        {exp.role} &bull; {exp.company}
                      </span>
                      <span className="text-xs font-pixel text-neutral-500 font-bold">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 pl-1 font-sans">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-pixel font-bold text-black tracking-wider uppercase border-b border-neutral-300 pb-1">
                KEY TECHNICAL PROJECTS
              </h2>

              <div className="space-y-3">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span className="font-pixel font-bold text-black text-sm">
                        {proj.title} — {proj.subtitle}
                      </span>
                      <span className="text-xs font-pixel text-[#E31B23] font-bold">
                        {proj.category}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                    <div className="text-[11px] font-pixel text-[#555555]">
                      Technologies: {proj.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Achievement */}
            <div className="space-y-2">
              <h2 className="text-xs font-pixel font-bold text-black tracking-wider uppercase border-b border-neutral-300 pb-1">
                HONORS &amp; EDUCATION
              </h2>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-pixel font-bold text-black text-sm">
                    Artificial Intelligence Engineering
                  </span>
                  <span className="text-xs font-pixel text-neutral-500">
                    Active Program
                  </span>
                </div>
                {ACHIEVEMENTS.map((ach) => (
                  <div key={ach.id} className="text-xs text-neutral-800 font-sans">
                    <span className="font-pixel font-bold text-[#E31B23]">{ach.placement}:</span> {ach.title} — {ach.institution} ({ach.date})
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Arsenal */}
            <div className="space-y-2">
              <h2 className="text-xs font-pixel font-bold text-black tracking-wider uppercase border-b border-neutral-300 pb-1">
                TECHNICAL ARSENAL
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-pixel">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title}>
                    <span className="text-[#E31B23] font-bold">{cat.title}: </span>
                    <span className="text-black">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
