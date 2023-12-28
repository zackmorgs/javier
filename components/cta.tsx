"use client";

import ReactGA from 'react-ga4';

import Link from "next/link";

import { TitleMd } from "./ui/title";
import { FiCalendar, FiPhone } from "react-icons/fi";


const GA_Stuff = {
    gtmId: 'G-VVRCVF2QG4'
}

ReactGA.initialize(GA_Stuff.gtmId);
export default function Cta() {
    const handleCallClick = function () {
        // Send a custom event
        ReactGA.event({
            category: "conversion",
            action: "call",
            label: "cta"
        });
    }
    return (
        <section id="cta">
            <div className="xl:max-w-7xl mx-auto px-5 sm:px-6 py-3">
                <div id="cta-card" className="px-5 sm:px-6 py-3 bg-white shadow">
                    <div className="mb-4 border-b border-gray-300 pb-4">
                        <TitleMd>Book an Appointment</TitleMd>
                    </div>
                    <div className="flex flex-col md:flex-row">
{/* 
                        <Link href="/book-appointment" className="btn btn-primary md:mr-4">
                            <FiCalendar className="icon inline-block" /> Book an Appointment
                        </Link> */}
                        <Link href="tel:+15073192140" className="btn btn-primary mt-4 md:mt-0 md:mr-4" onClick={handleCallClick}>
                            <FiPhone className="icon inline-block" /> Call
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}