'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';
import { projects } from './projectsData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  return (
    <section id="work" className="py-20 md:py-32 bg-bg px-6 scroll-mt-20" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16 text-left">
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-chart-2 inline-block"></span>
            <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
              OUR WORK
            </span>
          </span>
          <h2 className="text-[32px] md:text-[clamp(32px,4vw,56px)] font-bricolage font-bold leading-[1.05] tracking-[-0.03em] mt-4 mb-6">
            Case{' '}
            <span className="text-chart-2 italic font-medium">Studies</span>
          </h2>
          <p className="text-muted text-[15px] max-w-md leading-[1.8]">
            A selection of products we&apos;ve helped design, build, and ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
