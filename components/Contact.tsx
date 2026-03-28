'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { motion } from 'motion/react';
import { Mail, Send, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-8 md:py-12 w-full bg-bg px-6" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div>
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-chart-2 inline-block"></span>
              <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] uppercase text-muted-foreground font-bold">
                GET IN TOUCH
              </span>
            </span>
            <h2 className="text-[36px] md:text-[clamp(36px,4vw,60px)] font-bricolage font-bold leading-[1.0] tracking-[-0.04em] mb-6 text-fg">
              Let&apos;s build something <br />
              <span className="text-chart-2 italic font-medium">extraordinary.</span>
            </h2>
            <p className="text-muted text-[15px] md:text-[16px] leading-[1.6] mb-8 max-w-md">
              Have an idea? Or just want to say hello? Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-chart-2 transition-all group-hover:bg-chart-2 group-hover:text-white group-hover:scale-110 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground mb-1">Email Us</p>
                  <a href="mailto:hello@codemonks.com" className="text-[16px] font-semibold text-fg hover:text-chart-2 transition-colors">hello@codemonks.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white border border-border/40 rounded-[40px] p-6 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)]">
            {!isSubmitted ? (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted ml-1 font-semibold">Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter Your Name" 
                      required
                      className="w-full bg-white border border-border/80 rounded-2xl px-5 py-4 text-[14px] focus:outline-none focus:ring-4 focus:ring-chart-2/5 focus:border-chart-2 transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted ml-1 font-semibold">Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter Your Email" 
                      required
                      className="w-full bg-white border border-border/80 rounded-2xl px-5 py-4 text-[14px] focus:outline-none focus:ring-4 focus:ring-chart-2/5 focus:border-chart-2 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted ml-1 font-semibold">Designation</label>
                    <input 
                      type="text" 
                      placeholder="Enter Your Designation" 
                      className="w-full bg-white border border-border/80 rounded-2xl px-5 py-4 text-[14px] focus:outline-none focus:ring-4 focus:ring-chart-2/5 focus:border-chart-2 transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted ml-1 font-semibold">Company</label>
                    <input 
                      type="text" 
                      placeholder="Enter Your Company" 
                      className="w-full bg-white border border-border/80 rounded-2xl px-5 py-4 text-[14px] focus:outline-none focus:ring-4 focus:ring-chart-2/5 focus:border-chart-2 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted ml-1 font-semibold">Describe your needs</label>
                  <textarea 
                    rows={4} 
                    placeholder="Briefly describe your project requirements..." 
                    required
                    className="w-full bg-white border border-border/80 rounded-2xl px-5 py-4 text-[14px] focus:outline-none focus:ring-4 focus:ring-chart-2/5 focus:border-chart-2 transition-all resize-none shadow-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-fg text-white rounded-full py-4 text-[15px] font-semibold flex items-center justify-center gap-2 hover:bg-fg/90 transition-all active:scale-[0.98] mt-4 shadow-lg shadow-fg/20 group"
                >
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-chart-2/10 flex items-center justify-center text-chart-2 mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-fg mb-2 font-bricolage">Message Sent!</h3>
                  <p className="text-muted text-[15px] leading-relaxed max-w-[280px] mx-auto">
                    Thanks for reaching out. We&apos;ll review your requirements and get back to you soon.
                  </p>
                </div>
                <div className="w-full pt-4 border-t border-border/50">
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">Want to skip the wait?</p>
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-chart-2 text-white rounded-full py-4 text-[15px] font-semibold flex items-center justify-center gap-2 hover:bg-chart-2/90 transition-all active:scale-[0.98] shadow-lg shadow-chart-2/20 group"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a discovery call
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
