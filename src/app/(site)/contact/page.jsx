import PageHero from '@/components/common/PageHero'
import ContactForm from '@/components/contact/ContactForm'
import MapsInfo from '@/components/contact/MapsInfo'
import React from 'react'

const page = () => {
  return (
    <>
        <PageHero 
        title={"Contact Bro’s Moving Experts"}
        description={"Our experienced team at Bro’s Moving is here to guide you every step of the way. "}
        image={"/images/contactpage/contact_hero.png"}
        mobImage={"/images/contactpage/mob_contact_hero.png"}
        />
        <ContactForm/>
        <MapsInfo/>
    </>
  )
}

export default page