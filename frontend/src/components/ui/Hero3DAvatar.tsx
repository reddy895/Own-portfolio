'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Zap, Crosshair, Eye } from 'lucide-react';

interface Hero3DAvatarProps {
  onSpiderSense: () => void;
}

export default function Hero3DAvatar({ onSpiderSense }: Hero3DAvatarProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [telemetry, setTelemetry] = useState({ rotX: 0, rotY: 0, pctX: 50, pctY: 50 });

  // Raw normalized mouse coordinates (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for organic motion
  const springConfig = { damping: 20, stiffness: 220, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 3D Rotations (-18deg to +18deg)
  const rotateX = useTransform(springY, [-1, 1], [18, -18]);
  const rotateY = useTransform(springX, [-1, 1], [-18, 18]);

  // Dynamic light glare coordinates
  const glareX = useTransform(springX, [-1, 1], [10, 90]);
  const glareY = useTransform(springY, [-1, 1], [10, 90]);

  // Reticle shift
  const reticleX = useTransform(springX, [-1, 1], [-15, 15]);
  const reticleY = useTransform(springY, [-1, 1], [-15, 15]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Normalized from -1 to 1
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    mouseX.set(x);
    mouseY.set(y);

    const rotYVal = Math.round(x * 18 * 10) / 10;
    const rotXVal = Math.round(-y * 18 * 10) / 10;
    const pctXVal = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const pctYVal = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    setTelemetry({
      rotX: rotXVal,
      rotY: rotYVal,
      pctX: pctXVal,
      pctY: pctYVal,
    });
  }, [mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    setTelemetry({ rotX: 0, rotY: 0, pctX: 50, pctY: 50 });
  }, [mouseX, mouseY]);

  return (
    <div
      className="w-full max-w-lg mx-auto"
      style={{ perspective: 1200 }}
    >
      {/* 3D Tilting Card Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onSpiderSense}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.025 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative bg-white border-2 border-black p-4 sm:p-5 shadow-[8px_8px_0px_#111] hover:shadow-[10px_10px_0px_#E31B23] transition-shadow duration-300 cursor-pointer select-none group"
        data-cursor="cta"
        title="Hover to adapt 3D perspective • Click to trigger Spider-Sense"
      >
        {/* Corner Pixel Braces */}
        <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#E31B23] z-30" />
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E31B23] z-30" />
        <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#E31B23] z-30" />
        <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#E31B23] z-30" />

        {/* HUD Top Bar */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="flex items-center justify-between border-b-2 border-black pb-3 mb-4"
        >
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 ${isHovered ? 'bg-[#00F0FF]' : 'bg-[#E31B23]'} rounded-none transition-colors duration-200 animate-pulse`} />
            <span className="text-xs font-pixel font-bold text-black tracking-wider uppercase">
              REXIE.3D // VOXEL_MK_IV
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`text-[10px] font-pixel px-2 py-0.5 border font-bold transition-all ${
              isHovered
                ? 'bg-cyan-50 border-[#00B4D8] text-[#0077B6]'
                : 'bg-red-50 border-[#E31B23] text-[#E31B23]'
            }`}>
              {isHovered ? 'ARROW_TRACKING: ACTIVE' : '3D_ADAPT: HOVER ME'}
            </span>
          </div>
        </div>

        {/* 3D Image Frame Showcase */}
        <div
          style={{ transform: 'translateZ(20px)' }}
          className="relative w-full aspect-square border-2 border-black overflow-hidden bg-black shadow-[4px_4px_0px_#111]"
        >
          {/* Main 3D Voxel Image */}
          <motion.img
            src="/hero-3d-rexie.jpg"
            alt="3D Voxel Cyber Character - Rexie"
            style={{ transform: 'translateZ(10px)' }}
            className="w-full h-full object-cover object-center transition-transform duration-300"
          />

          {/* Cyber Scanline Grid Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px]"
            style={{ transform: 'translateZ(25px)' }}
          />

          {/* Dynamic Interactive Glare / Sheen that follows the Arrow Pointer */}
          <motion.div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.75 : 0.2,
              background: useTransform(
                [glareX, glareY],
                ([x, y]) =>
                  `radial-gradient(circle 320px at ${x}% ${y}%, rgba(0, 240, 255, 0.35) 0%, rgba(227, 27, 35, 0.25) 35%, transparent 70%)`
              ),
              transform: 'translateZ(35px)',
            }}
          />

          {/* Interactive Floating Reticle Crosshair that adapts to arrow movement */}
          <motion.div
            style={{
              x: reticleX,
              y: reticleY,
              transform: 'translateZ(50px)',
            }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300 ${
              isHovered ? 'opacity-80' : 'opacity-0'
            }`}
          >
            <div className="relative w-24 h-24 border border-cyan-400/40 rounded-full flex items-center justify-center">
              <Crosshair className="w-8 h-8 text-[#00F0FF]/80 animate-spin" style={{ animationDuration: '10s' }} />
              <div className="absolute top-0 w-2 h-0.5 bg-cyan-400" />
              <div className="absolute bottom-0 w-2 h-0.5 bg-cyan-400" />
              <div className="absolute left-0 w-0.5 h-2 bg-cyan-400" />
              <div className="absolute right-0 w-0.5 h-2 bg-cyan-400" />
            </div>
          </motion.div>

          {/* Top-Right Floating Badge with Parallax Lift */}
          <motion.div
            style={{ transform: 'translateZ(55px)' }}
            className="absolute top-3 right-3 px-2.5 py-1 bg-[#E31B23] text-white text-[9px] font-pixel font-bold shadow-[2px_2px_0px_#111] border border-black flex items-center gap-1.5"
          >
            <Shield className="w-3 h-3" />
            <span>VOXEL 3D HERO</span>
          </motion.div>

          {/* Top-Left Mode Indicator */}
          <motion.div
            style={{ transform: 'translateZ(55px)' }}
            className="absolute top-3 left-3 px-2 py-1 bg-black/90 text-cyan-400 text-[9px] font-pixel font-bold border border-cyan-500/40 shadow-[2px_2px_0px_#111] flex items-center gap-1"
          >
            <Eye className="w-3 h-3 text-cyan-400" />
            <span>3D PERSPECTIVE</span>
          </motion.div>

          {/* Bottom-Right Interactive Easter Egg Trigger */}
          <motion.div
            style={{ transform: 'translateZ(55px)' }}
            className="absolute bottom-3 right-3 px-2.5 py-1.5 bg-black/90 text-white text-[9px] font-pixel font-bold border border-white/40 shadow-[2px_2px_0px_#111] group-hover:bg-[#E31B23] group-hover:border-black transition-colors flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 text-[#E31B23] group-hover:text-white transition-colors" />
            <span>[ SPIDER-SENSE FX ]</span>
          </motion.div>

          {/* Bottom-Left Real-time Tilt Angles Readout */}
          <motion.div
            style={{ transform: 'translateZ(50px)' }}
            className="absolute bottom-3 left-3 bg-white/95 border-2 border-black px-2 py-1 shadow-[2px_2px_0px_#111]"
          >
            <div className="text-[9px] font-pixel font-bold text-black uppercase">
              TILT_X: <span className="text-[#E31B23]">{telemetry.rotX > 0 ? `+${telemetry.rotX}` : telemetry.rotX}°</span> | TILT_Y: <span className="text-[#0077B6]">{telemetry.rotY > 0 ? `+${telemetry.rotY}` : telemetry.rotY}°</span>
            </div>
          </motion.div>
        </div>

        {/* Live HUD Telemetry Footer Bar */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="mt-3 pt-2.5 border-t border-neutral-200 flex flex-wrap items-center justify-between text-[10px] font-pixel gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-black">ARROW_TRACKING //</span>
            <span className={`font-bold ${isHovered ? 'text-[#0077B6]' : 'text-[#555555]'}`}>
              {isHovered ? `X: ${telemetry.pctX}% | Y: ${telemetry.pctY}%` : 'MOVE CURSOR TO ROTATE'}
            </span>
          </div>
          <span className="text-[#E31B23] font-bold">
            [ CLICK FOR SPIDER-SENSE ]
          </span>
        </div>
      </motion.div>
    </div>
  );
}
