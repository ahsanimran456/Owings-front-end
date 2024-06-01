import Webbanner from "@/components/MainComponents/Webbanner"
import bannerimg from "../../../public/Images/contact.jpg"
import contactus from "../../../public/Images/contact-img2.jpg"
import Image from "next/image"
import ContactusForm from "@/components/Forms/ContactusForm"


const ContactUs = () => {
    return (
        <>
            <Webbanner tittle={"CONTACT US"} subtop={"Get In Touch"} image={bannerimg} />
            <div className="max-w-screen-2xl mx-auto w-full h-full px-20  my-20">
                <div className="grid grid-cols-2 gap-4 items-center">
                    <div >
                        <Image
                            src={contactus}
                            height="100%"
                            width="100%"
                            className="h-96 w-full  rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </div>
                    <ContactusForm />
                </div>
            </div>
        </>

    )
}

export default ContactUs