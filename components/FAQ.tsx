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
      q: 'What makes Buildra different from other agencies?',
      a: 'We combine high-end aesthetic design with modern engineering principles. We don’t just build products; we create strategic assets that drive growth and delight users through intentionality.',
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
  ];

  return (
    <section id="faq" className="py-32 bg-bg px-6 scroll-mt-20" ref={ref}>
      <div className={`max-w-xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">FAQ</span>
          <h2 className="h2-section mt-4 mb-6">Got Questions?<br />We've Got Answers</h2>
        </div>

        <div className="border-t border-border">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-border transition-colors duration-300">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left gap-4 group"
                >
                  <span className={`text-[15px] font-semibold transition-colors duration-300 ${isOpen ? 'text-fg' : 'text-fg/70 group-hover:text-fg'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-5 h-5 flex items-center justify-center text-muted transition-transform duration-300 ${isOpen ? 'rotate-45 text-fg' : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[14px] leading-relaxed text-muted max-w-lg">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
