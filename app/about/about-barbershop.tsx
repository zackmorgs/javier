import { TitleMd } from "@/components/ui/title"

export default function AboutBarbershop() {
    return (
        <section id="about-barbershop">
            <div className="xl:max-w-7xl mx-auto block md:flex md:flex-row">
                <div className="px-5 sm:px-6 py-3">
                    <div className="mb-4 border-b border-gray-300 pb-4">
                        <TitleMd>The Barbershop</TitleMd>
                    </div>
                    <p className="mb-3">
                        Javier's Barbershop has been around since 2017.
                    </p>
                    <p className="mb-3">
                        It began gaining great popularity and a reputation through excellent word-of-mouth reviews.
                    </p>
                    <p>The barbershop is </p>
                </div>
                <div className="px-5 sm:px-6 py-3">
                    <div className="mb-4 border-b border-gray-300 pb-4">
                        <TitleMd>Address</TitleMd>
                    </div>
                    <address>
                        1112 9th St NE Rochester, MN 55906
                    </address>
                </div>
            </div>
        </section>
    )
}