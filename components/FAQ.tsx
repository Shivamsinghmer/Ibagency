'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const faqs = [
    {
      q: 'How long does a typical project take?',
      a: 'Timelines depend on scope. A focused MVP typically takes 6–10 weeks. A full SaaS product or mobile app is usually 12–20 weeks. We give you a detailed estimate before we start anything.',
    },
    {
      q: 'What makes you different from other agencies?',
      a: "We're engineers and designers with academic and startup backgrounds — not a body shop. We care about the quality of what we ship, not just the hours we bill. Most of our clients come back for their next project.",
    },
    {
      q: 'Do you work with early-stage startups?',
      a: "Yes — that's a core part of what we do. We're experienced at working with founders to turn rough ideas into well-scoped, buildable products. We can also help you prioritise what to build first.",
    },
    {
      q: 'Can I upgrade or change my plan later?',
      a: "Absolutely. Our plans are flexible and we can adjust scope, team size, or engagement model as your needs change. Just reach out and we'll figure it out.",
    },
    {
      q: 'Do you provide post-launch support?',
      a: 'Yes. All plans include post-launch support. We also offer ongoing retainer engagements for teams that want continuous development, maintenance, and iteration.',
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-32 bg-bg px-6 scroll-mt-20" ref={ref}>
      <div className={`max-w-xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-chart-2 inline-block"></span>
            <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
              FAQ
            </span>
          </span>
          <h2 className="text-[32px] md:text-[clamp(32px,4vw,56px)] font-bricolage font-bold leading-[1.05] tracking-[-0.02em] mt-4 mb-6">
            Got Questions? <span className="text-chart-2 italic font-medium">Answers.</span>
          </h2>
        </div>

        <div className="border-t border-border">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-border last:border-0 transition-colors duration-300">
                <div
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 flex items-center justify-between cursor-pointer group hover:text-fg transition-colors gap-4"
                >
                  <span className={`text-[15px] font-semibold transition-colors duration-300 ${isOpen ? 'text-fg' : 'text-fg/70'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-45 bg-fg text-white' : 'rotate-0 bg-transparent border border-border text-muted'} group-hover:border-fg`}>
                    <span className="text-[16px] leading-none font-light">+</span>
                  </div>
                </div>

                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[14px] text-muted leading-relaxed max-w-lg">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
