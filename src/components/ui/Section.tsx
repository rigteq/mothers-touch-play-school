import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    backgroundImage?: string;
}

export function Section({ id, className, children, backgroundImage }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("relative py-20 lg:py-32 overflow-hidden", className)}
        >
            {backgroundImage && (
                <div className="absolute inset-0 -z-10">
                    <img
                        src={backgroundImage}
                        alt="Background"
                        className="h-full w-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95" />
                </div>
            )}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {children}
            </div>
        </section>
    );
}
