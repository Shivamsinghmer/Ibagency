'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-bg/80 border-b border-border py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 relative">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full transform group-hover:rotate-12 transition-transform duration-300"
            >
              <rect x="4" y="4" width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.1" />
              <path
                d="M16 4L28 28H4L16 4Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="18" r="3" fill="var(--color-accent-pink)" />
            </svg>
          </div>
          <span className="font-bricolage text-xl font-bold tracking-tight">Buildra</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-fg/70 hover:text-fg transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-fg text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-fg/90 active:scale-95 transition-all">
            Get in Touch
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-fg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-bg z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } md:hidden flex flex-col items-center justify-center gap-8`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-bricolage font-bold text-fg hover:text-accent-pink transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <button className="mt-4 bg-fg text-white rounded-full px-8 py-3 text-lg font-medium">
          Get in Touch
        </button>
      </div>
    </nav>
  );
}
