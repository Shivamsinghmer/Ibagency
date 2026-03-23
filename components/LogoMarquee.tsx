'use client';

import React from 'react';

const logos = [
  { name: 'Hacken', src: '/marquee/hackenai-hai-logo.png', invert: false, industry: 'Cybersecurity', service: 'Full-Stack Dev' },
  { name: 'Tokwealth', src: '/marquee/logo-new.png', invert: true, industry: 'Fintech', service: 'MVP Development' },
  { name: 'magnetiq', src: '/marquee/199k4o-Logo.svg', invert: false, industry: 'Banking', service: 'Product Design' },
  { name: 'Strategy Connect', src: '/marquee/logo.svg', invert: false, industry: 'Consulting', service: 'Web Development' },
  { name: 'SmartBike', src: '/marquee/Group-1707479361.png', invert: true, industry: 'Mobility', service: 'App Development' },
];

export default function LogoMarquee() {
  return (
    <section className="py-12 md:py-20 bg-bg overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <p className="text-[12px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
          Trusted by innovative companies
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-fit items-center animate-marquee hover:[animation-play-state:paused] [animation-duration:50s] gap-16 md:gap-32 px-10">
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center flex-shrink-0 min-w-[140px] md:min-w-[180px] transition-all duration-300 group/logo"
            >
              <div className="h-8 md:h-12 flex items-center justify-center mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-full w-auto object-contain transition-all duration-300 opacity-80 group-hover/logo:opacity-100 scale-95 group-hover/logo:scale-100"
                  style={{
                    filter: logo.invert ? 'brightness(0)' : undefined,
                  }}
                  loading={idx < 10 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="text-center opacity-70 group-hover/logo:opacity-100 transition-all duration-300 transform scale-95 group-hover/logo:scale-100">
                <p className="text-[10px] md:text-[11px] font-bold text-fg leading-tight mb-0.5">{logo.industry}</p>
                <p className="text-[9px] md:text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{logo.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
