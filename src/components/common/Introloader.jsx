"use client";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap/dist/SplitText';
import React from 'react'
gsap.registerPlugin(SplitText);

const words = [
    "Secure",
    "Fast",
    "Trusted",
    "Seamless",
    "Smooth Move",
]
const Introloader = () => {

useGSAP(() => {
  const lenis = window.lenis;

  if (lenis) lenis.stop(); // stop immediately

  const anim_words = SplitText.create(".intr_txt", {
    type: "words, chars",
  });

  const tl = gsap.timeline({
    delay: 0.5,
    onComplete: () => {
      if (window.lenis) {
        window.lenis.start(); // ✅ restart after animation
      }
    },
  });

  tl.to(".hello_txt", { yPercent: -100, ease: "power2.out" })
    .to(".hello_txt", { yPercent: -200, ease: "power2.out" }, ">+=0.2")
    .to(anim_words.words, {
      yPercent: -100,
      ease: "power2.out",
      stagger: 0.05,
    }, "<")
    .to(".serv_anim_text", {
      yPercent: -100,
      ease: "power2.out",
      stagger: 0.05,
    }, "<")
    .to(anim_words.words, {
      yPercent: -200,
      ease: "power2.out",
      stagger: 0.05,
    })
    .to(".serv_anim_text", {
      yPercent: -200,
      ease: "power2.out",
      stagger: 0.05,
    }, "<")
    .set(".introloader_fix", { display: "none" });

}, []);

    return (
        <>
            <div className=" introloader_fix w-full fixed top-0 left-0 h-screen z-100  bg-[#f1f1f1] pointer-events-none padding flex items-center">
                <div className="w-full flex items-center justify-between">
                    <div className=" relative w-[20vw] overflow-hidden">
                        <p className=' hello_txt translate-y-full text-3xl font-medium'>Hello</p>
                        <p className=' absolute intr_txt text-3xl font-medium text-[#F5344F]'>We are Bro's Moving</p>
                    </div>

                    <div className="">
                        {words.map((word, i) => (
                            <div key={i} className=" block w-fit overflow-hidden">
                                <p key={i} className=' serv_anim_text translate-y-full text-3xl font-medium'>{word}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introloader