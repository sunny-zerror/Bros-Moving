import ExpertSection from '@/components/home/ExpertSection'
import Hero from '@/components/home/Hero'
import MovingSolution from '@/components/home/MovingSolution'
import ServicesSection from '@/components/home/ServicesSection'
import StepsSection from '@/components/home/StepsSection'
import Testimonials from '@/components/home/Testimonials'
import VideoSection from '@/components/home/VideoSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <ExpertSection/>
      <ServicesSection/>
      <StepsSection/>
      <WhyChooseSection/>
      <MovingSolution/>
      <VideoSection/>
      <Testimonials/>
    </>
  )
}

export default HomePage