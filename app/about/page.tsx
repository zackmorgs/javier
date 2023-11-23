import Hero from "@/components/ui/hero"
import Image from "next/image"

import AboutJavier from "./about-javier"
import AboutBarbershop from "./about-barbershop"

export default function Page() {
    return (
        <>
            <Hero title="About">
                <p>A bit about me and my barbershop.</p>
            </Hero>
            <AboutJavier/>
            <AboutBarbershop/>
        </>
    )
}