"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import { BackgroundGradient } from '../ui/background-gradient';
import verificationimg from '../../../public/Images/verification.png'
import OtpInput from 'react-otp-input';
import { HandleConfirmOPT, ResendOTP } from '@/Api/ApiUtils';
import toast from 'react-hot-toast';

const OtpVerification = () => {
    const router = useRouter();
    const [otp, setOtp] = useState('');
    const [ISsubmited, setISsubmited] = useState(false);

    const HandleResendOTP = () => {
        setISsubmited(true)
        const userEmail = localStorage.getItem('email');
        const formDataToSend = new FormData();
        formDataToSend.append('email', userEmail);
        const { data, error } = ResendOTP(formDataToSend)
        setISsubmited(false)
    }

    const ConfirmOTP = (e) => {
        e.preventDefault();
        setISsubmited(true)
        console.log(otp.length, "asds");
        if (otp?.length == 6) {
            const userEmail = localStorage.getItem('email');
            const formDataToSend = new FormData();
            formDataToSend.append('email', userEmail);
            formDataToSend.append('otpCode', otp);
            router.push('/');
            const { data, error } = HandleConfirmOPT(formDataToSend)
        } else if (otp?.length == 4 || otp?.length == 5) {
            toast.error(`Please enter valid OTP.`, {
                position: "top-right"
            });
        }
        setISsubmited(false)
    }

    // useEffect(() => {
    //     console.log(ISsubmited,"change");
    // }, [ISsubmited]);
    return (
        <BackgroundGradient className="rounded-[22px] max-w-lg  bg-white dark:bg-zinc-900 overflow-hidden">
            <div className="max-w-lg min-w-[25rem] md:min-w-[30rem] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                <div className='w-full h-60  flex items-center justify-center relative'>
                    <Image
                        src={verificationimg}
                        width={"100%"}
                        height={"100%"}
                        className="rounded-xl object-cover"
                        alt="verification"
                    />
                </div>
                <div className='flex items-center justify-center text-center my-4'>
                    <p className='font-mono text-[12px]'>
                        Please enter the verification code <br />
                        we send to your email.
                    </p>
                </div>
                <div className='flex items-center justify-center my-10 mb-5'>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                        containerStyle="otp-container"
                        inputStyle="otp-input"
                        inputType="number" // Change input type to text
                    />
                </div>
                <div className='my-5 flex justify-center items-center'>
                    <p className='text-[#9A9A9A] text-[15px]'>
                        Don’t receive a code? <button className='text-[#dc2626] cursor-pointer' onClick={HandleResendOTP} disabled={ISsubmited}>Resend</button>
                    </p>
                </div>
                <div className='w-full my-2'>
                    <button
                        className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br         relative group/btn  dark:from-zinc-900 dark:to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                        onClick={ConfirmOTP}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </BackgroundGradient>
    )
}
export default OtpVerification