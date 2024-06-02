import Webbanner from '@/components/MainComponents/Webbanner'
import React from 'react'
import loginimg from "../../../public/Images/login2.png"
// import CredentailForm from '@/components/Forms/credentialForm'
import OtpVerification from '@/components/Forms/OtpVerification'

const Verification = () => {
    return (
        <>
            <Webbanner tittle={"OTP VERIFICATION"} image={loginimg} />
            <div className='max-w-screen-2xl mx-auto w-full h-full flex justify-center items-center  my-20'>
                {/* <CredentailForm title={"signup"} /> */}
                <OtpVerification />
            </div>
        </>
    )
}

export default Verification