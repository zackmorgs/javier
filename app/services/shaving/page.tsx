import Image from "next/image";
import Hero from "@/components/ui/hero"
import { TitleMd } from "@/components/ui/title";
import Gallery from '@/components/ui/gallery';
import Cta from "@/components/cta"


export default function Page() {
    const images = [
        {
            src: "/img/haircuts/men/8.jpg",
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
    ];

    return (
        <>
            <Hero title="Shaving">
                <p>Experience precision and comfort in every shave.</p>
            </Hero>
            <section id="about-shaving">
                <div className="xl:max-w-6xl mx-auto py-3 block md:flex md:flex-row">
                    <div className="px-5 sm:px-6 md:w-1/3">
                        <Image src="/img/services/straight-razor.jpg" alt="Straight Razor for Shaving" width={375} height={375} />
                    </div>
                    <div className="px-5 sm:px-6 md:w-2/3">
                        <div className="border-b border-gray-300 pb-2 mb-4 pt-4 md:pt-0">
                            <TitleMd>
                                About Shaving
                            </TitleMd>
                        </div>
                        <p className="mb-3">
                            With two decades of expertise in men's grooming, I have mastered the art of the perfect shave. Whether you prefer the classic touch of a straight razor or the modern efficiency of electronic razors, I ensure a close, comfortable shave every time.
                        </p>
                        <p className="mb-3">
                            The straight razor shave is an age-old tradition, celebrated for its precision and the unique experience it offers. It's not just about removing hair; it's a ritual that leaves your skin feeling exceptionally smooth and rejuvenated.
                        </p>
                        <p className="mb-3">
                            For those who seek a quick yet thorough shave, my collection of high-quality electronic razors comes into play. These tools are perfect for a fast-paced lifestyle, offering a consistently close shave with minimal skin irritation.
                        </p>
                        <p className="mb-3">
                            I take pride in tailoring each shave to the individual needs of my clients, ensuring your comfort and satisfaction. Step into my barbershop for a shave that's not just about looking good, but feeling great too.
                        </p>
                    </div>
                </div>
            </section>
            <Gallery title="Shaving Examples" className="shaving" galleryImages={images} />
            <Cta />
        </>
    )
}