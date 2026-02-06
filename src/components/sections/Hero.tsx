'use client';

import { Button, buttonVariants } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, Heart, Shapes } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-100/50 to-transparent" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

                {/* Animated Shapes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 text-blue-200 opacity-20"
                >
                    <Shapes size={120} />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-primary text-sm font-semibold"
                    >
                        <Sparkles size={16} className="text-secondary" />
                        <span>Admissions Open for 2024-2025</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900 tracking-tight"
                    >
                        Where Learning Begins With <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                            Love & Care
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        Experience world-class early childhood education at Mothers Touch, Gajraula. We nurture young minds with a perfect blend of modern curriculum and traditional values in a safe, homely environment.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="#contact"
                            className={buttonVariants({ size: 'lg', className: "rounded-full gap-2 text-lg h-14 px-8" })}
                        >
                            Enquire Now <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#programs"
                            className={buttonVariants({ size: 'lg', variant: "outline", className: "rounded-full text-lg h-14 px-8 border-2" })}
                        >
                            Explore Programs
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center gap-4 text-sm font-medium text-slate-500 pt-4"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={16} className="fill-secondary text-secondary" />
                            ))}
                        </div>
                        <span>Trusted by 500+ Parents</span>
                    </motion.div>
                </div>

                {/* Right Content - Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative lg:h-[600px] flex items-center justify-center p-8"
                >
                    {/* Abstract Background Blotches behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-amber-50 rounded-[3rem] rotate-3 transform shadow-2xl" />

                    {/* Main Image Container */}
                    <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-white bg-slate-200 group">
                        {/* Using a placeholder service or abstract gradient if real image not available. 
                 Ideally, this should be the generated image. 
                 For now, creating a high-quality gradient placeholder with text */}
                        <div className="w-full h-full bg-slate-200 relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-amber-500/10 z-0"></div>
                            {/* Placeholder for UFHD Image */}
                            <div className="text-center z-10 p-8">
                                <p className="text-slate-400 text-sm font-mono mb-2">REPLACE WITH UFHD IMAGE</p>
                                <p className="text-slate-500 font-semibold">Kids Playing / Learning Environment</p>
                            </div>
                            {/* Simulated Image Content */}
                            <img
                                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Happy kids learning"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg border border-white/50 max-w-xs"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-green-100 rounded-full text-green-600">
                                        <Heart size={20} className="fill-current" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">Holistic Growth</p>
                                        <p className="text-xs text-slate-500">Focus on Mind, Body & Soul</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
