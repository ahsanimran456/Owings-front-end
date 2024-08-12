import React from 'react';
import Image from 'next/image';
import { FaFileAlt, FaMobileAlt, FaAtom, FaLayerGroup } from 'react-icons/fa'; // Import necessary icons from React Icons
import workimg from '../../../public/Images/feartureimg.png';
import { IoDocumentsOutline } from "react-icons/io5";

const Features = () => {

 
    return (
        <section className='howitworks bg-[#fff]'>
            <div className='lg:max-w-screen-2xl md:mx-auto px-14 py-28'>
                <div className='w-full flex justify-center items-center flex-col'>
                    <h1 className='text-5xl uppercase font-bold text-center text-[#444444] font-poppins'>
                        Features
                    </h1>
                    <p className='mt-12 w-[60%] text-center text-[#666666] text-base font-WonderUnitSans'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                </div>
                {/* Parent Flex Div */}
                <div className='flex justify-between items-center mt-16'>
                    {/* Left Section */}
                    <div className='flex flex-col items-center text-center w-1/3'>
                        <div className='flex flex-col items-center text-center feature-each-cart'>
                            <IoDocumentsOutline  color={'#8158C6'} size={50}  className='mb-4'/>
                            <h2 className='text-xl font-poppins font-semibold text-[#444444]'>
                                Well Documented
                            </h2>
                            <p className='text-[#666666] mt-4 font-WonderUnitSans font-normal'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="rt_pulse"></div>
                            <div className="rt_pulses"></div>
                        </div>
                        <div className='flex flex-col items-center text-center mt-14'>
                            <FaMobileAlt color={'#8158C6'} size={50}  className='mb-4'/>
                            <h2 className='text-xl font-semibold text-[#444444]'>
                                Responsive Layout
                            </h2>
                            <p className='text-[#666666] mt-4 font-WonderUnitSans font-normal   '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className='w-1/2 flex justify-center h-[44rem]'>
                        <Image
                            src={workimg}
                            alt="Landing page preview"
                            width={380}
                            height={300}
                        />
                    </div>

                    {/* Right Section */}
                    <div className='flex flex-col items-center text-center w-1/3 relative'>
                        <div className='flex flex-col items-center text-center'>
                            <FaAtom color={'#8158C6'} size={50}  className='mb-4' /> {/* Using the FaAtom icon */}
                            <h2 className='text-xl font-semibold text-[#444444]'>
                                Creative
                            </h2>
                            <p className='text-[#666666] mt-4 font-WonderUnitSans font-normal'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className='flex flex-col items-center text-center mt-14'>
                            <FaLayerGroup color={'#8158C6'} size={50}  className='mb-4' />
                            <h2 className='text-xl font-semibold text-[#444444]'>
                                Simple Design
                            </h2>
                            <p className='text-[#666666] mt-4 font-WonderUnitSans font-normal'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Rows */}

            </div>
        </section>
    );
};

export default Features;
