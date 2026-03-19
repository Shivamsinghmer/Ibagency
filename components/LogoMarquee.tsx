'use client';

import React from 'react';

const logos = [
  'Vercel', 'Linear', 'Github', 'Raycast', 'Notion', 'Slack', 'Framermer', 'Astro'
];

export default function LogoMarquee() {
  return (
    <section className="py-12 md:py-16 bg-bg overflow-hidden border-y border-border/50">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center text-xs text-muted uppercase tracking-widest font-mono">
        Trusted by innovative teams
      </div>
      
      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
        
        <div className="flex w-fit items-center animate-marquee hover:[animation-play-state:paused] [animation-duration:40s] gap-12 px-12 text-border/60">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center font-bricolage text-2xl font-bold whitespace-nowrap px-8"
            >
              <svg className="mr-3 text-border w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
