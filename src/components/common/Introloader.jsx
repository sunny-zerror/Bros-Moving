"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/dist/SplitText';
import React from 'react'
gsap.registerPlugin(SplitText);

const Introloader = () => {

    useGSAP(() => {
        const anim_words = SplitText.create(".intr_txt", {
            type: "words, chars",
        });
        const anim_words2 = SplitText.create(".short_txt", {
            type: "words, chars",
        });

        const tl = gsap.timeline({ delay: 0.5 });

        tl.to(".hello_txt", { yPercent: -100, ease: "power2.out" })
            .to(".hello_txt", { yPercent: -200, ease: "power2.out" }, ">+=0.2")

            .to(anim_words.words, {
                yPercent: -100,
                ease: "power2.out",
                stagger: 0.02,
            }, "<")

            .to(anim_words.words, {
                yPercent: -200,
                ease: "power2.out",
                stagger: 0.02,
            })

              .to(anim_words2.words, {   
                yPercent: -100,
                ease: "power2.out",
                stagger: 0.02,
                }, "<")

            .set(".introloader_fix", { display: "none" });

    }, []);

    return (
        <>
            <div className=" introloader_fix w-full fixed top-0 left-0 h-screen z-100  bg-[#f1f1f1] pointer-events-none padding flex items-center">
                <div className="w-full flex items-center justify-between">
                    <div className="relative w-full overflow-hidden">
                        <p className='hello_txt translate-y-full text-xl lg:text-3xl font-medium'>
                            Hello
                        </p>

                        <p className='absolute intr_txt text-xl lg:text-3xl font-medium text-[#F5344F]'>
                            We are Bro's Moving
                        </p>

                        <p className='absolute short_txt text-xl lg:text-3xl font-medium'>
                            Moving made simple fast and stress-free
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introloader