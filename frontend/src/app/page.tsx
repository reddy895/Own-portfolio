'use client';

import React, { useState } from 'react';
import InitializingOverlay from '@/components/ui/InitializingOverlay';
import PixelBackground from '@/components/ui/PixelBackground';
import WebCursor from '@/components/ui/WebCursor';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import Navbar from '@/components/ui/Navbar';
import SpiderSenseOverlay from '@/components/ui/SpiderSenseOverlay';
import ResumeModal from '@/components/ui/ResumeModal';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import ResumeSection from '@/components/sections/ResumeSection';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const [bootCompleted, setBootCompleted] = useState(false);
  const [spiderSenseActive, setSpiderSenseActive] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-[#111111] selection:bg-[#E31B23] selection:text-white">
      {/* 1. Light Boot Screen */}
      {!bootCompleted && (
        <InitializingOverlay onComplete={() => setBootCompleted(true)} />
      )}

      {/* 2. Custom Pixel Cursor */}
      <WebCursor />

      {/* 3. Right Pixel Scroll Indicator */}
      <ScrollIndicator />

      {/* 4. Light Pixel & Web Background Canvas */}
      <PixelBackground />

      {/* 5. Spider Sense Easter Egg Overlay */}
      <SpiderSenseOverlay
        active={spiderSenseActive}
        onClose={() => setSpiderSenseActive(false)}
      />

      {/* 6. Printable / Viewable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* 7. Sticky Floating Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* 8. Main Narrative Flow with Strict Alignment */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Achievements />

        <ResumeSection onOpenResume={() => setResumeModalOpen(true)} />

        <Contact />
      </main>

      {/* 9. Clean White Footer */}
      <Footer />
    </div>
  );
}
