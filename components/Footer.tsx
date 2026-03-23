'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
  ];

  return (
    <footer className="bg-bg border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo only, large and clear */}
        <Link href="/" className="inline-block group">
          <img
            src="/agencyLogo.png"
            alt="CodeMonks Logo"
            className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Real working links in a simple row */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[13px] font-medium text-muted">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-fg transition-colors uppercase tracking-widest font-mono text-[11px]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@codemonks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-fg text-white rounded-full px-8 py-2.5 text-[13px] font-medium hover:bg-fg/90 active:scale-[0.98] transition-all shadow-minimal"
          >
            Email Us
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-muted/40 font-mono text-center md:text-right flex-shrink-0">
          © {currentYear} CodeMonks
        </p>
      </div>
    </footer>
  );
}
