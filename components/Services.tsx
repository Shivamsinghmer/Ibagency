'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  const services = [
    {
      title: 'Web & Mobile App Development',
      desc: 'Performant, scalable web and mobile applications built for speed and reliability from the ground up.',
      type: 'dark',
      tags: ['React', 'Next.js', 'React Native', 'Swift'],
      featured: true,
    },
    {
      title: 'AI Agents & Automation',
      desc: 'Intelligent systems and workflows that handle repetitive tasks and surface insights automatically.',
      type: 'purple',
      tags: ['OpenAI', 'LangChain', 'n8n', 'Python'],
    },
    {
      title: 'Product Design & UX',
      desc: 'Human-centric product strategies and intuitive UI/UX design that users actually love.',
      type: 'surface',
      tags: ['Figma', 'UX Research', 'Prototyping'],
    },
    {
      title: 'Backend & Infrastructure',
      desc: 'Robust system architecture, relational databases, and APIs built for enterprise scalability.',
      type: 'surface',
      tags: ['Node.js', 'Postgres', 'GraphQL', 'AWS'],
    },
    {
      title: 'Data & Analytics Pipeline',
      desc: 'End-to-end data engineering that turns user behavior into actionable insights.',
      type: 'surface',
      tags: ['GA4', 'Mixpanel', 'SQL', 'Looker'],
    },
    {
      title: 'Brand Identity',
      desc: 'Crafting unique visual languages that resonate with your target audience.',
      type: 'surface',
      tags: ['Strategy', 'Visual System', 'Guidelines'],
    },
  ];

  return (
    <section id="services" className="py-32 bg-bg px-6 scroll-mt-20" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16">
          <span className="section-label mb-4 block">Our Services</span>
          <h2 className="h2-section mt-4 mb-6">End-to-End Development</h2>
          <p className="text-muted text-lg max-w-sm leading-[1.7]">
            Strategy, design, and engineering for ambitious startups.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min mb-16">
          {/* Featured Card */}
          <div className="md:col-span-7 row-span-2">
            <ServiceCard service={services[0]} />
          </div>

          {/* AI Card */}
          <div className="md:col-span-5 h-full">
            <ServiceCard service={services[1]} />
          </div>

          {/* Design Card */}
          <div className="md:col-span-5 h-full">
            <ServiceCard service={services[2]} />
          </div>

          {/* Bottom Row */}
          <div className="md:col-span-4">
            <ServiceCard service={services[3]} />
          </div>
          <div className="md:col-span-4">
            <ServiceCard service={services[4]} />
          </div>
          <div className="md:col-span-4">
            <ServiceCard service={services[5]} />
          </div>

          {/* Full-width Web3 Card */}
          <div className="md:col-span-12">
             <div className="bg-fg text-bg rounded-2xl p-8 md:p-10 transition-all duration-300 hover:translate-y-[-2px] shadow-minimal group cursor-pointer overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bricolage font-bold mb-4">Web3 Development</h3>
                  <p className="text-sm text-subtle opacity-80 max-w-lg mb-8 leading-relaxed">Smart contracts and decentralized architectures for the modular internet.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Solidity', 'Ethers.js', 'IPFS', 'Wagmi'].map((tag) => (
                      <span key={tag} className="text-[11px] font-mono tracking-wide bg-bg/5 border border-bg/10 text-bg/80 rounded-full px-2.5 py-1 whitespace-nowrap uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
                {/* Subtle depth */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple/10 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />
             </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-8">
           <button className="bg-fg text-bg rounded-full px-8 py-3 text-sm font-medium hover:opacity-90 active:scale-95 transition-all shadow-minimal">
            Start a project
          </button>
          <button className="text-muted hover:text-fg text-sm transition-colors group">
            See our work <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  const isDark = service.type === 'dark';
  const isPurple = service.type === 'purple';
  
  return (
    <div className={`
      h-full rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-2px] group cursor-pointer
      ${isDark ? 'bg-fg text-bg border-0 shadow-minimal' : ''}
      ${isPurple ? 'bg-purple/10 border border-purple/20 text-fg shadow-minimal' : ''}
      ${service.type === 'surface' ? 'bg-surface border border-border hover:border-subtle shadow-minimal' : ''}
    `}>
      <h3 className="text-xl font-bricolage font-bold mb-4 tracking-tight">{service.title}</h3>
      <p className={`text-sm mb-10 leading-relaxed ${isDark ? 'text-subtle' : 'text-muted'}`}>
        {service.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {service.tags.map((tag: string) => (
          <span 
            key={tag} 
            className={`
              text-[11px] font-mono tracking-wide rounded-full px-2.5 py-1 uppercase
              ${isDark ? 'bg-bg/5 border border-bg/10 text-bg/80' : 'bg-surface-2 border border-border text-muted'}
            `}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
