'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Features() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  const features = [
    {
      title: 'World-Class Design',
      desc: 'We craft immersive digital experiences that prioritize visual excellence and seamless user journeys.',
      bg: 'bg-card-teal',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-teal">
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
          <path d="M7 2v20M17 2v20M2 12h20M2 7h20M2 17h20" />
        </svg>
      ),
    },
    {
      title: 'Modern Engineering',
      desc: 'Our stack is built for performance and scalability, ensuring your product stays ahead of the curve.',
      bg: 'bg-card-dark',
      text: 'text-white',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: 'Growth & Data',
      desc: 'We use insights and analytics to guide design decisions and business growth strategies.',
      bg: 'bg-white',
      border: 'border border-border',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple">
          <path d="M3 3v18h18" />
          <path d="M18 9l-5 5-2-2-4 4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-bg px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-widest text-muted uppercase">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold mt-4">
            Everything you need. <span className="italic text-accent-purple">Nothing you don't.</span>
          </h2>
          <p className="text-muted mt-6 max-w-xl mx-auto text-lg">
            We bridge the gap between complex technology and human-centric design, creating 
            products that are as functional as they are beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`${feature.bg} ${feature.text || 'text-fg'} ${feature.border || ''} rounded-2xl p-10 hover:shadow-subtle hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="mb-6 p-4 rounded-xl bg-white/10 w-fit backdrop-blur-sm">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bricolage font-bold mb-4">{feature.title}</h3>
              <p className={`text-sm opacity-80 leading-relaxed`}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
