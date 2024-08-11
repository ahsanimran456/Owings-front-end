import React from 'react';
import { FaHeart, FaPencilRuler, FaWrench } from 'react-icons/fa';

const OurService = () => {
    const services = [
        {
            title: "Clean Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: FaPencilRuler,
        },
        {
            title: "Made With Love",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: FaHeart,
        },
        {
            title: "Easy To Customize",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: FaWrench,
        },
        {
            title: "Clean Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: FaPencilRuler,
        },
        {
            title: "Made With Love",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: FaHeart,
        },
        {
            title: "Easy To Customize",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: FaWrench,
        },
    ];





    return (
        <section className='our-service bg-white'>
            <div className='lg:max-w-screen-2xl md:mx-auto px-14 py-20'>
                <div className='w-full flex justify-center items-center flex-col'>
                    <h1 className='text-4xl uppercase font-bold text-center text-[#444444] font-poppins'>
                        Our Services
                    </h1>
                    <p className='mt-12 w-[60%] text-center text-[#666666] text-base font-WonderUnitSans'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                </div>
                {/* our services section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className='flex flex-col items-center service-cart bg-white px-6 py-10 rounded-tl-lg rounded-tr-lg shadow-service-shadow  relative'
                            >
                                <Icon className='text-4xl text-[#444444]' /> {/* Icon */}
                                <h2 className='mt-4 text-2xl font-semibold text-[#444444] '>{service.title}</h2>
                                <p className='mt-4 text-center text-[#666666] font-WonderUnitSans text-base'>{service.description}</p>

                                {/* Bottom Line */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurService;
