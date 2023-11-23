import Image from "next/image"

export default function AboutJavier() {
    return (
        <section id="about-javier" >
            <div className="xl:max-w-7xl mx-auto py-3">
                <div className="flex flex-col md:flex-row ">
                    <div className="basis-1/4 px-5 sm:px-6 md:order-last">
                        <Image alt="Picture of Javier" src="/img/javier.webp" width={375} height={375} className="w-full mb-3" />
                    </div>
                    <div className="basis-3/4 px-5 sm:px-6">
                        <div className="mb-4 border-b border-gray-300 pb-4">
                            <h2 className="text-2xl font-bold">Who I Am</h2>
                        </div>
                        <p>My name is Javier. I am from Ponce, Puerto Rico and I live in Rochester, MN in the United States.</p>
                        <p>I am a professional barber with 20 years of experience.</p>
                        <p>According to my Google reviews, all my customers believe I am the following:</p>
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
                        <p>If you are in need of a haircut and are ready to have a great conversation about life, book an appointment or call me.</p>
                    </div>
                </div>
                <div className="px-5 sm:px-6">
                    <div className="mb-4 border-b border-gray-300 pb-4">
                        <h2 className="text-xl font-bold">Schooling</h2>
                    </div>
                </div>
            </div>

        </section>
    )
}