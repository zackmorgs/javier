import Hero from "@/components/ui/hero"
import Calendar from "@/components/calendar/calendar"
export default function Page() {
    return (
        <>
            <Hero title="Book an Appointment">
                <p>It's first-come, first serve!</p>
            </Hero>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <Calendar/>
    
            </div>
        </>

    )
}