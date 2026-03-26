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
  const visibleTags = service.tags.slice(0, 3);
  const Icon = service.icon;

  return (
    <div 
      className={`
        rounded-xl p-5 md:p-6 transition-all duration-300 hover:translate-y-[-2px] group cursor-pointer flex flex-col justify-between
        ${isDark ? 'hover:shadow-[0_4px_20px_rgba(255,255,255,0.04)]' : 'hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)]'}
        ${service.bg}
        ${service.full ? 'md:col-span-2' : ''}
        min-h-[180px] md:min-h-[200px]
      `}
      style={{ '--delay': `${index * 50}ms` } as any}
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          {Icon && (
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'bg-white/5 border border-white/10 text-white/80 group-hover:bg-white/10 group-hover:text-white' : 'bg-fg/5 border border-fg/10 text-fg'}`}>
              <Icon size={16} strokeWidth={1.5} />
            </div>
          )}
          <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
            {visibleTags.map((tag) => (
              <span 
                key={tag} 
                className={`
                  text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-tight
                  ${isDark ? 'bg-white/5 text-white/40 border border-white/5' : 'bg-fg/5 text-muted border border-border/30'}
                `}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className={`font-bricolage font-semibold text-[16px] md:text-[18px] mb-2 tracking-tight ${isDark ? 'text-white' : 'text-fg'}`}>
          {service.title}
        </h3>
        <p className={`text-[12px] md:text-[13px] leading-snug ${isDark ? 'text-white/50 group-hover:text-white/70 transition-colors' : 'text-muted'}`}>
          {service.desc}
        </p>
      </div>
    </div>
  );
}
