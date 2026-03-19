'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function CTA() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  return (
    <section className="py-20 md:py-32 bg-bg px-6 relative overflow-hidden" ref={ref}>
      {/* Background Blobs (Similar to Hero) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-pink/10 rounded-full blur-[120px] -z-10 animate-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-teal/10 rounded-full blur-[100px] -z-10" />

      <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-6xl font-bricolage font-bold mb-6 tracking-tight">Ready to scale?</h2>
        <p className="text-lg md:text-xl text-muted max-w-lg mx-auto mb-12">
          Let’s turn your idea into a product people love. We are currently accepting 
          a limited number of new projects for the coming quarter.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-fg text-white rounded-full px-10 py-5 font-bold shadow-xl hover:bg-fg/90 active:scale-95 transition-all text-lg tracking-tight">
            Get Started Today
          </button>
          <button className="w-full sm:w-auto border border-border bg-white rounded-full px-10 py-5 font-bold shadow-subtle hover:bg-border/50 active:scale-95 transition-all text-lg tracking-tight text-fg">
            See Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
