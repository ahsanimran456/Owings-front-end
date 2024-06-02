"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { cn } from "../../utils/cn.js";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { MdDataObject } from "react-icons/md";
import { HoverEffect } from "../ui/card-hover-effect";
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
// const items = [
//     {
//         title: "The Dawn of Innovation",
//         description: "Explore the birth of groundbreaking ideas and inventions.",
//         header: <Skeleton />,
//         icon: <MdDataObject />
//     },
//     {
//         title: "The Digital Revolution",
//         description: "Dive into the transformative power of technology.",
//         header: <Skeleton />,
//         icon: <MdDataObject />
//     },
//     {
//         title: "The Art of Design",
//         description: "Discover the beauty of thoughtful and functional design.",
//         header: <Skeleton />,
//         icon: <MdDataObject />
//     },
//     {
//         title: "The Power of Communication",
//         description:
//             "Understand the impact of effective communication in our lives.",
//         header: <Skeleton />,
//         icon: <MdDataObject />
//     },
//     {
//         title: "The Pursuit of Knowledge",
//         description: "Join the quest for understanding and enlightenment.",
//         header: <Skeleton />,
//         icon: <MdDataObject />
//     },
//     {
//         title: "The Joy of Creation",
//         description: "Experience the thrill of bringing ideas to life.",
//         header: <Skeleton />,
//         icon: <MdDataObject />
//     },
//     {
//         title: "The Spirit of Adventure",
//         description: "Embark on exciting journeys and thrilling discoveries.",
//         header: <Skeleton />,
//         icon: <MdDataObject />
//     },
// ];



const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];
export function OurCategories() {
    return (
        <section className="bg-[#f9fafb]">
            <div className="max-w-screen-2xl mx-auto pt-4 pb-10 px-20">
                <h3 className="text-[#222222] text-[32px] font-medium  mb-0 ">
                    Categories
                </h3>
                <h2 className="text-[#000] text-[38px] font-bold">
                    POPULAR CATEGORIES
                </h2>
                {/* <BentoGrid className="mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid> */}

                <div className="mx-auto px-8">
                    <HoverEffect items={projects} />
                </div>
            </div>
        </section>

    );
}



export default OurCategories






// const OurCategories = () => {

//     return (
//         <section>
//             <div className="max-w-screen-2xl mx-auto mt-4">
//                 {/* <h3 className="text-[#222222] text-[32px] font-medium  mb-0">
//                     Categories
//                 </h3>
//                 <h2 className="text-[#000] text-[38px] font-bold">
//                     POPULAR CATEGORIES
//                 </h2> */}
//                 {/* <HeroParallax products={products} /> */}
//             </div>
//         </section>
//     )
// }

// export default OurCategories