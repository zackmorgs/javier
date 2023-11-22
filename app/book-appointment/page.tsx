import Hero from "@/components/ui/hero"
import { FiPhone } from "react-icons/fi";

export default function Page() {
    return (
        <>
            <Hero title="Book an Appointment">
                <p>It's first-come, first serve!</p>
            </Hero>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* <a className="btn btn-primary mt-3" href="tel:+15073192140">
                    <FiPhone className="inline-block" /> Call Me
                </a> */}
                
            </div>
        </>

    )
}