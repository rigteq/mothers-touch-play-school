'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-[9999] bg-white/95 backdrop-blur-md shadow-sm h-20 transition-all duration-300">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-full" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                        <span className="sr-only">Mothers Touch Play School</span>
                        <img src="/logo.png" alt="Mothers Touch Logo" className="h-16 w-auto" />
                        <span className="text-xl font-bold tracking-tight text-slate-900">
                            Mothers Touch
                        </span>
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-lg p-3 text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-7 w-7" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-slate-800 hover:text-secondary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                    {/* Parent Portal Button - Outlined Style */}
                    <Link
                        href="#parent-portal"
                        className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold border border-primary/20 text-primary hover:bg-primary/5 transition-all"
                    >
                        <UserCheck className="h-4 w-4" />
                        Parent Portal
                    </Link>

                    {/* Admissions Button - Filled Style */}
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 rounded-full bg-secondary px-5 py-1.5 text-sm font-semibold text-white shadow-md hover:bg-amber-500 hover:scale-105 transition-all"
                    >
                        <Phone className="h-4 w-4" />
                        Admissions Open
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-y-0 right-0 z-[10000] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden shadow-2xl h-screen"
                    >
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                <img src="/logo.png" alt="Mothers Touch Logo" className="h-14 w-auto" />
                                <span className="text-base font-bold text-slate-900">Mothers Touch</span>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-slate-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-800 hover:bg-gray-50"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6 space-y-3">
                                    <Link
                                        href="#parent-portal"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-blue-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Parent Portal
                                    </Link>
                                    <Link
                                        href="#contact"
                                        className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-secondary text-center shadow-sm"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Apply for Admission
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
