import Link from "next/link";

import { TitleMd } from "./ui/title";
import { FiCalendar, FiPhone } from "react-icons/fi";

export default function Cta() {
    return (
        <section id="cta">
            <div className="xl:max-w-7xl mx-auto px-5 sm:px-6 py-3">
                <div id="cta-card" className="px-5 sm:px-6 py-3 rounded">
                    <div className="mb-4 border-b border-gray-300 pb-4">
                        <TitleMd>Book an Appointment</TitleMd>
                    </div>
                    <div className="flex flex-col md:flex-row">

                        <Link href="/book-appointment" className="btn btn-primary md:mr-4">
                            <FiCalendar className="icon inline-block" /> Book an Appointment
                        </Link>
                        <Link href="tel:+15073192140" className="btn btn-secondary mt-4 md:mt-0 md:mr-4">
                            <FiPhone className="icon inline-block" /> Call
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}