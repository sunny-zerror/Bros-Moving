"use client";
import React, { useRef, useState } from 'react'
import Button from '../common/Button'
import { RiCloseLine } from '@remixicon/react';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { useGSAP } from '@gsap/react';
import { useQuoteStore } from '@/store/useQuoteStore';
import { Link } from 'next-view-transitions';
import Introloader from '../common/Introloader';
gsap.registerPlugin(SplitText);

const Hero = () => {

    const { open } = useQuoteStore();
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

        const tl = gsap.timeline({ delay: 2.5 })

        tl.to(container.current, { clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)", duration: 1.2, ease: "expo.out" });
        tl.to(".hero_video", { scale: 1, duration: .8, ease: "power2.out" }, "<");

        tl.to(titleSplit.lines, {
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.08
        });

        tl.to(descSplit.lines, {
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.05,
        }, "<0.2");
        tl.to(".quote_btn_paren", {
            opacity: 1,
            ease: "power3.out",
        }, "<0.2");

    }, { scope: container });


    return (
        <>
            <Introloader />
            <div style={{ clipPath: "polygon(0% 0%, 100% 0, 100% 0%, 0% 0%)" }} ref={container} className="w-full  h-screen  relative  p-5">
                <div className="w-full h-full overflow-hidden rounded-[36px]">
                    <video poster='/images/hero_video_poster_.webp' loop autoPlay muted playsInline src="/videos/hero_video.mp4" className={` hero_video scale-[2] cover brightness-95`} alt="" />
                </div>
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
                                    <Button onClick={open} variant="primary">
                                        Get a Quote
                                    </Button>
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