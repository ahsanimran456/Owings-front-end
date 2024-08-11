'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import workimg from '../../../public/Images/vendor1.jpg';
import workimg2 from '../../../public/Images/vendor2.jpg';
import workimg3 from '../../../public/Images/vendor3.jpg';

const OurVendors = () => {
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
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            id: 2,
            image: workimg2,
            name: 'Vendor 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            image: workimg3,
            name: 'Vendor 3',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        // ... more vendors
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
        <section className='our-service bg-[#f9f9f9]'>
            <div className='lg:max-w-screen-2xl md:mx-auto px-14 py-20'>
                <div className='w-full flex justify-center items-center flex-col'>
                    <h1 className='text-4xl uppercase font-bold text-center text-[#444444] font-poppins'>
                        Our vendors
                    </h1>
                    <p className='mt-12 w-[60%] text-center text-[#666666] text-base font-WonderUnitSans'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-12">
                    {vendors.map((vendor, index) => (
                        <div
                            key={vendor.id}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className="relative overflow-hidden"
                        >
                            <Image
                                src={vendor.image}
                                alt={vendor.name}
                                width={200} // Adjust width as needed
                                height={200} // Adjust height as needed
                                layout="responsive"
                                objectFit="cover"
                                className="rounded-md"
                            />
                            <motion.div
                                variants={vendorHoverVariants}
                                initial="initial"
                                animate={hoveredImage === index ? 'hover' : 'initial'}
                                className="absolute inset-0 p-4 flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(to right, #2371ae 0%, #bb47d4 100%)', // Linear gradient background
                                    zIndex: 10, // Ensure the overlay appears above the image
                                    opacity: hoveredImage === index ? 0.8 : 0, // Adjust opacity for hover state
                                }}
                            >
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-white">{vendor.name}</h3>
                                    <p className="text-sm text-white">{vendor.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurVendors;
