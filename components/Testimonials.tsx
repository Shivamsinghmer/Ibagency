'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const reviews = [
    {
      name: 'Dyma Budorin',
      role: 'CEO, Hacken',
      stars: 5,
      quote: 'Working with the team was seamless from day one. They understood our Web3 product deeply and delivered a polished internal tool on time, with no hand-holding needed.',
      accent: 'bg-chart-2',
    },
    {
      name: 'Alex Mitrev',
      role: 'Founder, Tokwealth',
      stars: 5,
      quote: 'They turned a complex fintech concept into a clean, fast product. The design quality and frontend engineering were both genuinely impressive.',
      accent: 'bg-chart-2',
    },
    {
      name: 'Lena Krotova',
      role: 'Product Lead, Magnetiq Bank',
      stars: 5,
      quote: "Our UX metrics improved significantly after the redesign. The team's attention to detail and communication throughout made the project effortless on our side.",
      accent: 'bg-chart-2',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-bg px-6" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-chart-2 inline-block"></span>
            <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
              TESTIMONIALS
            </span>
          </span>
          <h2 className="text-[clamp(32px,4vw,56px)] font-bricolage font-bold leading-[1.05] tracking-[-0.03em] mt-4 mb-6">
            Don&apos;t Take Our Word.{' '}
            <span className="text-chart-2 italic font-medium">Take Theirs.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-2xl p-7 card-hover cursor-default flex flex-col relative overflow-hidden"
            >
              {/* Accent bar at top */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${review.accent}`} />

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${review.accent} flex items-center justify-center text-white font-bricolage font-bold text-[14px] flex-shrink-0`}>
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-bricolage font-bold text-fg text-[15px] leading-tight truncate">{review.name}</h3>
                  <p className="text-[12px] text-muted truncate">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-0.5 text-amber mb-3">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-[14px] text-muted leading-[1.8] flex-grow">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
