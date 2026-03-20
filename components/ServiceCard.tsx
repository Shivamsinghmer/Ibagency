'use client';

import React from 'react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    desc: string;
    tags: string[];
    bg: string;
    featured?: boolean;
    full?: boolean;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isDark = service.bg.includes('text-white');
  const visibleTags = service.tags.slice(0, 5);
  const remainingTags = service.tags.length - 5;

  return (
    <div 
      className={`
        rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] group cursor-pointer flex flex-col justify-between
        ${service.bg}
        ${service.full ? 'md:col-span-2' : ''}
        ${service.featured ? 'min-h-[260px]' : 'min-h-[220px]'}
      `}
      style={{ '--delay': `${index * 50}ms` } as any}
    >
      <div>
        <h3 className={`font-bricolage font-semibold text-[18px] mb-2 tracking-tight ${isDark ? 'text-white' : 'text-fg'}`}>
          {service.title}
        </h3>
        <p className={`text-[13px] leading-relaxed line-clamp-3 mb-4 ${isDark ? 'text-white/70' : 'text-muted'}`}>
          {service.desc}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
        {visibleTags.map((tag) => (
          <span 
            key={tag} 
            className={`
              text-[11px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider
              ${isDark ? 'bg-white/10 text-white/60' : 'bg-[#F0EFE9] text-muted border border-border'}
            `}
          >
            {tag}
          </span>
        ))}
        {remainingTags > 0 && (
          <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider bg-transparent border border-current opacity-50`}>
            +{remainingTags} more
          </span>
        )}
      </div>
    </div>
  );
}
