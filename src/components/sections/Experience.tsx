'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/data/portfolioData';
import { Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white border-b-2 border-black relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading aligned to the same grid */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-7 bg-[#E31B23]" />
          <div>
            <div className="text-[11px] font-pixel tracking-wider text-[#E31B23] font-bold uppercase">
              03 // TIMELINE
            </div>
            <h2 className="text-3xl sm:text-4xl font-pixel font-bold tracking-tight text-black uppercase">
              EXPERIENCE.LOG
            </h2>
          </div>
          <div className="flex-1 h-0.5 bg-black ml-4" />
        </div>

        {/* Vertical Pixel Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:absolute before:left-2.5 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-black">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {/* Pixel Timeline Node */}
              <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 flex items-center justify-center">
                <div className="w-5 h-5 bg-white border-2 border-black rotate-45 flex items-center justify-center shadow-[2px_2px_0px_#E31B23]">
                  <div className="w-1.5 h-1.5 bg-[#E31B23]" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="bg-white border-2 border-black p-6 shadow-[5px_5px_0px_#111] hover:shadow-[5px_5px_0px_#E31B23] transition-all">
                {/* Header: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-pixel text-[#E31B23] tracking-wider uppercase font-bold">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold font-pixel text-black">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-pixel text-neutral-800 font-bold mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 bg-[#F7F7F5] border border-black text-xs font-pixel text-black font-bold shadow-[2px_2px_0px_#111]">
                    <Calendar className="w-3.5 h-3.5 text-[#E31B23]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* 3 Concise Bullets */}
                <ul className="space-y-2">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                      <span className="text-[#E31B23] font-pixel font-bold shrink-0 mt-0.5">&gt;</span>
                      <span className="leading-relaxed font-sans">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Card footer */}
                <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-[10px] font-pixel text-neutral-500">
                  <span>EXP_ID // {exp.id.toUpperCase()}</span>
                  <span className="text-black font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E31B23]" />
                    VERIFIED ENGAGEMENT
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
