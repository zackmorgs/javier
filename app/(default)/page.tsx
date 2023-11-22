import HeroHomepage from '@/components/hero-homepage';
import Services from '@/components/services-homepage';
import Hours from '@/components/hours';
import BarbershopMap from '@/components/barbershop-map';
import ReviewsHomepage from '@/components/reviews-homepage';

export default function Home() {
  return (
    <>
      <HeroHomepage/>
      <Services/>
      <Hours/>
      <ReviewsHomepage/>
      <BarbershopMap/>
    </>
  )
}
