import React from 'react';
import Image from 'next/image';
import workimg from '../../../public/Images/howworkimg.png';

const HowitWorks = () => {
    // Define the array of objects
    const listItems = [
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        "All the Lorem Ipsum generators on the Internet.",
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined.",
        "All the Lorem Ipsum generators on the Internet.",
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined."
    ];

    return (
        <section className='howitworks bg-[#f9f9f9]'>
            <div className='lg:max-w-screen-2xl md:mx-auto px-14 py-28'>
                <div className='w-full flex justify-center items-center flex-col'>
                    <h1 className='text-5xl uppercase font-bold text-center text-[#444444] font-poppins'>
                        How it Works
                    </h1>
                    <p className='mt-12 w-[60%] text-center text-[#666666] text-base font-WonderUnitSans'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                </div>
                <div className='flex justify-between items-center mt-20'>
                    {/* Left Section (Text and Bullet Points) */}
                    <div className='w-[50%]'>
                        <h2 className='text-3xl font-semibold font-poppins text-[#444444]'>
                            What you get in this landing page!
                        </h2>
                        <p className='mt-4 text-[#666666] text-base font-WonderUnitSans'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                        </p>
                        <ul className='mt-8 space-y-4'>
                            {/* Map over the array of list items */}
                            {listItems.map((item, index) => (
                                <li key={index} className='flex items-center relative works-list font-WonderUnitSans pl-5  text-[#4c5258]'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-[40%]'>
                        <Image
                            src={workimg}
                            alt="Landing page preview"
                            layout='responsive'
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowitWorks;
