"use client";

import { BackgroundGradient } from '@/components/ui/background-gradient';
import { cn } from "@/utils/cn";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import loginimg from "../../../../public/Images/login2.png"
import { CiMail } from "react-icons/ci";
import Webbanner from '@/components/MainComponents/Webbanner';
import Link from 'next/link';

const ForgortPassword = () => {
    return (
        <>
            <Webbanner tittle={"FORGOT PASSWORD"} image={loginimg} />
            <div className='max-w-screen-2xl mx-auto w-full h-full flex justify-center items-center  my-20'>
                <BackgroundGradient className="rounded-[22px] max-w-lg  bg-white dark:bg-zinc-900 overflow-hidden">
                    <div className="max-w-lg min-w-[25rem] md:min-w-[30rem] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                        <div className='flex items-center justify-center'>
                            <LabelInputContainer
                                className={cn("mb-4 px-2", "w-full")}
                            >
                                <Label htmlFor="email">Email address</Label>
                                {/* <Input name="email" placeholder="Enter you email address" type="text" /> */}
                                <Input
                                    name="email"
                                    placeholder="Enter your email address"
                                    type="text"
                                    icon={<CiMail size={20} color='#dc2626' />}
                                />
                            </LabelInputContainer>
                        </div>
                        <div className='w-full flex items-center justify-center'>
                            <div className='w-1/2  my-2'>
                                <Link href={'/login/setpassword'} >
                                    <button
                                        className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br         relative group/btn  dark:from-zinc-900 dark:to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                        type="submit"
                                    >
                                        Confirm
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </BackgroundGradient>
            </div>
        </>
    )
}
const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
export default ForgortPassword