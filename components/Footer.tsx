'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Navigation',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Case Studies', href: '#work' },
        { name: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'AI & Automation', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'App Development', href: '#' },
        { name: 'Web3 / dApps', href: '#' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'Twitter', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'GitHub', href: '#' },
        { name: 'Email', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-fg text-bg pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          {/* Logo Column */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
               <span className="font-bricolage text-2xl font-bold tracking-tighter">Buildra</span>
               <div className="w-1.5 h-1.5 rounded-full bg-pink shadow-[0_0_10px_rgba(255,100,200,0.5)]" />
            </Link>
            <p className="text-subtle text-sm leading-relaxed max-w-[200px] opacity-60">
              High-intention digital products. Studio based in IST.
            </p>
          </div>

          {/* Links Columns */}
          {sections.map((section) => (
            <div key={section.title} className="md:col-span-2">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-8">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[11px] font-mono uppercase tracking-wider text-subtle hover:text-bg transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-subtle/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted">
            © {currentYear} Buildra Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[11px] font-mono uppercase tracking-widest text-muted hover:text-bg transition-colors">Privacy</Link>
            <Link href="#" className="text-[11px] font-mono uppercase tracking-widest text-muted hover:text-bg transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
