import React from 'react'

const Testimonials = () => {
    return (
        <>
            <div className="w-full h-screen bg-[#F9F6F3]">
                <div className="w-full text-center padding">
                    <h2 className='text-5xl font-semibold '>What Our Customers Say</h2>
                    <p className='text-lg text-[#6B6E73]'>Hear Directly from Our Customers About Their Smooth and Stress-Free Moving Experiences</p>
                </div>

                <div className="flex items-center justify-center gap-x-5">
                    {[1, 2, 3].map((item, i) => (
                        <div className="bg-white rounded-3xl p-10 space-y-10 w-[30vw]" key={i}>
                            <div className="flex gap-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src="/icons/gold_star.svg" alt="" />
                                ))}
                            </div>
                            <p className='text-[#6B6E73] text-lg'>“Absolutely outstanding service from start to finish. The team was efficient, careful, and incredibly professional. Everything arrived in perfect condition—highly recommended!”</p>

                            <div className="flex gap-x-2 items-center">
                                <div className="size-14 center rounded-full overflow-hidden">
                                    <img className='cover object-top' src="/images/homepage/testimonials/img1.png" alt="" />
                                </div>
                                <div className="">
                                    <p className='text-2xl  font-semibold'>Greta Charles</p>
                                    <p className='text-[#6B6E73]'>Studio manager</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Testimonials