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
        'Basic SEO Optimization',
        'Post-launch Support',
      ],
      cta: 'Get Started',
      bg: 'bg-white',
      border: 'border border-border',
      text: 'text-fg',
    },
    {
      name: 'PROFESSIONAL',
      price: billing === 'monthly' ? '$4,999' : '$39,999',
      features: [
        'Everything in Starter',
        'Custom 3D Animations',
        'AI Agents Integration',
        'High-converting Copywriting',
        'Priority Technical Support',
        'Performance Analytics',
        'Weekly Sync Meetings',
        'Multi-platform Strategy',
        'Conversion Optimization',
      ],
      cta: 'Get Started',
      bg: 'bg-card-dark',
      featured: true,
      text: 'text-white',
    },
    {
      name: 'ENTERPRISE',
      price: 'Custom',
      features: [
        'Everything in Professional',
        'Dedicated Product Team',
        'Advanced System Architecture',
        'White-label Dashboards',
        '24/7 Crisis Response',
        'Unlimited Features',
        'Strategic Consultations',
        'Multi-team Support',
        'Bespoke Training',
      ],
      cta: 'Book a Call',
      bg: 'bg-white',
      border: 'border border-border',
      text: 'text-fg',
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-bg px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-widest text-muted uppercase">PRICING</span>
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold mt-4">Simple, transparent pricing.</h2>
          
          <div className="mt-10 inline-flex items-center p-1.5 bg-border rounded-full shadow-inner relative z-20">
            <button
              onClick={() => setBilling('one-time')}
              className={`px-4 sm:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${billing === 'one-time' ? 'bg-white text-fg shadow-subtle' : 'text-muted hover:text-fg'}`}
            >
              One-time Pay
            </button>
            <button
              onClick={() => setBilling('monthly')}
              className={`px-4 sm:px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${billing === 'monthly' ? 'bg-white text-fg shadow-subtle' : 'text-muted hover:text-fg'}`}
            >
              Retainer
            </button>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`${plan.bg} ${plan.text} ${plan.border || ''} ${plan.featured ? 'md:scale-[1.04] z-10 shadow-2xl pb-16 pt-12 md:pb-16 my-8 md:my-0' : 'pb-10 pt-10 px-8'} rounded-3xl p-8 relative transition-transform duration-500`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-pink text-white rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10 text-center">
                <span className="text-xs font-mono font-bold uppercase tracking-widest opacity-60 mb-2 block">{plan.name}</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bricolage font-extrabold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-sm font-medium opacity-60">/ {billing === 'monthly' ? 'mo' : 'fixed'}</span>}
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={plan.featured ? 'text-accent-teal' : 'text-fg/40'}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[15px] opacity-80 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 ${plan.featured ? 'bg-white text-fg hover:bg-white/90 shadow-lg' : 'border border-border bg-bg hover:bg-border/50 text-fg shadow-subtle'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
           <p className="text-muted text-sm group cursor-pointer inline-flex items-center gap-1.5 transition-colors hover:text-fg">
            Not sure which plan? <span className="font-bold underline">Book a free 30-min strategy call</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </p>
        </div>
      </div>
    </section>
  );
}
