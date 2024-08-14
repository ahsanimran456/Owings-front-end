'use client'
import Webbanner from "@/components/MainComponents/Webbanner"
// import aboutus from "../../../public/Images/aboutus.png"
import serviceimg1 from "../../../public/Images/serviceimg1.jpg"
import serviceimg2 from "../../../public/Images/service2.jpg"
import serviceimg3 from "../../../public/Images/service3.jpg"
import serviceimg4 from "../../../public/Images/service4.png"
import serviceimg5 from "../../../public/Images/service5.jpg"
import bannerimg from "../../../public/Images/aboutusbg.jpg"
import Image from 'next/image'
import { FaPaintBrush, FaIndustry, FaCog, FaRegUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from "react"
import Counter from "@/components/MainComponents/counter"
import { MdOutlineShoppingCart } from "react-icons/md"
import { BsPersonBadge } from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5"
const Service = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const servicesData = [
        {
            id: 1,
            icon: <FaPaintBrush className="text-4xl text-[#8158C6] mx-auto mb-4 hover:text-white" />,
            title: "We Design Fabric",
            description: "Choose from many fabrics and design your own. Create and print only the fabric you need with no minimum order.",
            image: serviceimg5
        },
        {
            id: 2,
            icon: <FaIndustry color="#8158C6" className=" text-4xl mx-auto mb-4" />,
            title: "We Manufacture",
            description: "Submit a manufacturer to be featured with a free video, and we'll send you a free sample to find what you need.",
            image: serviceimg5
        },
        {
            id: 21321,
            icon: <FaCog color="#8158C6" className=" text-4xl mx-auto mb-4" />,
            title: "We Engineer",
            description: "We carry an enormous inventory of everything you need to complete your project: notions, patterns, and trims.",
            image: serviceimg5
        },

        {
            id: 2133,
            icon: <FaCog color="#8158C6" className=" text-4xl mx-auto mb-4" />,
            title: "We Engineer",
            description: "We carry an enormous inventory of everything you need to complete your project: notions, patterns, and trims.",
            image: serviceimg5
        },
        {
            id: 312,
            icon: <FaCog color="#8158C6" className=" text-4xl mx-auto mb-4" />,
            title: "We Engineer",
            description: "We carry an enormous inventory of everything you need to complete your project: notions, patterns, and trims.",
            image: serviceimg5
        },
        {
            id: 57658,
            icon: <FaCog color="#8158C6" className=" text-4xl mx-auto mb-4" />,
            title: "We Engineer",
            description: "We carry an enormous inventory of everything you need to complete your project: notions, patterns, and trims.",
            image: serviceimg5
        }
    ];
    const handleMouseEnter = (index) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const vendorHoverVariants = {
        initial: {
            opacity: 0,
            transform: 'translateY(100%)', // Start from the bottom
        },
        hover: {
            opacity: 0.8,
            transform: 'translateY(0)', // Move to its original position
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
    };

    const vendorHoverVariantsimg = {
        initial: {
            opacity: 1,
            transform: 'scale(1)',
        },
        hover: {
            opacity: 0.8,
            transform: 'scale(1.05)',
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <>
            <section className="bg-[#f5f5f5]">
                <Webbanner tittle={"Services"} image={bannerimg}
                    bannerDescription={"No hours sank into aggregating and cleaning data. No complex SQL queries required. Just the answers teams need to make smarter decisions, fast. Now, that's data-driven."}
                    className={'about-clip-path'} />
                <div className="max-w-screen-2xl mx-auto w-full h-full px-14 mt-10 pb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white service-carts hover:text-white cursor-pointer p-6 rounded-lg shadow-service-shadow text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:transform hover:translate-y-[-10px]">
                            <FaPaintBrush className="text-4xl text-[#8158C6] mx-auto mb-4 hover:text-white" />
                            <h3 className="text-lg font-OpenSans font-bold mb-2">We Design Fabric</h3>
                            <p>Choose from many fabrics and design your own. Create and print only the fabric you need with no minimum order.</p>
                        </div>
                        <div className="bg-white service-carts hover:text-white cursor-pointer p-6 rounded-lg shadow-service-shadow text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:transform hover:translate-y-[-10px]">
                            <FaIndustry color="#8158C6" className=" text-4xl mx-auto mb-4" />
                            <h3 className="text-lg font-OpenSans font-bold mb-2">We Manufacture</h3>
                            <p>Submit a manufacturer to be featured with a free video, and we'll send you a free sample to find what you need.</p>
                        </div>
                        <div className="bg-white service-carts hover:text-white cursor-pointer p-6 rounded-lg shadow-service-shadow text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 hover:transform hover:translate-y-[-10px]">
                            <FaCog color="#8158C6" className=" text-4xl mx-auto mb-4" />
                            <h3 className="text-lg font-OpenSans font-bold mb-2">We Engineer</h3>
                            <p>We carry an enormous inventory of everything you need to complete your project: notions, patterns, and trims.</p>
                        </div>
                    </div>

                    <div className=" mt-20 grid h-full  grid-cols-2  shadow-aboutus-shadow-imgs">
                        <div className="px-10 py-10 bg-white">
                            <h2 className="text-[#444444] text-4xl font-semibold mb-12">
                                Our Capabilities
                            </h2>
                            <p className="font-OpenSans text-2xl leading-10 text-[#37456c]">
                                Stop by today; our talented staff will be happy to help you find what you’re searching for!
                            </p>
                            <p>CEO: Steven Rogers</p>
                            <Image
                                src={serviceimg2}
                                height={200}
                                width={200}
                                alt="sign"
                            />
                        </div>
                        <div className="w-full h-full">
                            <Image
                                src={serviceimg1}
                                height={700}
                                width={700}
                                className="w-full h-full"
                                alt="thumbnail"
                            />
                        </div>
                    </div>
                    <div className=" grid h-full mb-10  grid-cols-2  shadow-aboutus-shadow-imgs">
                        <div className="w-full h-full">
                            <Image
                                src={serviceimg3}
                                height={700}
                                width={700}
                                className="w-full h-full"
                                alt="thumbnail"
                            />
                        </div>
                        <div className="px-10 py-10 bg-white">
                            <h2 className="text-[#444444] text-4xl font-semibold mb-12">
                                How we do it
                            </h2>
                            <p className="font-OpenSans text-2xl leading-10 text-[#37456c]">
                                Textile engages and catalyzes the textile industry across the supply chain through partnerships and collaborations, building knowledge and capacity to inform and educate. We further leverage our influence to create action, change and collective impact.
                            </p>

                        </div>

                    </div>
                    <div className="relative z-10">
                        <h1 className="text-3xl   uppercase font-bold mt-20  text-[#444444] font-poppins text-center ">
                            Some Features that Made us Unique
                        </h1>
                        <h1 className="text-3xl mt-3   uppercase font-bold  text-[#444444] font-poppins text-center ">
                            Our Services
                        </h1>
                        {/* <Image
                            src={serviceimg4}
                            height={250}
                            width={250}
                            alt="dots"
                            className="absolute top-[-100%] right-[22%] "
                        /> */}
                    </div>
                    {/* <div className="grid h-full mb-10 grid-cols-3 gap-8 mt-14">
                        {servicesData.map((service) => (
                            <div key={service.id} className="bg-white min-h-72  overflow-hidden rounded-lg shadow-service-shadow text-center">
                                <Image
                                    src={service.image}
                                    height={150}
                                    width={150}
                                    className="w-full h-full mb-4"
                                    alt="Service Image"
                                />
                            
                            </div>
                        ))}
                    </div> */}
                    <div className="grid h-full mb-10 grid-cols-3 gap-8 mt-14">
                        {servicesData.map((service, index) => (
                            <div
                                key={service.id}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className=" overflow-hidden rounded-lg cursor-pointer  relative"
                            >
                                <motion.div
                                    variants={vendorHoverVariantsimg}
                                    initial="initial"
                                    animate={hoveredImage === index ? 'hover' : 'initial'}
                                    className="relative"
                                >
                                    <div style={{
                                        background: `rgba(0, 0, 0, 0.3)`,
                                        opacity: 0.8,
                                        zIndex: 10,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}></div>
                                    <Image
                                        variants={vendorHoverVariantsimg}
                                        src={service.image}
                                        alt={service.title}
                                        width={200}
                                        height={200}
                                        layout="responsive"
                                        objectFit="cover"
                                        className="rounded-md "
                                    />
                                    <motion.div
                                        variants={vendorHoverVariants}
                                        initial="initial"
                                        animate={hoveredImage === index ? 'hover' : 'initial'}
                                        className="absolute m-auto  inset-0 p-4 flex items-center justify-center rounded-md "
                                        style={{
                                            // background: 'linear-gradient(to right, #2371ae 0%, #bb47d4 100%)',
                                            background: `rgba(0, 0, 0, 0.9)`,
                                            zIndex: 10,
                                            opacity: hoveredImage === index ? 0.8 : 0,
                                        }}
                                    >
                                        <div className="text-center">
                                            <h3 className="text-lg font-bold text-white">{service.name}</h3>
                                            <p className="text-sm text-white">{service.description}</p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mt-20 p-4">
                            <div className="flex flex-col items-center text-center bg-[#f9f9ff] border cursor-pointer hover:shadow-service-main-shadow-hover shadow-lg p-6 rounded-lg">
                                <FaRegUser className="text-4xl text-[#8158C6] mb-4" />
                                <h3 className="text-xl font-OpenSans font-bold mb-2 text-gray-800">Clients</h3>
                                <Counter number={10000} start={0} />
                            </div>
                            <div className="flex flex-col items-center text-center bg-[#f9f9ff] border cursor-pointer hover:shadow-service-main-shadow-hover shadow-lg p-6 rounded-lg">
                                <MdOutlineShoppingCart className="text-4xl text-[#8158C6] mb-4" />
                                <h3 className="text-xl font-OpenSans font-bold mb-2 text-gray-800">Services</h3>
                                <Counter number={15} start={0} />
                            </div>
                            <div className="flex flex-col items-center text-center bg-[#f9f9ff] border cursor-pointer hover:shadow-service-main-shadow-hover shadow-lg p-6 rounded-lg">
                                <BsPersonBadge className="text-4xl text-[#8158C6] mb-4" />
                                <h3 className="text-xl font-OpenSans font-bold mb-2 text-gray-800">Merchants</h3>
                                <Counter number={5067} start={0} />
                            </div>
                            <div className="flex flex-col items-center text-center bg-[#f9f9ff] border cursor-pointer hover:shadow-service-main-shadow-hover shadow-lg p-6 rounded-lg">
                                <IoCloudDownloadOutline className="text-4xl text-[#8158C6] mb-4" />
                                <h3 className="text-xl font-OpenSans font-bold mb-2 text-gray-800">Downloads</h3>
                                <Counter number={20000} start={0} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
