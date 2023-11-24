import Hero from "@/components/ui/hero"
import Image from "next/image"

import AboutJavier from "./about-javier"
import AboutBarbershop from "./about-barbershop"

import Cta from "@/components/cta"

export default function Page() {
    return (
        <>
            {/* i get an error in my code but it works */}
            <Hero title="About" className="about-hero">
                <p>A bit about me and my barbershop.</p>
            </Hero>
            <AboutJavier/>
            <AboutBarbershop/> 
            <Cta/>
        </>
    )
}