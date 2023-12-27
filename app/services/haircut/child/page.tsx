import type { Metadata } from 'next'

import Image from 'next/image';
import Hero from "@/components/ui/hero"
import Gallery from '@/components/ui/gallery';
import { TitleMd } from '@/components/ui/title';
import Pricing from "@/components/pricing";
import Cta from "@/components/cta"

export const metadata: Metadata = {
    title: "Javier's Barbershop | Children's Haircuts",
    description: "Javier's Barbershop children's haircuts information.",
}

export default function Page() {
    const images = [
        {
            src: "/img/haircuts/boy/1.jpg",
            alt: "Child's Haircut"
        },
        {
            src: "/img/haircuts/boy/2.jpg",
            alt: "Child's Haircut"
        },
        {
            src: "/img/haircuts/boy/3.jpg",
            alt: "Child's Haircut"
        },
        {
            src: "/img/haircuts/boy/4.jpg",
            alt: "Child's Haircut"
        },
    ];

    return (
        <>
            <Hero title="Child's Haircuts">
                <p>Creating fun and stylish haircuts for your little ones!</p>
            </Hero>

            <Gallery title="Examples" className="childs-haircuts" galleryImages={images} />
            <section className="haircut-description">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                    <div className="px-4 sm:px-6 py-6 md:w-1/2">
                        <div className="mb-4 border-b border-gray-300 pb-3">
                            <TitleMd>
                                About Child's Haircuts
                            </TitleMd>
                        </div>
                        <p className="mb-3">
                            At Javier's Barbershop, we know that a child's haircut is about more than just hair. It's an adventure and a chance for kids to feel special. I am experienced in working with children of all ages, ensuring a comfortable and enjoyable haircut experience.
                        </p>
                        <p className="mb-3">
                            I am skilled in a variety of styles, from classic cuts to trendy looks, perfect for school, play, and special occasions. Whether it's their first haircut or a regular trim, I make sure every child leaves our chair with a smile and a style they love.
                        </p>
                        <p className="mb-3">
                            My barbershop is kid-friendly, with a warm and welcoming atmosphere to make children feel at ease. We believe in making haircut time a fun and stress-free experience for both parents and children.
                        </p>
                    </div>
                    <div className="px-4 sm:px-6 py-6 md:w-1/2">
                        <Image src="/img/haircuts/boy/5.jpg" alt="" width={375} height={375} className="w-full" />
                    </div>
                </div>
            </section>
            <Pricing/>
            <Cta />
        </>
    )
}