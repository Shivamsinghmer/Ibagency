import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg text-fg pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/40 p-10 rounded-3xl border border-border/50">
        <Link href="/" className="inline-flex items-center gap-2 mb-10 text-[13px] text-muted hover:text-fg transition-colors">
          ← Back to home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bricolage font-bold tracking-tight mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-[15px] leading-relaxed text-muted-foreground font-sans">
          <section>
            <h2 className="text-xl font-bold text-fg mb-4">1. Information We Collect</h2>
            <p>We may collect personal information such as name, email address, and company name when provided through our contact forms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-4">2. How We Use It</h2>
            <p>Collected information is used exclusively to respond to inquiries, provide project services, and communicate project updates.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-4">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-fg mb-4">4. Third Parties</h2>
            <p>We do not sell, trade, or transfer your personal information to outside parties without your explicit consent.</p>
          </section>

          <p className="pt-10 border-t border-border/30 text-[13px]">Last updated: March 20, 2026</p>
        </div>
      </div>
    </div>
  );
}
