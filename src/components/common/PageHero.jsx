"use client";
import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
gsap.registerPlugin(SplitText);

const PageHero = ({ title, description, image }) => {

    const [isLoaded, setIsLoaded] = useState(false);
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

        const wrapLines = (lines) => {
            lines.forEach(line => {
                const wrapper = document.createElement("div");
                wrapper.style.overflow = "hidden";
                wrapper.style.display = "block";
                wrapper.style.width = "fit-content";

                line.parentNode.insertBefore(wrapper, line);
                wrapper.appendChild(line);
            });
        };

        wrapLines(titleSplit.lines);
        wrapLines(descSplit.lines);

        gsap.set([...titleSplit.lines, ...descSplit.lines], {
            yPercent: 100
        });

        if (!isLoaded) return;

        gsap.to(titleSplit.lines, {
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.08,
            delay: 0.4
        });

        gsap.to(descSplit.lines, {
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.05,
            delay: 0.6
        });

    }, { scope: container, dependencies: [isLoaded] });

    return (
        <>
            <div ref={container} className="w-full p-5 center relative text-center">
                <div className=" hero_text max_width_layout flex flex-col items-center absolute bottom-32 text-[#F9F6F3]">
                    <h1 className=' hero_title leading-24 text-7xl font-semibold'>{title}</h1>
                    <p className=' hero_desc leading-tight text-lg '>{description}</p>
                </div>
                <Image width={1920} height={1080} onLoad={() => setIsLoaded(true)} className={`w-full opacity-0 transition-all duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`} src={image} alt="" />
                <div className={`w-full absolute pointer-events-none transition-all  skeleton duration-300 inset-0 p-5 ${isLoaded ? "opacity-0" : "opacity-100"} `}>
                    <img className='w-full' src="/images/page_hero_skeleton.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default PageHero