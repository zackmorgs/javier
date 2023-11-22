import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';

export default function Services() {

    return (
        <section id="services">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3 mb-3">
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {services.map((service) => {
                        return (
                            <li>
                                <Link href={service.link} className="flex flex-col justify-center text-center">
                                    <Image src={service.picture} alt={service.name} width={375} height={375} />
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