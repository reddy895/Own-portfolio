'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InitializingOverlayProps {
  onComplete: () => void;
}

export default function InitializingOverlay({ onComplete }: InitializingOverlayProps) {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 250);
    const t2 = setTimeout(() => setStep(2), 500);
    const t3 = setTimeout(() => setStep(3), 750);
    const t4 = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 250);
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setVisible(false);
    onComplete();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black select-none pixel-grid-light p-4"
        >
          {/* Pixel Spider Crest Icon */}
          <div className="relative mb-6">
            <svg
              className="w-16 h-16 text-[#E31B23] animate-pulse"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L10 6H14L12 2Z" />
              <path d="M7 6L4 8L3 13H5L6 9L9 8L7 6Z" />
              <path d="M17 6L20 8L21 13H19L18 9L15 8L17 6Z" />
              <path d="M10 7H14V11H10V7Z" />
              <path d="M8 12H16V18H8V12Z" />
              <path d="M5 14L2 17L3 22H5L4 18L7 15H5V14Z" />
              <path d="M19 14L22 17L21 22H19L20 18L17 15H19V14Z" />
              <path d="M10 19H14L12 23L10 19Z" />
            </svg>
          </div>

          {/* Terminal Box (White Theme with Black Borders) */}
          <div className="w-full max-w-sm bg-white border-2 border-black p-5 shadow-[5px_5px_0px_#111] font-pixel text-xs">
            <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-3 text-[11px] text-neutral-600">
              <span className="flex items-center gap-1.5 font-bold text-black">
                <span className="w-2 h-2 bg-[#E31B23] rounded-none animate-ping" />
                SYSTEM_BOOT
              </span>
              <span>PRAVEEN.EXE</span>
            </div>

            <div className="space-y-2 text-black">
              <div className="text-[#E31B23] font-bold flex items-center gap-2">
                <span>&gt;</span> INITIALIZING PRAVEEN.EXE
              </div>

              {step >= 1 && (
                <div className="flex items-center justify-between text-neutral-800">
                  <span>&gt; AI SYSTEMS</span>
                  <span className="text-[#E31B23] font-bold">[ ONLINE ]</span>
                </div>
              )}

              {step >= 2 && (
                <div className="flex items-center justify-between text-neutral-800">
                  <span>&gt; FULL-STACK SYSTEMS</span>
                  <span className="text-[#E31B23] font-bold">[ ONLINE ]</span>
                </div>
              )}

              {step >= 3 && (
                <div className="flex items-center justify-between text-neutral-800">
                  <span>&gt; SPIDER SENSE</span>
                  <span className="text-[#E31B23] font-bold">[ ONLINE ]</span>
                </div>
              )}
            </div>

            {/* Red Progress bar */}
            <div className="mt-4 h-2.5 w-full bg-neutral-100 border border-black overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.25 }}
                className="h-full bg-[#E31B23]"
              />
            </div>

            <div className="mt-2 text-right text-[10px] text-neutral-500 font-bold">
              [{step === 3 ? '██████████' : '█████░░░░░'}] {Math.round((step / 3) * 100)}%
            </div>
          </div>

          {/* Quick Skip Option */}
          <button
            onClick={handleSkip}
            className="mt-6 text-xs font-pixel text-neutral-600 hover:text-[#E31B23] uppercase tracking-wider underline underline-offset-4"
          >
            [ SKIP BOOT → ]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
