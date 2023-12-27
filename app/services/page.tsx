import type { Metadata } from 'next'

import Hero from "@/components/ui/hero"
import Services from "@/components/services-homepage"

export const metadata: Metadata = {
    title: "Javier's Barbershop | Services",
    description: "Javier's Barbershop various services",
}

export default function Page() {
    return (
        <>
            <Hero title="Services">
                <p>A list of services I have to offer.</p>
            </Hero>
            <Services/>
        </>
    )
}