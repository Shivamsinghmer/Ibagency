'use client';

import React from 'react';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import { services } from './servicesData';
import ServiceCard from './ServiceCard';

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const landingServices = [
    { ...services.find(s => s.title.includes('Full-Stack')), bg: 'bg-[#f4fcff] border border-border text-fg', featured: true },
    { ...services.find(s => s.title.includes('AI')), bg: 'bg-[#e8f0ff] border border-border/50 text-fg' },
    { ...services.find(s => s.title.includes('Enterprise')), bg: 'bg-white border border-border text-fg' },
    { ...services.find(s => s.title === 'Mobile App Development'), bg: 'bg-[#f4fcff] border border-border text-fg' },
    { ...services.find(s => s.title.includes('Cloud')), bg: 'bg-[#e6f8f5] border border-border/50 text-fg' },
    { ...services.find(s => s.title.includes('Data')), bg: 'bg-white border border-border text-fg' },
    { ...services.find(s => s.title.includes('Web3')), bg: 'bg-[#f4fcff] border border-border text-fg', full: true },
  ].filter(s => s.title);

  return (
    <section id="services" className="py-20 md:py-32 bg-bg px-6 scroll-mt-20" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 mb-5 animate-fade-up">
            <span className="w-8 h-px bg-chart-2 inline-block"></span>
            <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
              OUR SERVICES
            </span>
          </span>
          <h2 className="text-[clamp(32px,4vw,56px)] font-bricolage font-bold leading-[1.05] tracking-[-0.03em] mt-4 mb-6 animate-fade-up [animation-delay:75ms]">
            End-to-End{' '}
            <span className="text-chart-2 italic font-medium">Solutions</span>
          </h2>
          <p className="text-muted text-[15px] max-w-md leading-[1.8] animate-fade-up [animation-delay:150ms]">
            A complete suite of digital services — from idea to launch and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 animate-fade-up [animation-delay:200ms]">
          {landingServices.map((service, idx) => (
            <ServiceCard key={idx} service={service as any} index={idx} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-up [animation-delay:300ms]">
           <button className="bg-fg text-bg rounded-full px-8 py-3.5 text-[14px] font-medium hover:bg-fg/90 active:scale-[0.98] transition-all shadow-lg shadow-fg/10">
            Start a Project
          </button>
          <Link 
            href="/services" 
            className="text-muted hover:text-fg text-[14px] transition-colors group flex items-center gap-1"
          >
            See All Services <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
