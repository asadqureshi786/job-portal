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
            <h2 className='text-4xl font-bold text-gray-800 dark:text-white'>Sign Up Account</h2>
            <p className='text-sm mt-3 dark:text-white' >Enter your details to create an account</p>
          </div>
          <div className='flex gap-4 mt-6'>
            <label>
              <input type="radio" className='hidden peer' name="account-type" defaultChecked  />
              <div className='text-[15px] transition-all border border-priamry bg-transparent text-primary   rounded-lg flex items-center justify-center px-5 py-1.5 cursor-pointer peer-checked:bg-primary peer-checked:text-white dark:peer-checked:border-primary' >
                Job Seeker
              </div>
            </label>
            <label>
              <input type="radio" className='hidden peer' name="account-type" />
              <div className='text-[15px] transition-all border border-primary bg-transparent text-primary   rounded-lg flex items-center justify-center px-5 py-1.5 cursor-pointer peer-checked:bg-primary peer-checked:text-white dark:peer-checked:border-primary' >
                Job Poster
              </div>
            </label>
          </div>
        </div>
    </div>
    <ThemeBox/>
    </>
  )
}
