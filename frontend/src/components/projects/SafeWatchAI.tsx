'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Shield, AlertTriangle, Eye, Radio } from 'lucide-react';

type PersonState = 'normal' | 'approaching' | 'threat';

interface Detection {
  id: number;
  x: number;
  y: number;
  label: string;
  state: PersonState;
}

const FEED_LABELS = ['CAM-01 MAIN GATE', 'CAM-03 CORRIDOR', 'CAM-07 PLATFORM'];

export default function SafeWatchAI() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const [alertActive, setAlertActive] = useState(false);
  const [status, setStatus] = useState<'CLEAR' | 'MONITORING' | 'THREAT DETECTED'>('MONITORING');
  const [camLabel] = useState(() => FEED_LABELS[Math.floor(Math.random() * FEED_LABELS.length)]);
  const [detections, setDetections] = useState<Detection[]>([
    { id: 1, x: 38, y: 52, label: 'P-001', state: 'normal' },
    { id: 2, x: 62, y: 48, label: 'P-002', state: 'normal' },
  ]);

  // Animate persons and simulate threat detection
  useEffect(() => {
    let tick = 0;
    const interval = setInterval(() => {
      tick++;
      setDetections(prev => {
        const next = prev.map(d => {
          // P-002 slowly approaches P-001
          if (d.id === 2) {
            const approaching = tick > 8 && tick < 24;
            const threat = tick >= 24 && tick < 34;
            const nx = approaching ? d.x - 0.55 : threat ? Math.max(d.x, 41) : d.x;
            const newState: PersonState = threat ? 'threat' : approaching ? 'approaching' : 'normal';
            return {
              ...d,
              x: nx,
              state: newState,
            };
          }
          return d;
        }) as Detection[];
        const hasThreat = next.some(d => d.state === 'threat');
        setAlertActive(hasThreat);
        setStatus(hasThreat ? 'THREAT DETECTED' : tick > 8 ? 'MONITORING' : 'CLEAR');
        return next;
      });

      if (tick >= 40) tick = 0; // reset cycle
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // Canvas skeleton drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    frameRef.current++;
    const W = canvas.width;
    const H = canvas.height;

    ctx.clearRect(0, 0, W, H);

    // Scanline bg
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);
    for (let y = 0; y < H; y += 4) {
      ctx.fillStyle = 'rgba(0,255,80,0.025)';
      ctx.fillRect(0, y, W, 1);
    }

    // Draw each detection
    detections.forEach(d => {
      const px = (d.x / 100) * W;
      const py = (d.y / 100) * H;
      const color = d.state === 'threat' ? '#ff2222' : d.state === 'approaching' ? '#ffaa00' : '#00ff66';
      const blink = d.state === 'threat' && frameRef.current % 4 < 2;

      // Skeleton body
      ctx.strokeStyle = blink ? '#ff6666' : color;
      ctx.lineWidth = 1.5;

      // Head
      ctx.beginPath();
      ctx.arc(px, py - 18, 7, 0, Math.PI * 2);
      ctx.stroke();

      // Torso
      ctx.beginPath();
      ctx.moveTo(px, py - 11); ctx.lineTo(px, py + 10);
      ctx.stroke();

      // Arms
      ctx.beginPath();
      ctx.moveTo(px, py - 5); ctx.lineTo(px - 10, py + 4);
      ctx.moveTo(px, py - 5); ctx.lineTo(px + 10, py + 4);
      ctx.stroke();

      // Legs
      ctx.beginPath();
      ctx.moveTo(px, py + 10); ctx.lineTo(px - 8, py + 22);
      ctx.moveTo(px, py + 10); ctx.lineTo(px + 8, py + 22);
      ctx.stroke();

      // Bounding box
      ctx.strokeStyle = blink ? '#ff0000' : color;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 2]);
      ctx.strokeRect(px - 18, py - 28, 36, 58);
      ctx.setLineDash([]);

      // Label
      ctx.fillStyle = blink ? '#ff0000' : color;
      ctx.font = '7px monospace';
      ctx.fillText(d.label, px - 12, py - 32);
      if (d.state !== 'normal') {
        ctx.fillText(d.state === 'threat' ? '⚠ ALERT' : 'APPROACHING', px - 18, py - 40);
      }

      // Proximity line between persons
      if (detections.length === 2 && d.id === 1) {
        const other = detections[1];
        const ox = (other.x / 100) * W;
        const oy = (other.y / 100) * H;
        ctx.strokeStyle = other.state === 'threat' ? 'rgba(255,0,0,0.6)' : 'rgba(255,170,0,0.3)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(ox, oy);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    });
  }, [detections]);

  return (
    <div
      className="w-full rounded-none border border-black bg-black overflow-hidden"
      onClick={e => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#0d0d0d] border-b border-green-900">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-none ${alertActive ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
          <span className="text-[9px] font-mono text-green-400 font-bold">{camLabel}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Radio className="w-3 h-3 text-green-500 animate-pulse" />
          <span className={`text-[8px] font-mono font-bold ${alertActive ? 'text-red-400' : 'text-green-400'}`}>
            {status}
          </span>
        </div>
      </div>

      {/* CCTV Canvas Feed */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={320}
          height={140}
          className="w-full h-[100px] object-cover"
        />
        {alertActive && (
          <div className="absolute inset-0 border-2 border-red-500 animate-pulse pointer-events-none" />
        )}
        <div className="absolute top-1 right-1 text-[8px] font-mono text-green-600 opacity-70">
          REC ● LIVE
        </div>
      </div>

      {/* Status Footer */}
      <div className="px-3 py-1.5 bg-[#0d0d0d] flex items-center justify-between border-t border-green-900">
        <div className="flex items-center gap-2">
          {alertActive ? (
            <AlertTriangle className="w-3 h-3 text-red-500 animate-pulse" />
          ) : (
            <Eye className="w-3 h-3 text-green-500" />
          )}
          <span className={`text-[8px] font-mono font-bold ${alertActive ? 'text-red-400' : 'text-green-500'}`}>
            {alertActive ? 'SOS DISPATCHED → AUTHORITIES' : `${detections.length} PERSONS TRACKED`}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-green-600" />
          <span className="text-[8px] font-mono text-green-700">SafeWatch AI v1.0</span>
        </div>
      </div>
    </div>
  );
}
