import React, { ReactNode } from 'react';



export default function HeroHomepage() {
    return (
        <section id="hero-homepage" className="relative">
            <div id="hero-text" className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="text-center pb-12 md:pb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Javier's Barbershop</h1>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                            <p>Rochester's Best Men's Barbershop</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
