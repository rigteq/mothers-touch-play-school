'use client';

import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

const images = [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&w=600&q=80',
    'https://images.unsplash.com/photo-1587654780291-39c940483713?ixlib=rb-4.0.3&w=600&q=80',
    'https://images.unsplash.com/photo-1560785496-fac97384f708?ixlib=rb-4.0.3&w=600&q=80',
    'https://images.unsplash.com/photo-1545558014-a69f98462006?ixlib=rb-4.0.3&w=600&q=80',
    'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&w=600&q=80',
    'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&w=600&q=80',
];

export function Gallery() {
    return (
        <Section id="gallery" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">Our Campus</h2>
                <h3 className="text-3xl lg:text-5xl font-bold text-slate-900">Life at <span className="text-gradient">Mothers Touch</span></h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
                {images.map((src, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative group
                            ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                            ${idx === 4 ? 'md:col-span-2' : ''}
                        `}
                    >
                        <img
                            src={src}
                            alt={`Gallery image ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
