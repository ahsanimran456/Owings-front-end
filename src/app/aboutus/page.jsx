import Webbanner from "@/components/MainComponents/Webbanner"
import aboutus from "../../../public/Images/aboutus.png"
import bannerimg from "../../../public/Images/banner.jpg"
import Image from 'next/image'
const Aboutus = () => {
    return (
        <>
            <Webbanner tittle={"CONTACT US"} subtop={"A FEW WORDS"} image={bannerimg} />
            <div className="max-w-screen-2xl mx-auto w-full h-full px-20  pb-20">
                <div className='mt-[-25px] pb-5'>
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
                </div>
            </div>
        </>
    )
}

export default Aboutus