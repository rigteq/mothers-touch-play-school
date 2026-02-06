'use client';

import { Section } from '@/components/ui/Section';
import { Snowflake, Bus, Video, ShieldCheck, MonitorPlay, Gamepad2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const facilities = [
    { icon: Snowflake, title: 'AC Classrooms', desc: 'Fully air-conditioned, dust-free environment for comfort.' },
    { icon: Bus, title: 'Safe Transport', desc: 'GPS-enabled safe transport facility with female attendants.' },
    { icon: Video, title: 'CCTV Surveillance', desc: '24x7 monitoring to ensure the safety and security of every child.' },
    { icon: Gamepad2, title: 'Play Area', desc: 'Spacious indoor and outdoor play zones with safe equipment.' },
    { icon: MonitorPlay, title: 'Smart Classes', desc: 'Audio-visual learning aids for better concept retention.' },
    { icon: ShieldCheck, title: 'Hygiene & Safety', desc: 'Strict hygiene protocols and child-safe infrastructure.' },
];

export function Facilities() {
    return (
        <Section id="facilities" className="bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-20" />

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-secondary text-xs font-bold uppercase tracking-widest border border-slate-700">
                        World Class Amenities
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                        Infrastructure that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Inspires Learning</span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                        Our campus is designed to be a safe haven where learning happens naturally. We provide state-of-the-art facilities that support both academic and physical development.
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                        {['Holistic Curriculum', 'Experienced Faculty', 'Low Student-Teacher Ratio', 'Regular Health Checkups', 'Parenting Workshops', 'Annual Function & Sports Day'].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-300">
                                <CheckCircle2 size={18} className="text-emerald-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {facilities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group"
                        >
                            <item.icon size={32} className="text-secondary mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
