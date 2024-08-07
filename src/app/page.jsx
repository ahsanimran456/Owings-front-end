import HeroSection from "@/components/HomeComponets/HeroSection";
import NewArrival from "@/components/HomeComponets/NewArrival";
import OurCategories from "@/components/HomeComponets/OurCategories";
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
      <OurCategories />
      <NewArrival />
      <WhyChooseUs />
      <Vendors />
      {/* </main> */}
    </>
  );
}
