'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-black transition-all duration-200 shadow-[0_4px_0px_rgba(0,0,0,0.06)]">
      {/* Centered container with strict alignment: max-w-6xl px-6 sm:px-10 lg:px-16 */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 bg-black text-white border border-black flex items-center justify-center font-pixel font-bold text-xs shadow-[2px_2px_0px_#E31B23] group-hover:bg-[#E31B23] transition-colors">
              PK
            </div>
            <div className="flex items-center font-pixel font-bold text-sm tracking-wider text-black group-hover:text-[#E31B23] transition-colors">
              <span>PRAVEEN</span>
              <span className="text-[#E31B23]">.EXE</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 font-pixel text-xs tracking-wider">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 border transition-all ${
                    isActive
                      ? 'bg-black text-white border-black shadow-[2px_2px_0px_#E31B23]'
                      : 'border-transparent text-neutral-800 hover:text-[#E31B23] hover:border-black'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Icons & Resume */}
          <div className="hidden sm:flex items-center gap-2 font-pixel">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black hover:text-[#E31B23] border border-black hover:border-[#E31B23] bg-white shadow-[2px_2px_0px_#111] hover:shadow-[2px_2px_0px_#E31B23] transition-all"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black hover:text-[#E31B23] border border-black hover:border-[#E31B23] bg-white shadow-[2px_2px_0px_#111] hover:shadow-[2px_2px_0px_#E31B23] transition-all"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              data-cursor="cta"
              className="ml-1 px-3 py-1.5 bg-[#E31B23] hover:bg-[#B51219] text-white font-pixel text-xs font-bold border-2 border-black flex items-center gap-1.5 shadow-[3px_3px_0px_#111] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 bg-[#E31B23] text-white font-pixel text-[11px] font-bold border border-black shadow-[2px_2px_0px_#111]"
            >
              RESUME
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black border-2 border-black bg-white shadow-[2px_2px_0px_#111]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E31B23]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden pb-4 pt-2 bg-white border-t-2 border-black"
            >
              <div className="flex flex-col space-y-1.5 font-pixel text-xs">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2 text-black hover:text-white hover:bg-black border border-transparent hover:border-black transition-colors"
                  >
                    &gt; {link.name}
                  </a>
                ))}

                <div className="pt-3 border-t border-neutral-200 flex items-center justify-around">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-black hover:text-[#E31B23]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-black hover:text-[#E31B23]"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
