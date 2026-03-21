import React from 'react';

export default function ProjectMarquee() {
    const heroProjects = [
        { name: 'Hacken Dashboard', category: 'Web3 · Security', bg: 'bg-white border border-border text-fg', accent: 'bg-chart-2' },
        { name: 'Tokwealth App', category: 'Fintech · Crypto', bg: 'bg-white border border-border text-fg', accent: 'bg-chart-2' },
        { name: 'Magnetiq Bank', category: 'Fintech · UX', bg: 'bg-white border border-border text-fg', accent: 'bg-chart-2' },
        { name: 'SmartBike Mobility', category: 'IoT · Platform', bg: 'bg-white border border-border text-fg', accent: 'bg-chart-2' },
        { name: 'Strategy Connect', category: 'SaaS · Analytics', bg: 'bg-white border border-border text-fg', accent: 'bg-chart-2' },
    ];

    return (
        <div className="mt-auto py-16 md:py-20 relative overflow-hidden z-10 bg-bg">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />

            <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] [animation-duration:35s] gap-4 px-4">
                {[...heroProjects, ...heroProjects, ...heroProjects].map((project, idx) => (
                    <div
                        key={idx}
                        className={`
                min-w-[220px] md:min-w-[260px] h-[140px] md:h-[160px] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 card-hover relative overflow-hidden
                ${project.bg}
              `}
                    >
                        <div className="relative z-10">
                            <span className="font-bricolage font-semibold text-[15px] tracking-tight">
                                {project.name}
                            </span>
                            <span className="font-mono text-[10px] text-current/60 mt-1 uppercase tracking-wider block">
                                {project.category}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${project.accent}`} />
                            <span className="text-[10px] font-mono text-current/40 uppercase tracking-wider">Live Project</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}