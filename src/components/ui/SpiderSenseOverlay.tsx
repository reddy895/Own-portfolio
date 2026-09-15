'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpiderSenseOverlayProps {
  active: boolean;
  onClose: () => void;
}

export default function SpiderSenseOverlay({
  active,
  onClose,
}: SpiderSenseOverlayProps) {
  useEffect(() => {
    if (!active) return;

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
        osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.35);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.42);
      }
    } catch (err) {
      // safe fallback
    }

    const timer = setTimeout(() => {
      onClose();
    }, 3200);

    return () => clearTimeout(timer);
  }, [active, onClose]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs cursor-pointer select-none p-4"
        >
          {/* Animated Spider-Sense radar waves */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.div
              initial={{ scale: 0.4, opacity: 0.8 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
              className="w-72 h-72 rounded-full border-2 border-[#E31B23]/70"
            />
            <motion.div
              initial={{ scale: 0.2, opacity: 0.8 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.3, ease: 'easeOut' }}
              className="w-72 h-72 rounded-full border border-black/40"
            />
          </div>

          {/* Central Dialogue Box (Light-Themed) */}
          <motion.div
            initial={{ scale: 0.85, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="relative z-10 max-w-md w-full bg-white border-2 border-black p-6 text-center shadow-[6px_6px_0px_#111]"
          >
            {/* Corner pixel decors */}
            <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#E31B23]" />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E31B23]" />
            <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#E31B23]" />
            <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#E31B23]" />

            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#E31B23] rounded-none animate-ping" />
              <span className="text-xs font-pixel tracking-widest text-[#E31B23] font-bold uppercase">
                CRITICAL PERCEPTION DETECTED
              </span>
              <span className="w-2.5 h-2.5 bg-[#E31B23] rounded-none animate-ping" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black mb-2 font-pixel">
              ⚡ SPIDER SENSE ACTIVATED ⚡
            </h3>

            <div className="h-0.5 w-32 bg-[#E31B23] mx-auto my-3" />

            <p className="text-base sm:text-lg font-medium text-neutral-800 italic mb-4 font-sans">
              “Great power. Greater debugging.”
            </p>

            <p className="text-xs text-neutral-500 font-pixel">
              [ TAP ANYWHERE TO RESUME ]
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
