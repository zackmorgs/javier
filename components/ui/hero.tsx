import React, { ReactNode } from 'react';

interface HeroProps {
    title: string;
    children: ReactNode;
}

export default function Hero({ title, children }: HeroProps) {
    return (
        <section id="hero" className="relative">
            <div id="hero-bg" className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
            </div>
            <div id="hero-text" className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-6 md:pt-40 md:pb-20">
                    <div className="text-center pb-6 md:pb-16">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">{title}</h1>
                        <div className="max-w-xs mx-auto sm:max-w-none" data-aos="zoom-y-out" data-aos-delay="300">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
