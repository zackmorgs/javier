import Hero from "@/components/ui/hero"
import HaircutServices from "./haircut-services"

export default function Page() {
    return (
        <>
            <Hero title="Haircuts">
                <p>A bit about my haircuts service.</p>
            </Hero>
            <HaircutServices />
        </>
    )
}