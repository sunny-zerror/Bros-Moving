import React from 'react'

const services = [
    {
        id: 1,
        title: "Residential Moving",
        description: "Apartments, houses, condos — we handle it all with care.",
        icon: "/icons/services/home.svg",
        className: "col-span-3",
        img: "/icons/services/commercial_img.png"
    },
    {
        id: 2,
        title: "Commercial Moving",
        description: "White-glove relocation for your most precious spaces.",
        icon: "/icons/services/apartment.svg",
        className: "col-span-3",
        img: "/icons/services/commercial_img.png"
    },
    {
        id: 3,
        title: "Packing & Unpacking",
        description: "We pack it right and unpack it fast, so you can settle in without hassle.",
        icon: "/icons/services/box.svg",
        className: "col-span-2",
        img: "/icons/services/commercial_img.png"
    },
    {
        id: 4,
        title: "Storage Services",
        description: "Safe, secure, and flexible storage you can trust.",
        icon: "/icons/services/shelf.svg",
        className: "col-span-2",
        img: "/icons/services/commercial_img.png"
    },
    {
        id: 5,
        title: "Specialty Moving",
        description: "Expert care for your most valuable and delicate items.",
        icon: "/icons/services/calender.svg",
        className: "col-span-2",
        img: "/icons/services/commercial_img.png"
    },
];

const ServicesSection = () => {
    return (
        <>
            <div className="w-full   mt-32 padding  bg-[#F9F6F3]">
                <div className="w-full flex items-end">
                    <h2 className='text-5xl font-semibold w-[80%] '>Smart Logistics Solutions <br /> for Every Move</h2>
                    <button className='flex w-fit items-center gap-x-2 font-medium border border-black/30 leading-none   rounded-full px-4 h-12'>  Explore All Services<img src="/icons/arrow-right.svg" className='w-5' alt="" /> </button>
                </div>

                <div className="w-full grid grid-cols-6 gap-8 mt-12">
                    {services.map((service, i) => (
                        <div key={i} className={` relative overflow-hidden w-full h-[50vh] group hover:text-white transition-colors duration-300 bg-white p-10 rounded-2xl ${service.className}`}>
                            {service.img && <img src={service.img} className='absolute group-hover:opacity-100 transition-opacity duration-300 opacity-0  inset-0 cover' alt="" />}
                            <div className=" relative h-full w-full flex flex-col justify-between">
                                <img src={service.icon} className='w-24' alt="" />
                                <div className="">
                                    <h3 className='text-3xl font-semibold'>{service.title}</h3>
                                    <p className=' mt-2 text-[#6B6E73]'>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServicesSection