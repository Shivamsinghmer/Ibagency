'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'one-time'>('monthly');
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const plans = [
    {
      name: 'STARTER',
      tagline: 'For startups building their MVP',
      price: billing === 'monthly' ? '$2,499' : '$19,999',
      unit: billing === 'monthly' ? '/mo' : '/project',
      features: [
        'Up to 2 active projects',
        'Web or mobile app development',
        'UI/UX design included',
        'Weekly progress updates',
        'Basic cloud deployment',
        '30-day post-launch support',
      ],
      type: 'light',
    },
    {
      name: 'PROFESSIONAL',
      tagline: 'For scaling products and teams',
      price: billing === 'monthly' ? '$4,999' : '$39,999',
      unit: billing === 'monthly' ? '/mo' : '/project',
      features: [
        'Up to 4 active projects',
        'Web + mobile app development',
        'Full product design & research',
        'AI/automation integration',
        'Backend & API development',
        'Infrastructure & DevOps setup',
        'Daily async standups',
        '90-day post-launch support',
      ],
      featured: true,
      type: 'dark',
    },
    {
      name: 'ENTERPRISE',
      tagline: 'For mature teams that need flexibility',
      price: 'Custom',
      unit: '',
      features: [
        'Unlimited projects & scope',
        'Full-stack embedded team',
        'Web3 / dApp development',
        'Data engineering & analytics',
        'SLA-backed delivery',
        'Direct founder access',
        'Custom contracts & NDAs',
        'Ongoing retainer available',
      ],
      type: 'light',
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-bg px-6 scroll-mt-20" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-chart-2 inline-block"></span>
            <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
              PRICING
            </span>
          </span>
          <h2 className="text-[clamp(32px,4vw,56px)] font-bricolage font-bold leading-[1.05] tracking-[-0.02em] mt-4 mb-10">
            Simple, transparent <span className="text-chart-2 italic font-medium">pricing.</span>
          </h2>
          
          <div className="inline-flex bg-white border border-border rounded-full p-1 gap-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200 ${billing === 'monthly' ? 'bg-fg text-white shadow-sm' : 'text-muted hover:text-fg'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('one-time')}
              className={`px-5 py-2 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200 ${billing === 'one-time' ? 'bg-fg text-white shadow-sm' : 'text-muted hover:text-fg'}`}
            >
              One-time
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-end gap-6 md:gap-4 mb-20 max-w-sm md:max-w-none mx-auto">
          {plans.map((plan, idx) => {
             const isDark = plan.type === 'dark';
             return (
              <div
                key={idx}
                className={`
                  flex-1 rounded-2xl p-8 transition-all duration-200 relative w-full
                  ${isDark ? 'bg-white border-2 border-chart-2 text-fg md:-mt-4 md:mb-0 shadow-[0_12px_40px_rgba(45,98,239,0.12)] z-10' : 'bg-white border border-border self-stretch'}
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                `}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-chart-2 text-white text-[10px] font-mono tracking-widest rounded-full px-4 py-1 whitespace-nowrap uppercase z-20 shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-5">
                  <span className="text-[11px] font-mono tracking-widest uppercase opacity-60 mb-2 block text-muted-foreground">
                    {plan.name}
                  </span>
                  <div className="flex items-baseline gap-1 mt-4 text-fg">
                    <span className="text-4xl font-bricolage font-bold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-[13px] font-medium opacity-60 text-muted-foreground">
                      {plan.unit}
                    </span>
                  </div>
                  <p className="text-[13px] font-medium mt-2 text-muted-foreground">
                    {plan.tagline}
                  </p>
                </div>

                <div className="border-b border-border/50 my-5" />

                <div className="space-y-3 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 py-1.5 min-h-[44px] md:min-h-[auto]">
                      <svg width="14" height="14" viewBox="0 0 14 14" className="text-chart-2 flex-shrink-0 mt-1">
                         <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                      </svg>
                      <span className="text-[13px] leading-snug text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className={`
                  w-full py-2.5 rounded-full text-[13px] font-medium transition-all duration-200 active:scale-[0.98]
                  ${isDark ? 'bg-chart-2 text-white hover:bg-chart-2/90 shadow-md' : 'bg-transparent border border-border text-fg hover:bg-fg/5'}
                `}>
                  {plan.name === 'ENTERPRISE' ? 'Book a Call' : 'Start project'}
                </button>
              </div>
             );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted">
            Not sure which plan fits? <a href="#contact" className="font-semibold text-fg underline underline-offset-4 decoration-border hover:decoration-fg transition-all">Book a free 30-min strategy call →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
