import React from 'react'
import ThemeBox from "../../components/ThemeBox";

export default function Register() {
  return (
    <>
    <div className='grid grid-cols-12 bg-white dark:bg-black/100 h-dvh'>
        <div className="col-span-6 relative bg-[url('/img/registration-img.jpg')] bg-cover bg-start">
          <div className='bg-gradient-to-b from-black/60 to-primary absolute inset-0' ></div>
        </div>
        <div className="col-span-6 flex justify-center items-center flex-col ">
          <div className='text-center '>
            <h2 className='text-3xl font-bold text-gray-800'>Sign Up Account</h2>
            <p className='text-sm mt-3' >Enter your details to create an account</p>
          </div>
        </div>
    </div>
    <ThemeBox/>
    </>
  )
}
