import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaBehance, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import Logo from '../../../public/Images/lgo.png';
import workimg from '../../../public/Images/footerbg.jpg';

const Footer = () => {
    return (
        <footer
            className='text-slate-800 py-8'
            style={{
                backgroundImage: `url(${workimg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='lg:max-w-screen-2xl md:mx-auto px-14 py-20'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Logo Section */}
                    <div className='flex justify-center md:justify-start items-center'>
                        <Image
                            src={Logo} // Replace with your actual logo path
                            alt="Logo"
                            width={120}
                            height={100}
                        />
                    </div>

                    {/* Address and Contact Info */}
                    <div className='text-center md:text-left text-slate-800'>
                        <p>
                            159 E 12th St. Manchester UK
                        </p>
                        <p>
                            (+020) 1985 3591
                        </p>
                        <p>
                            Hello@support.co.uk
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className='flex justify-center space-x-8'>
                        <a href='#' className='hover:text-blue-500'>
                            <FaFacebookF />
                        </a>
                        <a href='#' className='hover:text-blue-500'>
                            <FaTwitter />
                        </a>
                        <a href='#' className='hover:text-blue-500'>
                            <FaBehance />
                        </a>
                        <a href='#' className='hover:text-blue-500'>
                            <FaLinkedinIn />
                        </a>
                        <a href='#' className='hover:text-blue-500'>
                            <FaPinterestP />
                        </a>
                    </div>
                    <div className='text-center mt-4'>
                        <p>&copy; Pixaar 2018 <br /> All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
