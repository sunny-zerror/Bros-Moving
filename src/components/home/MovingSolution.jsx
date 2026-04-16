import React from 'react'

const MovingSolution = () => {
    return (
        <>
            <div className="w-full padding">
                <div className="w-full flex items-end justify-between">
                    <h2 className='text-5xl font-semibold '>Smart Moving Solutions <br /> for Every Need</h2>
                    <p className='text-lg text-[#6B6E73]'>Every move is different, which is why we offer <br /> tailored solutions to match your specific needs.</p>
                    <div className="flex items-end gap-x-4">
                        <button className=' size-10 center  border border-black/30 rounded-full '> <img src="/icons/arrow-right.svg" className='w-4 rotate-180' alt="" /> </button>
                        <button className=' size-10 center bg-[#F5344F] rounded-full '> <img src="/icons/arrow-right.svg" className='w-4 invert-100' alt="" /> </button>
                    </div>
                </div>

                <div className="w-full mt-14 flex justify-between">
                    <div className="w-1/2 relative">
                        <div className="absolute bottom-16 px-10 w-full flex items-center justify-between">
                            <div className="text-white">
                                <h3 className='text-3xl font-semibold mb-2'>Long Distance Moving</h3>
                                <p className=' text-lg leading-tight'>Coast-to-coast with tracking.</p>
                            </div>
                            <button className=' size-14 center bg-[#F5344F] rounded-full '> <img src="/icons/arrow-right.svg" className='w-6 invert-100' alt="" /> </button>
                        </div>
                        <img className='w-full' src="/images/homepage/smart_moving/img1.png" alt="" />
                    </div>
                    <div className="w-1/2 pl-44 space-y-5">
                        <img className='w-full' src="/images/homepage/smart_moving/img2.png" alt="" />
                        <div className="">
                            <h3 className='text-3xl font-semibold mb-2'>Long Distance Moving</h3>
                            <p className=' text-lg leading-tight'>Coast-to-coast with tracking.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-24 relative center">
                    <div className=" absolute inset-0  padding  py-20!  w-full flex flex-col justify-between">
                        <div className="  flex flex-col items-center justify-center w-full space-y-5">
                            <h2 className='text-5xl font-semibold text-center text-white '>Worry-Free Moving with Full <br /> Insurance Coverage</h2>
                            <button className='center  py-3 px-6 gap-x-4 rounded-full backdrop-blur-lg text-white text-lg  border border-white/20'><p>Get the Estimated Cost</p><img src="/icons/arrow-right.svg" className='w-6 invert-100' alt="" /></button>
                        </div>
                        <div className="w-full border-b  pb-5 border-white/40 ">
                        <div className="w-full text-[#F9F6F3] flex  items-center justify-between ">
                            <p className='text-lg '>We provide full insurance coverage to keep your belongings safe, <br /> giving you complete peace of mind throughout your move.</p>
                            <img src="/images/homepage/smart_moving/trust_logos.svg" alt="" />
                        </div>
                        </div>
                    </div>
                    <img src="/images/homepage/smart_moving/vid_bg.png" alt="" />
                </div>

            </div>
        </>
    )
}

export default MovingSolution