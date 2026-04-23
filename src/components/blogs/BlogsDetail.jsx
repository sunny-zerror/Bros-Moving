"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/dist/SplitText';
import { Link } from 'next-view-transitions';
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
gsap.registerPlugin(SplitText);

const BLOGS = [
    {
        id: 1,
        title: "High Five Friday: Kingsley Okoroafo from Calgary North, AB",
        author: "Becky Livingston",
        slug: "becky-livingston",
        date: "23 April, 2026",
        image: "/images/blogpage/blog1.png"
    },
    {
        id: 2,
        title: "Celebrating Excellence: Kingsley Okoroafo | High Five Friday",
        author: "Becky Livingston",
        slug: "becky-livingston",
        date: "23 April, 2026",
        image: "/images/blogpage/blog2.png"
    },
    {
        id: 3,
        title: "High Five Friday Feature: Kingsley Calgary North, AB",
        author: "Becky Livingston",
        slug: "becky-livingston",
        date: "23 April, 2026",
        image: "/images/blogpage/blog3.png"
    },
    {
        id: 4,
        title: "High Five Friday: Kingsley Okoroafo from Calgary North, AB",
        author: "Becky Livingston",
        slug: "becky-livingston",
        date: "23 April, 2026",
        image: "/images/blogpage/blog1.png"
    },
    {
        id: 5,
        title: "Celebrating Excellence: Kingsley Okoroafo | High Five Friday",
        author: "Becky Livingston",
        slug: "becky-livingston",
        date: "23 April, 2026",
        image: "/images/blogpage/blog2.png"
    },
    {
        id: 6,
        title: "High Five Friday Feature: Kingsley Calgary North, AB",
        author: "Becky Livingston",
        slug: "becky-livingston",
        date: "23 April, 2026",
        image: "/images/blogpage/blog3.png"
    },
];

const BlogDetailData = [
    {
        id: 1,
        heading: "Introduction",
        content: `At Bor's Moving, we understand that behind every successful move is a team of dedicated professionals who bring commitment, care, and expertise to the job. Our High Five Friday series is designed to recognize those individuals who consistently go above and beyond expectations. This week, we are proud to celebrate Kingsley Okorafo, whose hard work and positive attitude make a meaningful impact on both our team and our customers.`
    },
    {
        id: 2,
        heading: "Professional Excellence",
        content: `Kingsley stands out for his exceptional work ethic and attention to detail. No matter the size or complexity of the move, he approaches every task with precision and focus. From carefully packing fragile items to organizing efficient loading and unloading processes, he ensures that each step is executed smoothly. His ability to maintain high standards under pressure highlights his professionalism and dedication to delivering reliable, top-quality service every time.`,
        images: [
            "/images/blogpage/blog_det_1.png",
            "/images/blogpage/blog_det_2.png"
        ]
    },
    {
        id: 3,
        heading: "Customer & Team Impact",
        content: `What truly sets Kingsley apart is the way he connects with people. He understands that moving can be a stressful experience, and he goes the extra mile to make customers feel comfortable and confident throughout the process. His friendly demeanor, clear communication, and respectful approach consistently earn positive feedback. At the same time, Kingsley is a strong team player—always ready to support his colleagues, share knowledge, and contribute to a positive and productive work environment.`
    },
    {
        id: 4,
        heading: "Recognition & Appreciation",
        content: `Kingsley’s consistent performance and commitment to excellence reflect the core values of Bor’s Moving—care, reliability, and professionalism. His contributions not only help maintain our reputation for quality service but also inspire others to raise their standards.`
    }
]

const BlogsDetail = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);
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
                <div className="  max_width_layout absolute bottom-32 flex flex-col justify-center items-center text-[#F9F6F3]">
                    <div className=" hero_text flex flex-col items-center">
                        <h1 className=' hero_title leading-24 text-7xl font-semibold '>Kingsley Okoroafo | High Five Friday</h1>
                    </div>
                    <div className=" hero_text w-fit mt-10 flex gap-x-5 h-fit  ">
                        <div className="flex items-center gap-x-2">
                            <img src="/icons/white_person.svg" alt="" />
                            <p className=' hero_desc text-lg'>Becky Livingston</p>
                        </div>
                        <div className="w-[1px] bg-white h-8"></div>
                        <div className="flex items-center gap-x-2">
                            <img src="/icons/white_calender.svg" alt="" />
                            <p className=' hero_desc text-lg'>23 April, 2026</p>
                        </div>
                    </div>
                </div>
                <Image width={1920} height={1080} onLoad={() => setIsLoaded(true)} className={`w-full opacity-0 transition-all duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`} src="/images/blogpage/blog_detail_img.png" alt="" />
                <div className={`w-full absolute pointer-events-none transition-all  skeleton duration-300 inset-0 p-5 ${isLoaded ? "opacity-0" : "opacity-100"} `}>
                    <img className='w-full' src="/images/page_hero_skeleton.png" alt="" />
                </div>
            </div>

            <div className=" max_width_layout w-[60%] padding px-0! pb-10! border-b border-black/10 mx-auto space-y-8">
                {BlogDetailData.map((blog, i) => (
                    <div key={i} className="">
                        <h3 className='text-2xl font-semibold'>{i + 1}. {blog.heading}</h3>
                        <p className='text-lg text-[#6B6E73]'>{blog.content}</p>
                        {blog.images && (
                            <div className="w-full grid grid-cols-2 gap-x-10 mt-8">
                                {blog?.images.map((item, i) => (
                                    <div key={i} className="w-full">
                                        <img src={item} alt="" className='w-full' />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className=" max_width_layout w-[60%] mx-auto flex items-center justify-between mt-10 mb-24">
                <Link href={"/blog/becky-livingstn"} className=' group hover:pl-2 pl-0 transition-all duration-300 flex w-fit items-center gap-x-0 hover:gap-x-2 font-medium border border-black/30 leading-none   rounded-full px-4 h-12'>
                    <div className={`group-hover:scale-100 group-hover:p-2.5 transition-all duration-300 scale-0  p-0 overflow-hidden bg-[#090A0C] rounded-full  `}>
                        <img
                            src="/icons/arrow-right.svg"
                            className="w-4 invert-100 rotate-180"
                            alt="arrow"
                        />
                    </div>
                    Previous Blog
                     </Link>
                <Link href={"/blog/becky-livingsto"} className=' group hover:pr-2 pr-0 transition-all duration-300 flex w-fit items-center gap-x-0 hover:gap-x-2 font-medium border border-black/30 leading-none   rounded-full px-4 h-12'>
                        Next Blog
                    <div className={`group-hover:scale-100 group-hover:p-2.5 transition-all duration-300 scale-0  p-0 overflow-hidden bg-[#090A0C] rounded-full  `}>
                        <img
                            src="/icons/arrow-right.svg"
                            className="w-4 invert-100"
                            alt="arrow"
                        />
                    </div>
                     </Link>
            </div>

            <div className=" w-full padding bg-[#F9F6F3]">
                <div className=" max_width_layout w-full flex items-end justify-between">
                    <h2 className='text-5xl font-semibold '>Read Latest Blog</h2>
                    <div className="flex items-end gap-x-2">

                        {/* PREV */}
                        <button
                            disabled={isBeginning}
                            onClick={() => swiperRef.current?.slidePrev()}
                            className={`size-10  border-black/30 center rounded-full border transition-all duration-300
                                ${isBeginning
                                    ? " opacity-40 cursor-not-allowed!"
                                    : " group hover:bg-[#F5344F] hover:border-[#F5344F]"
                                }`}
                        >
                            <img
                                src="/icons/arrow-right.svg"
                                className={`w-4 rotate-180 group-hover:invert-100 `}
                                alt=""
                            />
                        </button>

                        {/* NEXT */}
                        <button
                            disabled={isEnd}
                            onClick={() => swiperRef.current?.slideNext()}
                            className={`size-10  border-black/30 center rounded-full border transition-all duration-300
                                ${isEnd
                                    ? " opacity-40 cursor-not-allowed!"
                                    : " group hover:bg-[#F5344F] hover:border-[#F5344F]"
                                }`}
                        >
                            <img
                                src="/icons/arrow-right.svg"
                                className="w-4 group-hover:invert-100"
                                alt=""
                            />
                        </button>

                    </div>
                </div>

                <div className=" max_width_layout mt-14 w-full ">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        spaceBetween={30}
                        slidesPerView={3}
                        grabCursor={true}
                        className="cursor-grab active:cursor-grabbing"
                        breakpoints={{
                            0: { slidesPerView: 1.2 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {BLOGS.map((blog, i) => (
                            <SwiperSlide key={i} className=' group space-y-5 '>
                                <Link href={`/blog/${blog.slug}`} key={i} className="space-y-5">
                                    <img src={blog.image} className='w-full group-hover:scale-95 transition-all duration-300' alt="" />
                                    <div className="flex w-full justify-between">
                                        <div className="flex items-center gap-x-2">
                                            <img src="/icons/form_person.svg" alt="" />
                                            <p className='text-lg text-[#6B6E73] transition-all duration-300  group-hover:text-[#090A0C]'>{blog.author}</p>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <img src="/icons/red_calender.svg" alt="" />
                                            <p className='text-lg text-[#6B6E73] transition-all duration-300  group-hover:text-[#090A0C]'>{blog.date}</p>
                                        </div>
                                    </div>
                                    <h3 className='text-2xl group-hover:text-[#F5344F]  transition-all duration-300 leading-tight group-hover:underline font-semibold'>{blog.title}</h3>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default BlogsDetail