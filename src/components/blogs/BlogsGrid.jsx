import { RiArrowDownSLine } from '@remixicon/react'
import { Link } from 'next-view-transitions';
import React from 'react'

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

const BlogsGrid = () => {
    return (
        <>
            <div className="w-full padding">
                <div className="w-full flex border-b border-black/10 pb-5 items-end justify-between">
                    <h2 className='text-5xl font-semibold '>18 Blogs</h2>
                    <div className="flex items-end gap-x-4">
                        <button className='flex w-fit items-center gap-x-2 font-medium border border-black/30 leading-none   rounded-full px-4 h-12'>  Categories <RiArrowDownSLine /> </button>
                        <button className='flex w-fit items-center gap-x-2 font-medium border border-black/30 leading-none   rounded-full px-4 h-12'>  Sort By<RiArrowDownSLine /> </button>
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 pt-10">
                    {BLOGS.map((blog, i) => (
                        <Link href={`/blog/${blog.slug}`} key={i} className=" group space-y-5 p-5 border transition-all duration-300 border-transparent rounded-xl  hover:shadow-xl hover:border-black/10">
                            <img src={blog.image} className='w-full group-hover:scale-95 transition-all duration-300' alt="" />
                            <div className="flex w-full justify-between">
                                <div className="flex items-center gap-x-2">
                                    <img src="/icons/form_person.svg" alt="" />
                                    <p className='text-lg text-[#6B6E73]'>{blog.author}</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <img src="/icons/red_calender.svg" alt="" />
                                    <p className='text-lg text-[#6B6E73]'>{blog.date}</p>
                                </div>
                            </div>
                            <h3 className='text-2xl font-semibold'>{blog.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogsGrid