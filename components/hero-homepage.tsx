import React, { ReactNode } from 'react';
import Link from "next/link";


export default function HeroHomepage() {
    return (
        <section id="hero-homepage" className="relative">
            <div id="hero-bg" className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
            </div>
            <div id="hero-text" className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="text-center pb-12 md:pb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Javier's Barbershop</h1>
                        <div className="max-w-xs mx-auto sm:max-w-none text-center" data-aos="zoom-y-out" data-aos-delay="300">
                            <p>A Barbershop located in Rochester, MN</p>
                            <div>
                                <Link href="/book-appointment" className="btn btn-primary mt-5 mx:auto">
                                    Book an Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
