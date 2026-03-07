'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button'; // Will create this next

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[300px] w-[300px] rounded-full bg-secondary/20 blur-3xl opacity-50" />

            <div className="container mx-auto px-4 pt-16 pb-8 lg:pt-24 lg:pb-8 relative z-10">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Mothers Touch Logo" className="h-12 w-auto bg-white rounded-lg p-1" />
                            <span className="text-xl font-bold tracking-tight text-white">
                                Mothers Touch public School
                            </span>
                        </div>
                        <p className="text-base leading-relaxed text-slate-400 max-w-xs">
                            Nurturing young minds with love, care, and excellence. A prestigious institution dedicated to holistic child development in Gajraula.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, href: 'https://www.facebook.com/p/Mothers-touch-public-school-100078304175728/' },
                                { Icon: Instagram, href: 'https://www.instagram.com/p/DTHu8gTkR3Y/' },
                                { Icon: Twitter, href: '#' },
                                { Icon: Youtube, href: '#' },
                            ].map(({ Icon, href }, i) => (
                                <Link key={i} href={href} target={href !== '#' ? '_blank' : undefined} rel={href !== '#' ? 'noopener noreferrer' : undefined} className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white transition-all duration-300">
                                    <Icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { label: 'About Us', href: '#about' },
                                { label: 'Our Programs', href: '#programs' },
                                { label: 'Admissions', href: '#contact' },
                                { label: 'Gallery', href: '#gallery' },
                                { label: 'Admin Portal', href: 'https://freeschoolms.vercel.app/', external: true },
                                { label: 'Facilities', href: '#facilities' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="flex items-center gap-2 text-slate-400 hover:text-secondary transition-colors group"
                                    >
                                        <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-secondary" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                                <span>
                                    Khadh Guzar Road, near Jawharnagar,<br />
                                    Gajraula - 244235, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="h-5 w-5 text-secondary shrink-0" />
                                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="h-5 w-5 text-secondary shrink-0" />
                                <a href="mailto:support@mothertouch.com" className="hover:text-white transition-colors">support@mothertouch.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Lead Gen */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Enquire Now</h3>
                        <p className="text-sm text-slate-400 mb-4">
                            Admissions open for 2026-27. Request a callback from our admissions team.
                        </p>
                        <form action="mailto:support@mothertouch.com" method="post" encType="text/plain" className="space-y-3">
                            <input
                                type="text"
                                placeholder="Parent's Name"
                                className="w-full rounded-lg bg-slate-800 border-none px-4 py-3 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-secondary focus:bg-slate-700 transition-all"
                                required
                            />
                            <input
                                type="tel"
                                inputMode="numeric"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                placeholder="Phone Number (10 digits)"
                                onKeyDown={(e) => {
                                    const allowed = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
                                    if (!allowed.includes(e.key) && !/^[0-9]$/.test(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                                onPaste={(e) => {
                                    const pasted = e.clipboardData.getData('text');
                                    if (!/^[0-9]+$/.test(pasted)) e.preventDefault();
                                }}
                                className="w-full rounded-lg bg-slate-800 border-none px-4 py-3 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-secondary focus:bg-slate-700 transition-all"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
                            >
                                Request Callback
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Mothers Touch public School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
