"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {

    const testimonialsContainer = useRef(null);

    useGSAP(() => {
        const container = document.querySelector(".max_width_layout"); // FIXED
        const slider = document.querySelector(".testimonials_slider");

        const totalWidth = slider.scrollWidth;
        const visibleWidth = container.offsetWidth;

        const moveX = totalWidth - visibleWidth;

        gsap.to(
            slider,
            {
                x: -moveX,
                ease: "none",
                scrollTrigger: {
                    trigger: testimonialsContainer.current,
                    start: "top top",
                    end: `+=${moveX}`,
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            }
        );
    }, { scope: testimonialsContainer });

    return (
        <>
            <div ref={testimonialsContainer} className=" testimonials_paren w-full h-screen padding  flex flex-col justify-center gap-y-10">
                <div className="w-full  md:text-center">
                    <h2 className='text-3xl md:text-5xl  font-semibold '>What Our Customers Say</h2>
                    <p className='text-base leading-tight mt-2 md:text-lg text-[#6B6E73]'>Hear Directly from Our Customers About Their Smooth and Stress-Free Moving Experiences</p>
                </div>

                <div className=" w-full max_width_layout overflow-hidden rounded-3xl flex">
                    <div className=" testimonials_slider   flex gap-x-5">
                        {[1, 2, 3, 4, 5, 6].map((item, i) => (
                            <div className="bg-[#F9F6F3] rounded-3xl p-10 flex flex-col max-sm:gap-y-20 justify-between w-[90vw] md:w-[40vw] max-sm:h-[65svh] md:aspect-4/3" key={i}>
                                <div className="flex gap-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <img key={i} src="/icons/gold_star.svg" alt="" />
                                    ))}
                                </div>
                                <p className='text-[#6B6E73] text-2xl md:text-3xl'>“Absolutely outstanding service from start to finish. The team was efficient, careful, and incredibly professional. Everything arrived in perfect condition—highly recommended!”</p>

                                <div className="flex gap-x-2 items-center">
                                    <div className="size-14 center rounded-full overflow-hidden">
                                        <img className='cover object-top' src="/images/homepage/testimonials/img1.png" alt="" />
                                    </div>
                                    <div className="">
                                        <p className='text-2xl  font-semibold'>Greta Charles</p>
                                        <p className='text-[#6B6E73]'>Studio manager</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials