'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function WebCursor() {
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 450, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const ctaEl = target.closest('[data-cursor="cta"]');
      const interactiveEl = target.closest('button, a, input, textarea, [role="button"], .interactive');

      if (projectEl) {
        setCursorVariant('text');
        setCursorText('VIEW →');
      } else if (ctaEl) {
        setCursorVariant('text');
        setCursorText('OPEN →');
      } else if (interactiveEl) {
        setCursorVariant('hover');
        setCursorText(null);
      } else {
        setCursorVariant('default');
        setCursorText(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
      >
        {/* Hover interactive: red pixel outline */}
        {cursorVariant === 'hover' && (
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="w-6 h-6 border-2 border-[#E31B23] bg-[#E31B23]/10"
          />
        )}

        {/* Hover project / CTA text */}
        {cursorVariant === 'text' && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="px-2 py-0.5 bg-[#E31B23] border border-black text-white text-[11px] font-pixel font-bold tracking-wider whitespace-nowrap shadow-[2px_2px_0px_#111]"
          >
            {cursorText}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
