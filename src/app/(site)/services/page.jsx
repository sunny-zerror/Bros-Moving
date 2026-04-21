import PageHero from '@/components/common/PageHero'
import Testimonials from '@/components/home/Testimonials'
import VideoSection from '@/components/home/VideoSection'
import ServicesScroll from '@/components/services/ServicesScroll'
import React from 'react'

const ServicesPage = () => {
  return (
    <>
      <PageHero
        title={"Bro's Moving Reliable Moving Services"}
        description={"Trusted moving solutions for homes and businesses across Saskatchewan."}
        image={"/images/servicepage/service_hero.png"} />
      <ServicesScroll />
      <VideoSection />
      <Testimonials />
    </>
  )
}

export default ServicesPage