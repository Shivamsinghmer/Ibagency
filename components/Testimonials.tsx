'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  const reviews = [
    {
      name: 'Sarah Chen',
      initials: 'SC',
      role: 'CEO, Flux Mobile',
      stars: 5,
      quote: 'Buildra transformed our complex product idea into a stunning, intuitive app that users actually love.',
    },
    {
      name: 'Michael Ross',
      initials: 'MR',
      role: 'Founder, CloudScale',
      stars: 5,
      quote: 'The team at Buildra is not just a service provider; they are true partners in our growth.',
    },
    {
      name: 'Elena Wright',
      initials: 'EW',
      role: 'Growth, Nexis',
      stars: 5,
      quote: 'Exceptional engineering meets world-class design. Truly a premium experience from start to finish.',
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-bg px-6" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16 text-center">
          <span className="section-label mb-4 block">Testimonials</span>
          <h2 className="h2-section mt-4 mb-6">Don't Take Our Word.<br />Take Theirs.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border rounded-2xl p-8 hover:translate-y-[-2px] transition-all duration-300 shadow-minimal"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border flex items-center justify-center font-semibold text-fg text-sm">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bricolage font-semibold text-base leading-none">{review.name}</h3>
                  <p className="text-[12px] text-muted mt-1">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-4 text-amber">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-fg/70 text-[14px] leading-relaxed italic">
                "{review.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
