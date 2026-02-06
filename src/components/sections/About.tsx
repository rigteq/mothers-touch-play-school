'use client';

import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Target, Award, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Target,
        title: 'Our Mission',
        description: 'To provide a stimulating learning environment where children can explore, discover, and learn at their own pace, fostering a lifelong love for learning.'
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'We strive for excellence in every aspect of early childhood education, from our scientifically designed curriculum to our state-of-the-art facilities.'
    },
    {
        icon: Users,
        title: 'Modern Pedagogy',
        description: 'Our curriculum is a blend of Montessori, Play-way, and modern educational practices, designed by experts to ensure holistic development.'
    },
    {
        icon: BookOpen,
        title: 'Values Based',
        description: 'We believe in instilling strong moral values, empathy, and social skills, creating not just smart students, but good human beings.'
    }
];

export function About() {
    return (
        <Section id="about" className="bg-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">About Mothers Touch</h2>
                <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Nurturing the <span className="text-gradient">Leaders of Tomorrow</span></h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                    At Mothers Touch Play School, Gajraula, we believe that every child is unique and has infinite potential.
                    Our philosophy is centered around the comprehensive development of the child — cognitive, physical,
                    social, and emotional. We provide a safe, loving, and stimulating environment that feels just like a second home.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-none shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-slate-50/50">
                            <CardContent className="pt-8 text-center flex flex-col items-center h-full">
                                <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <feature.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
