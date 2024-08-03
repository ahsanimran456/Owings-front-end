"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { BackgroundGradient } from "../ui/background-gradient";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { red } from '@mui/material/colors';
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import loginimg from "../../../public/Images/login2.png"
import { Checkbox } from "@mui/material";
import Link from "next/link";
import { ImCross } from "react-icons/im";
// icons import 
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdDriveFileRenameOutline } from "react-icons/md"
import { IoIosPhonePortrait } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { CustomSelect } from "../ui/select";
import { FaGetPocket } from "react-icons/fa6";
import { getCities, getCountries, HandleLoginSignUp, ResendOTP } from "@/Api/ApiUtils";
import toast from "react-hot-toast";
import validateField from "../Alerts/SingleFieldAlert";


function CredentailForm({ title }) {
    const router = useRouter();
    const [Type, setType] = useState("customer");
    const [images, setImages] = useState([]);
    const [FormValue, setFormValue] = useState({});
    const [Countries, setCountries] = useState([]);
    const [Cities, setCities] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...FormValue, [name]: value });
    };

    // const handleSelectChange = async (e) => {
    //     const { name, value, id } = e;
    //     if (name === "country") {
    //         try {
    //             const { data, error } = await getCities(id);
    //             if (error) {
    //                 console.error('Error fetching Cities:', error);
    //                 return;
    //             }
    //             // setFormValue(prev => ({ ...prev, city: "" }));
    //             const transformedcities = data?.data.map(city => ({
    //                 value: city?.city,
    //                 label: city?.city,
    //                 name: "city",
    //                 id: city?.id
    //             })) || [];
    //             setCities(transformedcities);
    //         } catch (err) {
    //             console.error('Unexpected error:', err);
    //         }
    //     }
    //     setFormValue({ ...FormValue, [name]: id });
    // }

    const handleSelectChange = async (e) => {
        const { name, value, id } = e; // Use e.target to access the properties
        if (name === "country") {
            try {
                const { data, error } = await getCities(id);
                if (error) {
                    console.error('Error fetching Cities:', error);
                    return;
                }
                setFormValue(prev => ({ ...prev, city: "" }));
                const transformedCities = data?.data.map(city => ({
                    value: city?.city,
                    label: city?.city,
                    name: "city",
                    id: city?.id
                })) || [];
                setCities(transformedCities);
            } catch (err) {
                console.error('Unexpected error:', err);
            }
        }
        setFormValue(prev => ({ ...prev, [name]: id }));
    };

    const fetchCountries = async () => {
        try {
            const { data, error } = await getCountries();
            if (error) {
                console.error('Error fetching countries:', error);
                return;
            }
            const transformedCountries = data?.data.map(country => ({
                value: country?.name,
                label: country?.name,
                name: "country",
                id: country?.id
            })) || [];
            setCountries(transformedCountries);
        } catch (err) {
            console.error('Unexpected error:', err);
        }
    }
    useEffect(() => {
        fetchCountries();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = title === "login" ? LoginFieldList : (Type === "customer" ? SignupFieldListForCustomer : SignupFieldList);
        const missingFields = requiredFields.filter(field => !FormValue[field.name]);
        if (missingFields?.length > 0) {
            const missingFieldNames = missingFields.map(field => field.label).join(', ');
            toast(`Please fill in the following fields: ${missingFieldNames}`, {
                position: "top-right"
            });
            return;
        }
        for (const field of requiredFields) {
            const value = FormValue[field?.name];
            if (value !== undefined || value !== null || value !== "") {
                if (validateField(field, value)) {
                    return;
                }
            }
        }
        if ((title === "signup") && (FormValue['password_confirmation'] != FormValue['password'])) {
            toast.error(`Password and Confirm Password do not match.`, {
                position: "top-right",
                icon: '⚠️',
            });
            return;
        }
        if ((title === "signup" && Type === "merchant" && images?.length === 0)) {
            toast.error('Please upload at least one affiliations pictures before submitting.', {
                position: "top-right"
            });
            return;
        }

        const formDataToSend = new FormData();
        Object.keys(FormValue).forEach((key) => {
            formDataToSend.append(key, FormValue[key]);
        });
        formDataToSend.append("roleId", Type === "customer" ? 3 : 2);

        if (title === "signup" && Type === "merchant") {
            images.forEach((image, index) => {
                formDataToSend.append(`images[${index}]`, image);
            });
        }
        const APIURL = title === "login" ? 'api/login' : 'api/register'
        const { data, error } = await HandleLoginSignUp(formDataToSend, APIURL);

        if (data) {
            toast.success(data?.message, {
                position: "top-right",
                duration: 4000
            });
            localStorage.setItem("token", data?.data?.token)
            localStorage.setItem("email", FormValue["email"])
            if (title === "signup") {
                router.push('/verification');
            }
            if (title === "login") {
                router.push('/');
            }
        } else {
            if (error.message == "Network Error") {
                toast.error(error.message, {
                    position: "top-right"
                });
                return
            }
            toast.error(error?.response?.data?.error, {
                position: "top-right",
                duration:3000
            });
            if (error?.response?.data?.error == "User account is not active") {
                localStorage.setItem("email", FormValue["email"])
                const formDataToSend = new FormData();
                formDataToSend.append('email', FormValue["email"]);
                const { data, error } = await ResendOTP(formDataToSend);
                if (error) {
                    toast.error(error?.response?.data?.error, {
                        position: "top-right"
                    });
                    return;
                }
                if (data) {
                    setTimeout(() => {
                        router.push('/verification');
                    }, 1000);
                }
            }
        }
        console.log(error, "error response")
    };


    const handleImageChange = (e) => {
        if (images?.length < 3) {
            const files = Array.from(e.target.files);
            const imageFiles = files.filter(file => file.type.startsWith('image/'));
            setImages([...images, ...imageFiles]);
        }
    };

    const handleChangeType = (type) => {
        setType(type);
        setFormValue({})
        setImages([]);
    }


    // options fields 
    // const options = [
    //     { value: 'Pakistan', label: 'Pakistan', name: "country" },
    //     { value: 'India', label: 'India', name: "country" },
    //     { value: 'Finland', label: 'Finland', name: "country" }
    // ];
    // const options2 = [
    //     { value: 'Pakistan', label: 'Pakistan', name: "city" },
    //     { value: 'India', label: 'India', name: "city" },
    //     { value: 'Finland', label: 'Finland', name: "city" }
    // ];

    const LoginFieldList = [
        {
            name: "email",
            label: "Email Address",
            placeholder: "Enter your email",
            type: "email",
            icon: < CiMail size={20} color='#dc2626' />
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Enter your password",
            type: "password",
            icon: < RiLockPasswordLine size={20} color='#dc2626' />

        },

    ]

    const SignupFieldList = [
        {
            name: "name",
            label: "Name",
            placeholder: "Fullname",
            type: "text",
            icon: <MdDriveFileRenameOutline size={20} color='#dc2626' />
        },
        {
            name: "business_name",
            label: "Business Name",
            placeholder: "Business name",
            type: "text",
            icon: <MdDriveFileRenameOutline size={20} color='#dc2626' />
        },
        {
            name: "email",
            label: "Email Address",
            placeholder: "Enter your email",
            type: "email",
            icon: < CiMail size={20} color='#dc2626' />
        },
        {
            name: "phone_number",
            label: "Phone Number",
            placeholder: "Enter your number",
            type: "number",
            icon: <IoIosPhonePortrait size={20} color='#dc2626' />
        },
        {
            name: "poc",
            label: "Authorized POC",
            placeholder: "POC",
            type: "text",
            icon: <FaGetPocket size={20} color='#dc2626' />
        },
        {
            name: "poc_cell",
            label: "POC Cell No",
            placeholder: "POC Cell No",
            type: "number",
            icon: <IoIosPhonePortrait size={20} color='#dc2626' />
        },
        {
            name: "country",
            label: "Country",
            placeholder: "Select your country",
            type: "select",
            options: (Countries ? Countries : []),
            icon: <GiWorld size={20} color='#dc2626' />
        },
        {
            name: "city",
            label: "City",
            placeholder: "Select your city",
            type: "select",
            options: (Cities ? Cities : []),
            icon: <FaCity size={20} color='#dc2626' />

        },
        {
            name: "password",
            label: "Password",
            placeholder: "Enter your password",
            type: "password",
            icon: <RiLockPasswordLine size={20} color='#dc2626' />
        },
        {
            name: "password_confirmation",
            label: "Confirm Password",
            placeholder: "Enter your password",
            type: "password",
            icon: <RiLockPasswordLine size={20} color='#dc2626' />
        },

    ]

    const SignupFieldListForCustomer = [
        {
            name: "name",
            label: "Name",
            placeholder: "User name",
            type: "text",
            icon: <MdDriveFileRenameOutline size={20} color='#dc2626' />
        },
        {
            name: "email",
            label: "Email Address",
            placeholder: "Enter your email",
            type: "email",
            icon: < CiMail size={20} color='#dc2626' />
        },
        {
            name: "phone_number",
            label: "Phone Number",
            placeholder: "Enter your email",
            type: "number",
            icon: <IoIosPhonePortrait size={20} color='#dc2626' />
        },
        {
            name: "country",
            label: "Country",
            placeholder: "Select your country",
            type: "select",
            options: (Countries ? Countries : []),
            icon: <GiWorld size={20} color='#dc2626' />
        },
        {
            name: "city",
            label: "City",
            placeholder: "Select your city",
            type: "select",
            options: (Cities ? Cities : []),
            icon: <FaCity size={20} color='#dc2626' />
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Enter your password",
            type: "password",
            icon: <RiLockPasswordLine size={20} color='#dc2626' />
        },
        {
            name: "password_confirmation",
            label: "Confirm Password",
            placeholder: "Enter your password",
            type: "password",
            icon: <RiLockPasswordLine size={20} color='#dc2626' />
        },

    ]

    const fieldlisting = title === "login" ? LoginFieldList : SignupFieldList
    const FinalFields = (Type == "customer" && title === "signup") ? SignupFieldListForCustomer : fieldlisting


    return (
        <div className="">
            <BackgroundGradient className="rounded-[22px] max-w-lg  bg-white dark:bg-zinc-900 overflow-hidden">
                <div className="max-w-lg min-w-[25rem] md:min-w-[30rem] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                    <div className="flex justify-center items-center gap-3 ">
                        <button
                            className={`
                            ${Type === "customer" ? "text-white from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br" : "text-[#a2a0a0]"}  
                            bg-gradient-to-r rounded-2xl relative group/btn w-full h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
                        `}
                            type="button"
                            onClick={() => handleChangeType("customer")}
                        >
                            Customer
                        </button>
                        <button
                            className={`
                            ${Type === "merchant" ? "text-white from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br" : "text-[#a2a0a0]"}  
                            bg-gradient-to-r rounded-2xl relative group/btn w-full h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
                        `}
                            type="button"
                            onClick={() => handleChangeType("merchant")}
                        >
                            Merchant
                        </button>
                    </div>
                    <form className="my-5" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap mx-2">
                            {
                                FinalFields.map((item, index) => {
                                    return (
                                        item.type !== "select" ?
                                            <LabelInputContainer
                                                className={cn("mb-4 px-2", { 'w-full md:w-1/2': title === "signup", 'w-full': title !== "signup" })}
                                                key={index}
                                            >
                                                <Label htmlFor={item.label}>{item.label}</Label>
                                                <Input
                                                    name={item.name}
                                                    placeholder={item.placeholder}
                                                    type={item.type}
                                                    icon={item?.icon}
                                                    onChange={handleInputChange}
                                                    value={FormValue[item.name] ? FormValue[item?.name] : ""}
                                                />
                                            </LabelInputContainer>
                                            :
                                            <LabelInputContainer
                                                className={cn("mb-4 px-2", { 'w-full md:w-1/2': title === "signup", 'w-full': title !== "signup" })}
                                                key={index}
                                            >
                                                <Label htmlFor={item?.label}>{item?.label}</Label>
                                                <CustomSelect value={FormValue[item?.name] ? FormValue[item.name] : ""} placeholder={item?.placeholder} options={item?.options} icon={item?.icon} onChange={handleSelectChange} />
                                            </LabelInputContainer>
                                    )
                                })
                            }

                            {/* this image viewer for olny sign up  */}
                            {(title === "signup" && Type === "merchant") &&
                                <>
                                    <LabelInputContainer
                                        className={cn("mb-4 px-2", { 'w-full md:w-1/2': title === "signup", 'w-full': title !== "signup" })}
                                    >
                                        <Label >Affiliations Pictures</Label>
                                        <div className="flex gap-2 mt-2 ">
                                            <input
                                                type="file"
                                                id="affiliations"
                                                name="affiliations"
                                                accept="image/*"
                                                multiple
                                                onChange={handleImageChange}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="affiliations"
                                                className="px-10 py-2  h-fit rounded-full bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 cursor-pointer"
                                            >
                                                <span className="relative z-20">
                                                    Upload
                                                </span>
                                            </label>
                                        </div>

                                    </LabelInputContainer>
                                    {images.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {images.map((image, index) => (
                                                <div key={index} className="relative">
                                                    <img
                                                        src={URL.createObjectURL(image)}
                                                        alt={`Preview ${index}`}
                                                        className="w-24 h-24 object-cover rounded-md shadow-md"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="absolute w-[20px] h-[20px] flex justify-center items-center top-1 right-1 bg-red-500 rounded-full text-white p-1"
                                                        onClick={() => {
                                                            const newImages = [...images];
                                                            newImages.splice(index, 1);
                                                            setImages(newImages);
                                                        }}
                                                    >
                                                        <ImCross />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            }
                        </div>


                        {/* this is for  login  */}
                        {title === "login" ?
                            <>
                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <Checkbox
                                            defaultChecked
                                            size="small"
                                            sx={{
                                                color: red[800],
                                                '&.Mui-checked': {
                                                    color: red[600],
                                                },
                                            }}
                                        />
                                        <span className="text-sm text-[#737272]" >
                                            Remember me
                                        </span>
                                    </div>
                                    <div>
                                        <Link href={'/login/forgotpassword'}>
                                            <span className="text-sm text-[#737272] cursor-pointer">
                                                Forgot Password?
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <button
                                    className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br         relative group/btn  dark:from-zinc-900 dark:to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <div className="flex justify-center  mt-5">
                                    <Link href="signup">
                                        <span className="text-sm  text-[#737272] cursor-pointer">New Member? <span className="text-sm  text-[#dc2626]">Sign up now</span></span>
                                    </Link>
                                </div>
                                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                            </>
                            :
                            <>
                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <Checkbox
                                            defaultChecked
                                            size="small"
                                            sx={{
                                                color: red[800],
                                                '&.Mui-checked': {
                                                    color: red[600],
                                                },
                                            }}
                                        />
                                        <span className="text-sm text-[#737272] cursor-pointer" >
                                            By checking the box you agree to our <span className="text-[#dc2626]">Terms</span> and <span className="text-[#dc2626]">Conditions.</span>
                                        </span>
                                    </div>
                                </div>
                                {/* <Link href={'/verification'}> */}
                                <button
                                    className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br         relative group/btn  dark:from-zinc-900 dark:to-zinc-900 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                                {/* </Link> */}
                                <div className="flex justify-center mt-5">
                                    <Link href="login">
                                        <span className="text-sm  text-[#737272] cursor-pointer">Already a Member? <span className="text-sm  text-[#dc2626]">Login</span></span>
                                    </Link>
                                </div>
                            </>
                        }
                    </form>
                </div>
            </BackgroundGradient>

        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className, key }) => {
    return (
        <div className={cn("flex flex-col space-y-2", className)} key={key}>
            {children}
        </div>
    );
};

export default CredentailForm