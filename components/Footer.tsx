'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 group">
            <span className="font-bricolage text-[18px] font-bold tracking-tight text-fg">Buildra</span>
            <div className="w-1.5 h-1.5 rounded-full bg-chart-2" />
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#services" className="text-[13px] text-muted hover:text-fg transition-colors">Services</Link>
            <Link href="#work" className="text-[13px] text-muted hover:text-fg transition-colors">Work</Link>
            <Link href="#pricing" className="text-[13px] text-muted hover:text-fg transition-colors">Pricing</Link>
            <Link href="#faq" className="text-[13px] text-muted hover:text-fg transition-colors">FAQ</Link>
            <Link href="#" className="text-[13px] text-muted hover:text-fg transition-colors">Privacy</Link>
          </div>

          {/* Copyright */}
          <p className="text-[12px] text-muted/50 font-mono">
            © {currentYear} Buildra
          </p>
        </div>
      </div>
    </footer>
  );
}
