'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id?: string;
    title: string;
    desc: string;
    tags: string[];
    bg: string;
    featured?: boolean;
    full?: boolean;
    icon?: LucideIcon;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isDark = service.bg.includes('text-white');
  const visibleTags = service.tags.slice(0, 5);
  const remainingTags = service.tags.length - 5;
  const Icon = service.icon;

  return (
    <div 
      className={`
        rounded-2xl p-6 md:p-10 transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer flex flex-col justify-between
        ${isDark ? 'hover:shadow-[0_8px_40px_rgba(255,255,255,0.06)]' : 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]'}
        ${service.bg}
        ${service.full ? 'md:col-span-2' : ''}
        ${service.featured ? 'min-h-[280px] md:min-h-[300px]' : 'min-h-[240px] md:min-h-[260px]'}
      `}
      style={{ '--delay': `${index * 50}ms` } as any}
    >
      <div>
        {Icon && (
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 transition-colors ${isDark ? 'bg-white/5 border border-white/10 text-white/80 group-hover:bg-white/10 group-hover:text-white' : 'bg-fg/5 border border-fg/10 text-fg'}`}>
            <Icon size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
          </div>
        )}
        <h3 className={`font-bricolage font-semibold text-[19px] md:text-[22px] mb-3 tracking-tight ${isDark ? 'text-white' : 'text-fg'}`}>
          {service.title}
        </h3>
        <p className={`text-[13px] md:text-[15px] leading-relaxed line-clamp-3 mb-5 md:mb-6 ${isDark ? 'text-white/60 group-hover:text-white/80 transition-colors' : 'text-muted'}`}>
          {service.desc}
        </p>
      </div>

      <div className={`flex flex-wrap gap-2 mt-auto pt-6 border-t ${isDark ? 'border-white/5' : 'border-border/50'}`}>
        {visibleTags.map((tag) => (
          <span 
            key={tag} 
            className={`
              text-[11px] font-mono px-3 py-1.5 rounded-full uppercase tracking-wider transition-colors
              ${isDark ? 'bg-white/5 text-white/60 border border-white/10 group-hover:bg-white/10 group-hover:text-white' : 'bg-[#F0EFE9] text-muted border border-border'}
            `}
          >
            {tag}
          </span>
        ))}
        {remainingTags > 0 && (
          <span className={`text-[11px] font-mono px-3 py-1.5 rounded-full uppercase tracking-wider bg-transparent border border-current opacity-40`}>
            +{remainingTags} more
          </span>
        )}
      </div>
    </div>
  );
}
