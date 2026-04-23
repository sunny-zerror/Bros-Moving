"use client";
import { RiArrowDownSLine } from '@remixicon/react'
import { Link } from 'next-view-transitions';
import React, { useState } from 'react'

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
        title: "Team Spotlight: Kingsley Okoroafo from Calgary North, AB",
        author: "Becky Livingston",
        slug: "becky-livingston",
        date: "23 April, 2026",
        image: "/images/blogpage/blog4.png"
    },
    {
        id: 5,
        title: "Team Spotlight: Kingsley Okoroafo from Calgary North, AB",
        author: "Becky Livingston",
        slug: "becky-livingston",
        date: "23 April, 2026",
        image: "/images/blogpage/blog5.png"
    },
    {
        id: 6,
        title: "Meet Our Star: Kingsley Okoroafo – High Five Friday",
        author: "Becky Livingston",
        slug: "becky-livingston",
        date: "23 April, 2026",
        image: "/images/blogpage/blog6.png"
    }
];
const SERVICES = [
    "Residential Moving",
    "Commercial Moving",
    "Packing & Unpacking",
    "Storage Services",
    "Specialty Moving"
];
const BlogsGrid = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const toggleCategory = () => {
        setIsCategoryOpen((prev) => !prev);
        setIsSortOpen(false); // close other dropdown
    };

    const toggleSort = () => {
        setIsSortOpen((prev) => !prev);
        setIsCategoryOpen(false); // close other dropdown
    };
    return (
        <>
            <div className="w-full padding">
                <div className=" max_width_layout w-full flex border-b border-black/10 pb-5 items-end justify-between">
                    <h2 className='text-5xl font-semibold '>Blogs<sup className='text-lg'>(6)</sup> </h2>
                    <div className="relative flex items-end gap-x-4">

                        <button
                            onClick={toggleCategory}
                            className='flex w-fit items-center gap-x-2 font-medium border border-black/30 rounded-full px-4 h-12'
                        >
                            Categories
                            <RiArrowDownSLine
                                className={`${isCategoryOpen ? "rotate-180" : ""} transition-all duration-300`}
                            />
                        </button>

                        <button
                            onClick={toggleSort}
                            className='flex w-fit items-center gap-x-2 font-medium border border-black/30 rounded-full px-4 h-12'
                        >
                            Sort By
                            <RiArrowDownSLine
                                className={`${isSortOpen ? "rotate-180" : ""} transition-all duration-300`}
                            />
                        </button>

                        <div
                            data-lenis-prevent
                            className={`${isCategoryOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "  translate-y-2  opacity-0 pointer-events-none"} transition-all duration-150 absolute left-0 top-[110%] w-full z-10 custom_scroller h-[26vh] border overflow-y-auto border-black/10 bg-white rounded-xl shadow-md`}
                        >
                            {SERVICES.map((item, i) => (
                                <div
                                    key={i}
                                    className="w-full p-3 border-b hover:bg-[#F5344F] hover:text-white cursor-pointer border-black/10"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div
                        data-lenis-prevent
                            className={`${isSortOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "  translate-y-2  opacity-0 pointer-events-none"} transition-all duration-150 absolute left-0 top-[110%] w-full z-10 custom_scroller h-[26vh] border overflow-y-auto border-black/10 bg-white rounded-xl shadow-md`}
                        >
                            {["Newest", "Oldest", "Popular", "Trending", "Featured"].map((item, i) => (
                                <div
                                    key={i}
                                    className="w-full p-3 border-b hover:bg-[#F5344F] hover:text-white cursor-pointer border-black/10"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className=" max_width_layout w-full grid grid-cols-3 gap-8 gap-y-12 pt-10">
                    {BLOGS.map((blog, i) => (
                        <Link href={`/blog/${blog.slug}`} key={i} className=" group space-y-5 ">
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
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogsGrid