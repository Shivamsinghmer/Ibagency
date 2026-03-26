'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function CTA() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 bg-bg" ref={ref}>
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#e8f0ff] via-[#e6f8f5] to-[#f4fcff] rounded-[28px] md:rounded-[40px] relative overflow-hidden py-12 md:py-32 px-6 md:px-16 border border-border/50">
        {/* Decorative elements removed for minimal aesthetic */}
        <div className={`relative z-10 text-center transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
          <h2 className="text-[36px] md:text-[clamp(36px,7vw,80px)] w-full font-bricolage font-bold mb-6 md:mb-8 tracking-[-0.04em] text-fg leading-[1.0]">
            Ready to{' '}
            <span className="text-chart-2 italic font-medium pr-2 md:pr-5">build?</span>
          </h2>
          <p className="text-[15px] md:text-[17px] text-muted max-w-md mx-auto mb-12 leading-[1.8]">
            Tell us about your project. We&apos;ll respond within 24 hours to schedule a deep-dive conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-fg text-white rounded-full px-8 py-3.5 text-[14px] font-semibold hover:bg-fg/90 active:scale-[0.98] transition-all shadow-lg shadow-fg/10 group">
              Start a Project 
            </button>
            <button className="w-full sm:w-auto bg-white/80 backdrop-blur border border-border/50 text-fg rounded-full px-8 py-3.5 text-[14px] font-medium hover:bg-white transition-all active:scale-[0.98]">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
