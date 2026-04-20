import React from 'react'
export const features = [
    {
        id: 1,
        title: "Professional & trained movers",
        icon: "/icons/why_choose/people.svg",
    },
    {
        id: 2,
        title: "Fully equipped trucks",
        icon: "/icons/why_choose/truck.svg",
    },
    {
        id: 3,
        title: "Transparent pricing (no hidden fees)",
        icon: "/icons/why_choose/dollar.svg",
    },
    {
        id: 4,
        title: "On-time guaranteed service",
        icon: "/icons/why_choose/clock.svg",
    },
    {
        id: 5,
        title: "Careful handling of belongings",
        icon: "/icons/why_choose/care.svg",
    },
    {
        id: 6,
        title: "Customers get free insurance",
        icon: "/icons/why_choose/protection.svg",
    },
];

const WhyChooseSection = () => {
    return (
        <div className='w-full padding py-24! bg-[#F9F6F3] '>
            <div className="w-full  max_width_layout flex items-stretch   relative gap-x-44   ">
                <div className="h-[calc(100%-12rem)] absolute left-1/2 -translate-x-1/2 w-[1px] bg-black/10"></div>
                <div className="w-1/2  ">
                    <img src="/images/homepage/why_choose.png" className='w-full' alt="" />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="">
                        <h2 className='text-5xl font-semibold w-[80%] '>Why Choose Bro's Moving?</h2>
                        <p className='text-[#6B6E73] text-lg mt-8  '>Reliable moving services built on care, efficiency, and clear <br /> communication.</p>
                    </div>
                    <div className="space-y-5">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-x-4">
                                <img src={feature.icon} className='w-12' alt="" />
                                <p className='text-lg font-semibold'>{feature.title}</p>
                            </div>
                        ))}
                    </div>
                    <button className='flex w-fit items-center gap-x-2 font-medium border border-black/30 leading-none   rounded-full px-4 h-12'>  Get the Estimated Cost<img src="/icons/arrow-right.svg" className='w-5' alt="" /> </button>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseSection