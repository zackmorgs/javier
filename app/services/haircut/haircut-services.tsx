import Link from "next/link"
import Image from "next/image"
import { TitleMd } from "@/components/ui/title"
import { FiArrowRight } from "react-icons/fi";
import Pricing from "@/components/pricing";

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
            link: "/services/haircut/child/"
        },
    ]
    return (
        <>
            <section id="haircuts-services">
                <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3 mb-4">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
            <section id="haircuts-description">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
                    <div className="px-4 sm:px-6 py-6 md:w-1/2">
                        <div className="mb-4 border-b border-gray-300 pb-3">
                            <TitleMd>
                                About My Haircuts
                            </TitleMd>
                        </div>
                        <p className="mb-3">
                            At Javier's Barbershop, each haircut is an expression of personal style and artistry. I pride myself on delivering tailored experiences, whether it's a sleek and modern cut for the contemporary man, a chic and versatile style for women, or a fun and comfortable haircut for kids.
                        </p>
                        <p className="mb-3">
                            For men, I offer a range from classic barber cuts to the latest trends, ensuring each client leaves looking sharp and distinguished. Women's cuts at our shop are all about enhancing natural beauty with styles that range from elegant bobs to luxurious long layers. And when it comes to children, I ensure a welcoming environment with gentle care, making their haircut experience enjoyable and stylish.
                        </p>
                        <p className="mb-3">
                            Using the best tools and techniques, I focus on quality and detail in every snip and trim. My mission is to ensure that every client steps out feeling confident and looking their absolute best.
                        </p>
                    </div>
                    <div className="px-4 sm:px-6 md:w-1/2">
                        <Image src="/img/haircuts/men/4.jpg" width={625} height={625} alt="Haircut" className="w-full" />
                    </div>
                </div>

            </section>
            <Pricing />

        </>
    )
}