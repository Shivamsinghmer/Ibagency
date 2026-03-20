'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Features() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  const features = [
    {
      id: '01',
      title: 'Academic & Professional Background',
      desc: 'Expertise cultivated by a highly educated and experienced team of professionals.',
    },
    {
      id: '02',
      title: 'Experimental, Proven Tech Stack',
      desc: 'Deep knowledge in the latest frontend, backend, AI, and Web 3.0 technologies.',
    },
    {
      id: '03',
      title: 'Flexible Team Integration',
      desc: 'Seamlessly adapt into agile teams for projects ranging from early-stage startups to mature companies.',
    },
    {
      id: '04',
      title: 'Clear Communication',
      desc: 'Ensuring detailed documentation, complete visibility, and transparent processes from day one.',
    },
  ];

  return (
    <section className="py-32 bg-bg px-6 overflow-hidden scroll-mt-20" ref={ref} id="about">
      <div className={`max-w-5xl mx-auto flex flex-col md:flex-row gap-16 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Left Column */}
        <div className="md:w-[40%] text-left">
          <span className="section-label mb-4 block">What Sets Us Apart</span>
          <h2 className="h2-section mb-6">Built different, by design.</h2>
          <p className="text-muted text-base leading-[1.7] mb-12 max-w-sm">
            We merge deep technical expertise with efficient team collaboration to bring your product vision to reality. No clutter, just high-intention engineering.
          </p>
          <a href="#work" className="text-sm font-semibold hover:text-pink transition-colors group flex items-center gap-2">
            Learn how we work <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Right Column */}
        <div className="md:w-[60%] flex flex-col">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="py-8 border-b border-border group hover:bg-surface-2 transition-all duration-300 px-4 -mx-4 rounded-xl first:pt-0"
            >
              <div className="flex gap-8 items-start">
                <span className="font-mono text-xs text-subtle pt-1.5">{feature.id}</span>
                <div>
                  <h3 className="text-lg font-bricolage font-semibold mb-2 group-hover:text-fg transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-md">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
