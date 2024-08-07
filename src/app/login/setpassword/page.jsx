"use client";

import { BackgroundGradient } from '@/components/ui/background-gradient';
import { cn } from "@/utils/cn";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import loginimg from "../../../../public/Images/login2.png"
import Webbanner from '@/components/MainComponents/Webbanner';
import { TbPassword } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import validateField from '@/components/Alerts/SingleFieldAlert';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { HandleSetPassword } from '@/Api/ApiUtils';

const SetPassword = () => {
    const [FormValue, setFormValue] = useState({});

    const feilds = [
        {
            name: "otpCode",
            label: "Otp",
            placeholder: "Enter otp",
            type: "number",
            icon: < TbPassword size={20} color='#dc2626' />

        },
        {
            name: "password",
            label: "Password",
            placeholder: "Enter your password",
            type: "password",
            icon: < RiLockPasswordLine size={20} color='#dc2626' />

        },
        {
            name: "password_confirmation",
            label: "Conform Password",
            placeholder: "Confirm password",
            type: "password",
            icon: < RiLockPasswordLine size={20} color='#dc2626' />
        },
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...FormValue, [name]: value });
    };

    useEffect(() => {
        console.log(FormValue);
    }, [FormValue]);

    const handleSubmit = async (e) => {
        e.preventDefault();


        const requiredFields = feilds;
        const missingFields = requiredFields.filter(field => !FormValue[field.name]);
        if (missingFields?.length > 0) {
            const missingFieldNames = missingFields.map(field => field.label).join(', ');
            toast(`Please fill in the following fields: ${missingFieldNames}`, {
                position: "top-right"
            });
            return;
        }
        let isValid = true;
        for (const field of requiredFields) {
            const value = FormValue[field.name];
            if (value === undefined || value === null || value === "") {
                console.error(`Value for field ${field.name} is not defined.`);
                continue;
            }
            // Validate the field and stop the loop on failure
            if (validateField(field, value)) {
                isValid = false;
                break;
            }
        }
        if (FormValue['password_confirmation'] != FormValue['password']) {
            toast.error(`Password and Confirm Password do not match.`, {
                position: "top-right",
                icon: '⚠️',
            });
            return;
        }
        const formDataToSend = new FormData();
        Object.keys(FormValue).forEach((key) => {
            formDataToSend.append(key, FormValue[key]);
        });
        const { data, error } = await HandleSetPassword(formDataToSend);

    };
    return (
        <>
            <Webbanner tittle={"SET PASSWORD"} image={loginimg} />
            <div className='max-w-screen-2xl mx-auto w-full h-full flex justify-center items-center  my-20'>
                <BackgroundGradient className="rounded-[22px] max-w-lg  bg-white dark:bg-zinc-900 overflow-hidden">
                    <div className="max-w-lg min-w-[25rem] md:min-w-[30rem] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                        {/* <div className='flex items-center justify-center'> */}
                        {
                            feilds.map((item, index) => {
                                return (
                                    <LabelInputContainer
                                        index={index}
                                        className={cn("mb-4 px-2", "w-full")}
                                    >
                                        <Label htmlFor={item.label}>{item.label}</Label>
                                        <Input
                                            name={item.name}
                                            placeholder={item.placeholder}
                                            type={item.type}
                                            icon={item.icon}
                                            value={FormValue[item.name]}
                                            onChange={handleInputChange}
                                        />
                                    </LabelInputContainer>
                                )
                            })
                        }

                        {/* </div> */}
                        <div className='w-full flex items-center justify-center'>
                            <div className='w-1/2  my-2'>
                                <button
                                    className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br         relative group/btn  dark:from-zinc-900 dark:to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </BackgroundGradient>
            </div>
        </>
    )
}
const LabelInputContainer = ({ children, className, index }) => {
    return (
        <div key={index} className={cn("flex flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
export default SetPassword