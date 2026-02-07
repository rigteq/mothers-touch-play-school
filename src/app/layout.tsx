import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FloatingElements } from "@/components/ui/FloatingElements";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mothers Touch Play School | Gajraula's Best Kindergarten & Daycare",
  description: "Mothers Touch Play School in Gajraula provides a world-class holistic learning environment for children. Admissions open for Playgroup, Nursery, LKG, and UKG.",
  keywords: "Play School in Gajraula, Nursery School, Best Kindergarten, Mothers Touch, Preschool Admission",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 selection:bg-secondary selection:text-white`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingElements />
      </body>
    </html>
  );
}
