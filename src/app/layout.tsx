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
  metadataBase: new URL('https://motherstouchschool.com'),
  title: "Mothers Touch public School | Gajraula's Best Kindergarten & Daycare",
  description: "Mothers Touch public School in Gajraula provides a world-class holistic learning environment for children. Admissions open for Playgroup, Nursery, LKG, and UKG.",
  keywords: "public School in Gajraula, Nursery School, Best Kindergarten, Mothers Touch, Preschool Admission",
  robots: "index, follow",
  openGraph: {
    title: "Mothers Touch public School | Gajraula's Best Kindergarten & Daycare",
    description: "Mothers Touch public School in Gajraula provides a world-class holistic learning environment for children. Admissions open for Playgroup, Nursery, LKG, and UKG.",
    url: "https://motherstouchschool.com", // Replace with actual URL
    siteName: "Mothers Touch public School",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Mothers Touch public School Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mothers Touch public School | Gajraula's Best Kindergarten & Daycare",
    description: "Mothers Touch public School in Gajraula provides a world-class holistic learning environment for children. Admissions open for Playgroup, Nursery, LKG, and UKG.",
    images: ["/logo.png"],
  },
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
