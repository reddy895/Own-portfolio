'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO, QUICK_STATS } from '@/data/portfolioData';
import { MapPin, Code2, Sparkles, Terminal as TerminalIcon } from 'lucide-react';

interface CommandHistory {
  cmd: string;
  output: string;
}

export default function About() {
  const [terminalInput, setTerminalInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    { cmd: 'WHOAMI', output: 'PRAVEEN L KUMBALUR' },
    { cmd: 'ROLE', output: 'AI/ML ENGINEER' },
    { cmd: 'FOCUS', output: 'AI + FULL STACK' },
    { cmd: 'CURRENT_MISSION', output: 'BUILDING USEFUL INTELLIGENCE' },
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = terminalInput.trim().toUpperCase();
    if (!cleanCmd) return;

    let output = '';

    switch (cleanCmd) {
      case 'HELP':
        output = 'COMMANDS: WHOAMI, ROLE, FOCUS, CURRENT_MISSION, ABOUT, SKILLS, PROJECTS, CONTACT, CLEAR';
        break;
      case 'WHOAMI':
        output = 'PRAVEEN L KUMBALUR';
        break;
      case 'ROLE':
        output = 'AI/ML ENGINEER & FULL-STACK DEVELOPER';
        break;
      case 'FOCUS':
        output = 'AI + FULL STACK';
        break;
      case 'CURRENT_MISSION':
        output = 'BUILDING USEFUL INTELLIGENCE';
        break;
      case 'ABOUT':
        output = PERSONAL_INFO.aboutText;
        break;
      case 'SKILLS':
        output = 'Python, TypeScript, RAG, PyTorch, OpenCV, Next.js, React, Node.js, PostgreSQL, MongoDB';
        break;
      case 'PROJECTS':
        output = '01. LOOP | 02. CivicPulse | 03. KrishiMithra | 04. Malware Detection';
        break;
      case 'CONTACT':
        output = `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Loc: ${PERSONAL_INFO.location}`;
        break;
      case 'CLEAR':
        setHistory([]);
        setTerminalInput('');
        return;
      default:
        output = `DIRECTIVE NOT FOUND: "${cleanCmd}". TYPE "HELP" FOR OPTIONS.`;
    }

    setHistory((prev) => [...prev, { cmd: cleanCmd, output }]);
    setTerminalInput('');
  };

  return (
    <section id="about" className="py-24 bg-white border-b-2 border-black relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading with strict vertical alignment */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-7 bg-[#E31B23]" />
          <div>
            <div className="text-[11px] font-pixel tracking-wider text-[#E31B23] font-bold uppercase">
              01 // IDENTIFICATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-pixel font-bold tracking-tight text-black uppercase">
              ABOUT_ME.EXE
            </h2>
          </div>
          <div className="flex-1 h-0.5 bg-black ml-4" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Pixel Avatar Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-black p-6 shadow-[5px_5px_0px_#111]">
              <div className="flex items-center justify-between pb-3 border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#E31B23] rounded-none animate-pulse" />
                  <span className="text-xs font-pixel font-bold text-black">
                    SUBJECT // PRAVEEN_L_K
                  </span>
                </div>
                <span className="text-[10px] font-pixel px-2 py-0.5 bg-[#F7F7F5] text-black border border-black font-bold">
                  DEV::ONLINE
                </span>
              </div>

              {/* Profile Photo Frame */}
              <div className="my-6 flex flex-col items-center justify-center p-5 bg-[#F7F7F5] border-2 border-black relative">
                <div className="relative w-48 h-56 sm:w-52 sm:h-60 border-2 border-black bg-black shadow-[4px_4px_0px_#111] hover:shadow-[5px_5px_0px_#E31B23] overflow-hidden transition-all group">
                  <img
                    src="/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Pixel HUD badge */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#E31B23] text-white text-[9px] font-pixel font-bold shadow-[2px_2px_0px_#111]">
                    DEV::ACTIVE
                  </div>
                  {/* Tech crosshairs */}
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-pixel text-[#E31B23] font-bold">[ + ]</span>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-sm font-pixel font-bold text-black tracking-wider uppercase">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-xs text-[#E31B23] font-pixel flex items-center justify-center gap-1 mt-0.5 font-bold">
                    <MapPin className="w-3 h-3" />
                    <span>Bengaluru, India</span>
                  </div>
                </div>
              </div>

              {/* Profile Details List */}
              <div className="space-y-2 text-xs font-pixel">
                <div className="flex justify-between py-1 border-b border-neutral-200">
                  <span className="text-[#555555]">DISCIPLINE:</span>
                  <span className="text-black font-bold">AI Engineering</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-200">
                  <span className="text-[#555555]">STATUS:</span>
                  <span className="text-[#E31B23] font-bold">
                    OPEN TO OPPORTUNITIES
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#555555]">CORE STACK:</span>
                  <span className="text-black font-bold">AI/ML + Full Stack</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio + Light Pixel Terminal */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bio Card */}
            <div className="bg-white border-2 border-black p-6 shadow-[5px_5px_0px_#111] space-y-4">
              <div className="flex items-center gap-2 text-xs font-pixel text-[#E31B23] font-bold uppercase">
                <Code2 className="w-4 h-4" />
                <span>MISSION BRIEFING</span>
              </div>

              <p className="text-base text-neutral-800 leading-relaxed font-sans font-normal">
                {PERSONAL_INFO.aboutText}
              </p>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {QUICK_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-2.5 bg-[#F7F7F5] border border-black shadow-[2px_2px_0px_#111] flex flex-col"
                  >
                    <span className="text-[10px] font-pixel text-[#555555]">
                      {stat.label}
                    </span>
                    <span className="text-xs font-pixel font-bold text-black tracking-wide mt-0.5">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Light-Themed Pixel Terminal */}
            <div className="bg-white border-2 border-black shadow-[5px_5px_0px_#111] overflow-hidden">
              {/* Terminal Window Header */}
              <div className="px-4 py-2 bg-[#F7F7F5] border-b-2 border-black flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#E31B23] border border-black" />
                  <span className="w-2.5 h-2.5 bg-black border border-black" />
                  <span className="w-2.5 h-2.5 bg-neutral-300 border border-black" />
                  <span className="text-xs font-pixel font-bold text-black ml-2">
                    TERMINAL::PRAVEEN.EXE
                  </span>
                </div>
                <div className="text-[10px] font-pixel text-neutral-500 hidden sm:block">
                  TYPE "HELP"
                </div>
              </div>

              {/* Terminal Screen (Light Theme) */}
              <div className="p-4 font-pixel text-xs max-h-56 overflow-y-auto space-y-2 text-black bg-white">
                {history.map((h, index) => (
                  <div key={index} className="space-y-0.5">
                    <div className="flex items-center gap-2 font-bold text-black">
                      <span className="text-[#E31B23]">&gt;</span>
                      <span>{h.cmd}</span>
                    </div>
                    <div className="text-[#333333] pl-3 border-l-2 border-[#E31B23]">
                      {h.output}
                    </div>
                  </div>
                ))}

                {/* Interactive Input Form */}
                <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-2 border-t border-neutral-200">
                  <span className="text-[#E31B23] font-bold">&gt;</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="WHOAMI, ROLE, FOCUS, CURRENT_MISSION..."
                    className="flex-1 bg-transparent border-none text-black text-xs font-pixel focus:outline-none placeholder:text-neutral-400"
                  />
                  <button
                    type="submit"
                    className="text-[10px] px-2 py-0.5 bg-black hover:bg-[#E31B23] text-white font-pixel font-bold border border-black shadow-[2px_2px_0px_#111] transition-colors"
                  >
                    RUN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
