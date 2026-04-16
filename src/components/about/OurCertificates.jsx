import React from 'react'

export const associations = [
    {
        id: "01",
        title: "Canadian Association of Movers",
        description:
            "Proud member of the Canadian Association of Movers, upholding industry standards and best practices.",
        logo: "/images/cam-logo.png",
    },
    {
        id: "02",
        title: "Canadian Association of Movers",
        description:
            "Proud member of the Canadian Association of Movers, upholding industry standards and best practices.",
        logo: "/images/cam-logo.png",
    },
    {
        id: "03",
        title: "Canadian Association of Movers",
        description:
            "Proud member of the Canadian Association of Movers, upholding industry standards and best practices.",
        logo: "/images/cam-logo.png",
    },
    {
        id: "04",
        title: "Canadian Association of Movers",
        description:
            "Proud member of the Canadian Association of Movers, upholding industry standards and best practices.",
        logo: "/images/cam-logo.png",
    },
];

const OurCertificates = () => {
    return (
        <>
            <div className="w-full padding pb-0! bg-[#F9F6F3]">
                <div className="w-full flex items-end justify-between">
                    <h2 className='text-5xl font-semibold '>Our certifications</h2>
                    <p className='text-lg text-[#6B6E73]'>Proudly awarded for our commitment to quality and <br /> customer satisfaction.</p>
                </div>

                <div className="w-full pt-20">
                    {associations.map((association, i) => (
                        <div
                            key={association.id}
                            className="w-full flex justify-between items-center py-5 border-t border-black/10"
                        >
                            <p className='text-[#6B6E73] text-lg'>0{i + 1}</p>
                            <h3 className='text-2xl w-[20%] font-semibold'>{association.title}</h3>
                            <div className="w-[10%]  center">
                            <img src="/images/aboutpage/certifcate_logo.png" alt="" />
                            </div>
                            <p className=' w-[30%] text-center text-[#6B6E73]'>{association.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default OurCertificates