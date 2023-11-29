import Image from 'next/image';
import Hero from "@/components/ui/hero"
import Gallery from '@/components/ui/gallery';
import { TitleMd } from '@/components/ui/title';
import Cta from "@/components/cta"
import Pricing from "@/components/pricing";

export default function Page() {
    const images = [
        {
            src: "/img/haircuts/women/1.jpg",
            alt: "Women's Haircut"
        },
        {
            src: "/img/haircuts/women/2.jpg",
            alt: "Women's Haircut"
        },
        {
            src: "/img/haircuts/women/3.jpg",
            alt: "Women's Haircut"
        }
    ];

    return (
        <>
            <Hero title="Women's Haircuts">
                <p>Elevate your style with our expertly crafted women's haircuts.</p>
            </Hero>

            <Gallery title="Examples" className="womens-haircuts" galleryImages={images} />
            <section className="haircut-description">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                    <div className="px-4 sm:px-6 py-6 md:w-1/2">
                        <div className="mb-4 border-b border-gray-300 pb-3">
                            <TitleMd>
                                About Women's Haircuts
                            </TitleMd>
                        </div>
                        <p className="mb-3">
                            At Javier's Barbershop, we understand that a woman's haircut is more than just a routine trim. It's an expression of her personality and style. I am are here to create a look that complements your individuality and enhances your natural beauty.
                        </p>
                        <p className="mb-3">
                            From chic bobs to flowing layers, every cut is executed with precision and care. I stay up-to-date with the latest trends and techniques to bring you a range of contemporary and classic styles. Whether you're looking for a dramatic change or a simple refresh, I'm dedicated to achieving your perfect look.
                        </p>
                        <p className="mb-3">
                            Enjoy a relaxing and welcoming atmosphere as we work together to create your ideal hairstyle. Your satisfaction is our priority, and I'm committed to providing a hairstyling experience that leaves you feeling confident and refreshed.
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