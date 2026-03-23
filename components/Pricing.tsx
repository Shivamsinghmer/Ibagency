'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Pricing() {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  return (
    <section id="pricing" className="py-24 bg-bg px-6 scroll-mt-20 overflow-hidden relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out relative z-10 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-chart-2 inline-block"></span>
            <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
              PRICING
            </span>
          </span>
          <h2 className="text-[clamp(36px,5vw,72px)] font-bricolage font-bold leading-[1] tracking-[-0.03em] mt-4 mb-8">
            Tailored solutions.<br />
            <span className="text-chart-2 italic font-medium">Transparent value.</span>
          </h2>

          <div className="bg-white/50 backdrop-blur-sm border border-border rounded-[24px] md:rounded-3xl p-6 md:p-12 text-center max-w-2xl mx-auto shadow-sm">
            <p className="text-[15px] md:text-[19px] text-muted-foreground leading-relaxed mb-8 md:mb-10 font-medium">
              We specialize in custom, high-impact projects that don&apos;t fit into fixed boxes.
              Our pricing is as unique as your needs—focused on delivering maximum return on your investment.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-fg text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bricolage font-bold text-[16px] md:text-[18px] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] group w-full sm:w-auto"
            >
              Contact to Get Brief Pricing
              <svg
                className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <p className="mt-6 md:mt-8 text-[12px] md:text-sm text-muted">
              Most projects start with a discovery phase to ensure perfect alignment.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}
