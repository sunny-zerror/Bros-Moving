import React from 'react'

const MapsInfo = () => {
    return (
        <>
            <div className="w-full padding pt-0!">
                <div className="w-full grid grid-cols-3 gap-x-10">
                    <div className="w-full flex items-center gap-x-4 rounded-3xl bg-[#F9F6F3] p-7">
                        <img src="/icons/contact_dialer.svg" alt="" />
                        <div className="space-y-2 leading-none">
                            <p className='text-[#6B6E73]'>Call Support Centre</p>
                            <p className='text-lg font-semibold'>(555) 123-4567</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-x-4 rounded-3xl bg-[#F9F6F3] p-7">
                        <img src="/icons/contact_mail.svg" alt="" />
                        <div className="space-y-2 leading-none">
                            <p className='text-[#6B6E73]'>Write us</p>
                            <p className='text-lg font-semibold'>info@brosmoving.com</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-x-4 rounded-3xl bg-[#F9F6F3] p-7">
                        <img src="/icons/contact_map.svg" alt="" />
                        <div className="space-y-2 leading-none">
                            <p className='text-lg font-semibold'>123 Albert Street, Regina, SK S4P 2N5, Canada</p>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-10 rounded-2xl aspect-2/1 overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps?q=52.3756,4.9032&z=15&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </>
    )
}

export default MapsInfo