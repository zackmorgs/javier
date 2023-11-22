import { reviews } from "@/data/reviews"
import Stars from "./ui/stars"

export default function ReviewsHomepage() {
    return (
        <section id="reviews-homepage">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3 mb-4">
                <h2 className="text-3xl text-center mt-2 mb-6 font-bold">Reviews</h2>
                <ul>
                    {reviews.map((review) => {
                        return (
                            <li className="review mb-4">
                                <div className="flex flex-col">
                                    <b>{review.name}</b>
                                    <Stars stars={review.stars} />
                                </div>
                                <p>{review.text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </section>
    )
}