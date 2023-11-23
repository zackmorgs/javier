import React, { ReactNode } from 'react';
import Link from "next/link";
import { TitleXL } from '@/components/ui/title'
import { FiCalendar, FiMapPin, FiPhone } from "react-icons/fi";

export default function HeroHomepage() {
    return (
        <section id="hero-homepage" className="relative">
            <div id="hero-bg" className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1 w-full h-full" aria-hidden="true">
                {/* <video autoPlay muted loop className="w-full">
                    <source src="/video/video.mp4"/>
                </video> */}
            </div>
            <div id="hero-text" className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className=" pt-32 pb-8 md:pt-40 md:pb-20">
                    <div className="text-center pb-12 md:pb-16">
                        <div className="mb-3">
                            <TitleXL>Javier's Barbershop</TitleXL>
                        </div>
                        <div className="max-w-xs mx-auto sm:max-w-none text-center" data-aos="zoom-y-out" data-aos-delay="300">
                            <p>A barbershop located in Rochester, MN</p>
                            <div className="flex flex-col md:flex md:flex-row lg:flex-row justify-center mt-6">
                                <Link href="/book-appointment" className="btn btn-primary md:mr-4">
                                    <FiCalendar className="icon inline-block" /> Book an Appointment
                                </Link>
                                <Link href="https://maps.app.goo.gl/7NZjuGxVRSdjGkTq5" target="_blank" className="btn btn-tertiary mt-4 md:mt-0 md:mr-4 ">
                                    <FiMapPin className="icon inline-block" /> Directions
                                </Link>
                                <Link href="tel:+15073192140" className="btn btn-secondary mt-4 md:mt-0">
                                    <FiPhone className="icon inline-block" /> Call
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
