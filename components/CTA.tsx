'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function CTA() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  return (
    <section className="py-40 bg-fg px-6 relative overflow-hidden" ref={ref}>
      {/* Subtle depth glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink/10 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      
      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
        <h2 className="text-5xl md:text-8xl font-bricolage font-bold mb-10 tracking-tighter text-bg">
          Ready to <span className="italic font-medium text-pink/80">build?</span>
        </h2>
        <p className="text-base md:text-lg text-subtle max-w-md mx-auto mb-16 opacity-80 leading-relaxed font-dm">
          We're currently accepting projects for Q3 2024. Let's create something people actually want to use.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-bg text-fg rounded-full px-12 py-4 font-semibold hover:bg-white active:scale-95 transition-all text-sm tracking-tight shadow-xl">
            Start a project →
          </button>
        </div>
      </div>
    </section>
  );
}
