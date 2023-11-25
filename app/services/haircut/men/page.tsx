import Image from 'next/image';
import Hero from "@/components/ui/hero"
import Gallery from '@/components/ui/gallery';
import { TitleMd } from '@/components/ui/title';
import Pricing from "@/components/pricing";
import Cta from "@/components/cta"

export default function Page() {
    const images = [
        {
            src: "/img/haircuts/men/1.jpg",
            alt: "Men's Haircut"
        },
        {
            src: "/img/haircuts/men/2.jpg",
            alt: "Men's Haircut"
        },
        {
            src: "/img/haircuts/men/3.jpg",
            alt: "Men's Haircut"
        },
        {
            src: "/img/haircuts/men/4.jpg",
            alt: "Men's Haircut"
        },
        {
            src: "/img/haircuts/men/5.jpg",
            alt: "Men's Haircut"
        },
        {
            src: "/img/haircuts/men/6.jpg",
            alt: "Men's Haircut"
        },
        {
            src: "/img/haircuts/men/7.jpg",
            alt: "Men's Haircut"
        },
        {
            src: "/img/haircuts/men/8.jpg",
            alt: "Men's Haircut"
        },
    ];

    return (
        <>
            <Hero title="Men's Haircuts">
                <p>Mastering the art of men's styles – from classic cuts to modern trends.</p>
            </Hero>

            <Gallery title="Examples" className="mens-haircuts" galleryImages={images} />
            <section className="haircut-description">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                    <div className="px-4 sm:px-6 py-6 md:w-1/2">
                        <div className="mb-4 border-b border-gray-300 pb-3">
                            <TitleMd>
                                About Men's Haircuts
                            </TitleMd>
                        </div>
                        <p className="mb-3">
                            Each haircut at Javier's Barbershop is a blend of precision, style, and attention to detail. I take pride in offering a wide range of men's haircut styles, tailored to suit your individual taste and lifestyle.
                        </p>
                        <p className="mb-3">
                            From timeless classics like the pompadour and the crew cut to modern fades and textured styles, I stay updated with the latest trends to provide you with a fresh, stylish look. My goal is not just to cut your hair, but to enhance your personal style and ensure you leave feeling confident and satisfied.
                        </p>
                        <p className="mb-3">
                            I understand the importance of a good haircut in making a great first impression. That's why I focus on quality craftsmanship and a relaxing experience, ensuring every visit to my barbershop is a memorable one.
                        </p>
                        <p className="mb-3">
                            Book your appointment today and experience the difference of a haircut that’s crafted with care and precision.
                        </p>
                    </div>
                    <div className="px-4 sm:px-6 py-6 md:w-1/2">
                        <Image src="/img/services/straight-razor.jpg" alt="" width={375} height={375} className="w-full" />
                    </div>
                </div>
            </section>
            <Pricing/>
            <Cta />
        </>
    )
}