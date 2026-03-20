'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'one-time'>('monthly');
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  const plans = [
    {
      name: 'STARTER',
      price: billing === 'monthly' ? '$2,499' : '$19,999',
      features: [
        'Dedicated Designer',
        'Next.js & Tailwind Stack',
        'Mobile Responsive Design',
        'Strategy Workshop',
        'Post-launch Support',
      ],
      type: 'surface',
    },
    {
      name: 'PROFESSIONAL',
      price: billing === 'monthly' ? '$4,999' : '$39,999',
      features: [
        'Everything in Starter',
        'Custom 3D Animations',
        'AI Agents Integration',
        'Priority Technical Support',
        'Performance Analytics',
      ],
      type: 'dark',
      featured: true,
    },
    {
      name: 'ENTERPRISE',
      price: 'Custom',
      features: [
        'Dedicated Product Team',
        'Advanced System Architecture',
        'White-label Dashboards',
        '24/7 Crisis Response',
        'Unlimited Features',
      ],
      type: 'surface',
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-bg px-6 scroll-mt-20" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="section-label mb-4 block text-muted">Pricing</span>
          <h2 className="h2-section mt-4 mb-10">Simple, transparent <span className="italic font-medium">pricing.</span></h2>
          
          {/* Minimal Toggle */}
          <div className="inline-flex items-center p-1 bg-surface-2 rounded-full border border-border">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${billing === 'monthly' ? 'bg-fg text-bg shadow-minimal' : 'text-muted hover:text-fg'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('one-time')}
              className={`px-6 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${billing === 'one-time' ? 'bg-fg text-bg shadow-minimal' : 'text-muted hover:text-fg'}`}
            >
              One-time
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`
                rounded-2xl p-8 transition-all duration-500 relative
                ${plan.type === 'dark' ? 'bg-fg text-bg shadow-2xl scale-[1.03] z-10' : 'bg-surface border border-border shadow-minimal'}
              `}
            >
              {plan.featured && (
                <div className="absolute top-4 right-8 font-mono text-[10px] tracking-widest text-muted uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <span className={`text-[11px] font-mono tracking-widest uppercase opacity-60 mb-2 block ${plan.type === 'dark' ? 'text-subtle' : 'text-muted'}`}>
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-1 overflow-hidden">
                  <span className={`text-4xl font-bricolage font-bold transition-all duration-300 transform`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className={`text-sm font-medium opacity-60 ${plan.type === 'dark' ? 'text-subtle' : 'text-muted'}`}>
                      / {billing === 'monthly' ? 'mo' : 'project'}
                    </span>
                  )}
                </div>
              </div>

              <div className="h-px bg-border/20 mb-8" />

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-teal text-sm">✓</span>
                    <span className={`text-sm leading-relaxed ${plan.type === 'dark' ? 'text-subtle' : 'text-muted'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`
                w-full py-3 rounded-full text-sm font-medium transition-all duration-200 active:scale-95
                ${plan.type === 'dark' ? 'bg-bg text-fg hover:bg-white' : 'border border-border hover:bg-fg hover:text-bg'}
              `}>
                {plan.name === 'ENTERPRISE' ? 'Book a Call' : 'Start project'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
