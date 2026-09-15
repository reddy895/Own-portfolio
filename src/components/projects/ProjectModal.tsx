'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/portfolio';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import CivicPulseMap from './CivicPulseMap';
import KrishiScanner from './KrishiScanner';
import MalwareTerminal from './MalwareTerminal';
import LoopVisual from './LoopVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs">
        {/* Backdrop dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window Container (Light Theme) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white border-2 border-black shadow-[8px_8px_0px_#111] flex flex-col overflow-hidden my-auto"
        >
          {/* Top Red Accent Stripe */}
          <div className="h-2 w-full bg-[#E31B23]" />

          {/* Modal Header Bar */}
          <div className="px-6 py-4 bg-[#F7F7F5] border-b-2 border-black flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white font-pixel font-bold text-sm flex items-center justify-center shadow-[2px_2px_0px_#E31B23]">
                {project.number}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-pixel font-bold text-black tracking-wide">
                  {project.title}
                </h3>
                <p className="text-xs text-[#E31B23] font-pixel font-bold">
                  {project.subtitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 bg-white hover:bg-[#E31B23] text-black hover:text-white border-2 border-black shadow-[2px_2px_0px_#111] transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scroll Area */}
          <div className="p-6 overflow-y-auto space-y-6 text-black font-sans text-sm bg-white">
            {/* Interactive Module Preview */}
            <div>
              <div className="text-xs font-pixel text-neutral-600 mb-2 flex items-center gap-1.5 font-bold">
                <Layers className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>INTERACTIVE ARCHITECTURE PREVIEW</span>
              </div>

              {project.interactiveType === 'civicpulse' && <CivicPulseMap />}
              {project.interactiveType === 'krishimithra' && <KrishiScanner />}
              {project.interactiveType === 'malware' && <MalwareTerminal />}
              {project.interactiveType === 'loop' && <LoopVisual />}
            </div>

            {/* Overview */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-pixel text-[#E31B23] font-bold uppercase tracking-wider">
                01 // PROJECT OVERVIEW
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-800 font-normal font-sans">
                {project.fullOverview || project.description}
              </p>
            </div>

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.problem && (
                  <div className="p-4 bg-[#F7F7F5] border-2 border-black shadow-[3px_3px_0px_#111] space-y-1.5">
                    <span className="text-xs font-pixel text-[#E31B23] font-bold uppercase">
                      THE PROBLEM
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                      {project.problem}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="p-4 bg-[#F7F7F5] border-2 border-black shadow-[3px_3px_0px_#111] space-y-1.5">
                    <span className="text-xs font-pixel text-black font-bold uppercase">
                      THE SOLUTION
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Architecture */}
            {project.architecture && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-pixel text-[#E31B23] font-bold uppercase tracking-wider">
                  02 // SYSTEM ARCHITECTURE
                </h4>
                <div className="p-4 bg-[#F7F7F5] border-2 border-black text-xs sm:text-sm text-black leading-relaxed font-mono shadow-[3px_3px_0px_#111]">
                  {project.architecture}
                </div>
              </div>
            )}

            {/* Key Highlights */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-pixel text-[#E31B23] font-bold uppercase tracking-wider">
                03 // KEY HIGHLIGHTS & CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 bg-[#F7F7F5] border border-black text-xs font-pixel text-black"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E31B23] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-pixel text-[#E31B23] font-bold uppercase tracking-wider">
                04 // TECHNOLOGIES & TOOLS
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-white border-2 border-black text-xs font-pixel font-bold text-black shadow-[2px_2px_0px_#111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 bg-[#F7F7F5] border-t-2 border-black flex flex-wrap items-center justify-between gap-3">
            <div className="text-[11px] font-pixel text-[#555555]">
              ID // {project.id.toUpperCase()} // VERIFIED
            </div>

            <div className="flex items-center gap-3 font-pixel">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black hover:bg-[#E31B23] text-white font-pixel text-xs font-bold border-2 border-black flex items-center gap-2 shadow-[3px_3px_0px_#111] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB REPO</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#E31B23] hover:bg-[#B51219] text-white font-pixel text-xs font-bold border-2 border-black flex items-center gap-2 shadow-[3px_3px_0px_#111] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LIVE DEMO</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="px-3 py-2 bg-white hover:bg-neutral-200 text-black font-pixel text-xs font-bold border border-black shadow-[2px_2px_0px_#111]"
              >
                CLOSE [ESC]
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
