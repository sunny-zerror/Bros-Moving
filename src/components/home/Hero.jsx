"use client";
import React, { useRef, useState } from 'react'
import Button from '../common/Button'
import { RiCloseLine } from '@remixicon/react';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(SplitText);

const Hero = () => {

    const [openQuoteForm, setOpenQuoteForm] = useState(false)

    const container = useRef();

    useGSAP(() => {
        const titleSplit = new SplitText(".hero_title", {
            type: "lines",
            linesClass: "line-wrapper"
        });

        const descSplit = new SplitText(".hero_desc", {
            type: "lines",
            linesClass: "line-wrapper"
        });

        titleSplit.lines.forEach(line => {
            const wrapper = document.createElement("div");
            wrapper.style.overflow = "hidden";
            wrapper.style.display = "block";
            wrapper.style.width = "fit-content";

            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        descSplit.lines.forEach(line => {
            const wrapper = document.createElement("div");
            wrapper.style.overflow = "hidden";
            wrapper.style.display = "block";
            wrapper.style.width = "fit-content";

            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.set([...titleSplit.lines, ...descSplit.lines], {
            yPercent: 100
        });

        gsap.to(titleSplit.lines, {
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.08
        });

        gsap.to(descSplit.lines, {
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.05,
            delay: 0.4
        });
        gsap.to(".quote_btn_paren", {
            opacity:1,
            // duration: 1,
            ease: "power3.out",
            delay: 0.8
        });

    }, { scope: container });

    return (
        <>
            <div ref={container} className="w-full  h-screen  relative  p-5">
                <video poster='/images/hero_video_poster_.webp' loop autoPlay muted playsInline src="/videos/hero_video.mp4" className={`rounded-[36px] cover ${openQuoteForm ? "blur-[4px] brightness-75" : "blur-[0px] brightness-95"}  transition-all duration-300`} alt="" />
                <div className="w-full padding absolute  h-full  inset-0">
                    <div className=" max_width_layout  w-full  h-full flex items-center">
                        <div className="w-1/2 flex flex-col justify-end h-full   pr-32  text-white">
                            <div className=" space-y-10">
                                <div className="hero_text space-y-10">
                                    <h1 className="hero_title text-7xl font-semibold">
                                        Fast, Reliable & Stress-Free Moving Services
                                    </h1>

                                    <p className="hero_desc leading-tight text-lg ">
                                        Local & long-distance moving with professional  <br />packing and guaranteed safety.
                                    </p>
                                </div>
                                <div className=" quote_btn_paren opacity-0 flex gap-x-2">
                                    <Button onClick={() => setOpenQuoteForm(!openQuoteForm)} variant="primary">
                                        Get a Quote
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2  h-full flex justify-end ">
                            <div className="w-[60%] h-full flex items-end">
                                <div className={` ${openQuoteForm ? "translate-y-0 opacity-100 pointer-events-auto" : " pointer-events-none translate-y-5 opacity-0"}  w-full h-fit bg-white rounded-[2rem] p-8 shadow-lg transition-all duration-300`}>
                                    <div className="w-full flex items-center justify-between">
                                        <p className="text-2xl font-semibold ">
                                            Quick Cost Estimate
                                        </p>
                                        <div onClick={() => setOpenQuoteForm(false)} className=" p-1 border rounded-full  hover:bg-[#F5344F] cursor-pointer hover:text-white transition-all duration-300 hover:scale-125 ">
                                            <RiCloseLine size={10} />
                                        </div>
                                    </div>
                                    <div className="w-full flex gap-4 mt-8 relative  rounded-xl">

                                        {/* Center Swap Button */}
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
                                            <div className="w-10 h-10 flex items-center justify-center bg-[#F5344F] rounded-full shadow-[0px_6px_10px_rgba(245,52,79,0.25)]">
                                                <img src="/icons/swap_arrow.svg" className="w-4" />
                                            </div>
                                        </div>

                                        {/* From */}
                                        <div className="w-1/2 bg-[#F5F2EF] rounded-xl p-4 space-y-2">
                                            <p className="text-sm text-gray-500">From Zip</p>
                                            <p className="text-xl font-semibold">12334</p>
                                        </div>

                                        {/* To */}
                                        <div className="w-1/2 bg-[#F5F2EF] rounded-xl p-4 space-y-2 text-right">
                                            <p className="text-sm text-gray-500">To Zip</p>
                                            <p className="text-xl font-semibold">12334</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-8">

                                        {/* Date */}
                                        <div className="w-1/2">
                                            <p className=" font-medium mb-2 text-[#0F172A]">Moving Date</p>
                                            <div className="flex items-center justify-between bg-[#F5F2EF] rounded-full px-4 py-3">
                                                <span className="text-gray-500">23-04-26</span>
                                                <img src="/icons/calender.svg" className="w-5 opacity-60" />
                                            </div>
                                        </div>

                                        {/* Home Size */}
                                        <div className="w-1/2">
                                            <p className=" font-medium mb-2 text-[#0F172A]">Home Size</p>
                                            <div className="flex items-center justify-between bg-[#F5F2EF] rounded-full px-4 py-3">
                                                <span className="text-gray-500">3 Bedroom</span>
                                                <img src="/icons/drop_arrow.svg" className="w-4 opacity-60" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-8">
                                        <p className=" font-medium mb-2 text-[#0F172A]">Phone Number</p>
                                        <div className="flex items-center justify-between bg-[#F5F2EF] rounded-full px-4 py-3">
                                            <span className="text-gray-500">+(123) 456 7890</span>
                                            <img src="/icons/phone.svg" className="w-5 opacity-60" />
                                        </div>
                                    </div>
                                    <button className="w-full mt-8 bg-[#090A0C] text-white py-3 rounded-full flex items-center justify-center gap-2 text-lg">
                                        Calculate Cost
                                        <img src="/icons/compass.svg" className="w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero