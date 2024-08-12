'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";
import workimg from '../../../public/Images/vendor1.jpg';
import workimg2 from '../../../public/Images/vendor2.jpg';
import workimg3 from '../../../public/Images/vendor3.jpg';

const OurClients = () => {
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
        {
            id: 3,
            image: workimg3,
            name: 'Vendor 3',
            description: 'CEO of Design',
        },
        {
            id: 4,
            image: workimg,
            name: 'Vendor 4',
            description: 'CEO of Tech',
        },
        {
            id: 5,
            image: workimg2,
            name: 'Vendor 5',
            description: 'CEO of Marketing',
        },
        {
            id: 6,
            image: workimg3,
            name: 'Vendor 6',
            description: 'CEO of Strategy',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
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
                <div className='mt-10 px-10'>
                    <Slider {...settings}>
                        {vendors.map((vendor) => (
                            <div key={vendor.id} className="p-4">
                                <div className="relative overflow-hidden review-cart rounded-lg shadow-service-shadow">
                                    <div className='bg-[#f9f9f9] relative px-4 pb-8 pt-12'>
                                        <FaQuoteLeft color='#adadad' size={40} className='absolute top-2 left-1' />
                                        <p className='font-WonderUnitSans text-sm text-[#666666] ml-4'>
                                            It is a long established fact that a reader will be distracted by the readable
                                            content of a page when looking at its layout. The point of using Lorem Ipsum is
                                            that it has a more-or-less normal.
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
                                                <i className='font-normal'>{vendor.name}</i>
                                                <i className='text-sm text-[#9d9696]'>{vendor.description}</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default OurClients;
