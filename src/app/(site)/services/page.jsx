import Testimonials from '@/components/home/Testimonials'
import VideoSection from '@/components/home/VideoSection'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesScroll from '@/components/services/ServicesScroll'
import React from 'react'

const ServicesPage = () => {
  return (
    <>
        <ServicesHero/>
        <ServicesScroll/>
        <VideoSection/>
        <Testimonials/>
    </>
  )
}

export default ServicesPage