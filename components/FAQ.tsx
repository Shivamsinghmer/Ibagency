'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  const faqs = [
    {
      q: 'How long does a typical project take?',
      a: 'A standard website project typically takes between 4 to 8 weeks, while complex mobile applications or enterprise-level SaaS products can range from 3 to 6 months depending on requirements.',
    },
    {
      q: 'What makes you different from other agencies?',
      a: 'We combine high-end aesthetic design with modern engineering principles and AI-driven automation. We don’t just build products; we create strategic assets that drive growth and delight users.',
    },
    {
      q: 'Do you work with early-stage startups?',
      a: 'Absolutely. We love partnering with visionary founders. We offer specialized starter plans and strategic consulting for early-stage teams to help them build their first MVP efficiently.',
    },
    {
      q: 'Can I upgrade or change my plan later?',
      a: 'Of course. Our relationships are built on trust and flexibility. You can scale your engagement up or down as your needs evolve, with dedicated support at every step of the journey.',
    },
    {
      q: 'Do you provide post-launch support?',
      a: 'Yes, we provide ongoing maintenance, security updates, and performance optimization for all the products we build. We’re in it for the long haul to ensure your success continues.',
    },
    {
      q: 'How do we get started working together?',
      a: 'It starts with a simple conversation. Book a call or send us an inquiry specifying your goals, and we’ll schedule a discovery workshop to map out the strategy for your next digital product.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-bg px-6" ref={ref}>
      <div className={`max-w-2xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-widest text-muted uppercase">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold mt-4 leading-tight">
            Got Questions?<br />
            We've Got Answers
          </h2>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between text-left gap-4 group"
                >
                  <span className={`text-lg md:text-xl font-bricolage font-bold transition-colors ${isOpen ? 'text-fg' : 'text-fg/60 group-hover:text-fg'}`}>
                    {faq.q}
                  </span>
                  <div className={`mt-1.5 w-6 h-6 flex items-center justify-center rounded-full border border-border transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>

                  <p className="text-sm md:text-[15px] leading-relaxed text-muted max-w-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
           <button className="bg-bg border border-border rounded-full px-8 py-3.5 text-sm font-bold shadow-subtle hover:bg-border/30 transition-all flex items-center gap-2 mx-auto">
            Still have questions? Let's chat <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
