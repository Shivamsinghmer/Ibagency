'use client';

import React from 'react';

const logos = [
  { name: 'Hacken', src: '/marquee/hackenai-hai-logo.png', invert: false },
  { name: 'Tokwealth', src: '/marquee/logo-new.png', invert: true },
  { name: 'magnetiq', src: '/marquee/199k4o-Logo.svg', invert: false },
  { name: 'Strategy Connect', src: '/marquee/logo.svg', invert: false },
  { name: 'SmartBike', src: '/marquee/Group-1707479361.png', invert: true },
];

export default function LogoMarquee() {
  return (
    <section className="py-12 md:py-16 bg-bg overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-10 text-center">
        <p className="text-[12px] font-mono tracking-[0.2em] uppercase text-muted/60">
          Trusted by innovative companies
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-fit items-center animate-marquee hover:[animation-play-state:paused] [animation-duration:40s] gap-20 md:gap-28 px-10">
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center flex-shrink-0 min-w-[120px] md:min-w-[160px] hover:opacity-100 transition-opacity duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-7 md:h-10 w-auto object-contain"
                style={{
                  filter: logo.invert ? 'brightness(0)' : 'none',
                }}
                loading={idx < 10 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
