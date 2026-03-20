'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  const projects = [
    {
      id: '01',
      title: 'AI-Powered Support Platform',
      tags: 'SaaS · AI · Next.js',
      bg: 'bg-fg text-white',
      numColor: 'text-white/10',
    },
    {
      id: '02',
      title: 'Task Automation App',
      tags: 'Mobile · React Native · AI',
      bg: 'bg-purple/15 text-fg',
      numColor: 'text-purple/20',
    },
    {
      id: '03',
      title: 'Real Estate Dashboard',
      tags: 'Dashboard · Analytics · B2B',
      bg: 'bg-surface border border-border text-fg',
      numColor: 'text-subtle/10',
    },
  ];

  return (
    <section id="work" className="py-32 bg-bg px-6 scroll-mt-20" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16 text-left">
          <span className="section-label mb-4 block">Case Studies</span>
          <h2 className="h2-section mt-4 mb-6">Selected Works</h2>
          <p className="text-muted text-lg max-w-sm leading-[1.7]">
            A selection of impactful tech products we've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`${project.bg} rounded-2xl p-10 h-[320px] relative flex flex-col justify-between group cursor-pointer overflow-hidden transition-all duration-300 hover:translate-y-[-2px] shadow-minimal`}
            >
              {/* Massive background number */}
              <span className={`absolute -top-12 -right-8 text-[160px] font-bold font-bricolage select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 ${project.numColor}`}>
                {project.id}
              </span>

              <div className="relative z-10">
                <span className="text-[11px] font-mono tracking-widest uppercase opacity-60 mb-4 block">
                  {project.tags}
                </span>
                <h3 className="text-2xl font-bricolage font-bold leading-tight max-w-[200px]">
                  {project.title}
                </h3>
              </div>

              <div className="relative z-10 mt-auto">
                <button className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                  View Case Study <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
