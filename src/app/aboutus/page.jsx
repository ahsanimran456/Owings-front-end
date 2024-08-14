import Webbanner from "@/components/MainComponents/Webbanner"
// import aboutus from "../../../public/Images/aboutus.png"
import aboutus from "../../../public/Images/aboutusimg1.jpg"
import bannerimg from "../../../public/Images/aboutusbg.jpg"
import aboutusshadowimg from "../../../public/Images/aboutus-shadow-img.png"
import Image from 'next/image'
import { Input } from "@/components/ui/input"


const Aboutus = () => {
    return (
        <>
            <Webbanner tittle={"About Us"} subtop={"A Few Words"} image={bannerimg}
                bannerDescription={"No hours sank into aggregating and cleaning data. No complex SQL queries required. Just the answers teams need to make smarter decisions, fast. Now, that's data-driven."}
                className={'about-clip-path'} />

            <div className="max-w-screen-2xl mx-auto w-full h-full px-14 pb-20">
                <div className="py-20">
                    <div className="grid grid-cols-2 gap-4 ">
                        <div className="mb-20">
                            <h1 className="text-5xl uppercase font-bold mt-10 mb-10 text-[#444444] font-poppins ">About us</h1>
                            <p className='font-OpenSans text-base mb-10 text-[#37456c]'>We are the UK's leading supplier of road fuel and are growing internationally.</p>
                            <h2 className="text-3xl mb-3  text-[#444444]">This is our 27th year in business.</h2>
                            <p className="font-OpenSans  text-base text-[#37456c]">We have grown from a bedroom start-up in 1992 to become
                                the UK's only national fuel supplier. We are now building on
                                our UK experience to grow internationally.</p>
                        </div>
                        <div className="bg-contain bg-center text-white h-80 w-full bg-no-repeat  flex justify-center items-center" style={{ backgroundImage: `url(${aboutusshadowimg.src})` }}>
                            <div className="max-w-md  ">
                                <h2 className="mb-3 text-2xl">
                                    Our strategy
                                </h2>
                                <p>
                                    By being the fuel supplier with the
                                    lowest cost and the highest service
                                    levels, we aim to earn the loyalty of
                                    existing customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid h-full mb-10  grid-cols-2 gap-4 shadow-aboutus-shadow-imgs">
                    <div className="w-full h-min">
                        <Image
                            src={aboutus}
                            height={200}
                            width={200}
                            className="w-full  h-full "
                            alt="thumbnail"
                            style={{ marginTop: '-100px' }}
                        />
                    </div>
                    <div className="px-10 py-10">
                        <h2 className="text-[#444444] text-4xl font-semibold mb-12">
                            Lorem Ipsum is simply
                        </h2>
                        <p className="font-OpenSans text-2xl leading-10 text-[#37456c]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </p>
                    </div>
                </div>

                <div className="w-11/12 m-auto ">
                    <div className="grid grid-cols-2 gap-4 shadow-aboutus-shadow-imgs items-center rounded-2xl p-5">
                        <div>
                            <h3 className="text-[#444444] text-2xl font-semibold ">
                                Stay In Loop
                            </h3>
                            <p className="font-OpenSans  text-base text-[#37456c]">
                                Want to stay updated effortlessly? Sign up with your email to receive our latest news and updates
                            </p>
                        </div>
                        <div className="flex w-full gap-2 justify-center">
                            <Input
                                name={'email'}
                                placeholder={'name@owings.com'}
                                type={'email'}
                                parentClass={"w-full h-fit"}

                            />
                            <button className="text-white max-h-9  px-3 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  focus:outline-none  shadow-lg shadow-red-500/50  font-medium rounded-lg text-sm   text-center">Continue</button>
                        </div>
                    </div>
                </div>

                {/* <div className='mt-20 pb-5'>
                    <div className="grid grid-cols-2 gap-4 ">
                        <div className='flex justify-center items-center'>
                            <Image
                                src={aboutus}
                                height="100%"
                                width="100%"
                                className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </div>
                        <div className='bg-[#0C2136] px-10 py-10 rounded' >
                            <h3 className='text-[#fff] text-2xl'>
                                At Q8Hafeez, we believe in empowering individuals to transform their entrepreneurial dreams into reality.
                            </h3>
                            <p className='text-[#fff]'>
                                Our platform serves as a dynamic marketplace that connects home-based businesses with a vibrant community of customers, fostering a thriving ecosystem where commerce and creativity flourish.
                                We provide a seamless, bilingual interface in English and Arabic, reflecting our commitment to inclusivity and cultural diversity. Our platform caters to both merchants and customers, offering a user-friendly environment where merchants can register, post their offerings, and manage their business with ease, while customers enjoy a rich array of choices, detailed information about each listing, and direct communication channels with merchants.
                                Our mission at Q8Hafeez is to create a world where work knows no boundaries, talent finds its right audience, and every home business receives the recognition it deserves. Join us in this revolution, where every step you take is a stride towards success and independence.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0C2136] text-white  max-w-6xl mx-auto px-3 py-10 rounded-3xl">
                    <h3 className="text-2xl font-bold ">
                        Stay In Loop
                    </h3>
                    <div className="flex justify-between items-center">
                        <div>
                            <p>
                                Want to stay updated effortlessly? Sign up with your email to receive our latest news and updates
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div class="relative ">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                    </svg>
                                </div>
                                <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:[#2d5883] outline-none focus-visible:border-[#2d5883] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@owings.com" />
                            </div>
                            <button className="text-white mt-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  focus:outline-none  shadow-lg shadow-red-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Continue</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Aboutus