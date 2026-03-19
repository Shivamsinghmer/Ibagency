import type { Metadata } from "next";
import { Fjalla_One, Arimo } from "next/font/google";
import "./globals.css";

const fjalla = Fjalla_One({
  variable: "--font-fjalla",
  subsets: ["latin"],
  weight: "400",
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Buildra — Digital Agency",
  description: "We Build Web & Mobile Apps That Users Actually Want to Use",
  openGraph: {
    title: "Buildra — Digital Agency",
    description: "Digital Studio — Est. 2020",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fjalla.variable} ${arimo.variable} scroll-smooth antialiased`}
    >
      <body className="bg-bg text-fg font-sans selection:bg-accent-pink/20">
        {children}
      </body>
    </html>
  );
}


