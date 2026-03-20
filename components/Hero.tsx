'use client';

import React from 'react';

const projects = [
  { name: 'Linear', category: 'Productivity', type: 'dark' },
  { name: 'Vercel', category: 'DevTools', type: 'surface' },
  { name: 'Buildra', category: 'Studio', type: 'purple' },
  { name: 'Raycast', category: 'Utilities', type: 'dark' },
  { name: 'Notion', category: 'SaaS', type: 'surface' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-32 overflow-hidden bg-bg scroll-mt-20">
      {/* Background Blob - Set to z-0 to be explicitly below content */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-pink/5 rounded-full blur-[120px] z-0" />

      {/* Hero Content - Higher z-index to stay above blob */}
      <div className="flex-grow flex flex-col justify-center max-w-5xl mx-auto px-6 text-center relative z-20">
        <div className="animate-fade-up">
          <span className="inline-block border border-border rounded-full px-3 py-1 text-[11px] font-mono text-muted tracking-[0.2em] uppercase mb-6">
            Digital Studio
          </span>
        </div>

        <h1 className="h1-hero mb-8 animate-fade-up [animation-delay:100ms] text-fg">
          We Build Digital <br />
          <span className="italic text-pink">Products People</span> <br />
          Actually Love.
        </h1>

        <p className="text-base md:text-lg text-muted max-w-sm mx-auto mb-10 animate-fade-up [animation-delay:200ms] leading-[1.7]">
          Strategy, design, and engineering for ambitious startups.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-up [animation-delay:300ms]">
          <button className="bg-fg text-bg rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-minimal">
            Start a project →
          </button>
          <button className="text-muted text-sm font-medium hover:text-fg transition-colors">
            View our work
          </button>
        </div>

        {/* Social Proof Stats */}
        <div className="flex items-center justify-center gap-4 text-[13px] text-muted animate-fade-up [animation-delay:400ms] font-medium">
          <span>50+ Projects</span>
          <span className="text-subtle">·</span>
          <span>4.9★ Rating</span>
          <span className="text-subtle">·</span>
          <span>3 yr Experience</span>
        </div>
      </div>

      {/* Hero Marquee - At the bottom with safe padding */}
      <div className="mt-auto py-20 relative overflow-hidden z-10">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-bg to-transparent z-10" />
        
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-4 px-4">
          {[...projects, ...projects].map((project, idx) => (
            <div
              key={idx}
              className={`
                min-w-[240px] h-[160px] rounded-2xl p-6 flex flex-col justify-between transition-transform duration-300 hover:translate-y-[-2px]
                ${project.type === 'dark' ? 'glass-dark text-white border-0' : ''}
                ${project.type === 'surface' ? 'bg-surface border border-border shadow-minimal' : ''}
                ${project.type === 'purple' ? 'bg-purple/10 border border-purple/20 text-purple-900' : ''}
              `}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-60">
                  {project.category}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20" />
              </div>
              <span className="text-lg font-bold font-bricolage tracking-tight">
                {project.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
