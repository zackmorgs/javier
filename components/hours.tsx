import Link from "next/link"
import { TitleLg } from '@/components/ui/title'
import { FiClock, FiCalendar, FiPhone } from "react-icons/fi";

export default function Hours() {
    const availability = [
        {
            dow: "Sunday",
            hours: <span className="text-red-500"><FiClock className="inline-block icon" /> Closed</span>
        },
        {
            dow: "Monday",
            hours: <span>9:30am-5:30pm</span>
        },
        {
            dow: "Tuesday",
            hours: <span>9:30am-5:30pm</span>
        },
        {
            dow: "Wednesday",
            hours: <span>9:30am-5:30pm</span>
        },
        {
            dow: "Thursday",
            hours: <span>9:30am-5:30pm</span>
        },
        {
            dow: "Friday",
            hours: <span>9:30am-5:30pm</span>
        },
        {
            dow: "Saturday",
            hours: <span>9:30am-5:30pm</span>
        }
    ]
    return (
        <section id="availability" className="w-full md:max-w-sm">
            <div className="mx-auto px-5 sm:px-6 py-3">
                <div className="mb-4 border-b border-gray-300 pb-4">
                    <div className="text-center">
                        <TitleLg>Availability</TitleLg>
                    </div>
                    <small className="text-gray-600 mt-2 block">
                        <i className="text-center mx:auto block">Hours may vary depending on Holidays, vacations, time-off etc.</i>
                    </small>
                </div>
                <ul className="px-2">
                    {availability.map((day, index, array) => {
                        if ((array.length - 1) !== index) {
                            return (
                                <li key={index}>
                                    <span className="flex flex-row justify-between border-b border-gray-200 pb-2 pt-2">
                                        <h4>{day.dow}</h4>
                                        {day.hours}
                                    </span>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index}>
                                    <span className="flex flex-row justify-between pb-2 pt-2">
                                        <h4>{day.dow}</h4>
                                        {day.hours}
                                    </span>
                                </li>
                            )
                        }
                    })}
                </ul>
                <div className="block md:flex justify-center mt-4">
                    {/* <Link href="/book-appointment" className="btn">
                        <FiCalendar className="inline-block icon" /> Book an Appointment
                    </Link> */}
                    <Link href="tel:+15073192140" className="btn btn-primary">
                        <FiPhone className="icon inline-block" /> Call
                    </Link>
                </div>
            </div>
        </section>
    )
}