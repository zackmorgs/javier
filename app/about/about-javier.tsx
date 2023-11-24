import Image from "next/image"
import Link from "next/link"
import { TitleMd } from "@/components/ui/title"

export default function AboutJavier() {
    return (
        <>
            <section id="about-javier" >
                <div className="xl:max-w-7xl mx-auto py-3">
                    <div className="flex flex-col md:flex-row">
                        <div className="basis-1/4 px-5 sm:px-6 md:order-last">
                            <Image alt="Picture of Javier" src="/img/javier.webp" width={375} height={375} className="w-full mb-3" />
                        </div>
                        <div className="basis-3/4 px-5 sm:px-6">
                            <div className="mb-4 border-b border-gray-300 pb-4">
                                <TitleMd>Who I Am</TitleMd>
                            </div>
                            <p className="text-xl mb-2">My name is Javier. </p>
                            <p className="mb-2">I am from <Link href="https://www.google.com/maps/place/Ponce,+Puerto+Rico/@17.2532577,-63.001475,7z/data=!4m6!3m5!1s0x8c1cd5813b1ddf7f:0x274b92c47106eee2!8m2!3d18.0110768!4d-66.6140616!16zL20vMGxnMHI" target="_blank">Ponce, Puerto Rico</Link> and I live and work in Rochester, MN.</p>
                            <p className="mb-2">I have two kids and love motorcycles.</p>
                            <p className="mb-2">I am a professional barber with 20 years of experience for all people young and old.</p>
                            <p className="mb-2">According to my Google reviews, all my customers believe I am the following:</p>
                            <ul className="list-disc list-inside mt-3 mb-3">
                                <li>
                                    Experienced and professional
                                </li>
                                <li>
                                    Personable
                                </li>
                                <li>
                                    Committed to pleasing customers
                                </li>
                                <li>
                                    Good at what I do
                                </li>
                            </ul>
                            <p className="mb-2">If you are in need of a haircut and are ready to have a great conversation about life, book an appointment or call me.</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}