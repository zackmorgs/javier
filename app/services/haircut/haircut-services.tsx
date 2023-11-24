import Link from "next/link"
import Image from "next/image"
import { TitleMd } from "@/components/ui/title"
import { FiArrowRight } from "react-icons/fi";

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
            name: "Child's Haircut",
            image: "/img/haircuts/boy/2.jpg",
            link: "/services/haircuts/child/"
        },
    ]
    return (
        <>
            <section id="haircuts-services">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3 mb-4">
                <ul className="flex flex-col lg:flex-row justify-between">
                    {haircutServices.map((service, index) => {
                        return (
                            <li key={index}>
                                <Link href={service.link} className="block text-center relative overflow-hidden">
                                    <Image
                                        src={service.image}
                                        width={375}
                                        height={375}
                                        className="w-full"
                                        alt={service.name} />
                                    <div className="service-text text-white mt-3 pt-3 pb-4 px-4 absolute bottom-0 right-0 left-0">
                                        <div className="mb-4">
                                            <TitleMd>{service.name}</TitleMd>
                                        </div>
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
        </>
    )
}