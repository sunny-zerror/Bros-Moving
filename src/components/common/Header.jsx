"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation';
import React from 'react'
gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Services",
    href: "/services"
  },
  {
    label: "Blogs",
    href: "/blogs"
  },
]
const Header = () => {

  const pathname = usePathname();

  useGSAP(() => {
    gsap.to(".header", {
      backgroundColor: "#090A0C",
      paddingTop: "1rem",
      scrollTrigger: {
        trigger: ".header",
        start: "bottom top",
        end: "+=150",
        // markers:true,
        scrub: true,
      }
    })
  })

  return (
    <>
      <div className=" header w-full px-24 pt-12 z-100  fixed  top-0 left-0">
        <div className="w-full max_width_layout flex items-center pb-4  justify-between border-b border-white/20 ">
          <Link href='/' className=" w-[25%]  ">
            <img src="/logo.svg" className='' alt="" />
          </Link>
          <nav className="w-1/2 text-white justify-center flex items-center gap-x-10">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <div key={i} className="w-fit flex flex-col group cursor-pointer">
                  <Link href={link.href} className="relative">
                    {link.label}

                    <span
                      className={`
              absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-white
              transition-transform duration-300 ease-out
              ${isActive ? "scale-x-100 origin-left" : "scale-x-0 origin-left group-hover:scale-x-100"}
            `}
                    ></span>
                  </Link>
                </div>
              );
            })}
          </nav>
          <div className=" w-[25%]  flex items-center justify-end gap-x-5 leading-none">
            <button className='flex text-white items-center group gap-x-2'>
              <img src="/icons/call.svg" className='w-5' alt="" />
              <p className='relative'>
                Call Now
                <span
                  className={`
                  absolute left-0 bottom-[-3px] h-[1.5px] rounded-full w-full bg-white
                  transition-transform duration-300 ease-out
                  origin-left scale-x-0 group-hover:scale-x-100
                  `}
                ></span>
              </p>
            </button>
            <Link href='/contact' className='flex items-center gap-x-2  bg-white rounded-full px-4 py-3'>  Get a Quote <img src="/icons/arrow-right.svg" className='w-5' alt="" /> </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header