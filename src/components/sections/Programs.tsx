'use client';

import { Section } from '@/components/ui/Section';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { Baby, Palette, PencilRuler, GraduationCap, ArrowRight } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const programs = [
    {
        title: 'Play Group',
        age: '1.5 - 2.5 Years',
        description: 'A fun-filled introduction to social interaction and sensory exploration. We focus on basic motor skills and making friends.',
        icon: Baby,
        color: 'bg-pink-100 text-pink-600',
        border: 'border-pink-200'
    },
    {
        title: 'Nursery',
        age: '2.5 - 3.5 Years',
        description: 'Building foundations in language, numbers, and creativity through structured play. Introduction to alphabets and phonics.',
        icon: Palette,
        color: 'bg-blue-100 text-blue-600',
        border: 'border-blue-200'
    },
    {
        title: 'LKG',
        age: '3.5 - 4.5 Years',
        description: 'Developing reading, writing, and logical thinking skills. Focus on confidence building and public speaking basics.',
        icon: PencilRuler,
        color: 'bg-green-100 text-green-600',
        border: 'border-green-200'
    },
    {
        title: 'UKG',
        age: '4.5 - 5.5 Years',
        description: 'Preparing for primary school with advanced concepts in math, science, and language. Emphasis on independent learning.',
        icon: GraduationCap,
        color: 'bg-amber-100 text-amber-600',
        border: 'border-amber-200'
    }
];

export function Programs() {
    return (
        <Section id="programs" className="bg-slate-50 relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
                <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">Our Curriculum</h2>
                <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Age-Appropriate <span className="text-gradient">Programs</span></h3>
                <p className="text-lg text-slate-600">
                    Our scientific curriculum is tailored to the developmental needs of each age group, ensuring a seamless transition from home to school.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {programs.map((program, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className={`h-full border-2 ${program.border} hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
                            <CardHeader className="pb-4">
                                <div className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center mb-4`}>
                                    <program.icon size={28} />
                                </div>
                                <CardTitle className="text-2xl font-bold text-slate-800">{program.title}</CardTitle>
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{program.age}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 mb-6 line-clamp-4">{program.description}</p>
                                <Link
                                    href="#contact"
                                    className={buttonVariants({ variant: 'link', className: "p-0 h-auto text-secondary hover:text-amber-700 font-semibold group flex items-center gap-2" })}
                                >
                                    Enquire Now
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
