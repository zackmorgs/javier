"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { FiArrowRight } from "react-icons/fi";

export default function Services() {
    // State to control the display of services
    const [showAll, setShowAll] = useState(false);

    // Function to toggle the display
    const toggleDisplay = () => {
        setShowAll(!showAll);
    };
    const displayedServices = showAll ? services : services.slice(0, 4);

    return (
        <section id="services-homepage" className="pb-3">
            <div className="xl:max-w-7xl mx-auto px-5 sm:px-6 py-3">
                <h2 className="text-3xl text-center mt-2 mb-6 font-bold">Services</h2>
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {displayedServices.map((service) => {
                        return (
                            <li>
                                <Link href={service.link} className="service-homepage text-center bg-white block mb-3">
                                    <Image src={service.picture} alt={service.name} width={375} height={375} className="mx-auto w-full" />
                                    <div className="py-3">
                                        <h3 className="h3 mb-6 font-bold text-2xl">{service.name}</h3>
                                        <Link href={service.link} className="btn">
                                            Learn More <FiArrowRight className="icon inline-block" />
                                        </Link>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                {services.length > 4 && (
                    <div className="text-center mt-4">
                        <button onClick={toggleDisplay} className="btn">
                            {showAll ? 'See Less' : 'See More'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}