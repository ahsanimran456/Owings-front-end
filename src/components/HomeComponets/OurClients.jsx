'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import workimg from '../../../public/Images/vendor1.jpg';
import workimg2 from '../../../public/Images/vendor2.jpg';
import workimg3 from '../../../public/Images/vendor3.jpg';
import { FaQuoteLeft } from "react-icons/fa";
const OurClients = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    // Vendor data (replace with your actual data)
    const vendors = [
        {
            id: 1,
            image: workimg,
            name: 'Vendor 1',
            description: 'CEO of Fashion',
        },
        {
            id: 2,
            image: workimg2,
            name: 'Vendor 2',
            description: 'CEO of Art',
        },

    ];

    const vendorHoverVariants = {
        initial: {
            opacity: 0,
            transform: 'translateX(-100%)', // Initially hidden on the left
        },
        hover: {
            opacity: 0.8, // Slightly transparent overlay
            transform: 'translateX(0)', // Animate to the original position
            transition: {
                duration: 0.3, // Adjust animation duration as needed
                ease: 'easeInOut', // Customize animation easing
            },
        },
    };

    return (
        <section className='our-service bg-[#fff]'>
            <div className='lg:max-w-screen-2xl md:mx-auto px-14 py-20'>
                <div className='w-full flex justify-center items-center flex-col'>
                    <h1 className='text-4xl uppercase font-bold text-center text-[#444444] font-poppins'>
                        What Our Client Says
                    </h1>
                    <p className='mt-12 w-[60%] text-center text-[#666666] text-base font-WonderUnitSans'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-14 px-20 ">
                    {vendors.map((vendor, index) => (
                        <div
                            key={vendor.id}
                            className="relative overflow-hidden review-cart rounded-lg shadow-service-shadow"
                        >
                            <div className='bg-[#f9f9f9] relative px-4 pb-8 pt-12'>
                                <FaQuoteLeft  color='#adadad' size={40} className='absolute top-2 left-1'/>
                                <p className='font-WonderUnitSans text-sm text-[#666666] ml-4'>
                                    lIt is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is
                                    that
                                    it has a more-or-less normal.
                                </p>
                                <div className='flex items-center gap-4 ml-4'>
                                    <div>
                                        <div className='w-[60px] h-[60px] rounded-full overflow-hidden mt-4'>
                                            <Image
                                                src={vendor.image}
                                                alt='client'
                                                width={80}
                                                height={80}
                                                className='rounded-full'
                                            />
                                        </div>
                                    </div>
                                    <div className='flex flex-col  mt-4'>
                                        <i className='font-normal'>Jessica Roy</i>
                                        <i className='text-sm text-[#9d9696]'>{vendor.description}</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurClients;
