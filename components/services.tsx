import Link from 'next/link';
import { services } from '@/data/services';

export default function Services() {

    return (
        <section id="services">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => {
                        return (
                            <li>
                                <Link href={service.link} className="flex flex-col justify-center text-center">
                                    <h4 className="text-xl">{service.name}</h4>
                                    <Link href={service.link}>
                                        Learn More
                                    </Link>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}