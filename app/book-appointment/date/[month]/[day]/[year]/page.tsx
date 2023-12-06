import Hero from "@/components/ui/hero"
import Schedule from "@/components/schedule/schedule";

export default function Page({ params }: { params: { month: number, day:number, year:number } }) {
  const appointmentDate = new Date(`${params.year}-${params.month}-${params.day}`)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
  return (
    <>
      <Hero title="Book an Appointment">
        Book an appointment for {months[appointmentDate.getMonth()] + " " + appointmentDate.getDate() + ", " + appointmentDate.getFullYear() }
      </Hero>
      <Schedule initialDate={appointmentDate}/>
    </>
  )
}