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
    { name: 'Our_Services', href: '/#services' },
    { name: 'Case_Studies', href: '/#work' },
    { name: 'Contact_Us', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen
        ? 'bg-bg/90 backdrop-blur-md border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
          <img
            src="/agencyLogo.png"
            alt="CodeMonks Logo"
            className="h-20 md:h-25 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
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
          <Link href="/contact" className="hidden sm:block bg-fg text-white rounded-full px-6 py-2.5 text-[13px] font-medium hover:bg-fg/90 active:scale-[0.98] transition-all">
            Start Your Project
          </Link>

          <button
            className="md:hidden relative z-50 p-2 -mr-2 text-fg focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[9px]' : ''
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''
                  }`}
              />
            </div>
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
          <Link
            href="/contact"
            className="w-full sm:hidden bg-fg text-white rounded-full px-6 py-3 text-[14px] font-medium active:scale-[0.98] transition-all text-center"
            onClick={() => setIsOpen(false)}
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
