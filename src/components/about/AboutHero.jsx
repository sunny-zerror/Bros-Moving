import React from 'react'

const AboutHero = () => {
    return (
        <>
            <div className="w-full p-5 center relative text-center">
                <div className="absolute bottom-32 text-[#F9F6F3]">
                    <h1 className='text-6xl font-semibold'>Moving You Forward with Care</h1>
                    <p className='text-lg '>We help you move forward with care, making every relocation smooth and stress-free.</p>
                </div>
                <img className='w-full ' src="/images/aboutpage/about_hero.png" alt="" />
            </div>

            <div className="w-full  padding pb-0!">
                <div className="flex flex-col items-center text-center border-b pb-20 border-black/10">
                    <h2 className='text-4xl font-medium w-[70%] '>We provide expert moving services across Regina, Winnipeg, and Alberta, ensuring every move is handled with precision and care. From packing and loading to transportation and unpacking, our experienced team manages every detail so you can enjoy a smooth, stress-free relocation.</h2>
                    <div className="w-full mt-20 flex items-center justify-center">
                        <div className="">
                            <h2 className='text-5xl font-semibold'>12K+</h2>
                            <p className='text-[#6B6E73] text-lg   '>Moves Completed</p>
                        </div>
                        <div className=" border-l border-r border-black/10 px-14 mx-14">
                            <h2 className='text-5xl font-semibold'>24/7</h2>
                            <p className='text-[#6B6E73] text-lg   '>Customer Support</p>
                        </div>
                        <div className="">
                            <h2 className='text-5xl font-semibold'>15+</h2>
                            <p className='text-[#6B6E73] text-lg   '>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero