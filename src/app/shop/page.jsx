'use client'
import { useState } from "react";
import Image from 'next/image';
import { BsGrid } from "react-icons/bs";
import { IoReorderThree } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import ReactSelect from "react-select";
import Webbanner from "@/components/MainComponents/Webbanner";
import bannerimg from "../../../public/Images/aboutusbg.jpg";
import serviceimg5 from "../../../public/Images/service5.jpg";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        title: "Chambray Vintage Stripe Quilt",
        category: "Furniture",
        price: 3200,
        image: serviceimg5
    },
    {
        id: 2,
        title: "Chambray Vintage Stripe Quilt",
        category: "Furniture",
        price: 1200,
        image: serviceimg5
    },
    {
        id: 2342342,
        title: "Chambray Vintage Stripe Quilt",
        category: "Furniture",
        price: 1200,
        image: serviceimg5
    },
    {
        id: 3,
        title: "Denim European Pillowcase",
        category: "Food",
        price: 2300,
        image: serviceimg5
    },
    {
        id: 24234,
        title: "Denim European Pillowcase",
        category: "Food",
        price: 2300,
        image: serviceimg5
    },
    {
        id: 35435,
        title: "Denim European Pillowcase",
        category: "Food",
        price: 2300,
        image: serviceimg5
    },
    {
        id: 3565,
        title: "Denim European Pillowcase",
        category: "Food",
        price: 2300,
        image: serviceimg5
    },
    {
        id: 767,
        title: "Denim European Pillowcase",
        category: "Food",
        price: 2300,
        image: serviceimg5
    },
];

const catgories = [
    { value: 'Food', label: 'Food', },
    { value: 'Consumer electronics', label: 'Consumer electronics', },
    { value: 'Health', label: 'Health, personal care, and beauty', },
    { value: 'Auto and parts', label: 'Auto and parts', },
    { value: 'Furniture ', label: 'Furniture ', }
];

const subcatgories = [
    { value: 'Food', label: 'Food', },
    { value: 'Consumer electronics', label: 'Consumer electronics', },
    { value: 'Health', label: 'Health, personal care, and beauty', },
    { value: 'Auto and parts', label: 'Auto and parts', },
    { value: 'Furniture ', label: 'Furniture ', }
];

const ShopPage = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        producer: [],
        priceRange: [1200, 3200],
    });
    const [isGridView, setIsGridView] = useState(true);  // State for view mode

    // Handle filter changes
    const handleFilterChange = (filterType, value) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value
        }));
    };

    // Handle view mode toggle
    const toggleViewMode = (mode) => {
        setIsGridView(mode);
    };

    const vendorHoverVariantsimg = {
        initial: {
            opacity: 1,
            scale: 1,
        },
        hover: {
            opacity: 1,
            scale: 1.05,
            background: 'rgba(0, 0, 0, 0.3)',
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <section className="bg-[white]">
            <Webbanner
                tittle={"Services"}
                image={bannerimg}
                bannerDescription={"No hours sank into aggregating and cleaning data. No complex SQL queries required. Just the answers teams need to make smarter decisions, fast. Now, that's data-driven."}
                className={'about-clip-path'}
            />
            <div className="max-w-screen-2xl mx-auto w-full h-full px-14 mt-10 pb-20 flex">
                {/* Sidebar */}
                <aside className="w-1/4 pr-8 sticky custom-scrollbar top-10 h-screen overflow-y-auto">
                    <div className="bg-[#f5f5fa] p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-base text-[#444444] font-semibold mb-2">Selected Category</h3>
                        <ul>
                            <li className="font-OpenSans text-sm text-[#4c4d50]">Machines (6)</li>
                        </ul>
                    </div>
                    <div className="bg-[#f5f5fa] p-4 rounded-lg shadow-md mb-6">
                        <h3 className="text-base text-[#444444] font-semibold mb-2">Categories</h3>
                        <ul>
                            <li className="font-OpenSans text-sm mb-3 text-[#4c4d50]">
                                <ReactSelect
                                    options={catgories}
                                    placeholder='Select category'
                                />
                            </li>
                            <li className="font-OpenSans text-sm text-[#4c4d50]">
                                <ReactSelect
                                    options={subcatgories}
                                    placeholder='Select sub category'
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="bg-[#f5f5fa] p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Price</h3>
                        <div className="flex justify-between">
                            <span>£1,200</span>
                            <span>£3,200</span>
                        </div>
                        <input
                            type="range"
                            min="1200"
                            max="3200"
                            value={selectedFilters.priceRange[1]}
                            onChange={(e) => handleFilterChange('priceRange', [1200, e.target.value])}
                            className="custom-range w-full mt-2"
                        />
                        <button className="text-white w-full py-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm text-center">
                            Apply
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="w-3/4">
                    <div className="grid grid-cols-2 items-center gap-6 bg-[#f5f5fa] p-4 rounded-lg shadow-md mb-6">
                        <div>
                            <Input
                                name={'email'}
                                placeholder={'Search Product By Name'}
                                type={'email'}
                                parentClass={"w-full h-fit"}
                            />
                        </div>
                        <div>
                            <div className="flex gap-3 items-center justify-end">
                                <div
                                    className={`bg-gradient-to-r from-red-400 via-red-500 to-red-600 shadow-lg shadow-red-500/50 p-2 rounded-lg ${isGridView ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                                    onClick={() => toggleViewMode(true)}
                                >
                                    <BsGrid color="#fff" size={18} cursor={'pointer'} />
                                </div>
                                <div
                                    className={`bg-gradient-to-r from-red-400 via-red-500 to-red-600 shadow-lg shadow-red-500/50 p-2 rounded-lg ${!isGridView ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                                    onClick={() => toggleViewMode(false)}
                                >
                                    <IoReorderThree color="#fff" size={18} cursor={'pointer'} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="custom-scrollbar overflow-y-auto h-[120vh] px-2 pb-5">
                        <div className={`grid ${isGridView ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                            {products.map(product => (
                                <div key={product.id} className={`bg-white rounded-lg overflow-hidden shadow-md ${isGridView ? 'flex flex-col items-center shadow-md' : 'flex  shadow-service-shadow mt-1'}`}>
                                    <div className={`${isGridView ? 'h-60 w-full ' : 'h-52 w-1/2'} relative overflow-hidden`}>
                                        <motion.div
                                            initial="initial"
                                            whileHover="hover" // This triggers the hover animation
                                            variants={vendorHoverVariantsimg} // Assign variants to the motion.div
                                            className="w-full h-full"
                                        >
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={400}
                                                height={400}
                                                className="mb-4 w-full h-full object-cover"
                                            />
                                            <motion.div
                                                initial={{ opacity: 0 }} 
                                                whileHover={{ opacity: 1 }} 
                                                className="absolute inset-0 bg-black bg-opacity-30"
                                            />
                                        </motion.div>
                                    </div>

                                    <div className={` ${isGridView ? 'py-3 px-3 w-full' : 'py-1 px-3 flex flex-col gap-3 w-1/2'}`}>
                                        {!isGridView &&
                                            <h3 className={`text-sm bg-gradient-to-r p-0 m-0 from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent  font-bold leading-[18px] tracking-[-0.02em] text-black block overflow-hidden text-ellipsis whitespace-nowrap w-full`}>
                                                {product.category}
                                            </h3>
                                        }
                                        <h3 className={`${isGridView ? 'text-sm' : 'text-base'} leading-[30px] tracking-[-0.02em] text-[#4c4d50] block overflow-hidden text-ellipsis whitespace-nowrap w-full`}>
                                            {product.title}
                                        </h3>
                                        <div className="flex justify-between items-center mt-2">
                                            <p className="bg-gradient-to-r p-0 m-0 from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent text-lg font-bold">
                                                ${product.price.toLocaleString()}
                                            </p>
                                            <div className="p-1 border cursor-pointer hover:bg-[#EB3E3E] border-[#EB3E3E] rounded-md group">
                                                <MdAddShoppingCart className="text-[#EB3E3E] group-hover:text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default ShopPage;
