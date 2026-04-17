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
const BlogDetail = () => {
  return (
    <>
      <div className="w-full p-5 center relative text-center">
        <div className="absolute bottom-32 flex flex-col items-center text-[#F9F6F3]">
          <h1 className='text-6xl font-semibold w-[70%]'>Celebrating Excellence: Kingsley Okoroafo | High Five Friday</h1>
          <div className=" w-fit mt-10 flex gap-x-5 h-fit  ">
            <div className="flex items-center gap-x-2">
              <img src="/icons/white_person.svg" alt="" />
              <p className='text-lg'>Becky Livingston</p>
            </div>
            <div className="w-[1px] bg-white h-8"></div>
            <div className="flex items-center gap-x-2">
              <img src="/icons/white_calender.svg" alt="" />
              <p className='text-lg'>23 April, 2026</p>
            </div>
          </div>
        </div>
        <img className='w-full ' src="/images/blogpage/blog_detail_img.png" alt="" />
      </div>

      <div className="w-[60%] padding px-0! pb-10! border-b border-black/10 mx-auto space-y-8">
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
      <div className="w-[60%] mx-auto flex items-center justify-between mt-10 mb-24">
        <button className='flex w-fit items-center gap-x-2 font-medium border border-black/30 leading-none   rounded-full px-4 h-12'> <img src="/icons/arrow-right.svg" className='w-5 rotate-180' alt="" />  Previous Blog </button>
        <button className='flex w-fit items-center gap-x-2 font-medium border border-black/30 leading-none   rounded-full px-4 h-12'>  Next Blog<img src="/icons/arrow-right.svg" className='w-5' alt="" /> </button>
      </div>

      <div className="w-full padding bg-[#F9F6F3]">
        <div className="w-full flex items-end justify-between">
          <h2 className='text-5xl font-semibold '>Related Latest Blog</h2>
          <div className="flex items-end gap-x-4">
            <button className=' size-10 center  border border-black/30 rounded-full '> <img src="/icons/arrow-right.svg" className='w-4 rotate-180' alt="" /> </button>
            <button className=' size-10 center bg-[#F5344F] rounded-full '> <img src="/icons/arrow-right.svg" className='w-4 invert-100' alt="" /> </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 pt-10 gap-10">
          {BLOGS.map((blog, i) => (
            <Link href={`/blog/${blog.slug}`} key={i} className="space-y-5">
              <img src={blog.image} className='w-full' alt="" />
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

export default BlogDetail