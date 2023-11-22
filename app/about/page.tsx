import Hero from "@/components/ui/hero"
import Image from "next/image"

import AboutBarbershop from "./about-barbershop"
import AboutJavier from "./about-javier"

export default function Page() {
    return (
        <>
            <Hero title="About">
                <p>A bit about me and my barbershop.</p>
            </Hero>
            <AboutBarbershop/>
            <AboutJavier/>
        </>
    )
}