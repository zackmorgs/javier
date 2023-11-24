import Hero from "@/components/ui/hero"
import HaircutServices from "./haircut-services"

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