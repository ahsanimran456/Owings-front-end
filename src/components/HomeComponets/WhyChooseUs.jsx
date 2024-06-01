import React from 'react'
import chooseimg from "../../../public/Images/choose-img.png"
import Image from 'next/image'
const WhyChooseUs = () => {
    return (
        <section className='section-choose-background'>
            <div className='max-w-screen-2xl mx-auto px-20 py-20'>
                <div className="flex  items-center">
                    <div className="w-1/2 ms-5">
                        <div className='h-[500px] w-[370px] rounded-[20px] relative border border-white'>
                            <div className='absolute top-[6%] right-[-20%] w-[90%] h-[88%]'>
                                <Image src={chooseimg} alt="choose-img"
                                    className='w-full h-full '
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className='text-white max-w-lg'>
                            <h2 className='text-4xl font-bold'>Why Choose Us</h2>
                            <p>
                                At Owings, we're not just a platform; we're your partner in success. Here's why you should join us:
                            </p>
                            <div className="flex flex-col">
                                <div className="flex justify-between items-center mt-5 gap-3">
                                    <div className='p-5 bg-white rounded'>
                                        <Image src="/Images/chooseicon1.png" width={100} height={10} alt="choose-icon-1" />
                                    </div>
                                    <div>
                                        <h3>
                                            Amplify Your Revenue
                                        </h3>
                                        <p className='text-[13px]'>
                                            Expand your market reach by connecting with customers who are eager to discover what you have to offer. As a service provider, you'll find a vast network of potential clients waiting for your expertise.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-5 gap-3">
                                    <div className='p-5 bg-white rounded'>
                                        <Image src="/Images/chooseicon1.png" width={100} height={10} alt="choose-icon-1" />
                                    </div>
                                    <div>
                                        <h3>
                                            Amplify Your Revenue
                                        </h3>
                                        <p className='text-[13px]'>
                                            Expand your market reach by connecting with customers who are eager to discover what you have to offer. As a service provider, you'll find a vast network of potential clients waiting for your expertise.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-5 gap-3">
                                    <div className='p-5 bg-white rounded'>
                                        <Image src="/Images/chooseicon1.png" width={100} height={10} alt="choose-icon-1" />
                                    </div>
                                    <div>
                                        <h3>
                                            Amplify Your Revenue
                                        </h3>
                                        <p className='text-[13px]'>
                                            Expand your market reach by connecting with customers who are eager to discover what you have to offer. As a service provider, you'll find a vast network of potential clients waiting for your expertise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs