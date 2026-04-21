"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Button from "../common/Button";

gsap.registerPlugin(ScrollTrigger);

const ExpertSection = () => {
    const sectionRef = useRef(null);
    const countersRef = useRef([]);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            countersRef.current.forEach((el) => {
                const target = +el.getAttribute("data-target");

                gsap.fromTo(
                    el,
                    { innerText: 0 },
                    {
                        innerText: target,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                        onUpdate: function () {
                            el.innerText =
                                target >= 1000
                                    ? Math.floor(el.innerText / 1000) + "K+"
                                    : Math.floor(el.innerText) + (target === 15 ? "+" : "");
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className='w-full padding py-0! my-14'>
            <div className="max_width_layout w-full flex items-stretch relative gap-x-44">

                <div className="h-full absolute left-1/2 -translate-x-1/2 w-[1px] bg-black/10"></div>

                {/* LEFT */}
                <div className="w-1/2">
                    <img className='w-full' src="/images/homepage/expert_map.png" alt="" />

                    <div className="w-full mt-10 flex items-center justify-between">

                        <div>
                            <h2
                                ref={(el) => (countersRef.current[0] = el)}
                                data-target="12000"
                                className='text-5xl font-semibold'
                            >
                                0
                            </h2>
                            <p className='text-[#6B6E73] text-lg'>Moves Completed</p>
                        </div>

                        <div>
                            <div className="flex gap-x-1">
                                <h2
                                    ref={(el) => (countersRef.current[1] = el)}
                                    data-target="24"
                                    className='text-5xl font-semibold'
                                >
                                    0
                                </h2>
                                <h2
                                    className='text-5xl font-semibold'
                                >
                                    /
                                </h2>
                                <h2
                                    ref={(el) => (countersRef.current[2] = el)}
                                    data-target="7"
                                    className='text-5xl font-semibold'
                                >
                                    0
                                </h2>
                            </div>
                            <p className='text-[#6B6E73] text-lg'>Customer Support</p>
                        </div>

                        <div>
                            <h2
                                ref={(el) => (countersRef.current[3] = el)}
                                data-target="15"
                                className='text-5xl font-semibold'
                            >
                                0
                            </h2>
                            <p className='text-[#6B6E73] text-lg'>Years Experience</p>
                        </div>

                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/2 flex flex-col justify-between">
                    <div>
                        <h2 className='text-5xl font-semibold w-[80%]'>
                            Expert Movers Serving Regina, Winnipeg & Alberta
                        </h2>
                        <p className='text-[#6B6E73] text-lg mt-8'>
                            At Bor’s Moving, we proudly deliver reliable, stress-free moving services across Regina, Winnipeg, Saskatchewan, and Alberta.
                        </p>
                    </div>

                    <Button variant="outline">
                        Discover More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ExpertSection;