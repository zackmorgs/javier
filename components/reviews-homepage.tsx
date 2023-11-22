import { reviews } from "@/data/reviews"
import Stars from "./ui/stars"

export default function ReviewsHomepage() {
    return (
        <section id="reviews-homepage">
            <div className="mx-auto px-5 sm:px-6 py-3 mb-4">
                <h2 className="text-3xl text-center mt-2  font-bold">Reviews</h2>
                <p className="text-center mb-6">Brought to you by Google</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review) => {
                        return (
                            <li className="review mb-4">
                                <div className="flex flex-row justify-between mb-2">
                                    <b>{review.name}</b>
                                    <Stars stars={review.stars} />
                                </div>
                                <p className="text-gray-600">{review.text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </section>
    )
}