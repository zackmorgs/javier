import type { Metadata } from 'next'

import Hero from "@/components/ui/hero"
import Pricing from "@/components/pricing"

export const metadata: Metadata = {
    title: "Javier's Barbershop | Pricing",
    description: "Get in Contact with Javier's Barbershop",
}

export default function Page() {
    return (
        <>
            <Hero title="Pricing">
                <p>The prices for my services.</p>
            </Hero>
            <Pricing />
        </>
    )
}