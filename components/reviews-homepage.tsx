"use client";
import { useState } from 'react';

import { reviews } from "@/data/reviews"
import Stars from "./ui/stars"

export default function ReviewsHomepage() {
    // State to control the display of reviews
    const [showAllReviews, setShowAllReviews] = useState(false);

    // Function to toggle the review display
    const toggleReviewsDisplay = () => {
        setShowAllReviews(!showAllReviews);
    };

    // Determine the reviews to display
    const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 4);

    return (
        <section id="reviews-homepage">
            <div className="xl:max-w-7xl mx-auto px-5 sm:px-6 py-3 mb-4">
                <h2 className="text-3xl text-center mt-2  font-bold">Reviews</h2>
                <p className="text-center mb-6">Brought to you by Google</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayedReviews.map((review, index) => {
                        return (
                            <li key={index} className="review mb-4">
                                <div className="flex flex-row justify-between mb-2">
                                    <b>{review.name}</b>
                                    <Stars stars={review.stars} />
                                </div>
                                <p className="text-gray-600">{review.text}</p>
                            </li>
                        )
                    })}
                </ul>
                {reviews.length > 4 && (
                    <div className="text-center mt-4">
                        <a onClick={toggleReviewsDisplay} className="btn">
                            {showAllReviews ? 'See Less Reviews' : 'See More Reviews'}
                        </a>
                    </div>
                )}
            </div>

        </section>
    )
}