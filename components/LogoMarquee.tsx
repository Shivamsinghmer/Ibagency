'use client';

import React from 'react';

const logos = [
  { 
    name: 'Hacken', 
    src: '/marquee/Hacken.png', 
    invert: false, 
    industry: 'Cybersecurity', 
    service: 'Full-Stack Engineering • Smart Contract Audits • Enterprise Security' 
  },
  { 
    name: 'TokWealth', 
    src: '/marquee/tokWealth.png', 
    invert: true, 
    industry: 'Real Estate Tokenization (RWA)', 
    service: 'Asset Tokenization • Compliant Payment Stacks • Information Security' 
  },
  { 
    name: 'Magnetiq', 
    src: '/marquee/Magnetiq.svg', 
    invert: false, 
    industry: 'Web3 Engagement & Loyalty Reward', 
    service: 'Scalable Web3 Apps • Blockchain Architecture • Product Development' 
  },
  { 
    name: 'Strategy Connect', 
    src: '/marquee/StrategyConnect.svg', 
    invert: false, 
    industry: 'SaaS Platform Development', 
    service: 'SaaS Workflow Optimization • System Overhauling • Product Strategy' 
  },
  { 
    name: 'SmartBike', 
    src: '/marquee/Smartbike.png', 
    invert: true, 
    industry: 'IoT & Smart Mobility Solutions', 
    service: 'Hardware-Software Integration • IoT Consulting • Ecosystem Development' 
  },
];

export default function LogoMarquee() {
  return (
    <section className="py-8 md:py-12 bg-bg overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <p className="text-[12px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
          Trusted by innovative companies
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-fit items-center animate-marquee hover:[animation-play-state:paused] [animation-duration:80s] gap-12 md:gap-40 px-10">
          {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center flex-shrink-0 min-w-[200px] md:min-w-[350px] transition-all duration-300 group/logo"
            >
              <div className={`${logo.name === 'TokWealth' ? 'h-16 md:h-20' : 'h-8 md:h-12'} flex items-center justify-center mb-4`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className={`h-full w-auto object-contain transition-all duration-300 ${logo.name === 'TokWealth' ? 'opacity-100 scale-100' : 'opacity-80 scale-95 group-hover/logo:opacity-100 group-hover/logo:scale-100'}`}
                  style={{
                    filter: logo.invert ? 'brightness(0)' : undefined,
                  }}
                  loading={idx < 10 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="text-center opacity-70 group-hover/logo:opacity-100 transition-all duration-300 transform scale-95 group-hover/logo:scale-100 max-w-[280px] md:max-w-[400px]">
                <p className={`${logo.name === 'TokWealth' ? 'text-[13px] md:text-[15px]' : 'text-[11px] md:text-[13px]'} font-bold text-fg leading-tight mb-1.5`}>{logo.industry}</p>
                <p className={`${logo.name === 'TokWealth' ? 'text-[11px] md:text-[12px]' : 'text-[10px] md:text-[11px]'} text-muted-foreground font-medium uppercase tracking-wider leading-relaxed`}>{logo.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
