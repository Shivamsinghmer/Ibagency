'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-bg scroll-mt-20 overflow-hidden pt-25 md:pt-30 pb-20 md:pb-25">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow flex flex-col items-center justify-center max-w-5xl mx-auto px-6 text-center relative z-20"
      >
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5 animate-fade-up [animation-delay:300ms]">
          <button className="bg-fg text-white rounded-full px-8 py-3.5 text-[14px] font-medium hover:bg-fg/90 active:scale-[0.98] transition-all shadow-lg shadow-fg/10 group">
            Start a Project <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          <button className="border border-border bg-white/60 backdrop-blur rounded-full px-8 py-3.5 text-[14px] font-medium text-muted hover:border-fg hover:text-fg active:scale-[0.98] transition-all">
            View Our Work
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center pb-5 gap-x-6 gap-y-2 text-[13px] text-muted animate-fade-up [animation-delay:400ms] font-medium">
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
      </motion.div>
    </section>
  );
}
