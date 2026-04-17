import React from 'react'

const footerData = [
  {
    title: "Services",
    links: [
      { label: "Residential Moving", href: "/services/residential" },
      { label: "Commercial Moving", href: "/services/commercial" },
      { label: "Packing & Unpacking", href: "/services/packing" },
      { label: "Storage Services", href: "/services/storage" },
      { label: "Specialty Moving", href: "/services/specialty" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Regina", href: "/locations/regina" },
      { label: "Winnipeg", href: "/locations/winnipeg" },
      { label: "Alberta", href: "/locations/alberta" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];
const Footer = () => {
  return (
    <>
      <div className="w-full  bg-[#090A0C] padding pb-6!">
        <div className="w-full relative flex items-center">
          <div className=" px-16  absolute inset-0 w-full flex items-center justify-between">
            <div className="w-full space-y-5 text-white">
              <h2 className='text-5xl font-semibold '>Ready for a Stress- <br />Free Move?</h2>
              <p className='text-lg text-[#F9F6F3]'>Hear Directly from Our Customers About Their <br /> Smooth and Stress-Free Moving Experiences</p>
            </div>
            <div className=" w-fit flex flex-col items-end leading-none space-y-5">
              <button className='flex items-center gap-x-2 whitespace-nowrap font-medium  border border-white bg-white rounded-full px-4 py-3'>  Get the Estimated Cost <img src="/icons/arrow-right.svg" className='w-16 ' alt="" /> </button>
              <button className=' w-fit flex text-white items-center gap-x-2 px-4 py-3 border font-medium border-white rounded-full'><img src="/icons/call.svg" className='w-5' alt="" /> Call Now </button>
            </div>
          </div>
          <img src="/images/fotter_red_box.png" className='w-full' alt="" />
        </div>

        <div className="w-full relative text-[#F9F6F3]">

          <div className="absolute inset-0 w-full flex items-center px-16 ">
            <div className=" w-full h-fit flex justify-between">
              <div className=" w-fit  font-light flex flex-col justify-between">
                <img className='w-28' src="/logo.svg" alt="" />
                <p className='leading-tight'>Fast, reliable & stress-free moving <br /> services across the country.</p>
                <div className="">
                  <div className="flex items-center gap-x-2">
                    <img src="/icons/red_dialer.svg" alt="" />
                    <p className=''>(555) 123-4567</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <img src="/icons/red_mail.svg" alt="" />
                    <p className=''>info@brosmoving.com</p>
                  </div>
                </div>
              </div>
              <div className="  flex gap-x-16">
              {footerData.map((item, i) => (
                <div key={i} className="col-span-1">
                  <p className='text-lg mb-4 uppercase text-[#F5344F] font-semibold'>{item.title}</p>
                  <div className="flex flex-col gap-y-2 font-light">
                    {item.links.map((link, j) => (
                      <a href={link.href} key={j} className=' hover:underline'>{link.label}</a>
                    ))}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
          <img src="/images/footer_outline.svg" className='w-full' alt="" />
        </div>

        <div className="w-full text-center">
          <p className='text-[#F9F6F3] font-light'>© 2024 Bro's Moving. All rights reserved. Licensed and Insured.</p>
        </div>
      </div>
    </>
  )
}

export default Footer