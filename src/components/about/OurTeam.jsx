import React from 'react'

const OurTeam = () => {
    return (
        <>
            <div className="w-full padding">
                <div className="w-full flex items-end justify-between">
                    <h2 className='text-5xl font-semibold '>Meet Our Expert <br /> Team Member </h2>
                    <p className='text-lg text-[#6B6E73]'>Our expert team combines experience, precision, and dedication to <br /> ensure your belongings are handled with the highest level of care.</p>
                    <div className="flex items-end gap-x-4">
                        <button className=' size-10 center  border border-black/30 rounded-full '> <img src="/icons/arrow-right.svg" className='w-4 rotate-180' alt="" /> </button>
                        <button className=' size-10 center bg-[#F5344F] rounded-full '> <img src="/icons/arrow-right.svg" className='w-4 invert-100' alt="" /> </button>
                    </div>
                </div>

                <div className=" grid grid-cols-3 mt-20 gap-x-7">
                    <div className="w-full text-center">
                        <img src="/images/aboutpage/team_members/img1.png" className='w-full' alt="" />
                        <h3 className='text-3xl mt-5 font-semibold'>Alex Melton</h3>
                        <p className='text-[#6B6E73]'>CEO & Founder</p>
                    </div>
                    <div className="w-full text-center">
                        <img src="/images/aboutpage/team_members/img2.png" className='w-full' alt="" />
                        <h3 className='text-3xl mt-5 font-semibold'>Lori Bautista</h3>
                        <p className='text-[#6B6E73]'>Marketing manager</p>
                    </div>
                    <div className="w-full text-center">
                        <img src="/images/aboutpage/team_members/img3.png" className='w-full' alt="" />
                        <h3 className='text-3xl mt-5 font-semibold'>Florine Joyce</h3>
                        <p className='text-[#6B6E73]'>Director</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam