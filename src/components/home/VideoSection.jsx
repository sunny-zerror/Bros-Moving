"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react'
gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".video_paren",
                start: "top top",
                end: "+=500",
                pin: true,
                scrub: true,
                // markers: true,
            },
        })
        tl.to(".video_inner", {
            width: "100%",
            height: "100%",
            ease: "linear",
            borderRadius: "0rem",
        })
        tl.to(".info_vid_sec", {
            opacity: 1
        }, "<")
    })
    return (
        <div className=' video_paren center w-full h-screen overflow-hidden'>
            <div className="w-full  h-full overflow-hidden relative z-10 center">
                <div className=" absolute h-full inset-0  w-full flex flex-col justify-center">
                    <div className="  flex flex-col items-center justify-center w-full space-y-5">
                        <h2 className='text-5xl font-semibold text-center text-white '>Worry-Free Moving with Full <br /> Insurance Coverage</h2>
                        <button className='center  py-3 px-6 gap-x-4 rounded-full backdrop-blur-lg text-white text-lg  border border-white/20'><p>Get the Estimated Cost</p><img src="/icons/arrow-right.svg" className='w-6 invert-100' alt="" /></button>
                    </div>
                    <div className=" info_vid_sec opacity-0 padding absolute bottom-24 w-full py-0!  flex items-end">

                        <div className="w-full max_width_layout border-b  pb-5 border-white/40 ">
                            <div className="w-full text-[#F9F6F3] flex  items-center justify-between ">
                                <p className='text-lg '>We provide full insurance coverage to keep your belongings safe, <br /> giving you complete peace of mind throughout your move.</p>
                                <img src="/images/homepage/smart_moving/trust_logos.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" absolute video_inner w-[60%] rounded-3xl overflow-hidden">
                <video loop autoPlay muted playsInline src="https://static.ext.waabi.ai/WAABI_27s_2K_antinomy_export_250823.mp4" className='cover' alt="" />
            </div>
        </div>
    )
}

export default VideoSection