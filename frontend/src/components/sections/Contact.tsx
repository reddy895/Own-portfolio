'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b-2 border-black relative z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-7 bg-[#E31B23]" />
          <div>
            <div className="text-[11px] font-pixel tracking-wider text-[#E31B23] font-bold uppercase">
              06 // TRANSMISSION
            </div>
            <h2 className="text-3xl sm:text-4xl font-pixel font-bold tracking-tight text-black uppercase">
              CONNECT.EXE
            </h2>
          </div>
          <div className="flex-1 h-0.5 bg-black ml-4" />
        </div>

        <p className="text-sm sm:text-base text-[#555555] font-sans mb-10 ml-6">
          Have an idea, project, or opportunity? Reach out directly.
        </p>

        {/* Centered Direct Coordinates Dossier */}
        <div className="max-w-3xl mx-auto bg-white border-2 border-black p-6 sm:p-10 shadow-[6px_6px_0px_#111] relative">
          {/* Corner pixel decors */}
          <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#E31B23]" />
          <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E31B23]" />
          <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#E31B23]" />
          <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#E31B23]" />

          {/* Dossier Header */}
          <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#E31B23] rounded-none animate-pulse" />
              <h3 className="text-sm sm:text-base font-pixel font-bold text-black tracking-wider uppercase">
                DIRECT COMMUNICATION CHANNELS
              </h3>
            </div>
            <span className="text-[10px] font-pixel px-2.5 py-0.5 bg-red-100 border border-[#E31B23] text-[#E31B23] font-bold">
              STATUS // AVAILABLE
            </span>
          </div>

          {/* Contact Coordinate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Email Card */}
            <div className="p-4 bg-[#F7F7F5] border-2 border-black shadow-[3px_3px_0px_#111] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-pixel text-[#555555] font-bold">
                <span>DIRECT EMAIL:</span>
                <span className="text-[#E31B23]">PRIMARY</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs sm:text-sm font-pixel text-black hover:text-[#E31B23] font-bold truncate flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#E31B23] shrink-0" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-1.5 bg-white border border-black hover:bg-neutral-200 text-black shadow-[1px_1px_0px_#111] shrink-0 transition-colors"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-[#E31B23]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-4 bg-[#F7F7F5] border-2 border-black shadow-[3px_3px_0px_#111] space-y-2">
              <div className="flex items-center justify-between text-[10px] font-pixel text-[#555555] font-bold">
                <span>MOBILE / WHATSAPP:</span>
                <span className="text-black font-bold">+91 IN</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-xs sm:text-sm font-pixel text-black hover:text-[#E31B23] font-bold truncate flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E31B23] shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-1.5 bg-white border border-black hover:bg-neutral-200 text-black shadow-[1px_1px_0px_#111] shrink-0 transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-[#E31B23]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 bg-[#F7F7F5] border-2 border-black shadow-[3px_3px_0px_#111] space-y-2 md:col-span-2">
              <div className="text-[10px] font-pixel text-[#555555] font-bold">
                PHYSICAL BASE:
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm font-pixel text-black font-bold">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E31B23] shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <span className="text-[10px] font-pixel text-[#555555]">
                  TIMEZONE // IST (UTC+5:30)
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles & Direct Mail Buttons */}
          <div className="pt-6 border-t-2 border-black flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              data-cursor="cta"
              className="w-full sm:flex-1 pixel-btn-primary text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>SEND AN EMAIL</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="w-full sm:flex-1 pixel-btn-secondary text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="w-full sm:flex-1 pixel-btn-secondary text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
