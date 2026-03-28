'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function Hero() {
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <section id="home" className="relative bg-bg scroll-mt-20 overflow-hidden pt-20 md:pt-22 pb-10 md:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-grow flex flex-col items-center justify-center max-w-5xl mx-auto px-6 text-center relative z-20"
      >
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-3 border border-border bg-white/60 backdrop-blur rounded-full px-5 py-2 text-[10px] md:text-[11px] font-mono text-muted-foreground tracking-[0.1em] md:tracking-[0.15em] uppercase mb-5 shadow-minimal whitespace-nowrap overflow-hidden text-ellipsis">
            Digital Product Design & Development Agency
          </span>
        </div>

        <h1 className="flex flex-col items-center text-[38px] leading-[1.0] md:text-[clamp(56px,8vw,100px)] md:leading-[0.92] font-bricolage font-extrabold mb-8 animate-fade-up [animation-delay:100ms] text-fg tracking-[-0.04em]">
          <span className="md:whitespace-nowrap">We Build</span>
          <span className="md:whitespace-nowrap">
            <span className="text-chart-2 italic">Digital Products</span>
          </span>
          <span className="md:whitespace-nowrap">People Love To Use</span>
        </h1>

        <p className="text-[15px] md:text-[17px] text-muted max-w-xl mx-auto mb-8 animate-fade-up [animation-delay:200ms] leading-[1.8]">
          From ambitious startups building their first MVP to established companies scaling their product with flexible and talented outsourced teams <br /> We bring strategy, design, and engineering together.
        </p>

        <div className="flex flex-row items-center justify-center gap-2.5 mb-10 animate-fade-up [animation-delay:300ms] w-full sm:w-auto px-4 sm:px-0">
          <Link 
            href="/#services" 
            onClick={(e) => handleLinkClick(e, '/#services')}
            className="flex-1 sm:flex-none bg-fg text-white rounded-full px-5 py-3 md:px-10 md:py-4 text-[13px] md:text-[15px] font-semibold hover:bg-fg/90 active:scale-[0.98] transition-all shadow-xl shadow-fg/10 text-center whitespace-nowrap"
          >
            Our Services
          </Link>
          <Link 
            href="/#work" 
            onClick={(e) => handleLinkClick(e, '/#work')}
            className="flex-1 sm:flex-none bg-fg text-white rounded-full px-5 py-3 md:px-10 md:py-4 text-[13px] md:text-[15px] font-semibold hover:bg-fg/90 active:scale-[0.98] transition-all shadow-xl shadow-fg/10 text-center whitespace-nowrap"
          >
            Case Studies
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center pb-5 gap-x-8 sm:gap-x-16 md:gap-x-24 gap-y-6 sm:gap-y-8 animate-fade-up [animation-delay:400ms]">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] md:text-[11px] font-mono text-muted-foreground tracking-[0.15em] md:tracking-[0.2em] uppercase">Projects</span>
            <span className="text-[15px] md:text-[16px] font-semibold text-fg">20+ Shipped</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] md:text-[11px] font-mono text-muted-foreground tracking-[0.15em] md:tracking-[0.2em] uppercase">Client</span>
            <span className="text-[14px] md:text-[15px] font-semibold text-fg flex items-center gap-1.5">
              <span className="text-[#FFB800] tracking-[0.1em] text-[15px] md:text-[16px]">★★★★★</span> Rated
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] md:text-[11px] font-mono text-muted-foreground tracking-[0.15em] md:tracking-[0.2em] uppercase">Building</span>
            <span className="text-[15px] md:text-[16px] font-semibold text-fg">Since 2020</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
