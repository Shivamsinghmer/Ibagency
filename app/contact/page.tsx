'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-bg overflow-hidden">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-16 md:pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
