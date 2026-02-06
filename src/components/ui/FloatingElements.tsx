'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FloatingElements() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 ring-4 ring-white"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} />
                <span className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full border-2 border-white" />
            </a>

            {/* Admission Popup */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 100 }}
                        className="fixed bottom-24 right-6 z-40 w-80 lg:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-primary to-blue-600 p-4 flex justify-between items-center text-white">
                            <div>
                                <h4 className="font-bold text-lg">Admissions Open!</h4>
                                <p className="text-xs text-blue-100">Limited seats for 2026-27</p>
                            </div>
                            <button
                                onClick={() => setShowPopup(false)}
                                className="text-white/80 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-sm text-slate-600">
                                Give your child the best start in life. Enquire now for early bird concessions.
                            </p>
                            <form action="mailto:support@mothertouch.com" method="post" className="space-y-3">
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    className="w-full rounded-md border-slate-200 text-sm px-3 py-2"
                                    required
                                />
                                <Button size="sm" className="w-full bg-secondary hover:bg-amber-600">
                                    Request Call Back
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
