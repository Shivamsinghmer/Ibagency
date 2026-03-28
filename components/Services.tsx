'use client';

import React from 'react';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import { services } from './servicesData';
import ServiceCard from './ServiceCard';
import { MonitorPlay, Bot, BrainCircuit, Smartphone, Cloud, Database, Cpu, Globe, Lock, Code2, Users2, LineChart, Infinity, Rocket, Coins, BarChart3 } from 'lucide-react';

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const allServices = [
    { ...services.find(s => s.title === 'Full-Stack Development'), icon: MonitorPlay, bg: 'bg-[#f4fcff] border border-border text-fg' },
    { ...services.find(s => s.title === 'AI Agents & Automation'), icon: Bot, bg: 'bg-[#e8f0ff] border border-border/50 text-fg' },
    { ...services.find(s => s.title === 'AI & Machine Learning'), icon: BrainCircuit, bg: 'bg-[#fff4fc] border border-border/50 text-fg' },
    { ...services.find(s => s.title === 'Mobile App Development'), icon: Smartphone, bg: 'bg-[#f4fcff] border border-border text-fg' },
    { ...services.find(s => s.title === 'Cloud Architecture'), icon: Cloud, bg: 'bg-[#e6f8f5] border border-border/50 text-fg' },
    { ...services.find(s => s.title === 'Web3 & dApp Development'), icon: Cpu, bg: 'bg-[#f4fcff] border border-border text-fg', featured: true },
    { ...services.find(s => s.title === 'Enterprise Solutions'), icon: Lock, bg: 'bg-white border border-border text-fg' },
    { ...services.find(s => s.title === 'RWA & Tokenization'), icon: Coins, bg: 'bg-[#e8f0ff] border border-border/50 text-fg' },
    { ...services.find(s => s.title === 'Trading Algos & Platforms'), icon: BarChart3, bg: 'bg-[#fff4fc] border border-border/50 text-fg' },
    { ...services.find(s => s.title === 'Data Engineering'), icon: Database, bg: 'bg-[#f4fcff] border border-border text-fg' },
    { ...services.find(s => s.title === 'API Development'), icon: Code2, bg: 'bg-[#e8f0ff] border border-border/50 text-fg' },
    { ...services.find(s => s.title === 'Staff Augmentation'), icon: Users2, bg: 'bg-white border border-border text-fg' },
    { ...services.find(s => s.title === 'Analytics & BI'), icon: LineChart, bg: 'bg-[#fff4fc] border border-border/50 text-fg' },
    { ...services.find(s => s.title === 'DevOps & CI/CD'), icon: Infinity, bg: 'bg-[#e6f8f5] border border-border/50 text-fg' },
    { ...services.find(s => s.title === 'MVP Development'), icon: Rocket, bg: 'bg-[#f4fcff] border border-border text-fg' },
  ].filter(s => s.title);

  return (
    <section id="services" className="py-10 md:py-16 bg-bg px-6 scroll-mt-20" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 mb-4 animate-fade-up">
            <span className="w-8 h-px bg-chart-2 inline-block"></span>
            <span className="text-[11px] md:text-[12px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
              OUR SERVICES
            </span>
          </span>
          <h2 className="text-[28px] md:text-[clamp(28px,3.5vw,48px)] font-bricolage font-bold leading-[1.1] tracking-[-0.03em] mt-2 mb-4 animate-fade-up [animation-delay:75ms]">
            Comprehensive{' '}
            <span className="text-chart-2 italic font-medium">Digital Solutions</span>
          </h2>
          <p className="text-muted text-[14px] md:text-[15px] max-w-lg leading-relaxed animate-fade-up [animation-delay:150ms]">
            From initial concept to final deployment, we provide a full spectrum of services to scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-10 animate-fade-up [animation-delay:200ms]">
          {allServices.map((service, idx) => (
            <ServiceCard key={idx} service={service as any} index={idx} />
          ))}
        </div>

        <div className="flex justify-center animate-fade-up [animation-delay:300ms]">
          <Link href="/contact" className="bg-fg text-white rounded-full px-10 py-3.5 text-[14px] font-medium hover:bg-fg/90 active:scale-[0.98] transition-all shadow-lg shadow-fg/10 text-center">
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
