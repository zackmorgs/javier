import Hero from "@/components/ui/hero"
import { FiPhone } from "react-icons/fi";
import { TitleMd, TitleSm } from "@/components/ui/title";
import Hours from "@/components/hours";
import MapComponent from "@/components/barbershop-map";
import LeaveAReview from "@/components/leave-a-review";
import Cta from "@/components/cta";

export default function Page() {
    return (
        <>
            <Hero title="Contact">
                <p>How to get in touch with me!</p>
                <div className="flex justify-center mt-4">
                    <a className="btn btn-primary mt-3" href="tel:+15073192140">
                        <FiPhone className="inline-block" /> Call Me
                    </a>
                </div>
            </Hero>
            <section id="contact">
                <div className="max-w-7xl mx-auto block md:flex md:flex-row">
                    <div className="px-4 sm:px-6 md:w-1/2">
                        <div className="border-b border-gray-300 pb-2 mb-4 ">
                            <TitleMd>
                                Get in Touch
                            </TitleMd>
                        </div>
                        <p className="mb-3">
                            Whether you're looking for a new style, need advice on grooming, or want to book your next appointment, I'm here to help. Use the information below to contact me, and I'll get back to you as soon as possible.
                        </p>
                    </div>
                    <div id="contact-details" className="md:w-1/2 px-4 sm:px-6 py-4 md:py-0">
                        <div className="border-b border-gray-300 pb-2 mb-4 ">
                            <TitleMd>
                                Contact
                            </TitleMd>
                        </div>
                        <ul className="list-none mt-3">
                            <li><p><strong>Phone:</strong> <a href="tel:+15073192140">507-319-2140</a></p></li>
                            <li><p><strong>Email:</strong> <a href="mailto:javierbthomas678@gmail.com">javierbthomas678@gmail.com</a></p></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="more-info">
                <div className="xl:max-w-7xl mx-auto py-3 mb-4">
                    <div className="flex flex-col md:flex-row justify-between md:justify-between">
                        <Hours />
                        <MapComponent />
                    </div>

                </div>
            </section>
            <LeaveAReview/>
            {/* <Cta /> */}
        </>

    )
}