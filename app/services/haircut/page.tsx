import type { Metadata } from 'next'

import Hero from "@/components/ui/hero"
import HaircutServices from "./haircut-services"

export const metadata: Metadata = {
    title: "Javier's Barbershop | Haircuts",
    description: "Javier's Barbershop haircuts information.",
}

export default function Page() {
    return (
        <>
            <Hero title="Haircuts" className="haircut-hero">
                <p>Expert haircuts for everyone – any style, any age, any hair type.</p>
            </Hero>
            <HaircutServices />
        </>
    )
}