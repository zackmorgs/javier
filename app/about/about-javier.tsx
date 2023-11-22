import Image from "next/image"

export default function AboutJavier() {
    return (
        <section id="about-javier" >
                <div className="xl:max-w-7xl mx-auto px-5 sm:px-6 py-3">
                    <div>
                        <Image alt="Picture of Javier" src="/img/javier.webp" width={375} height={375} className="w-full mb-3" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Who I Am</h2>
                        <p>My name is Javier. I am a barber with 20 years of experience.</p>
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
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Schooling</h2>
                    </div>
                </div>

            </section>
    )
}