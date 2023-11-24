import HeroHomepage from '@/components/hero-homepage';
import Services from '@/components/services-homepage';
import Hours from '@/components/hours';
import BarbershopMap from '@/components/barbershop-map';
import ReviewsHomepage from '@/components/reviews-homepage';
import Cta from '@/components/cta';
export default function Home() {
  return (
    <>
      <HeroHomepage />
      <Services />
      <ReviewsHomepage />
      <div className="xl:max-w-7xl mx-auto py-3 mb-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <Hours />
          <BarbershopMap />
        </div>
      </div>
      <Cta/>

    </>
  )
}
