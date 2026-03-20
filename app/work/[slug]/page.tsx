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
            <Link href="/" className="text-pink hover:underline">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-bg min-h-screen">
      <Navbar />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <Link 
              href="/#work" 
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors mb-12 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <span className="text-sm font-mono tracking-widest uppercase text-muted mb-4 block">
                  {project.category}
                </span>
                <h1 className="text-5xl md:text-7xl font-bricolage font-bold tracking-tight">
                  {project.title}
                </h1>
              </div>
              <div className="text-left md:text-right">
                <span className="text-xs font-semibold text-muted uppercase tracking-widest block mb-1">CLIENT</span>
                <span className="text-lg font-bricolage font-medium">{project.client}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
              {project.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-pink" />
                   <span className="text-sm font-mono uppercase tracking-wider">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Banner Placeholder style using bg color */}
          <div className={`w-full aspect-video rounded-3xl mb-24 shadow-2xl relative overflow-hidden ${project.bg}`}>
             <span className="absolute inset-0 flex items-center justify-center text-[20vw] font-bold opacity-10 pointer-events-none italic font-bricolage">
               {project.id}
             </span>
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
            <div className="md:col-span-8">
               <h2 className="text-2xl font-bricolage font-bold mb-6">Overview</h2>
               <p className="text-muted text-lg leading-relaxed mb-8">
                 {project.desc}
               </p>
               <p className="text-muted text-lg leading-relaxed">
                 {project.fullDesc}
               </p>
            </div>
            
            <div className="md:col-span-4">
              <div className="bg-surface rounded-2xl p-8 border border-border sticky top-32">
                 <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">Metrics & Impact</h3>
                 <ul className="space-y-6">
                   {project.metrics.map((metric, i) => (
                     <li key={i} className="flex gap-4">
                        <span className="text-pink font-bold">✓</span>
                        <span className="text-sm text-fg leading-snug font-medium">{metric}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </div>

          {/* Final CTA in page */}
          <div className="bg-surface-2 rounded-3xl p-12 md:p-20 text-center border border-border">
             <h2 className="text-3xl md:text-5xl font-bricolage font-bold mb-8">Ready to start your next project?</h2>
             <button className="bg-fg text-bg rounded-full px-10 py-4 font-semibold hover:opacity-90 transition-all shadow-xl">
               Get in touch with us
             </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
