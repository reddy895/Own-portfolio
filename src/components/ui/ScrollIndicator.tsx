'use client';

import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'home', label: '01' },
  { id: 'about', label: '02' },
  { id: 'skills', label: '03' },
  { id: 'experience', label: '04' },
  { id: 'projects', label: '05' },
  { id: 'achievements', label: '06' },
  { id: 'contact', label: '07' },
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-1.5 font-pixel select-none">
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => handleClick(sec.id)}
            className={`w-7 h-7 text-[10px] font-bold border-2 transition-all flex items-center justify-center ${
              isActive
                ? 'bg-[#E31B23] text-white border-black shadow-[2px_2px_0px_#111]'
                : 'bg-white text-black border-black/40 hover:border-black hover:bg-neutral-100'
            }`}
            title={sec.id.toUpperCase()}
          >
            {sec.label}
          </button>
        );
      })}
    </div>
  );
}
