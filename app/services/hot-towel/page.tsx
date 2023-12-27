import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from "@/components/ui/hero"
import { TitleMd } from "@/components/ui/title";
import Cta from "@/components/cta"

export const metadata: Metadata = {
    title: "Javier's Barbershop | Hot Towel",
    description: "Javier's Barbershop hot towel information.",
}

export default function Page() {
    return (
        <>
            <Hero title="Hot Towel">
                <p>A bit about my hot towel service and what I have to offer with it.</p>
            </Hero>
            <section id="hot-towel">
                <div className="xl:max-w-7xl mx-auto px-5 sm:px-6 py-3 block md:flex md:flex-row">
                    <div className="px-5 sm:px-6 md:w-1/3">
                        <Image src="/img/services/hot-towel.jpg" alt="Hot Towel" width={640} height={640} />
                    </div>
                    <div className="px-5 sm:px-6 md:w-2/3">
                        <div className="border-b border-gray-300 pb-2 mb-4 pt-4 md:pt-0">
                            <TitleMd>
                                About Hot Towel
                            </TitleMd>
                        </div>
                        <p>
                            Javier's Barbershop offers a luxurious hot towel service designed for ultimate relaxation and skin care. The service begins with a gentle facial cleanse, followed by the application of a warm, moist towel. This process helps open pores, soften the skin, and prepare for a closer shave. Javier uses high-quality products and techniques to ensure a soothing experience, leaving your skin feeling refreshed and rejuvenated. The hot towel service at Javier's is more than just a shave; it's a pampering experience that combines traditional barbering with modern skin care.
                        </p>
                    </div>
                </div>
            </section>
            <Cta />
        </>
    )
}