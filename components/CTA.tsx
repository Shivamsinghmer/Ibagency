'use client';

import Link from 'next/link';
import { useInView } from '@/hooks/useInView';

export default function CTA() {
  const [ref, isInView] = useInView({ threshold: 0.15, once: true });

  return (
    <section className="pt-20 pb-12 md:pt-16 md:pb-24 px-4 md:px-6 bg-bg overflow-hidden" ref={ref}>
      <div className={`max-w-5xl mx-auto rounded-[32px] md:rounded-[48px] overflow-hidden relative border border-border/80 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Main Content Area - Clean White */}
        <div className="bg-white relative overflow-hidden py-16 md:py-24 px-8 md:px-20 text-center flex flex-col items-center">
          
          {/* Subtle Mesh Gradients - Soft Blue Accents */}
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[#f4fcff] blur-[100px] -z-10 rounded-full opacity-40" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#e8f0ff] blur-[100px] -z-10 rounded-full opacity-40" />
          
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 border border-border shadow-sm text-[11px] font-mono tracking-[0.2em] uppercase text-muted-foreground mb-8">
              Work with us
            </span>
            
            <h2 className="text-[36px] md:text-[64px] font-bricolage font-bold text-fg leading-[1.0] tracking-[-0.04em] mb-8">
              Ready to turn your <br className="hidden md:block" />
              <span className="text-muted-foreground/60">vision into </span> 
              <span className="text-chart-2 italic font-medium pr-1">reality?</span>
            </h2>
            
            <p className="text-[15px] md:text-[17px] text-muted max-w-sm mx-auto mb-10 leading-relaxed font-medium">
              We help founders and brands build world-class digital products that scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-fg text-white rounded-full px-12 py-4 text-[15px] font-bold hover:shadow-xl hover:shadow-fg/20 active:scale-[0.98] transition-all text-center"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
