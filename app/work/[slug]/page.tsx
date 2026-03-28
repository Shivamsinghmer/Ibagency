'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/components/projectsData';

export default function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const project = projects.find((p) => p.slug === unwrappedParams.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center text-fg">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project not found</h1>
            <Link href="/" className="text-chart-2 hover:underline">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-bg min-h-screen font-sans selection:bg-fg/10">
      <Navbar />

      <article className="pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <header className="mb-20 md:mb-32">
            <Link 
              href="/#work" 
              className="inline-flex items-center gap-2 text-[12px] md:text-[13px] text-muted hover:text-fg transition-colors mb-12 group font-mono uppercase tracking-widest"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
              <div className="md:col-span-8">
                <span className="text-[11px] md:text-[12px] font-mono tracking-widest uppercase text-chart-2 mb-5 block">
                  {project.category}
                </span>
                <h1 className="text-[40px] leading-[1.05] md:text-[clamp(48px,5vw,72px)] md:leading-[1.02] font-bricolage font-bold tracking-[-0.03em] text-fg mb-8">
                  {project.title}
                </h1>
                <p className="text-[18px] md:text-[22px] text-muted leading-[1.6] md:leading-[1.7] font-light max-w-2xl">
                  {project.desc}
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-8 md:pt-2 border-l border-border/50 pl-6 md:pl-8">
                <div>
                  <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-muted block mb-2">Client</span>
                  <span className="text-[16px] md:text-[17px] font-semibold text-fg tracking-tight">{project.client}</span>
                </div>
                <div>
                  <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-muted block mb-3">Capabilities</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 bg-fg/[0.03] text-fg rounded-md border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Sidebar Data */}
            <aside className="lg:col-span-4 lg:col-start-9 order-2 lg:order-2">
              <div className="sticky top-32 bg-fg/[0.02] rounded-2xl p-6 md:p-8 border border-border/50">
                 <h3 className="text-[12px] font-mono font-semibold mb-6 uppercase tracking-widest text-fg">Key Deliverables</h3>
                 <ul className="space-y-4">
                   {project.metrics.map((metric, i) => (
                     <li key={i} className="flex gap-3 text-[14px] md:text-[15px] text-muted leading-relaxed">
                        <span className="text-chart-2 mt-0.5 text-[12px]">❖</span>
                        <span>{metric}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </aside>

            {/* Main Sections */}
            <div className="lg:col-span-7 lg:col-start-1 order-1 lg:order-1 space-y-16 md:space-y-24">
               {project.sections.map((section, idx) => (
                 <section key={idx}>
                   <h3 className="text-[24px] md:text-[28px] font-bricolage font-bold mb-6 text-fg tracking-[-0.02em]">{section.title}</h3>
                   <div className="text-muted text-[16px] md:text-[18px] leading-[1.8] whitespace-pre-wrap">
                     {section.content}
                   </div>
                 </section>
               ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-24 md:mt-32 bg-fg text-bg rounded-3xl p-10 md:p-16 text-center relative overflow-hidden flex flex-col items-center">
             {/* Decorative glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
             
             <h2 className="text-[28px] md:text-[40px] font-bricolage font-bold mb-4 relative z-10 text-white tracking-[-0.02em]">Inspired to build something great?</h2>
             <p className="text-white/60 mb-10 max-w-md mx-auto relative z-10 text-[15px] md:text-[16px]">
               Let's discuss how we can help bring your vision to life with precision and scale.
             </p>
             <Link 
                href="/contact" 
                className="relative z-10 inline-flex items-center justify-center bg-white text-fg rounded-full px-8 py-3.5 text-[14px] md:text-[15px] font-medium hover:bg-white/90 active:scale-[0.98] transition-all shadow-xl shadow-black/10"
             >
               Start Your Project
             </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
