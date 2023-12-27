import type { Metadata } from 'next'

import Image from "next/image"
import Hero from "@/components/ui/hero"
import { TitleMd } from "@/components/ui/title"
import Cta from "@/components/cta"

export const metadata: Metadata = {
    title: "Javier's Barbershop | Straight Razor",
    description: "Javier's Barbershop straight razor shaving and haircut information.",
}

export default function Page() {
    return (
        <>
            <Hero title="Straight Razor">
                <p>A bit about my straight razor service and what I have to offer with it.</p>
            </Hero>
            <section id="about-straight-razor">
                <div className="xl:max-w-6xl mx-auto py-3 block md:flex md:flex-row">
                    <div className="px-5 sm:px-6 py-3 md:w-1/3">
                        <Image src="/img/services/straight-razor.jpg" width={375} height={375} alt="Straight Razor for shaves and haircuts" className="w-full" />
                    </div>
                    <div className="px-5 sm:px-6 md:w-2/3">
                        <div className="border-b border-gray-300 pb-2 mb-4">
                            <TitleMd>
                                About Straight Razor Shaves and Cuts
                            </TitleMd>
                        </div>
                        <p className="mb-3">
                            Embrace the timeless tradition of a straight razor shave, a hallmark of classic barbering. Known for its precision and closeness, the straight razor provides a shave that is not only clean but also an experience in itself.
                        </p>
                        <p className="mb-3">
                            Each shave begins with a thorough preparation of your skin, using high-quality pre-shave oils and to soften the beard and open up the pores. This prep work ensures a comfortable shave, reducing the risk of irritation and ingrown hairs.
                        </p>
                        <p className="mb-3">
                            The straight razor then glides smoothly, offering meticulous attention to every contour of your face. It's not just about removing hair; it's a ritual that pampers your skin, leaving it exceptionally smooth and rejuvenated.
                        </p>
                        <p className="mb-3">
                            Beyond shaves, the straight razor excels in crafting precise hairlines and clean edges, ensuring your haircut has that polished, refined finish. Whether it's a tidy neckline, crisp beard lines, or detailed hair designs, the straight razor brings an unmatched level of accuracy.
                        </p>
                        <p className="mb-3">
                            Step into a world where tradition meets skill, and leave not just with a great look, but an unmatched grooming experience.
                        </p>
                    </div>
                </div>

            </section>
            <Cta/>
        </>
    )
}