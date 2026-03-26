'use client';

import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    client: string;
    title: string;
    category: string;
    desc: string;
    tags: string[];
    bg: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isDark = project.bg.includes('text-white');
  const watermarkColor = isDark ? 'text-white/[0.06]' : 'text-fg/[0.06]';

  return (
    <Link 
      href={`/work/${project.slug}`}
      className={`
        relative overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[260px] md:min-h-[280px] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] group cursor-pointer
        ${project.bg}
      `}
      style={{ '--delay': `${index * 50}ms` } as any}
    >
      {/* Background Watermark */}
      <span className={`absolute bottom-4 right-4 md:bottom-6 md:right-6 text-[60px] md:text-[80px] font-bricolage font-extrabold pointer-events-none select-none z-0 leading-none ${watermarkColor}`}>
        {project.id}
      </span>

      <div className="relative z-10">
        <div className="flex flex-col gap-1.5 md:gap-2 mb-4">
          <span className={`inline-block w-fit text-[10px] md:text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full ${isDark ? 'bg-white/10 text-white/70' : 'bg-fg/5 text-muted'}`}>
            {project.category.split(' · ')[0]}
          </span>
          <h3 className={`text-[19px] md:text-[20px] font-bricolage font-bold leading-tight ${isDark ? 'text-white' : 'text-fg'}`}>
            {project.title}
          </h3>
        </div>
        <p className={`text-[13px] leading-relaxed line-clamp-3 ${isDark ? 'text-white/60' : 'text-muted'}`}>
          {project.desc}
        </p>
      </div>

      <div className="relative z-10 mt-auto flex items-center justify-between pt-6 border-t border-current/10">
        <div className="flex gap-1.5 overflow-hidden">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-muted/60'}`}>
              {tag}
            </span>
          ))}
        </div>
        <span className={`text-[12px] font-medium flex items-center gap-1 group-hover:gap-2 transition-all ${isDark ? 'text-white' : 'text-fg'}`}>
          View Case Study <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
