import Link from 'next/link';
import React from 'react'
import Logo from '../../../public/Images/owings-logo.png';
import Image from 'next/image';



const Webbanner = ({ tittle, subtop, image, className,bannerDescription }) => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/aboutus' },
        { name: 'Services', path: '/services' },
        { name: 'Shop', path: '/shop' },
        { name: 'Contact Us', path: '/contactus' },
        { name: 'Login', path: '/login' },
        { name: 'Sign Up', path: '/signup' }
    ];
    return (
        <section className={`${className} relative all-banners-web`} >
            <div className='overlay-allbanner'></div>
            <div style={{ backgroundImage: `url(${image.src})` }} className='banner-img'>
                <div className='max-w-screen-2xl mx-auto relative z-10  w-full h-full px-14'>
                    <div className="nav-header py-3 relative  flex items-center justify-between">
                        <div className="nav-logo">
                            <Image
                                src={Logo}
                                alt={`hero-banner-mobile`}
                                width={110}
                                height={110}
                            />
                        </div>
                        <div >
                            <ul className='flex  items-center space-x-7 font-medium'>
                                {navItems.map(item => (
                                    <Link key={item.path} href={item.path} className={`${item.name == 'Login' || item.name == 'Sign Up' ? "header-links-a" :""}`}>
                                       <li className={`${item.name == 'Login' || item.name == 'Sign Up' ? 'header-custmizebtns' : ''} cursor-pointer  text-[#fff] transition-all duration-300 py-4`}>
                                            {item.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={`flex flex-col  min-h-[320px] ${(tittle == "Login" || tittle == "Sign up") && "flex-col-reverse"} `}>
                        <div className='mt-16 text-center text-texture'>
                            {subtop && <h5 className='text-white'>{tittle ? subtop : ""}</h5>}
                            <h1 className='text-[white] text-5xl font-bold mb-2'>{tittle ? tittle : "Owings Web"}</h1>
                            <div className='max-w-[60%] mx-auto mt-10' >
                                <p className='text-white'>
                                    {bannerDescription}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Webbanner