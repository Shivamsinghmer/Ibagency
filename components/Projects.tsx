'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  const projects = [
    {
      title: 'The Digital Landscape',
      tag: 'Branding',
      bg: 'bg-gradient-to-br from-card-teal to-white',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-40">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
          <path d="M10 50 L90 50 M50 10 L50 90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      ),
    },
    {
      title: 'Digital Campaign Report',
      tag: 'Analytics',
      bg: 'bg-card-dark',
      text: 'text-white',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-30 text-white">
          <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" />
          <path d="M30 40 H70 M30 50 H60 M30 60 H50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'SaaS User Dashboard',
      tag: 'Product Design',
      bg: 'bg-card-purple',
      iconColor: 'text-accent-purple',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-40 text-accent-purple">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="1" />
        </svg>
      ),
    },
    {
      title: 'Command UI',
      tag: 'Web App',
      bg: 'bg-card-pink',
      iconColor: 'text-accent-pink',
      icon: (
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-40 text-accent-pink">
          <path d="M10 20 H90 V80 H10 V20 Z M10 40 H90" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="30" r="2" fill="currentColor" />
          <circle cx="30" cy="30" r="2" fill="currentColor" />
          <circle cx="40" cy="30" r="2" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="work" className="py-20 md:py-32 bg-bg overflow-hidden px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16">
          <span className="font-mono text-xs tracking-widest text-muted uppercase">OUR WORK</span>
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold mt-4 leading-tight">
            Our Projects
          </h2>
          <p className="text-muted mt-4 max-w-lg">Selected works from the studio.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 -mx-6 px-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`${project.bg} ${project.text || 'text-fg'} min-w-[280px] sm:min-w-[340px] md:min-w-[420px] h-[480px] rounded-3xl snap-start relative flex flex-col p-10 group cursor-pointer transition-transform duration-500 hover:scale-[0.98] overflow-hidden`}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                {project.icon}
              </div>

              <div className="mt-auto relative z-10 transition-all duration-300">
                <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm shadow-sm border border-white/10 text-xs font-mono uppercase tracking-widest font-semibold">{project.tag}</span>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-3xl font-bricolage font-bold leading-tight max-w-[200px]">{project.title}</h3>
                  <button className="whitespace-nowrap flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Case Study <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
