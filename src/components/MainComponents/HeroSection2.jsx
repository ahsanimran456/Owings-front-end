'use client'
import Image from 'next/image';
import React from 'react';
import banner1 from '../../../public/Images/bannerimg1.jpg';
import banner2 from '../../../public/Images/bannerimg2.jpg';
import banner3 from '../../../public/Images/bannerimg3.jpg';
import banner4 from '../../../public/Images/bannerimg4.jpg';
import banner5 from '../../../public/Images/bannerimg5.jpg';
import bannermobile from '../../../public/Images/hero-banner-mobile.png';

const images = [banner1, banner2, banner3, banner4, banner5];

const HeroSection2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 7200ms = 7.2s for each image

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='hero-section-2'>

      <div className="overlay-hero-section"></div>
      <div className='hero-section-2__container h-full'>
        <div className='bg-imges-shows'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`bg-imges-shows__img ${index === currentImageIndex ? 'active' : ''}`}
            >
              <Image
                src={image}
                alt={`Banner ${index + 1}`}
                layout='fill'
                objectFit='cover'
                className={`bg-imges-shows__img ${index === currentImageIndex ? 'active' : ''}`}
              />
            </div>
          ))}


        </div>
        <div className='hero-section-content lg:max-w-screen-2xl md:mx-auto px-14'>
          <div className='max-w-[36rem]'>
            <h1 className='text-[#fff] text-8xl font-bold leading-[1.2] font-poppins'>
              Now Everything is Simple with Owings
            </h1>
          </div>
          <div className='hero-banner-mobile'>
            <Image
              src={bannermobile}
              alt={`hero-banner-mobile`}
              width={300}
              height={300}
            // objectFit='cover'
            // className={`bg-imges-shows__img ${index === currentImageIndex ? 'active' : ''}`}
            />
          </div>
        </div>

      </div>
      <div className='hero-bottom-border'>
        <svg viewBox="0 0 1440 238" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 189.252C591.624 304.273 597.079 58.018 0 0c0 91.006 0 216.847 0 238.478 148.21-0.137 1440 0 1440 0S1440 208.484 1440 189.252z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection2;
