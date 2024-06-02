"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { BackgroundGradient } from '../ui/background-gradient';
import verificationimg from '../../../public/Images/verification.png'
import OtpInput from 'react-otp-input';
const OtpVerification = () => {
    const [otp, setOtp] = useState('');
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
                        numInputs={4}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                        containerStyle="otp-container"
                        inputStyle="otp-input"
                        inputType="number" // Change input type to text
                    />
                </div>
                <div className='my-5 flex justify-center items-center'>
                    <p className='text-[#9A9A9A] text-[15px]'>
                        Don’t receive a code? <span className='text-[#dc2626]'>Resend</span>
                    </p>
                </div>
                <div className='w-full my-2'>
                    <button
                        className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br         relative group/btn  dark:from-zinc-900 dark:to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </BackgroundGradient>
    )
}

export default OtpVerification