import Image from 'next/image';
import Hero from "@/components/ui/hero"
import Gallery from '@/components/ui/gallery';
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
        </>
    )
}