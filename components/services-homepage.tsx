"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { TitleLg, TitleMd }  from '@/components/ui/title'
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
            {/* <Image src="/svg/scissors.svg" height={64} width={64} alt="scissors" className="mx-auto mt-6" /> */}
            <div className="xl:max-w-7xl mx-auto px-5 sm:px-6 py-3">
                <div className="border-b border-gray-300 text-center mb-4 pb-3">
                    <TitleLg>Services</TitleLg>
                </div>
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:px-4">
                    {displayedServices.map((service, index) => {
                        return (
                            <li key={index}>
                                <Link href={service.link} className="service-homepage text-center block mb-3 relative overflow-hidden" >
                                    <Image src={service.picture} alt={service.name} width={375} height={375} className="service-picture mx-auto w-full" />
                                    <div className="service-text pt-3 pb-4 px-4 text-white absolute bottom-0 right-0 left-0">
                                        <div className="mb-4">
                                            <TitleMd>{service.name}</TitleMd>
                                        </div>
                                        <Link href={service.link} className="btn" aria-label={`${service.name} Service`}>
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
                        <button onClick={toggleDisplay} className="btn" aria-label="See More/Less">
                            {showAll ? 'See Less' : 'See More'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}