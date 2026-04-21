import React from 'react'

const PageHero = ({ title, description, image }) => {
    return (
        <>
            <div className="w-full p-5 center relative text-center">
                <div className=" max_width_layout absolute bottom-32 text-[#F9F6F3]">
                    <h1 className='text-6xl font-semibold'>{title}</h1>
                    <p className='text-lg '>{description}</p>
                </div>
                <img className='w-full ' src={image} alt="" />
            </div>
        </>
    )
}

export default PageHero