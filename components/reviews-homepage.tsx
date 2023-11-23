"use client";
import { useState } from 'react';

import { reviews } from "@/data/reviews"

import { TitleLg}  from '@/components/ui/title'
import Stars from "./ui/stars"

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

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

                <div className="border-b border-gray-300 pb-2 mb-4">
                    <div className="text-center mt-2">
                        <TitleLg>Reviews</TitleLg>
                    </div>
                    <small className="text-gray-600 text-center block mt-1">
                        <i>
                            Brought to you by Google
                        </i>
                    </small>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
                    {displayedReviews.map((review, index) => {
                        return (
                            <li key={index} className="review mb-1 py-2 px-2 border-b">
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
                    <div className="text-center mt-2 md:mt-4">
                        <a href="#reviews-homepage" onClick={toggleReviewsDisplay} className="btn">
                            {showAllReviews ? (
                                <span>
                                    <FiArrowLeft className="icon inline-block" /> See Less Reviews
                                </span>
                            ) : (
                                <span>
                                    See More Reviews <FiArrowRight className="icon inline-block" />
                                </span>
                            )}
                        </a>
                    </div>
                )}
            </div>

        </section>
    )
}