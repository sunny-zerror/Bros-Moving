import React from 'react'

const highlights = [
    {
        id: 1,
        title: "5-Star Reputation Since Day One",
        description:
            "Our commitment to excellence isn't just a claim—it's documented. We've maintained a perfect 5-star Google rating by treating every box as if it were our own heritage.",
        icon: "/images/aboutpage/trust_star.svg",
    },
    {
        id: 2,
        title: "The Stress-Free Process",
        description:
            "Our kinetic methodology ensures seamless movement without the friction. From careful planning to precise execution, we handle every detail with expertise and efficiency.",
        icon: "/images/aboutpage/trust_scale.svg",
    },
    {
        id: 3,
        title: "Highly Trained Pros",
        description:
            "More than just movers, we are specialists in precision and safety. Every move is guided by structured planning, strict safety procedures, and expert handling techniques.",
        icon: "/images/aboutpage/trust_car.svg",
    },
    {
        id: 4,
        title: "Transparent Communication",
        description:
            "We understand how frustrating unexpected costs can be. That's why we operate with complete transparency—no hidden charges, no surprise fees.",
        icon: "/images/aboutpage/trust_circle.svg",
    },
];

const OurMission = () => {
    return (
        <>
            <div className="w-full flex items-stretch padding  relative gap-x-24  py-24!">
                <div className="h-[calc(100%-12rem)] absolute left-1/2 -translate-x-1/2 w-[1px] bg-black/10"></div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="">
                        <h2 className='text-5xl font-semibold w-[80%] '>Our Mission </h2>
                        <p className='text-[#6B6E73] text-lg mt-8  '>To turn the stress of relocation into the excitement of a new <br /> beginning by providing uncompromising care and precision.</p>
                    </div>
                    <div className="space-y-10">
                        <div className="flex items-start gap-x-4">
                            <img src="/icons/red_smile.svg" className='w-12' alt="" />
                            <div className="">
                                <h3 className='text-2xl leading-none font-semibold'>Happy Faces Guaranteed</h3>
                                <p className='text-[#6B6E73] mt-3 w-[60%]'>Our success is measured in smiles. Every tailored service is designed to ensure you walk into your new home with complete peace of mind.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-4">
                            <img src="/icons/red_dollar.svg" className='w-12' alt="" />
                            <div className="">
                                <h3 className='text-2xl leading-none font-semibold'>Competitive & Affordable</h3>
                                <p className='text-[#6B6E73] mt-3 w-[60%]'>Premium service shouldn't come with a prohibitive price tag. We offer the best value in Regina without sacrificing quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2  ">
                    <img src="/images/aboutpage/mission_img.png" alt="" />
                </div>

            </div>

            <div className="w-full relative ">
                <img className='w-full' src="/images/aboutpage/trust_bg.png" alt="" />
                <div className="absolute padding py-32! flex flex-col justify-between w-full inset-0">
                    <div className="text-center text-white">
                        <h2 className='text-5xl font-semibold '>Built on Precision & Trust</h2>
                        <p className='text-lg  mt-2'>Why thousands of families choose Bros Moving Inc. for their most important <br /> transitions.</p>
                    </div>

                    <div className="w-full flex items-center justify-center gap-x-5">
                        {highlights.map((highlight, i) => (
                            <div key={i} className="p-8 w-[20vw] relative aspect-3/4">
                                <img src="/images/aboutpage/trust_card_bg.png" className=' inset-0 absolute w-full' alt="" />
                                <div className="relative z-10 flex flex-col justify-center gap-y-5 items-center h-full text-center w-full">
                                    <img src={highlight.icon} alt="" />
                                    <h3 className='text-2xl font-semibold w-[80%]'>{highlight.title}</h3>
                                    <p className='text-[#6B6E73]'>{highlight.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurMission