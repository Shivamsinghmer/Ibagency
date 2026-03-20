'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const features = [
    {
      id: '01',
      title: 'Academic & Professional Background',
      desc: 'Our team holds advanced degrees and has shipped products across fintech, Web3, SaaS, and mobility.',
      accent: 'bg-chart-2',
    },
    {
      id: '02',
      title: 'Experience Across Tech Stacks',
      desc: "From React and Node.js to Solidity and LangChain — we've worked across the full spectrum of modern tech.",
      accent: 'bg-chart-2',
    },
    {
      id: '03',
      title: 'Flexible Team Integration',
      desc: 'We slot into your existing workflows, whether you need a full team or a few specialist engineers.',
      accent: 'bg-chart-2',
    },
    {
      id: '04',
      title: 'User-Centric Design & Scalable Architecture',
      desc: 'Every interface and every system is built to grow — clean UX and solid foundations from day one.',
      accent: 'bg-chart-2',
    },
    {
      id: '05',
      title: 'Clear Communication & Full Visibility',
      desc: "Detailed documentation, regular updates, and no black-box delivery. You always know what's happening.",
      accent: 'bg-chart-2',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-bg px-6 overflow-hidden scroll-mt-20" ref={ref} id="about">
      <div className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] items-start gap-16 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Left Column - Sticky */}
        <div className="md:sticky md:top-32">
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-chart-2 inline-block"></span>
            <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
              OUR ADVANTAGE
            </span>
          </span>
          <h2 className="text-[clamp(32px,4vw,56px)] font-bricolage font-bold leading-[1.05] tracking-[-0.03em] mb-6">
            Why choose{' '}
            <span className="text-chart-2 italic font-medium">us?</span>
          </h2>
          <p className="text-muted text-[15px] leading-[1.8] mb-10 max-w-sm">
            We don't just write code — we bring academic rigour, real-world experience, and genuine care to every product we help build.
          </p>
          <a 
            href="#work" 
            className="group inline-flex items-center gap-2 bg-fg text-bg rounded-full px-6 py-2.5 text-[13px] font-medium hover:bg-fg/90 active:scale-[0.98] transition-all"
          >
            See our work <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        {/* Right Column - Numbered List */}
        <div className="flex flex-col">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group py-6 border-b border-border last:border-0 grid grid-cols-[32px_1fr] gap-4 items-start hover:bg-white/50 -mx-4 px-4 rounded-xl transition-colors"
            >
              <div className="flex flex-col items-center gap-2 pt-1">
                <div className={`w-2 h-2 rounded-full ${feature.accent}`} />
                <span className="font-mono text-[11px] text-muted">{feature.id}</span>
              </div>
              <div>
                <h3 className="font-bricolage font-semibold text-[17px] text-fg mb-1.5 group-hover:text-fg transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
