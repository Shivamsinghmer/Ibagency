'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

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

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-chart-2 transition-all group-hover:bg-chart-2 group-hover:text-white group-hover:scale-110 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground mb-1">Call Us</p>
                  <a href="tel:+1234567890" className="text-[16px] font-semibold text-fg hover:text-chart-2 transition-colors">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-chart-2 transition-all group-hover:bg-chart-2 group-hover:text-white group-hover:scale-110 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground mb-1">Visit Us</p>
                  <p className="text-[16px] font-semibold text-fg">Remote First, Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white border border-border/80 rounded-[32px] p-6 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[12px] font-mono uppercase tracking-[0.1em] text-muted ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-bg border border-border/60 rounded-xl px-5 py-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-chart-2/20 focus:border-chart-2 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-mono uppercase tracking-[0.1em] text-muted ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-bg border border-border/60 rounded-xl px-5 py-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-chart-2/20 focus:border-chart-2 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-mono uppercase tracking-[0.1em] text-muted ml-1">Subject</label>
                <select className="w-full bg-bg border border-border/60 rounded-xl px-5 py-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-chart-2/20 focus:border-chart-2 transition-all appearance-none">
                  <option>Product Design</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-mono uppercase tracking-[0.1em] text-muted ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-bg border border-border/60 rounded-xl px-5 py-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-chart-2/20 focus:border-chart-2 transition-all resize-none"
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
          </div>

        </div>
      </div>
    </section>
  );
}
