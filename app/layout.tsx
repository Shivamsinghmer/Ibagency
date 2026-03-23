import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, DM_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "CodeMonks — Digital Product Studio",
  description: "Strategy, design, and engineering for ambitious startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", "antialiased", bricolage.variable, dmMono.variable, "font-sans", inter.variable)}
    >
      <body className="bg-bg/85 text-fg font-sans relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 -z-10 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 -z-[5] bg-bg/70 backdrop-blur-[2px]" />
        {children}
      </body>

    </html>
  );
}


