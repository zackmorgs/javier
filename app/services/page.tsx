import Hero from "@/components/ui/hero"
import Services from "@/components/services-homepage"
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