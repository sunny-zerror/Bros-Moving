"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText'
import React, { useRef } from 'react'
gsap.registerPlugin(SplitText, ScrollTrigger);

const AboutParagraph = () => {
    useGSAP(() => {
        const split = SplitText.create(".split_para", {
            type: "chars",
        });
        gsap.from(split.chars, {
            opacity: .2,
            ease: "expo.out",
            duration: 0.01,
            stagger: 0.01,
            scrollTrigger: {
                trigger: ".about_para_paren",
                start: "top 70%",
                end: "top 10%",
                scrub: true
            }
        })

    });

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
        <>
            <div ref={sectionRef} className=" about_para_paren w-full  padding pb-0!">
                <div className=" max_width_layout w-full flex flex-col items-center text-center border-b pb-20 border-black/10">
                    <h2 className=' split_para text-4xl font-medium w-[70%] '>We provide expert moving services across Regina, Winnipeg, and Alberta, ensuring every move is handled with precision and care. From packing and loading to transportation and unpacking, our experienced team manages every detail so you can enjoy a smooth, stress-free relocation.</h2>
                    <div className="w-full mt-20 flex items-center justify-center">
                        <div className="">
                            <h2
                                ref={(el) => (countersRef.current[0] = el)}
                                data-target="12000"
                                className='text-5xl font-semibold'>0</h2>
                            <p className='text-[#6B6E73] text-lg   '>Moves Completed</p>
                        </div>
                        <div className=" border-l border-r border-black/10 px-14 mx-14">
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
                            <p className='text-[#6B6E73] text-lg   '>Customer Support</p>
                        </div>
                        <div className="">
                            <h2
                                ref={(el) => (countersRef.current[3] = el)}
                                data-target="15"
                                className='text-5xl font-semibold'
                            >
                                0
                            </h2>
                            <p className='text-[#6B6E73] text-lg   '>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutParagraph