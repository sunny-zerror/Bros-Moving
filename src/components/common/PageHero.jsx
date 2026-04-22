"use client";
import React, { useRef } from 'react'
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(SplitText);

const PageHero = ({ title, description, image }) => {
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

    }, { scope: container });
    return (
        <>
            <div ref={container} className="w-full p-5 center relative text-center">
                <div className=" hero_text max_width_layout flex flex-col items-center absolute bottom-32 text-[#F9F6F3]">
                    <h1 className=' hero_title leading-24 text-7xl font-semibold'>{title}</h1>
                    <p className=' hero_desc leading-tight text-lg '>{description}</p>
                </div>
                <img className='w-full ' src={image} alt="" />
            </div>
        </>
    )
}

export default PageHero