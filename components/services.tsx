export default function Services() {
    const services = [
        {
            name: "Haircut",
            picture: "",
            link: "/services/haircut"
        },
        {
            name: "Shaving",
            picture: "",
            link: "/services/shaving"
        },
        {
            name: "",
            picture: "",
            link: ""
        }
    ]
    return (
        <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6">
            <ul>
                {services.map((service)=>{
                    return (
                        <li>
                            <h5>{service.name}</h5>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}