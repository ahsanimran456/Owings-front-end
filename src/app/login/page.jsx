import Webbanner from '@/components/MainComponents/Webbanner'
import React from 'react'
import loginimg from "../../../public/Images/login2.png"
import CredentailForm from '@/components/Forms/credentialForm'

const Login = () => {
    return (
        <>
            <Webbanner tittle={"Login"} subtop={"Sign in to access your account"} image={loginimg} />
            <div className='max-w-screen-2xl mx-auto w-full h-full flex justify-center items-center  my-20'>
                <CredentailForm
                    title={"login"}
                />
            </div>
        </>
    )
}

export default Login