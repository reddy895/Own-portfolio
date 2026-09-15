'use client';

import React, { useState } from 'react';
import { MessageSquare, ArrowRight, Bot } from 'lucide-react';

export default function LoopVisual() {
  const [activeFeedback, setActiveFeedback] = useState(0);

  const feedbackFeed = [
    { source: 'Enterprise API Ticket', text: 'Vector indexing latency spikes when clustering 50K documents.', tag: 'RAG Pipeline', priority: 'High' },
    { source: 'Mobile App Review', text: 'Checkout modal reloads abruptly on payment confirmation.', tag: 'UX / Payment', priority: 'Critical' },
    { source: 'Developer Discord', text: 'RBAC role assignment permissions not inheriting to child teams.', tag: 'RBAC Auth', priority: 'Medium' },
  ];

  const current = feedbackFeed[activeFeedback];

  return (
    <div className="bg-white border-2 border-black p-4 text-xs font-pixel select-none shadow-[3px_3px_0px_#111]">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b-2 border-black">
        <div className="flex items-center gap-1.5 text-black font-bold">
          <Bot className="w-3.5 h-3.5 text-[#E31B23]" />
          <span>AI FEEDBACK INTELLIGENCE PIPELINE</span>
        </div>
        <span className="text-[10px] px-1.5 py-0.5 bg-red-100 border border-[#E31B23] text-[#E31B23] font-bold">
          RAG + GEMINI
        </span>
      </div>

      {/* Visual Pipeline Interface (Light Theme) */}
      <div className="h-44 w-full bg-[#F7F7F5] border border-black p-3 flex flex-col justify-between">
        {/* Stream Node */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] text-[#555555]">
            <span className="flex items-center gap-1 font-bold text-black">
              <MessageSquare className="w-3 h-3 text-[#E31B23]" />
              {current.source}
            </span>
            <span className="text-[#E31B23] font-bold">Priority: {current.priority}</span>
          </div>

          <div className="p-2.5 bg-white border border-black text-black text-xs leading-relaxed font-sans shadow-[2px_2px_0px_#111]">
            “{current.text}”
          </div>
        </div>

        {/* Intelligence Extraction / RAG synthesis */}
        <div className="p-2 bg-white border-l-4 border-[#E31B23] border-t border-r border-b border-black flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 bg-black text-white font-bold text-[9px]">
              CLUSTERED
            </span>
            <span className="text-black font-bold">{current.tag}</span>
          </div>
          <span className="text-neutral-600 font-bold">Similarity: 0.94</span>
        </div>
      </div>

      {/* Pipeline Controller */}
      <div className="mt-3 p-2 bg-[#F7F7F5] border border-black flex items-center justify-between text-[11px]">
        <span className="text-[#555555]">Signal {activeFeedback + 1} of 3</span>
        <button
          onClick={() => setActiveFeedback((prev) => (prev + 1) % feedbackFeed.length)}
          className="text-[#E31B23] hover:text-[#B51219] font-bold flex items-center gap-1"
        >
          <span>CYCLE FEEDBACK</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
