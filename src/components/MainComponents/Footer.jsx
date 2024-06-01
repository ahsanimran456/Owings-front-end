import React from 'react';
import logo from '../../../public/Images/logowt.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='bg-[#f9f9f9]'>
            <div className='max-w-screen-2xl mx-auto px-20 py-20'>
                <div className="grid grid-cols-5 gap-10">
                    <div className="col-span-2">
                        <div>
                            <Image
                                src={logo}
                                height={50}
                                width={70}
                                className="rounded-xl group-hover:shadow-xl"
                                alt="thumbnail"
                            />
                        </div>
                        <div>
                            Owings is at the forefront of empowering
                            <b>
                                home businesses across the globe, providing a robust platform for entrepreneurs to connect with customers and grow their presence. We're dedicated to fostering a thriving marketplace where every home business can flourish and succeed.
                            </b>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[20px] font-bold text-[#162e40]'>
                            USEFUL LINK
                        </h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                            <li>Privacy</li>
                            <li>Login</li>
                            <li>Signup</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[20px] font-bold text-[#162e40]'>
                            OUR SERVICES
                        </h3>
                        <ul>
                            <li>Food</li>
                            <li>Consultation</li>
                            <li>Renting</li>
                            <li>Contact</li>
                            <li>Financial & real states</li>
                           
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[20px] font-bold text-[#162e40]'>
                            NEWSLETTER
                        </h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                            <li>Privacy</li>
                            <li>Login</li>
                            <li>Signup</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
