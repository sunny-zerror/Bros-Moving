"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react'
gsap.registerPlugin(ScrollTrigger);

const StepsSection = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".steps_section_paren",
        start: "top top",
        end: "+=1500",
        pin: true,
        scrub: true,
        // markers: true,
      },
    });

    tl.fromTo(
      ".steps_card",
      {
        rotate: (i) => [15, -15, 20, -15][i],
      },
      {
        rotate: (i) => [-3, 3, -2.8, 3][i],
        stagger: 0.1,
        ease: "power3.out",
      }
    );
    tl.from(
      ".steps_card",
      {
        x: "150vw",
        stagger: 0.1,
        ease: "power3.out",
      }, "<"
    );
  });

  return (
    <>
      <div className=" steps_section_paren w-full  h-screen relative overflow-hidden">
        <img className='w-full h-full' src="/images/homepage/steps_section/steps_bg.png" alt="" />

        <div className=" padding w-full  h-full  absolute top-0 left-0 z-10 ">
          <h2 className='text-5xl font-semibold text-center text-white '>Simple Steps to Get Moving</h2>
          <div className=" max_width_layout relative h-full  w-full flex items-center">

            <div className=" steps_card  steps_card_1 w-[25vw] left-0  border border-black/20 absolute text-white  overflow-hidden aspect-3/4 bg-[#F9F6F3] rounded-2xl flex flex-col justify-between p-7">
              <div className="w-full absolute inset-0 z-[1] h-full">
                <img className='w-full' src="/images/homepage/steps_section/img1.png" alt="" />
              </div>
              <div className="size-10 relative z-10 center leading-none font-medium bg-white text-[#F5344F] rounded-full text-lg">
                01
              </div>
              <div className="relative z-10">
                <h3 className='text-2xl font-semibold mb-2'>Book Your Move</h3>
                <p className='leading-tight'>Your move, handled with care and precision.</p>
              </div>

            </div>

            <div className=" steps_card  steps_card_2 w-[25vw] left-[25%]  border border-black/20 absolute   overflow-hidden aspect-3/4 bg-[#F9F6F3] rounded-2xl flex flex-col justify-between p-7">
              <div className="w-full absolute inset-0 z-[1] h-full">
                <img className='w-full' src="/images/homepage/steps_section/img2.png" alt="" />
              </div>
              <div className="w-full  relative z-10 flex items-center gap-x-4">
                <div className="size-10  center leading-none font-medium bg-white text-[#F5344F] rounded-full text-lg">
                  02
                </div>
                <h3 className='text-2xl font-semibold '>Packing & Prep</h3>
              </div>
              <div className="relative z-10">
                <p className='leading-tight text-[#6B6E73]'>Our experts arrive with premium materials to secure your belongings for safe transit.</p>
              </div>

            </div>

            <div className="steps_card  steps_card_3 w-[25vw] left-[50%]  border border-black/20 absolute   overflow-hidden aspect-3/4 bg-[#F9F6F3] rounded-2xl flex flex-col justify-between p-7">
              <div className="w-full absolute inset-0 z-[1] h-full">
                <img className='w-full' src="/images/homepage/steps_section/img3.png" alt="" />
              </div>
              <div className="size-10 relative z-10 center leading-none font-medium bg-white text-[#F5344F] rounded-full text-lg">
                03
              </div>
              <div className="relative z-10">
                <h3 className='text-2xl font-semibold mb-2'>Loading & Transport</h3>
                <p className='leading-tight text-[#6B6E73]'>Efficient loading into state-of-the-art trucks followed by GPS-tracked transportation.</p>
              </div>

            </div>

            <div className="steps_card  steps_card_4 w-[25vw] right-0  border border-black/20 absolute   overflow-hidden aspect-3/4 bg-[#F9F6F3] rounded-2xl  p-7">
              <div className="w-full absolute inset-0 z-[1] h-full">
                <img className='w-full' src="/images/homepage/steps_section/img4.png" alt="" />
              </div>
              <div className="w-full  relative z-10 flex items-center gap-x-4">
                <div className="size-10  center leading-none font-medium bg-white text-[#F5344F] rounded-full text-lg">
                  04
                </div>
              </div>
              <div className="relative z-10">
                <h3 className='text-2xl font-semibold mt-4 mb-2'>Unloading & Setup</h3>
                <p className='leading-tight text-[#6B6E73]'>Final placement and assembly in your new space. We don't leave until you're settled.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepsSection