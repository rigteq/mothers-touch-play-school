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
        <Section id="about" className="bg-gradient-to-br from-blue-50 to-indigo-50/30 relative overflow-hidden py-24">

            {/* --- Floating 3D Animals Layer --- */}
            {/* All elements are absolutely positioned and set to z-0 to stay behind text. Pointer events none prevents interference. */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">

                {/* 1. Lion */}
                <motion.img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Lion.png"
                    alt="Cute Lion"
                    initial={{ y: 0, rotate: 0 }}
                    animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 w-24 h-24 lg:w-32 lg:h-32 drop-shadow-xl object-contain opacity-80"
                />

                {/* 2. Giraffe */}
                <motion.img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Giraffe.png"
                    alt="Cute Giraffe"
                    initial={{ y: 0, x: 0 }}
                    animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-20 right-10 w-24 h-24 lg:w-32 lg:h-32 drop-shadow-lg object-contain opacity-80"
                />

                {/* 3. Sun */}
                <motion.img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sun.png"
                    alt="Sun"
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-1/4 w-20 h-20 lg:w-28 lg:h-28 drop-shadow-lg object-contain opacity-80"
                />

                {/* 4. Rabbit */}
                <motion.img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Rabbit.png"
                    alt="Cute Rabbit"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-20 right-20 w-20 h-20 lg:w-28 lg:h-28 drop-shadow-lg object-contain opacity-80"
                />

                {/* 5. Turtle */}
                <motion.img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Turtle.png"
                    alt="Cute Turtle"
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-5 left-1/3 w-20 h-20 lg:w-28 lg:h-28 drop-shadow-md object-contain opacity-80"
                />

                {/* 6. Sheep */}
                <motion.img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Ewe.png"
                    alt="Cute Sheep"
                    animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-40 left-10 w-24 h-24 lg:w-32 lg:h-32 drop-shadow-sm object-contain opacity-80"
                />

                {/* 7. Fish */}
                <motion.img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Tropical%20Fish.png"
                    alt="Cute Fish"
                    animate={{ x: [0, -30, 0], y: [0, 10, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 right-[5%] w-16 h-16 lg:w-24 lg:h-24 drop-shadow-md object-contain opacity-70"
                />
            </div>

            {/* --- Main Content --- */}
            <div className="text-center max-w-4xl mx-auto mb-16 relative z-10 px-4">
                <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">About Mothers Touch</h2>
                <h3 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 drop-shadow-sm leading-tight">
                    Nurturing the <span className="text-primary">Leaders of Tomorrow</span>
                </h3>
                <p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-medium max-w-2xl mx-auto bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/50">
                    At Mothers Touch Play School, Gajraula, we believe that every child is unique and has infinite potential.
                    Our philosophy is centered around the comprehensive development of the child — cognitive, physical,
                    social, and emotional. We provide a safe, loving, and stimulating environment that feels just like a second home.
                </p>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <Card className="h-full border-2 border-white/50 hover:border-blue-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white/90 backdrop-blur-md">
                                <CardContent className="pt-8 text-center flex flex-col items-center h-full p-6">
                                    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-blue-100">
                                        <feature.icon size={36} className="text-secondary" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm font-medium">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
