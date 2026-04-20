import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="w-full relative  p-5">
                <img src="/images/homepage/hero_section/hero.png" alt="" />

                <div className="w-full padding absolute pt-52! pb-0!  inset-0">
                <div className=" max_width_layout  w-full flex">
                    <div className="w-1/2   pr-32 text-white">
                        <div className=" space-y-10">
                            <h1 className='text-6xl font-semibold'>Fast, Reliable & Stress-Free Moving Services</h1>
                            <p className='text-lg w-[70%]'>Local & long-distance moving with professional packing and guaranteed safety.</p>
                            <div className="flex gap-x-2">
                                <button className='flex items-center gap-x-2 text-white bg-[#F5344F] rounded-full px-4 h-12'>  Get a Quote <img src="/icons/arrow-right.svg" className='w-5 invert-100' alt="" /> </button>
                                <button className='center size-12 rounded-full backdrop-blur-lg  border border-white/20'><img src="/icons/play_btn.svg" className='w-1/2' alt="" /></button>
                            </div>
                        </div>
                        <div className=" mt-28  flex items-center gap-x-4">
                            <img src="/images/homepage/hero_section/review_people.svg" className='w-24' alt="" />
                            <p className='text-lg'> <span className='font-semibold'>1M+ </span> Customers</p>
                        </div>
                    </div>

                    <div className="w-1/2  flex justify-end">
                        <div className="w-[60%]">
                            <div className="w-full bg-white rounded-[2rem] p-8 shadow-lg">
                                <p className="text-2xl font-semibold ">
                                    Quick Cost Estimate
                                </p>
                                <div className="w-full flex gap-4 mt-8 relative  rounded-xl">

                                    {/* Center Swap Button */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#F5344F] rounded-full shadow-[0px_6px_10px_rgba(245,52,79,0.25)]">
                                            <img src="/icons/swap_arrow.svg" className="w-4" />
                                        </div>
                                    </div>

                                    {/* From */}
                                    <div className="w-1/2 bg-[#F5F2EF] rounded-xl p-4 space-y-2">
                                        <p className="text-sm text-gray-500">From Zip</p>
                                        <p className="text-xl font-semibold">12334</p>
                                    </div>

                                    {/* To */}
                                    <div className="w-1/2 bg-[#F5F2EF] rounded-xl p-4 space-y-2 text-right">
                                        <p className="text-sm text-gray-500">To Zip</p>
                                        <p className="text-xl font-semibold">12334</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-8">

                                    {/* Date */}
                                    <div className="w-1/2">
                                        <p className=" font-medium mb-2 text-[#0F172A]">Moving Date</p>
                                        <div className="flex items-center justify-between bg-[#F5F2EF] rounded-full px-4 py-3">
                                            <span className="text-gray-500">23-04-26</span>
                                            <img src="/icons/calender.svg" className="w-5 opacity-60" />
                                        </div>
                                    </div>

                                    {/* Home Size */}
                                    <div className="w-1/2">
                                        <p className=" font-medium mb-2 text-[#0F172A]">Home Size</p>
                                        <div className="flex items-center justify-between bg-[#F5F2EF] rounded-full px-4 py-3">
                                            <span className="text-gray-500">3 Bedroom</span>
                                            <img src="/icons/drop_arrow.svg" className="w-4 opacity-60" />
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-8">
                                    <p className=" font-medium mb-2 text-[#0F172A]">Phone Number</p>
                                    <div className="flex items-center justify-between bg-[#F5F2EF] rounded-full px-4 py-3">
                                        <span className="text-gray-500">+(123) 456 7890</span>
                                        <img src="/icons/phone.svg" className="w-5 opacity-60" />
                                    </div>
                                </div>
                                <button className="w-full mt-8 bg-[#090A0C] text-white py-3 rounded-full flex items-center justify-center gap-2 text-lg">
                                    Calculate Cost
                                    <img src="/icons/compass.svg" className="w-4" />
                                </button>

                            </div>
                            <div className="w-full mt-5 center">
                                <button className='center  text-white whitespace-nowrap py-3 px-6 gap-x-4 rounded-full backdrop-blur-lg  border border-white/20'><img src="/icons/stars.svg" className='w-1/2' alt="" /> <p className='text-lg'> <span className='font-semibold'>12K+ </span> Customers trust us</p></button>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Hero