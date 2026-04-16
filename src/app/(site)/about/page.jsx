import AboutHero from '@/components/about/AboutHero'
import OurCertificates from '@/components/about/OurCertificates'
import OurMission from '@/components/about/OurMission'
import OurTeam from '@/components/about/OurTeam'
import React from 'react'

const AboutPage = () => {
  return (
    <>
        <AboutHero/>
        <OurMission/>
        <OurCertificates/>
        <OurTeam/>
    </>
  )
}

export default AboutPage