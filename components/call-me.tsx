import Link from "next/link";

import { FiCalendar, FiPhone } from "react-icons/fi";

export default function CallMe() {
    return (
        <section id="call-me">
            <div className="xl:max-w-7xl mx-auto px-5 sm:px-6 py-3">
                <h2 className="text-2xl">Setup an Appointment</h2>
                <div className="flex flex-col md:flex-row">

                    <Link href="/book-appointment" className="btn btn-primary md:mr-4">
                        <FiCalendar className="icon inline-block" /> Book an Appointment
                    </Link>
                    <Link href="tel:+15073192140" className="btn btn-secondary mt-4 md:mt-0 md:mr-4">
                        <FiPhone className="icon inline-block" /> Call
                    </Link>
                </div>
            </div>
        </section>
    )
}