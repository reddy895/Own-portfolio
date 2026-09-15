'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Layers, Terminal, Cpu, Globe, Database, Languages, Sparkles } from 'lucide-react';

const CATEGORY_ICONS: Record<string, any> = {
  PROGRAMMING: Terminal,
  'AI / ML': Cpu,
  WEB: Globe,
  'DATABASE / TOOLS': Database,
  LANGUAGES: Languages,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    activeCategory === 'ALL'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#F7F7F5] border-b-2 border-black relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading aligned to the same grid */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-3 h-7 bg-[#E31B23]" />
          <div>
            <div className="text-[11px] font-pixel tracking-wider text-[#E31B23] font-bold uppercase">
              02 // ARSENAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-pixel font-bold tracking-tight text-black uppercase">
              TECH_STACK
            </h2>
          </div>
          <div className="flex-1 h-0.5 bg-black ml-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat === 'ALL' ? Layers : CATEGORY_ICONS[cat] || Sparkles;
            const isSelected = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 font-pixel text-xs font-bold flex items-center gap-2 border-2 border-black transition-all ${
                  isSelected
                    ? 'bg-black text-white shadow-[3px_3px_0px_#E31B23]'
                    : 'bg-white text-black hover:bg-[#F7F7F5] shadow-[3px_3px_0px_#111]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#E31B23]' : 'text-black'}`} />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          {displayedCategories.map((category) => {
            const CatIcon = CATEGORY_ICONS[category.title] || Layers;

            return (
              <div key={category.title} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-2 font-pixel text-xs font-bold text-black border-b border-neutral-300 pb-2">
                  <CatIcon className="w-4 h-4 text-[#E31B23]" />
                  <span className="tracking-wider">{category.title}</span>
                  <span className="text-neutral-500">({category.skills.length})</span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.15 }}
                      className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_#111] hover:shadow-[4px_4px_0px_#E31B23] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-pixel text-sm font-bold text-black tracking-wide">
                            {skill.name}
                          </h3>

                          {skill.level && (
                            <span className="text-[10px] font-pixel px-1.5 py-0.5 bg-red-100 border border-[#E31B23] text-[#E31B23] font-bold">
                              {skill.level}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#555555] leading-relaxed font-sans font-normal">
                          {skill.description}
                        </p>
                      </div>

                      {/* Pixel status indicator */}
                      <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[9px] font-pixel text-neutral-500">
                        <span>MODULE // READY</span>
                        <span className="w-1.5 h-1.5 bg-[#E31B23]" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
