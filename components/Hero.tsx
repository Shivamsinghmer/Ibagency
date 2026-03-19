'use client';

import React from 'react';

const projects = [
  { id: 1, bg: 'bg-card-teal', title: 'Project 1' },
  { id: 2, bg: 'bg-card-dark', title: 'Project 2', whiteText: true },
  { id: 3, bg: 'bg-card-pink', title: 'Project 3' },
  { id: 4, bg: 'bg-card-purple', title: 'Project 4' },
  { id: 5, bg: 'bg-white', border: true, title: 'Project 5' },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-bg">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-pink/15 rounded-full blur-[120px] -z-10 animate-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-teal/15 rounded-full blur-[100px] -z-10" />

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-up [animation-delay:0ms]">
          <span className="inline-block bg-border rounded-full px-4 py-1 text-sm font-mono text-muted mb-6">
            ✦ Digital Studio — Est. 2020
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bricolage font-extrabold leading-[1.1] mb-8 animate-fade-up [animation-delay:100ms]">
          We Build Web & Mobile Apps <br className="hidden md:block" />
          That Users Actually <span className="italic text-accent-pink">Want to Use</span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:200ms]">
          Creating digital products with strategy, design, and engineering, tailored 
          for ambitious startups and modern enterprises who crave visual excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up [animation-delay:300ms]">
          <button className="w-full sm:w-auto bg-fg text-white rounded-full px-8 py-4 font-semibold hover:bg-fg/90 active:scale-95 transition-all">
            View Our Work →
          </button>
          <button className="w-full sm:w-auto border border-border bg-white rounded-full px-8 py-4 font-semibold hover:bg-border/50 active:scale-95 transition-all shadow-subtle text-fg">
            See Pricing
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-4 animate-fade-up [animation-delay:400ms]">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-bg bg-gradient-to-br from-accent-pink to-accent-blue"
              />
            ))}
          </div>
          <p className="text-sm text-muted font-medium">Trusted by 50+ startups worldwide</p>
        </div>
      </div>

      {/* Project Marquee */}
      <div className="mt-20 md:mt-32 relative overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
        
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-5 px-5">
          {[...projects, ...projects].map((project, idx) => (
            <div
              key={idx}
              className={`${project.bg} ${project.border ? 'border border-border' : ''} min-w-[280px] h-[180px] rounded-2xl p-6 flex items-center justify-center relative overflow-hidden`}
            >
              <svg className="w-full h-full opacity-20 absolute" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10 50 Q 50 10, 90 50" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M10 50 Q 50 90, 90 50" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <span className={`text-xl font-bold font-bricolage ${project.whiteText ? 'text-white' : 'text-fg'}`}>
                {project.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
