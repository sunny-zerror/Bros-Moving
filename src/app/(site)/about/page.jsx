import AboutParagraph from '@/components/about/AboutParagraph'
import OurCertificates from '@/components/about/OurCertificates'
import OurMission from '@/components/about/OurMission'
import OurTeam from '@/components/about/OurTeam'
import PageHero from '@/components/common/PageHero'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <PageHero
        title={"Moving You Forward with Care"}
        description={"We help you move forward with care, making every relocation smooth and stress-free."}
        image={"/images/aboutpage/about_hero.png"} />
        <AboutParagraph/>
      <OurMission />
      <OurCertificates />
      <OurTeam />
    </>
  )
}

export default AboutPage