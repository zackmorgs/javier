import Link from "next/link"
import Image from "next/image"

export default function HaircutServices() {
    const haircutServices = [
        {
            name: "Men's Haircut",
            image: "/img/haircuts/men/2.jpg",
            link: "/services/haircut/men"
        },
        {
            name: "Women's Haircut",
            image: "/img/haircuts/women/3.jpg",
            link: "/services/haircut/women"
        },
        {
            name: "Boy's Haircut",
            image: "/img/haircuts/boy/2.jpg",
            link: "/services/haircuts/boy/"
        },
        {
            name: "Girl's Haircut",
            image: "/img/haircuts/women/2.jpg",
            link: "/services/haircut/girl"
        }
    ]
    return (
        <>
            <section className="max-w-6xl mx-auto px-5 sm:px-6 py-3 mb-4">
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {haircutServices.map((service) => {
                        return (
                            <li>
                                <Link href={service.link} className="block text-center">
                                    <Image 
                                        src={service.image} 
                                        width={375} 
                                        height={375} 
                                        className="w-full"
                                        alt={service.name} />
                                    <h4 className="mt-3 mb-6 font-bold text-xl">{service.name}</h4>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
}