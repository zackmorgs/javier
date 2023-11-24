import { TitleMd } from "./ui/title"
export default function Pricing() {
    const services = [
        {
            name:"Adult Haircut",
            price: "$40"
        },
        {
            name:"Kids Haircut",
            price: "$35"
        },
        {
            name:"Haircut with Hot Towel Shave",
            price: "$60"
        },
        {
            name:"Haircut with Beard Treatment and Hot Towel Shave",
            price: "$70"
        },
        {
            name:"Eyebrows Trimming",
            price: "$10"
        },
        {
            name:"Undercut",
            price: "$35"
        }
    ]
    return (
        <section id="pricing">
            <div className="xl:max-w-6xl mx-auto py-3 block">
                <div className="px-5 sm:px-6 py-4 bg-white rounded">
                    <div className="border-b border-gray-300 pb-2 mb-4 text-center">
                        <TitleMd>
                            Pricing
                        </TitleMd>
                    </div>
                    <div className="">
                        <table className="table w-full">
                            <thead className="table-header-group font-bold">
                                <tr>
                                    <td>
                                        Service
                                    </td>
                                    <td>
                                        Price
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service, index, array)=>{
                                    return (
                                        <tr key={index} className="table-row">
                                            <td>
                                                {service.name}
                                            </td>
                                            <td>
                                                {service.price}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}