import React from 'react'

const VideoSection = () => {
    return (
        <div className='w-full padding pt-0!'>
            <div className="w-full  relative center">
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
    )
}

export default VideoSection