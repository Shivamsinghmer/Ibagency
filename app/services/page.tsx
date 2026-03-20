'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { services } from '@/components/servicesData';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  return (
    <main className="bg-bg min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="section-label mb-4 block text-muted">OUR CAPABILITIES</span>
            <h1 className="text-5xl md:text-7xl font-bricolage font-bold tracking-tight mb-8">
              Expert Solutions for <br />
              <span className="text-chart-2 italic font-medium">Modern Business.</span>
            </h1>
            <p className="text-muted text-lg max-w-2xl leading-relaxed">
              We leverage advanced technology and design thinking to solve complex problems and build products that scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const bg = service.type === 'dark' ? 'bg-[#f4fcff] border border-border text-fg' : service.type === 'purple' ? 'bg-[#f3f0ff]' : 'bg-white border border-border text-fg';
              return <ServiceCard key={idx} service={{ ...service, id: String(idx), bg }} index={idx} />;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
