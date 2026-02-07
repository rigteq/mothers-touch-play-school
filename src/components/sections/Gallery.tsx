'use client';

import { Section } from '@/components/ui/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Using ONLY the specific photos provided by the user (Circle, Group, Stage, Karate)
// Note: User must rename their uploaded images to match these filenames in the public folder.
const galleryImages = [
    { src: '/gallery-circle.png', alt: 'Kids actively learning in circle time' },
    { src: '/gallery-group.png', alt: 'Happy students and teachers group photo' },
    { src: '/gallery-stage.png', alt: 'Annual function stage performance' },
    { src: '/gallery-karate.png', alt: 'Karate and physical education class' },
    { src: '/gallery-staff.png', alt: 'Our dedicated staff members' },
];

// Duplicate the array to create a seamless infinite loop
const marqueeImages = [...galleryImages, ...galleryImages, ...galleryImages];

export function Gallery() {
    return (
        <Section id="gallery" className="bg-slate-50 overflow-hidden py-20">
            <div className="text-center mb-12 px-4">
                <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">Our Campus Life</h2>
                <h3 className="text-3xl lg:text-5xl font-bold text-slate-900">
                    Moments of <span className="text-primary">Joy & Learning</span>
                </h3>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden group">
                {/* Gradient Overlays for smooth fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-33.33%"] }} // Move by 1/3 since we have 3 sets of images
                    transition={{
                        ease: "linear",
                        duration: 25, // Adjust speed: higher = slower
                        repeat: Infinity,
                    }}
                    whileHover={{ animationPlayState: "paused" }} // Note: Framer Motion pure 'animate' doesn't support playState pause easily this way, so we use a different approach or rely on hover dragging if needed. 
                    // Actually, let's use a simpler drag-compatible approach or just keep it auto-scrolling. 
                    // To add "User Interactive", drag constraints are great.
                    drag="x"
                    dragConstraints={{ left: -1000, right: 0 }}
                >
                    {marqueeImages.map((img, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[200px] lg:w-[450px] lg:h-[300px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-grab active:cursor-grabbing"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover pointer-events-none" // Prevent default drag behavior
                            />
                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </motion.div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-8 italic">
                * Drag to explore our gallery manually
            </p>
        </Section>
    );
}
