import type { Metadata } from 'next'

import Hero from "@/components/ui/hero"
import Image from "next/image"

import AboutJavier from "./about-javier"
import AboutBarbershop from "./about-barbershop"

import MapComponent from "@/components/barbershop-map"
import Cta from "@/components/cta"

export const metadata: Metadata = {
    title: "Javier's Barbershop | About",
    description: "Javier's Barbershop About Page",
  }
  

export default function Page() {
    return (
        <>
            {/* i get an error in my code but it works */}
            <Hero title="About" className="about-hero">
                <p>A bit about me and my barbershop.</p>
            </Hero>
            <AboutJavier />
            {/* <AboutBarbershop/>  */}
            <section>
                <div className="xl:max-w-7xl mx-auto">
                    <div className="block md:flex md:flex-row">
                        <div className="md:w-1/2">
                            <MapComponent />
                        </div>
                        <div className="md:w-1/2">
                            <Cta />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}