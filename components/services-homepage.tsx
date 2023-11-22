import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { FiArrowRight } from "react-icons/fi";

export default function Services() {

    return (
        <section id="services-homepage" className="pb-3">
            <div className="mx-auto px-5 sm:px-6 py-3">
                <h2 className="text-3xl text-center mt-2 mb-6 font-bold">Services</h2>
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {services.map((service) => {
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
            </div>
        </section>
    )
}