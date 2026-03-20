'use client';

import React from 'react';

const heroProjects = [
  { name: 'Hacken Dashboard', category: 'Web3 · Security', bg: 'bg-white border border-border text-fg', accent: 'bg-chart-2' },
  { name: 'Tokwealth App', category: 'Fintech · Crypto', bg: 'bg-white border border-border text-fg', accent: 'bg-chart-2' },
  { name: 'Magnetiq Bank', category: 'Fintech · UX', bg: 'bg-white border border-border text-fg', accent: 'bg-chart-2' },
  { name: 'SmartBike Mobility', category: 'IoT · Platform', bg: 'bg-white border border-border text-fg', accent: 'bg-chart-2' },
  { name: 'Strategy Connect', category: 'SaaS · Analytics', bg: 'bg-white border border-border text-fg', accent: 'bg-chart-2' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-28 md:pt-32 overflow-hidden bg-bg scroll-mt-20">
      {/* Decorative blurs removed for cleaner aesthetic */}

      <div className="flex-grow flex flex-col items-center justify-center max-w-5xl mx-auto px-6 text-center relative z-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 border border-border bg-white/60 backdrop-blur rounded-full px-5 py-2 text-[11px] font-mono text-muted-foreground tracking-[0.15em] uppercase mb-8 shadow-minimal">
            <span className="w-1.5 h-1.5 rounded-full bg-chart-2 animate-pulse"></span>
            Digital Design & Development Agency
          </span>
        </div>

        <h1 className="flex flex-col items-center text-[42px] leading-[1.0] md:text-[clamp(56px,8vw,100px)] md:leading-[0.92] font-bricolage font-extrabold mb-8 animate-fade-up [animation-delay:100ms] text-fg tracking-[-0.04em]">
          <span className="md:whitespace-nowrap">We Build</span>
          <span className="md:whitespace-nowrap">
            <span className="text-chart-2 italic">Digital Products,</span>
          </span>
          <span className="md:whitespace-nowrap">People Actually Use.</span>
        </h1>

        <p className="text-[15px] md:text-[17px] text-muted max-w-xl mx-auto mb-10 animate-fade-up [animation-delay:200ms] leading-[1.8]">
          From ambitious startups building their first MVP to established companies scaling their product — we bring strategy, design, and engineering together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up [animation-delay:300ms]">
          <button className="bg-fg text-bg rounded-full px-8 py-3.5 text-[14px] font-medium hover:bg-fg/90 active:scale-[0.98] transition-all shadow-lg shadow-fg/10 group">
            Start a Project <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          <button className="border border-border bg-white/60 backdrop-blur rounded-full px-8 py-3.5 text-[14px] font-medium text-muted hover:border-fg hover:text-fg active:scale-[0.98] transition-all">
            View Our Work
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-muted animate-fade-up [animation-delay:400ms] font-medium">
          <div className="flex items-center gap-1.5">
            <span className="text-fg font-semibold">20+</span>
            <span>Projects Shipped</span>
          </div>
          <span className="text-border text-lg leading-none select-none hidden sm:block">·</span>
          <div className="flex items-center gap-1.5">
            <span className="text-fg font-semibold">5★</span>
            <span>Client Rating</span>
          </div>
          <span className="text-border text-lg leading-none select-none hidden sm:block">·</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-chart-2" />
            <span>Since 2020</span>
          </div>
        </div>
      </div>

      {/* Project Cards Marquee */}
      <div className="mt-auto py-16 md:py-20 relative overflow-hidden z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
        
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] [animation-duration:35s] gap-4 px-4">
          {[...heroProjects, ...heroProjects, ...heroProjects].map((project, idx) => (
            <div
              key={idx}
              className={`
                min-w-[220px] md:min-w-[260px] h-[140px] md:h-[160px] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 card-hover relative overflow-hidden
                ${project.bg}
              `}
            >
              <div className="relative z-10">
                <span className="font-bricolage font-semibold text-[15px] tracking-tight">
                  {project.name}
                </span>
                <span className="font-mono text-[10px] text-current/60 mt-1 uppercase tracking-wider block">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${project.accent}`} />
                <span className="text-[10px] font-mono text-current/40 uppercase tracking-wider">Live Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
