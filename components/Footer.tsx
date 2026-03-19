'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter/X', href: 'https://twitter.com', icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /> },
    { name: 'Dribbble', href: 'https://dribbble.com', icon: <><circle cx="12" cy="12" r="10" /><path d="M8.5 2.8c3.5 1.5 5 5 5 5" /><path d="M2 15c5.5 0 9.5-3 11-7.5" /><path d="M14 11.5c1.5 4.5 5.5 7.5 8 7.5" /><path d="M3 12c3.5-2 10.5-2 10.5-2" /></> },

    { name: 'GitHub', href: 'https://github.com', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
  ];

  const columns = [
    {
      title: 'Services',
      links: ['AI Automation', 'Brand Identity', 'Product Design', 'Growth Strategy', 'Mobile Apps', 'Web Apps'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Case Studies', 'Pricing Plans', 'Contact', 'Blog'],
    },
  ];

  return (
    <footer className="bg-fg text-white pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 border-b border-white/10 pb-16">
          
          {/* Logo & Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300">
                <rect x="4" y="4" width="24" height="24" rx="6" fill="white" fillOpacity="0.1" />
                <path d="M16 4L28 28H4L16 4Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="18" r="3" fill="var(--color-accent-pink)" />
              </svg>
              <span className="font-bricolage text-2xl font-bold tracking-tight">Buildra</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-[240px]">
              The premium digital agency dedicated to crafting human-centric products for ambitious teams.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/20 transition-all hover:-translate-y-1"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bricolage font-bold text-lg mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-bricolage font-bold text-lg mb-6">Stay in the loop</h4>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Subscribe to get the latest insights and agency news.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="hello@buildra.agency"
                className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent-pink/50 transition-all placeholder:text-white/30"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-white text-fg rounded-full px-5 py-2 font-bold hover:bg-white/90 active:scale-95 transition-all text-sm shadow-lg"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-white/40 font-medium tracking-tight">
          <p>© {currentYear} Buildra Studio Inc. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
