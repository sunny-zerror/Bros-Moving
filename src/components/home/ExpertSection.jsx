import React from 'react'

const ExpertSection = () => {
    return (
        <>
            <div className="w-full flex items-stretch padding relative gap-x-24 py-0! my-14 ">
                <div className="h-full absolute left-1/2 -translate-x-1/2 w-[1px] bg-black/10"></div>
                <div className="w-1/2 ">
                    <img src="/images/homepage/expert_map.png" alt="" />
                    <div className="w-full mt-10 flex items-center justify-between">
                        <div className="">
                            <h2 className='text-5xl font-semibold'>12K+</h2>
                            <p className='text-[#6B6E73] text-lg   '>Moves Completed</p>
                        </div>
                        <div className="">
                            <h2 className='text-5xl font-semibold'>24/7</h2>
                            <p className='text-[#6B6E73] text-lg   '>Customer Support</p>
                        </div>
                        <div className="">
                            <h2 className='text-5xl font-semibold'>15+</h2>
                            <p className='text-[#6B6E73] text-lg   '>Years Experience</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="">
                        <h2 className='text-5xl font-semibold w-[80%] '>Expert Movers Serving Regina, Winnipeg & Alberta</h2>
                        <p className='text-[#6B6E73] text-lg mt-8  '>At Bor’s Moving, we proudly deliver reliable, stress-free moving services across Regina, Winnipeg, Saskatchewan, and Alberta. Our experienced team is committed to handling every move with precision, care, and attention to detail—treating your belongings as if they were our own.</p>
                    </div>
                    <button className='flex w-fit items-center gap-x-2 font-medium border border-black/30 leading-none   rounded-full px-4 h-12'>  Discover More<img src="/icons/arrow-right.svg" className='w-5' alt="" /> </button>
                </div>
            </div>
        </>
    )
}

export default ExpertSection