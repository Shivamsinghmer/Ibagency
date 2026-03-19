'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  const services = [
    {
      title: 'AI Agents & Automation',
      desc: 'Intelligent systems and workflows that handle repetitive tasks and surface insights automatically.',
      bg: 'bg-card-teal',
      tags: ['Python', 'LangChain', 'OpenAI', 'n8n'],
      iconColor: 'text-accent-teal',
    },
    {
      title: 'Brand Identity',
      desc: 'Defining a visual language and personality that sets your brand apart and connects with your audience.',
      bg: 'bg-card-pink',
      tags: ['Figma', 'Illustration', 'Motion'],
      iconColor: 'text-accent-pink',
    },
    {
      title: 'Growth Analytics',
      desc: 'End-to-end data pipelines and visualization that turn user behavior into actionable insights.',
      bg: 'bg-card-purple',
      tags: ['GA4', 'Mixpanel', 'SQL', 'Looker'],
      iconColor: 'text-accent-purple',
    },
    {
      title: 'Product & Design',
      desc: 'Human-centric product strategies and intuitive UI/UX design that users actually love.',
      bg: 'bg-card-dark',
      text: 'text-white',
      tags: ['Figma', 'UX Research', 'Prototyping'],
      iconColor: 'text-white',
    },
    {
      title: 'Web Dev & Apps',
      desc: 'Performant, scalable web applications built for speed and reliability from the ground up.',
      bg: 'bg-white',
      border: 'border border-border',
      tags: ['Next.js', 'React', 'Node.js', 'Postgres'],
      iconColor: 'text-accent-blue',
    },
    {
      title: 'App Development',
      desc: 'Native and hybrid mobile experiences that deliver high-performance across iOS and Android.',
      bg: 'bg-white',
      border: 'border border-border',
      tags: ['React Native', 'Flutter', 'Swift'],
      iconColor: 'text-accent-teal',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-bg px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16">
          <span className="font-mono text-xs tracking-widest text-muted uppercase">SERVICES</span>
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold mt-4 leading-tight">
            Anything you need.<br />
            Done for you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`${service.bg} ${service.text || 'text-fg'} ${service.border || ''} rounded-2xl p-8 md:p-10 group cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
            >
              <div className="flex gap-4 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm ${service.iconColor}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bricolage font-bold mb-4">{service.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed max-w-sm mb-8">{service.desc}</p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {/* Web3 Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-card-dark to-[#222] text-white rounded-2xl p-8 md:p-10 transition-all duration-500 hover:shadow-2xl relative overflow-hidden group cursor-pointer">
            <div className="absolute top-0 right-0 p-8 text-accent-teal/20 md:text-accent-teal/10 group-hover:scale-125 transition-transform duration-700">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16.5l-9 4.5-9-4.5" />
                <path d="M3 12l9 4.5 9-4.5" />
                <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
               </svg>
            </div>
            
            <h3 className="text-3xl font-bricolage font-bold mb-4">Web3 Development</h3>
            <p className="text-sm opacity-80 max-w-lg mb-8">Smart contracts, decentralized storage, and crypto-native user interfaces for the future of the internet.</p>
            <div className="flex flex-wrap gap-2">
              {['Solidity', 'Ethers.js', 'IPFS', 'Wagmi'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono tracking-wider bg-white/10 rounded-full px-4 py-1.5 border border-white/5">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto bg-fg text-white rounded-full px-8 py-3.5 font-semibold hover:bg-fg/90 active:scale-95 transition-all">
            Start a Project →
          </button>
          <button className="w-full sm:w-auto font-semibold text-fg hover:text-muted transition-colors py-3.5 px-8">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
