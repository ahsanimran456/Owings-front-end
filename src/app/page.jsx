import Features from "@/components/HomeComponets/Features";
import HeroSection from "@/components/HomeComponets/HeroSection";
import HowitWorks from "@/components/HomeComponets/HowitWorks";
import NewArrival from "@/components/HomeComponets/NewArrival";
import OurCategories from "@/components/HomeComponets/OurCategories";
import OurClients from "@/components/HomeComponets/OurClients";
import OurService from "@/components/HomeComponets/OurService";
import OurVendors from "@/components/HomeComponets/OurVendors";
import Vendors from "@/components/HomeComponets/Vendors";
import WhyChooseUs from "@/components/HomeComponets/WhyChooseUs";
import HeroSection2 from "@/components/MainComponents/HeroSection2";
import Navbar from "@/components/MainComponents/Navbar";

export default function Home() {

  return (
    <>
      {/* <Navbar /> */}

      {/* <HeroSection /> */}

      {/* <main className="px-20"> */}
      <HeroSection2 />
      {/* <OurCategories /> */}
      <OurService />
      <HowitWorks />
      <Features />
      <OurVendors />
      <OurClients/>
      {/* <NewArrival />
      <WhyChooseUs /> */}
      {/* <Vendors /> */}
      {/* </main> */}
    </>
  );
}
