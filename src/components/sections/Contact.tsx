'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ThankYouPopup } from '@/components/ui/ThankYouPopup';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Show thank you popup immediately
        setShowThankYou(true);
        // Submit the form to FormSubmit.co after a short delay
        setTimeout(() => {
            (e.currentTarget as HTMLFormElement).submit();
        }, 500);
    };
    return (
        <Section id="contact" className="bg-white">
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Form Details */}
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Start Your Child's <br />
                        <span className="text-secondary">Journey Today</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Admissions are open for the upcoming academic session. Visit us for a campus tour or fill out the form to schedule a counseling session.
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Visit Campus</h4>
                                <p className="text-slate-600">
                                    Khadh Guzar Road, near Jawharnagar,<br />
                                    Gajraula - 244235
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center text-secondary shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Call Us</h4>
                                <p className="text-slate-600">+91 9997024689</p>
                                <p className="text-slate-500 text-sm">Mon - Sat, 9:00 AM - 5:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
                                <p className="text-slate-600">motherstouch2018a@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Admission Enquiry</h3>

                    <form action="https://formsubmit.co/motherstouch2018a@gmail.com" method="POST" className="space-y-4">
                        <input type="text" name="_honey" style={{ display: 'none' }} />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="New Admission Enquiry - Mothers Touch School" />
                        <input type="hidden" name="_template" value="box" />

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Child's Name</label>
                                <input type="text" name="child_name" className="w-full rounded-lg border-slate-200 focus:ring-primary focus:border-primary px-4 py-2 border" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Child's Age</label>
                                <input type="text" name="child_age" className="w-full rounded-lg border-slate-200 focus:ring-primary focus:border-primary px-4 py-2 border" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Parent's Name</label>
                            <input type="text" name="parent_name" className="w-full rounded-lg border-slate-200 focus:ring-primary focus:border-primary px-4 py-2 border" required />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Mobile Number</label>
                            <input
                                type="tel"
                                name="phone"
                                className="w-full rounded-lg border-slate-200 focus:ring-primary focus:border-primary px-4 py-2 border"
                                required
                                pattern="[0-9]*"
                                onInput={(e) => {
                                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                                }}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Program Interested In</label>
                            <select name="program" className="w-full rounded-lg border-slate-200 focus:ring-primary focus:border-primary px-4 py-2 border">
                                <option>Play Group</option>
                                <option>Nursery</option>
                                <option>LKG</option>
                                <option>UKG</option>
                                <option>1st to 5th</option>
                                <option>6th to 8th</option>
                            </select>
                        </div>

                        <Button type="submit" className="w-full text-lg h-12 mt-2 bg-slate-900 hover:bg-slate-800">
                            Submit Enquiry
                        </Button>
                        <p className="text-xs text-center text-slate-400 mt-4">
                            Our admissions team will contact you within 24 hours.
                        </p>
                    </form>
                </div>
            </div>

            {/* Thank You Popup */}
            <ThankYouPopup
                isOpen={showThankYou}
                onClose={() => setShowThankYou(false)}
            />
        </Section>
    );
}
