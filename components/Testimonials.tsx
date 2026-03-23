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
      quote: 'Working with the team was seamless from day one. They understood our Web3 product deeply and delivered a polished internal tool on time.',
      gradient: 'from-[#4F46E5] to-[#7C3AED]',
    },
    {
      name: 'Alex Mitrev',
      role: 'Founder, Tokwealth',
      stars: 5,
      quote: 'They turned a complex fintech concept into a clean, fast product. The design quality and frontend engineering were genuinely impressive.',
      gradient: 'from-[#10B981] to-[#3B82F6]',
    },
    {
      name: 'Lena Krotova',
      role: 'Product Lead, Magnetiq Bank',
      stars: 5,
      quote: "Our UX metrics improved significantly after the redesign. The team's attention to detail made the project effortless.",
      gradient: 'from-[#F59E0B] to-[#EF4444]',
    },
    {
      name: 'Marcus Chen',
      role: 'CTO, FinFlow',
      stars: 5,
      quote: "The speed of delivery was unmatched. We went from idea to launch in record time with a rock-solid infrastructure.",
      gradient: 'from-[#3B82F6] to-[#8B5CF6]',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Founder, Bloom',
      stars: 5,
      quote: "Highly recommended for any high-growth startup looking for a reliable partner who actually understands business goals.",
      gradient: 'from-[#EC4899] to-[#8B5CF6]',
    },
    {
      name: 'David Berg',
      role: 'Product Manager, SkyGrid',
      stars: 5,
      quote: "They don't just build; they think along with you. Truly a strategic partner that added value at every stage of the process.",
      gradient: 'from-[#6366F1] to-[#A855F7]',
    },
    {
      name: 'Elena Rodriguez',
      role: 'UX Lead, Velo',
      stars: 5,
      quote: "The attention to detail in the UI was beyond our expectations. Our users love the new experience and engagement is up.",
      gradient: 'from-[#F43F5E] to-[#FB923C]',
    },
    {
      name: 'James Wilson',
      role: 'VP Engineering, Nexa',
      stars: 5,
      quote: "Technical excellence combined with great communication. They're a rare find in the world of specialized dev agencies.",
      gradient: 'from-[#14B8A6] to-[#0ea5e9]',
    },
  ];

  // Split reviews for two rows
  const firstRow = reviews.slice(0, 4);
  const secondRow = reviews.slice(4);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-bg overflow-hidden" ref={ref}>
      <div className={`max-w-5xl mx-auto px-6 mb-16 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-chart-2 inline-block"></span>
            <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
              TESTIMONIALS
            </span>
          </span>
          <h2 className="text-[clamp(32px,4vw,56px)] font-bricolage font-bold leading-[1.05] tracking-[-0.03em] mt-4 mb-6">
            Don&apos;t Take Our Word.{' '}
            <span className="text-secondary-foreground italic font-medium">Take Theirs.</span>
          </h2>
        </div>
      </div>

      <div className="relative mt-12 space-y-6 md:space-y-8">
        {/* Gradients for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        {/* Row 1: Left moving */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] [animation-duration:50s] gap-4 md:gap-8 px-4 md:px-8">
          {[...firstRow, ...firstRow, ...firstRow].map((review, idx) => (
            <div
              key={idx}
              className="w-[280px] md:w-[420px] bg-white border border-border/80 rounded-[24px] p-6 md:p-8 flex flex-col relative overflow-hidden flex-shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] card-hover"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white font-bricolage font-bold text-[14px] md:text-[16px] flex-shrink-0 shadow-sm shadow-black/10`}>
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-bricolage font-bold text-fg text-[14px] md:text-[16px] leading-tight truncate">{review.name}</h3>
                  <p className="text-[12px] md:text-[13px] text-muted-foreground truncate">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-[#FFB800] mb-3 md:mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-[13px] md:text-[15px] text-muted-foreground leading-[1.6] md:leading-[1.7] font-medium">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: Right moving */}
        <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused] [animation-duration:60s] gap-4 md:gap-8 px-4 md:px-8">
          {[...secondRow, ...secondRow, ...secondRow].map((review, idx) => (
            <div
              key={idx}
              className="w-[280px] md:w-[420px] bg-white border border-border/80 rounded-[24px] p-6 md:p-8 flex flex-col relative overflow-hidden flex-shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] card-hover"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white font-bricolage font-bold text-[14px] md:text-[16px] flex-shrink-0 shadow-sm shadow-black/10`}>
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="font-bricolage font-bold text-fg text-[14px] md:text-[16px] leading-tight truncate">{review.name}</h3>
                  <p className="text-[12px] md:text-[13px] text-muted-foreground truncate">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-[#FFB800] mb-3 md:mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-[13px] md:text-[15px] text-muted-foreground leading-[1.6] md:leading-[1.7] font-medium">
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

