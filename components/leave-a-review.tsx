import Link from "next/link"
import Image from "next/image"
import reviewMeLinks from "@/data/review-me-links"
import { TitleMd } from "./ui/title"
export default function LeaveAReview() {
    return (
        <section id="leave-a-review">
            <div className="xl:max-w-7xl mx-auto py-3 mb-4">
                <div className="px-4 sm:px-6">
                    <div className="px-4 sm:px-6 py-4 bg-white">
                        <div className="border-b border-gray-300 pb-2 mb-4">
                            <TitleMd>
                                Leave a Review
                            </TitleMd>
                        </div>
                        <p className="mt-3">
                            Your feedback is invaluable!
                        </p>
                        <p className="mt-3">
                            Share your thoughts on your haircut and overall experience at Javier's Barbershop.
                        </p>
                        <ul id="review-me-links" className="mt-5 flex flex-col md:flex-row">
                            {reviewMeLinks.map((link, index, array) => {
                                return (
                                    <li key={index}>
                                        <Link href={link.url} className="btn btn-tertiary mt-3 md:mr-3 h-16 md:h-12">
                                            <Image src={link.image} alt={link.name} width={50} height={50} className="mx-auto h-full" />
                                        </Link>
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