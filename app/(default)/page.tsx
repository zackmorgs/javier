import type { Metadata } from 'next'

import HeroHomepage from '@/components/hero-homepage';
import Services from '@/components/services-homepage';
import Hours from '@/components/hours';
import BarbershopMap from '@/components/barbershop-map';
import ReviewsHomepage from '@/components/reviews-homepage';
import Pricing from "@/components/pricing";
import LeaveAReview from "@/components/leave-a-review";
import Cta from '@/components/cta';

export const metadata: Metadata = {
  title: "Javier's Barbershop | Home",
  description: "Javier's Barbershop Homepage",
}

export default function Home() {
  return (
    <>
      <HeroHomepage />
      <Services />
      <div className="xl:max-w-7xl mx-auto py-3 mb-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <Hours />
          <BarbershopMap />
        </div>
      </div>
      <Pricing/>
      <ReviewsHomepage />
      <LeaveAReview/>
      <Cta/>

    </>
  )
}
