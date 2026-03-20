'use client';

import React from 'react';

const logos = [
  'HACKEN', 'TOKWEALTH', 'MAGNETIQ', 'VENTURES', 'PROTOCOL', 'SYSTEMS', 'STUDIO'
];

export default function LogoMarquee() {
  return (
    <section className="py-16 bg-bg overflow-hidden border-y border-border/10">
      <div className="relative">
        {/* Glow / Fade edges handle by mask-fade-edges in globals */}
        <div className="flex w-fit items-center animate-marquee hover:[animation-play-state:paused] [animation-duration:30s] gap-20 px-20 grayscale opacity-40 hover:opacity-70 transition-opacity">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center font-mono text-[14px] font-bold tracking-[0.2em] whitespace-nowrap"
            >
              <div className="mr-3 w-1.5 h-1.5 rounded-full bg-fg" />
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
