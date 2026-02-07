'use client';

import { Button, buttonVariants } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Heart, Shapes } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col pt-20 overflow-hidden bg-slate-50">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent" />
                <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

                {/* Animated Shapes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 right-10 text-blue-200 opacity-20"
                >
                    <Shapes size={120} />
                </motion.div>
            </div>

            {/* 1. Full Width Hero Image with Curtain Animation */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-[70vh] lg:h-[85vh] flex-shrink-0 bg-slate-900 overflow-hidden shadow-2xl border-b-4 border-white z-20 group"
            >

                {/* --- Curtain Animation --- */}
                {/* Left Curtain */}
                <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-0 left-0 bottom-0 w-1/2 z-50 origin-left pointer-events-none"
                    style={{
                        background: "repeating-linear-gradient(90deg, #b91c1c 0%, #991b1b 10%, #7f1d1d 20%, #991b1b 30%, #b91c1c 40%)",
                        boxShadow: "10px 0 20px rgba(0,0,0,0.5)"
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                </motion.div>

                {/* Right Curtain */}
                <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-0 right-0 bottom-0 w-1/2 z-50 origin-right pointer-events-none"
                    style={{
                        background: "repeating-linear-gradient(90deg, #b91c1c 0%, #991b1b 10%, #7f1d1d 20%, #991b1b 30%, #b91c1c 40%)",
                        boxShadow: "-10px 0 20px rgba(0,0,0,0.5)"
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                </motion.div>


                {/* Main Image */}
                <div className="w-full h-full relative flex items-center justify-center bg-slate-800">
                    <img
                        src="/hero-banner.png"
                        alt="Mothers Touch School Welcome Banner"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
                </div>
            </motion.div>

            {/* 2. Text Content Below */}
            <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl lg:text-7xl font-bold leading-tight text-slate-900 tracking-tight"
                >
                    Where Learning Begins With <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                        Love & Care
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg lg:text-2xl text-slate-600 leading-relaxed max-w-3xl"
                >
                    Experience world-class early childhood education at Mothers Touch, Gajraula. We nurture young minds with a perfect blend of modern curriculum and traditional values.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 pt-4"
                >
                    <Link
                        href="#contact"
                        className={buttonVariants({ size: 'lg', className: "rounded-full gap-2 text-lg h-14 px-10 shadow-lg hover:shadow-xl shadow-blue-200" })}
                    >
                        Enquire Now <ArrowRight size={20} />
                    </Link>
                    <Link
                        href="#programs"
                        className={buttonVariants({ size: 'lg', variant: "outline", className: "rounded-full text-lg h-14 px-10 border-2 bg-white/50 hover:bg-white" })}
                    >
                        Explore Programs
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex items-center gap-4 text-sm font-medium text-slate-500 pt-8"
                >
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Parent Avatar" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <span className="text-xs uppercase tracking-wide font-bold text-slate-400">Trusted by 500+ Parents</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
