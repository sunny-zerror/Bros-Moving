"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation';
import React from 'react'
import Button from './Button';
import { useQuoteStore } from '@/store/useQuoteStore';
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
  {
    label: "Contact",
    href: "/contact"
  },
]
const Header = () => {
const { open } = useQuoteStore();
  const pathname = usePathname();

  useGSAP(() => {
    let lastScroll = 0;

    gsap.to(".header", {
      opacity:1,
      delay:3
    })
    // 🎯 ScrollTrigger (your existing effect)
    gsap.to(".header", {
      backgroundColor: "#090A0C",
      paddingTop: "1rem",
      scrollTrigger: {
        trigger: ".header",
        start: "bottom top",
        end: "+=150",
        scrub: true,
      },
    });

    // 🎯 Hide / Show logic
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        // scroll down → hide
        gsap.to(".header", {
          y: "-101%",
          duration: 1,
          ease: "power2.out",
        });
      } else {
        // scroll up → show
        gsap.to(".header", {
          y: "0%",
          duration: 1,
          ease: "power2.out",
        });
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div className=" header opacity-0 w-full px-24 pt-12 z-100  fixed  top-0 left-0 will-change-transform">
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
                +1 (800) 123-4567
                <span
                  className={`
                  absolute left-0 bottom-[-3px] h-[1.5px] rounded-full w-full bg-white
                  transition-transform duration-300 ease-out
                  origin-left scale-x-0 group-hover:scale-x-100
                  `}
                ></span>
              </p>
            </button>
            <Button onClick={open} variant="white">
              Get Estimate
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header