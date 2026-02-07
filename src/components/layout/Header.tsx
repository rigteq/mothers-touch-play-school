'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-all duration-300',
                isScrolled ? 'glass shadow-md py-2' : 'bg-transparent py-4'
            )}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="sr-only">Mothers Touch Play School</span>
                        {/* Logo Icon Placeholder */}
                        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                            M
                        </div>
                        <span className={cn("text-2xl font-bold tracking-tight", isScrolled ? "text-primary" : "text-primary lg:text-white")}>
                            Mothers Touch
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-foreground lg:text-white")} aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-semibold leading-6 transition-colors hover:text-secondary",
                                isScrolled ? "text-gray-900" : "text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                    <Link
                        href="#contact"
                        className={cn(
                            "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-inset transition-all backdrop-blur-sm",
                            isScrolled
                                ? "bg-primary/10 text-primary ring-primary/20 hover:bg-primary/20"
                                : "bg-white/10 text-white ring-white/20 hover:bg-white/20"
                        )}
                    >
                        <UserCheck className="h-4 w-4" />
                        Parent Portal
                    </Link>
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-500/30 hover:bg-amber-400 hover:scale-105 transition-all"
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
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden"
                    >
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                                    M
                                </div>
                                <span className="text-xl font-bold text-primary">Mothers Touch</span>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="#contact"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 bg-secondary/10"
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
