'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Image from 'next/image';

export default function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const [currentIndex, setCurrentIndex] = useState(1); // Start with second item for middle

  const reviews = [
    {
      name: 'Amit Jain',
      role: 'Founder, Tokwealth',
      quote: 'They turned a complex fintech concept into a clean, fast product. The design quality and frontend engineering were genuinely impressive.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHDOxlKFMTUKg/profile-displayphoto-shrink_400_400/B4DZcauNdZGUAk-/0/1748500011497?e=1776297600&v=beta&t=HuOFiGtz1ds06Z7GUfahLu9S5BA9k0IoURiNCb4pOZU',
    },
    {
      name: 'Kaylan Sliney',
      role: 'Founder, MagnetIQ',
      quote: "The speed of delivery was unmatched. We went from idea to launch in record time with a rock-solid infrastructure.",
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEAjuHrEAfgCQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699495219798?e=1776297600&v=beta&t=anPSJ9MjxuAe0WgQjxeRDUP_UIq048Ew-VRW3th2Bqo',
    },
    {
      name: 'Greg LaVecchia',
      role: 'Founder, Bloom Nutrition',
      quote: "Highly recommended for any high-growth startup looking for a reliable partner who actually understands business goals.",
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGKrEdrvaWqJA/profile-displayphoto-scale_400_400/B56Zw.CxXEH0Ag-/0/1770567441483?e=1776297600&v=beta&t=SoS6vIP9cQKIIVVtklW4BgHDNN0Y5rnjaKDF-LRlWzw',
    },
    {
      name: 'Haninder Pal Singh',
      role: 'Founder, StrategyConnect',
      quote: "They don't just build; they think along with you. Truly a strategic partner that added value at every stage of the process.",
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQELSDkSVnCVqA/profile-displayphoto-scale_400_400/B4DZr5O0iQGgAg-/0/1765118004516?e=1776297600&v=beta&t=b3s3iUiTINN976KJS0bUdZEtk2KGiBFmRv8qo_yJv24',
    },
    {
      name: 'Dharmin Dontamsetti',
      role: 'Founder, SmartBike',
      quote: "Technical excellence combined with great communication. They're a rare find in the world of specialized dev agencies.",
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQF2L5CfdCzJgg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609958909703?e=1776297600&v=beta&t=we9MGPF0i0YyOQsrPg_kdBg3_pKMk2LuGcnV5W1g7KQ',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const avatarColors = [
    { bg: 'bg-[#e8f0ff]', text: 'text-blue-600', border: 'border-blue-200' },
    { bg: 'bg-[#fff4fc]', text: 'text-pink-600', border: 'border-pink-200' },
    { bg: 'bg-[#e6f8f5]', text: 'text-teal-600', border: 'border-teal-200' },
    { bg: 'bg-[#faf5ff]', text: 'text-purple-600', border: 'border-purple-200' },
    { bg: 'bg-[#f0fdf4]', text: 'text-green-600', border: 'border-green-200' },
    { bg: 'bg-[#fff7ed]', text: 'text-orange-600', border: 'border-orange-200' },
  ];

  const getAvatarColor = (name: string) => {
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return avatarColors[hash % avatarColors.length];
  };

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  // Helper to get cards to display
  const getVisibleCards = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      let index = (currentIndex + i + reviews.length) % reviews.length;
      indices.push(index);
    }
    return indices;
  };

  const visibleIndices = getVisibleCards();

  return (
    <section id="testimonials" className="pt-12 pb-4 md:pt-16 md:pb-8 bg-bg overflow-hidden" ref={ref}>
      <div className={`max-w-5xl mx-auto px-6 mb-16 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center relative">
          <span className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-chart-2 inline-block"></span>
            <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
              TESTIMONIALS
            </span>
          </span>
          <h2 className="text-[32px] md:text-[clamp(32px,4vw,56px)] font-bricolage font-bold leading-[1.05] tracking-[-0.03em] mt-4 mb-6">
            Don&apos;t Take Our Word.{' '}
            <span className="text-chart-2 italic font-medium">Take Theirs.</span>
          </h2>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-12 flex items-center group">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur border border-border flex items-center justify-center hover:bg-white transition-all shadow-lg text-fg opacity-0 group-hover:opacity-100 hidden md:flex"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-30 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur border border-border flex items-center justify-center hover:bg-white transition-all shadow-lg text-fg opacity-0 group-hover:opacity-100 hidden md:flex"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center items-center w-full gap-4 md:gap-8 min-h-[360px] md:min-h-[420px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleIndices.map((reviewIdx, position) => {
              const review = reviews[reviewIdx];
              const isMiddle = position === 1;
              
              return (
                <motion.div
                  key={`${reviewIdx}-${position}`}
                  layout
                  drag={isMiddle ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  dragMomentum={false}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70) nextSlide();
                    if (info.offset.x > 70) prevSlide();
                  }}
                  initial={{ opacity: 0, scale: 0.8, x: position === 0 ? -100 : position === 2 ? 100 : 0 }}
                  animate={{ 
                    opacity: isMiddle ? 1 : 0.4, 
                    scale: isMiddle ? 1 : 0.85,
                    x: 0,
                    zIndex: isMiddle ? 20 : 10,
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: position === 0 ? -100 : position === 2 ? 100 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`
                    w-[calc(100vw-3rem)] sm:w-[350px] md:w-[420px] bg-white border border-border/80 rounded-[28px] md:rounded-[32px] p-7 md:p-10 
                    flex flex-col relative overflow-hidden flex-shrink-0 
                    shadow-[0_4px_32px_rgba(0,0,0,0.06)] 
                    ${!isMiddle ? 'hidden md:flex pointer-events-none' : 'flex cursor-grab active:cursor-grabbing'}
                  `}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-full overflow-hidden border ${getAvatarColor(review.name).border} flex-shrink-0 shadow-sm relative bg-bg`}>
                      {review.image ? (
                        <img 
                          src={review.image} 
                          alt={review.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if image fails to load
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : null}
                      <div className={`absolute inset-0 flex items-center justify-center -z-10 ${getAvatarColor(review.name).bg} ${getAvatarColor(review.name).text} font-bold text-[14px] font-mono`}>
                        {getInitials(review.name)}
                      </div>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h3 className="font-bricolage font-bold text-fg text-[16px] md:text-[18px] leading-tight truncate">{review.name}</h3>
                      <p className="text-[13px] md:text-[14px] text-muted-foreground truncate">{review.role}</p>
                    </div>
                  </div>

                  <p className="text-[15px] md:text-[17px] text-muted-foreground leading-[1.6] md:leading-[1.8] font-medium">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
      
      {/* Visual Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8 md:mt-0">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-chart-2' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
