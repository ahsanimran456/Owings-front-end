import React from 'react'
import Logo from '../../../public/Images/owings-logo.png';
import Image from 'next/image';
import Link from 'next/link';


const NavbarComp = () => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/aboutus' },
        { name: 'Services', path: '/services' },
        { name: 'Shop', path: '/shop' },
        { name: 'Contact Us', path: '/contactus' }
    ];
    return (
        <div className='main-navbar'>
            <div className="nav-header py-3 relative z-10 flex items-center justify-between">
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
                            <Link key={item.path} href={item.path}>
                                <li className={`cursor-pointer  text-[#fff] transition-all duration-300 py-4`}>
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavbarComp
