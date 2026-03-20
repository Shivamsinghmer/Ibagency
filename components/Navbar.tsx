'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-bg/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
          <div className="w-1.5 h-1.5 rounded-full bg-chart-2 animate-pulse" />
          <span className="font-bricolage text-lg font-semibold tracking-tight text-fg">Buildra</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] text-muted-foreground hover:text-fg transition-colors duration-200 uppercase tracking-widest font-mono font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className="hidden sm:block bg-fg text-bg rounded-full px-6 py-2.5 text-[13px] font-medium hover:bg-fg/90 active:scale-[0.98] transition-all">
            Start a Project
          </button>
          
          <button 
            className="md:hidden p-2 text-fg focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`} />
            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1'}`} />
            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] border-b border-border opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 flex flex-col gap-6 bg-bg/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[14px] text-muted-foreground hover:text-fg transition-colors uppercase tracking-widest font-mono font-medium block w-full"
            >
              {link.name}
            </Link>
          ))}
          <button 
            className="w-full sm:hidden bg-fg text-bg rounded-full px-6 py-3 text-[14px] font-medium active:scale-[0.98] transition-all"
            onClick={() => setIsOpen(false)}
          >
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  );
}
