'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import ProjectModal from '@/components/projects/ProjectModal';
import CivicPulseMap from '@/components/projects/CivicPulseMap';
import KrishiScanner from '@/components/projects/KrishiScanner';
import MalwareTerminal from '@/components/projects/MalwareTerminal';
import LoopVisual from '@/components/projects/LoopVisual';
import SafeWatchAI from '@/components/projects/SafeWatchAI';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#F7F7F5] border-b-2 border-black relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading with strict vertical alignment */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-7 bg-[#E31B23]" />
          <div>
            <div className="text-[11px] font-pixel tracking-wider text-[#E31B23] font-bold uppercase">
              04 // MISSIONS &amp; BUILDS
            </div>
            <h2 className="text-3xl sm:text-4xl font-pixel font-bold tracking-tight text-black uppercase">
              PROJECTS.EXE
            </h2>
          </div>
          <div className="flex-1 h-0.5 bg-black ml-4" />
        </div>

        {/* Identical 2-Column Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              data-cursor="project"
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white border-2 border-black p-6 shadow-[5px_5px_0px_#111] hover:shadow-[6px_6px_0px_#E31B23] hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between"
            >
              {/* Card Top Information */}
              <div>
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-black text-white font-pixel font-bold text-xs shadow-[2px_2px_0px_#E31B23]">
                      {project.number}
                    </span>
                    <span className="text-xs font-pixel text-[#555555]">
                      // {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-pixel text-black font-bold group-hover:text-[#E31B23]">
                    <span>MISSION DOSSIER</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E31B23]" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold font-pixel text-black mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-pixel text-[#E31B23] font-bold mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-sans font-normal mb-5">
                  {project.description}
                </p>

                {/* Embedded Interactive Simulator Module */}
                <div className="mb-5 pointer-events-auto">
                  {project.interactiveType === 'civicpulse' && <CivicPulseMap />}
                  {project.interactiveType === 'krishimithra' && <KrishiScanner />}
                  {project.interactiveType === 'malware' && <MalwareTerminal />}
                  {project.interactiveType === 'loop' && <LoopVisual />}
                  {project.interactiveType === 'safewatchai' && <SafeWatchAI />}
                </div>

                {/* 3 Key Capabilities Badges */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[10px] font-pixel text-[#555555] uppercase tracking-wider font-bold">
                    CORE CAPABILITIES:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.slice(0, 3).map((hl) => (
                      <span
                        key={hl}
                        className="px-2 py-0.5 bg-[#F7F7F5] border border-black text-[11px] font-pixel text-black font-bold flex items-center gap-1 shadow-[1px_1px_0px_#111]"
                      >
                        <span className="w-1.5 h-1.5 bg-[#E31B23]" />
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech Badges & Open Action */}
              <div className="pt-4 border-t-2 border-black flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-1 max-w-[70%]">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-pixel text-black bg-[#F7F7F5] px-1.5 py-0.5 border border-neutral-300 font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] font-pixel text-neutral-500 px-1 py-0.5">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="px-3 py-1 bg-black hover:bg-[#E31B23] text-white font-pixel text-xs font-bold border border-black flex items-center gap-1 shadow-[2px_2px_0px_#111] transition-colors"
                >
                  <span>VIEW PROJECT →</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
