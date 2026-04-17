import React from 'react'

export const SERVICES = [
    {
        id: "residential-moving",
        title: "Residential Moving",
        desc: "Apartments, houses, condos — we handle it all with care.",
        image: "/images/servicepage/service1.png",
        innerServices: [
            "Pre-move survey and planning",
            "Packing of household items (room-wise)",
            "Safe loading and transportation",
            "Unloading and placement at new home",
            "Furniture dismantling & reassembly",
            "Fragile item protection (glass, electronics)",
            "Optional insurance coverage",
            "Unpacking and setup assistance"
        ]
    },

    {
        id: "commercial-moving",
        title: "Commercial Moving",
        desc: "Efficient office relocation with minimal downtime.",
        image: "/images/servicepage/service2.png",
        innerServices: [
            "Office relocation planning & coordination",
            "Packing of office equipment and documents",
            "IT equipment handling (computers, servers)",
            "Minimal downtime execution",
            "Labeling and inventory management",
            "Secure transportation",
            "Reinstallation and setup",
            "After-move support and setup"
        ]
    },

    {
        id: "packing-unpacking",
        title: "Packing & Unpacking",
        desc: "High-quality materials and expert care for all items.",
        image: "/images/servicepage/service3.png",
        innerServices: [
            "High-quality packing material",
            "Professional wrapping techniques",
            "Fragile item specialty packing",
            "Organization by room",
            "Full or partial packing options",
            "Careful unpacking at destination",
            "Disposable packing materials"
        ]
    },

    {
        id: "storage-services",
        title: "Storage Services",
        desc: "Safe, secure, and flexible storage solutions.",
        image: "/images/servicepage/service4.png",
        innerServices: [
            "Short-term and long-term storage options",
            "Secure, climate-controlled units",
            "24/7 surveillance and security systems",
            "Inventory tracking and management",
            "Easy access and retrieval",
            "Pest-free storage units",
            "Suitable for household and commercial goods"
        ]
    },

    {
        id: "specialty-moving",
        title: "Specialty Moving",
        desc: "Handling delicate, valuable, and unique items with care.",
        image: "/images/servicepage/service5.png",
        innerServices: [
            "Piano and heavy item moving",
            "Artwork and antiques handling",
            "Vehicle transportation",
            "Sensitive equipment relocation",
            "Custom packing solutions",
            "Extra safety measures for high-value items",
            "White-glove moving service"
        ]
    }
];

const ServicesScroll = () => {
    return (
        <>
            <div className="w-full padding space-y-20">

                {SERVICES.map((service, i) => (
                    <div key={i} className="w-full flex items-stretch  relative gap-x-44 ">
                        <div className="h-full absolute left-1/2 -translate-x-1/2 w-[1px] bg-black/10"></div>
                        <div className="w-1/2 flex flex-col justify-between">
                            <div className="">
                                <h2 className='text-5xl font-semibold w-[80%] '>{service.title}</h2>
                                <p className='text-[#6B6E73] text-lg mt-3  '>{service.desc}</p>
                            </div>
                            <div className="space-y-7">
                                {service.innerServices.map((feature, i) => (
                                    <div key={i} className="flex items-center  gap-x-4">
                                        <img src="/icons/red_check.svg" className='' alt="" />
                                        <p className='text-lg font-semibold leading-none'>{feature}</p>
                                    </div>
                                ))}
                            </div>
                            <button className='flex w-fit items-center gap-x-2 font-medium border border-black/30 leading-none   rounded-full px-4 h-12'>  Get the Estimated Cost<img src="/icons/arrow-right.svg" className='w-5' alt="" /> </button>
                        </div>
                        <div className="w-1/2  ">
                            <img src={service.image} className='w-full' alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ServicesScroll