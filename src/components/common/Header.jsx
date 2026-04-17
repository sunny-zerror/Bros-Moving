import { RiArrowRightLine, RiPhoneLine } from '@remixicon/react'
import { Link } from 'next-view-transitions'
import React from 'react'

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
  return (
    <>
      <div className="w-full  padding pt-12! z-100  fixed  top-0 left-0">
        <div className="w-full flex items-center pb-4  justify-between border-b border-white/20 ">
          <Link href='/' className=" w-[25%]  ">
            <img src="/logo.svg" alt="" />
          </Link>
          <nav className=" w-1/2 text-white justify-center flex items-center gap-x-10">
            {navLinks.map((link, i) => (
              <div key={i} className="">
                <Link href={link.href}>{link.label}</Link>
              </div>
            ))}
          </nav>
          <div className=" w-[25%]  flex items-center justify-end gap-x-5 leading-none">
            <button className='flex text-white items-center gap-x-2'><img src="/icons/call.svg" className='w-5' alt="" /> Call Now </button>
            <Link href='/contact' className='flex items-center gap-x-2  bg-white rounded-full px-4 py-3'>  Get a Quote <img src="/icons/arrow-right.svg" className='w-5' alt="" /> </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header