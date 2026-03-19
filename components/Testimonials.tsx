'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  const reviews = [
    {
      name: 'Sarah Chen',
      role: 'CEO, Flux Mobile',
      company: 'Tech Startup',
      stars: 5,
      quote: 'Buildra transformed our complex product idea into a stunning, intuitive app that users actually love. Their attention to detail is unparalleled in the industry.',
      colors: 'from-accent-pink to-accent-purple',
    },
    {
      name: 'Michael Ross',
      role: 'Founder, CloudScale',
      company: 'B2B SaaS',
      stars: 5,
      quote: 'The team at Buildra is not just a service provider; they are true partners. Our growth metrics have doubled since the relaunch, thanks to their data-driven design approach.',
      colors: 'from-accent-teal to-accent-blue',
    },
    {
      name: 'Elena Wright',
      role: 'Head of Growth, Nexis',
      company: 'E-commerce',
      stars: 5,
      quote: 'Exceptional engineering meets world-class design. We couldn\'t be happier with our new brand identity and platform. Truly a premium experience from start to finish.',
      colors: 'from-accent-purple to-accent-pink',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-bg px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-16">
          <span className="font-mono text-xs tracking-widest text-muted uppercase">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold mt-4 leading-tight text-center">
            Don't Take Our Word.<br />
            Take Theirs.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-3xl p-8 md:p-10 shadow-subtle hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${review.colors} shadow-lg`} />
                <div>
                  <h3 className="font-bricolage font-bold text-lg leading-none">{review.name}</h3>
                  <p className="text-sm text-muted mt-1">{review.role}, {review.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6 text-accent-pink">
                {[...Array(review.stars)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-fg/80 leading-relaxed text-[15px] mb-8 italic">"{review.quote}"</p>

              <button className="text-xs font-bold text-muted uppercase tracking-widest hover:text-fg transition-colors flex items-center gap-2">
                Read Full Story <span className="text-sm font-normal">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
