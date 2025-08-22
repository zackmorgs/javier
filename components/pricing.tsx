import { TitleMd } from "./ui/title"
export default function Pricing() {
    const services = [
        {
            name: "Eyebrow Trim",
            price: "$10"
        },
        {
            name: "Kids Haircut",
            price: "$35"
        },
        {
            name: "Undercut",
            price: "$35"
        },
        {
            name: "Adult Haircut",
            price: "$40"
        },
        {
            name: "Haircut, Hot Towel Shave",
            price: "$60"
        },
        {
            name: "Haircut, Beard Treatment, Hot Towel Shave",
            price: "$75"
        },
    ]
    return (
        <section id="pricing">
            <div className="xl:max-w-7xl mx-auto py-3 block">
                <div className="px-5 sm:px-6 py-4">
                    <div className="border-b border-gray-300 pb-2 mb-4 text-center">
                        <TitleMd>
                            Pricing
                        </TitleMd>
                    </div>
                    <div className="">
                        <ul id="pricing-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols 4 gap-3">

                            {services.map((service, index, array) => {
                                return (
                                    <li key={index} className="price justify-between shadow py-3 px-3 rounded text-center bg-white">
                                        <p className="text-2xl">
                                            {service.price}
                                        </p>
                                        <b>
                                            {service.name}
                                        </b>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}