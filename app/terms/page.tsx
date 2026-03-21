import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg text-fg pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/40 p-10 rounded-3xl border border-border/50">
        <Link href="/" className="inline-flex items-center gap-2 mb-10 text-[13px] text-muted hover:text-fg transition-colors">
          ← Back to home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bricolage font-bold tracking-tight mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-[15px] leading-relaxed text-muted-foreground font-sans">
          <section>
            <h2 className="text-xl font-bold text-fg mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using CodeMonks, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-4">2. Services</h2>
            <p>CodeMonks provides digital product design, development, and strategy services. Specific project terms are outlined in individual client agreements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-4">3. Intellectual Property</h2>
            <p>All content on this site is the property of CodeMonks unless otherwise stated. Client-owned intellectual property is governed by signed project contracts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-4">4. Limitation of Liability</h2>
            <p>CodeMonks shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
          </section>

          <p className="pt-10 border-t border-border/30 text-[13px]">Last updated: March 20, 2026</p>
        </div>
      </div>
    </div>
  );
}
