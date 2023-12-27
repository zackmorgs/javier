import type { Metadata } from 'next'

import Hero from "@/components/ui/hero"

export const metadata: Metadata = {
    title: "Javier's Barbershop | Hot Towel",
    description: "Javier's Barbershop hot towel information.",
}

export default function Page() {
    return (
        <Hero title="Hot Towel">
            <p>A bit about my hot towel service and what I have to offer with it.</p>
        </Hero>
    )
}