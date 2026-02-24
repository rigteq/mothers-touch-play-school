'use client';

import { Section } from '@/components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Gallery images from the public folder (Gallery-1 to Gallery-110)
const galleryImages = Array.from({ length: 110 }, (_, i) => ({
    id: i + 1,
    src: `/Gallery-${i + 1}.jpeg`,
    alt: `Mothers Touch Public School - Gallery Photo ${i + 1}`,
}));

// Duplicate the array to create a seamless infinite loop
const marqueeImages = [...galleryImages, ...galleryImages, ...galleryImages];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

    useEffect(() => {
        if (containerRef.current) {
            const contentWidth = containerRef.current.scrollWidth;
            const containerWidth = containerRef.current.offsetWidth;
            setDragConstraints({
                left: -(contentWidth - containerWidth),
                right: 0,
            });
        }
    }, [marqueeImages.length]);

    const activeImage = selectedImage !== null
        ? galleryImages.find(img => img.id === selectedImage)
        : null;

    const navigateImage = (direction: 'next' | 'prev') => {
        if (selectedImage === null) return;
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
        let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

        if (nextIndex >= galleryImages.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = galleryImages.length - 1;

        setSelectedImage(galleryImages[nextIndex].id);
    };

    return (
        <Section id="gallery" className="bg-slate-50 overflow-hidden py-20">
            <div className="text-center mb-12 px-4">
                <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-3">Our Campus Life</h2>
                <h3 className="text-3xl lg:text-5xl font-bold text-slate-900">
                    Moments of <span className="text-primary">Joy & Learning</span>
                </h3>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden group px-4">
                {/* Gradient Overlays for smooth fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                <motion.div
                    ref={containerRef}
                    className="flex gap-4 lg:gap-6 w-max py-4 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={dragConstraints}
                    dragElastic={0.1}
                    onDragStart={() => setIsPaused(true)}
                    onDragEnd={() => setIsPaused(false)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    animate={(!isPaused && selectedImage === null) ? { x: ["0%", "-33.333%"] } : undefined}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 180,
                            ease: "linear",
                        }
                    }}
                >
                    {marqueeImages.map((img, index) => (
                        <motion.div
                            key={`${img.id}-${index}`}
                            className="relative w-[280px] h-[190px] lg:w-[400px] lg:h-[280px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md border-4 border-white transition-shadow duration-300 hover:shadow-xl group/item"
                            whileHover={{ y: -5, scale: 1.02 }}
                            onClick={() => setSelectedImage(img.id)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover pointer-events-none"
                            />
                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
                                    View Image
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-8 italic">
                * Drag to explore our gallery | Click any image to enlarge
            </p>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage !== null && activeImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 lg:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute left-4 lg:left-10 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors hidden md:block"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('prev');
                            }}
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            className="absolute right-4 lg:right-10 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors hidden md:block"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('next');
                            }}
                        >
                            <ChevronRight size={32} />
                        </button>

                        <motion.div
                            key={selectedImage}
                            initial={{ scale: 0.9, opacity: 0, x: 20 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            exit={{ scale: 0.9, opacity: 0, x: -20 }}
                            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center touch-none"
                            onClick={(e) => e.stopPropagation()}
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={0.7}
                            onDragEnd={(_, info) => {
                                const swipeThreshold = 50;
                                const closeThreshold = 100;

                                // Vertical drag to close (Scroll up or down)
                                if (Math.abs(info.offset.y) > closeThreshold) {
                                    setSelectedImage(null);
                                    return;
                                }

                                // Horizontal drag for navigation
                                if (info.offset.x < -swipeThreshold) {
                                    navigateImage('next');
                                } else if (info.offset.x > swipeThreshold) {
                                    navigateImage('prev');
                                }
                            }}
                        >
                            <motion.button
                                className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 z-50 p-2 lg:p-3 bg-white text-slate-900 shadow-2xl rounded-full transition-transform hover:scale-110 active:scale-95 border-2 border-slate-200"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                            >
                                <X size={24} className="lg:w-8 lg:h-8" />
                            </motion.button>

                            <img
                                src={activeImage.src}
                                alt={activeImage.alt}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border-2 border-white/20 select-none pointer-events-none"
                            />
                            <p className="text-white mt-6 text-lg font-medium tracking-wide">
                                {activeImage.alt}
                            </p>
                            <div className="text-white/60 mt-2 text-sm">
                                Image {galleryImages.findIndex(img => img.id === selectedImage) + 1} of {galleryImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
