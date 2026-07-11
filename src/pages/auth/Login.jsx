import React from "react";
import { useState } from "react";
import ThemeBox from "../../components/ThemeBox";

export default function Login() {

 

  return (
    <>
      <div className="grid grid-cols-12 bg-white dark:bg-black/100 h-dvh">
        <div className="lg:col-span-6 lg:block hidden relative bg-[url('/img/registration-img.jpg')] bg-cover bg-start">
          <div className="bg-gradient-to-b from-black/60 to-primary absolute inset-0 animate-pulse"></div>
        </div>
        <div className="lg:col-span-6 col-span-12 flex justify-center items-center flex-col ">
          <div className="4xl:w-[60%] w-[55%] py-10 ">
            <div className="text-center ">
              <h2 className="4xl:text-5xl text-4xl font-bold text-gray-800 dark:text-white">
                 <span className="g-text" >Welcome</span> Back   
              </h2>
              <p className="4xl:text-base text-sm mt-3 dark:text-white">
                Enter your details to create an account
              </p>
            </div>
          

            {/* Job Seeker */}
            <div className='job_seeker 4xl:px-5'>
              <form className="w-full mt-7 flex flex-col 4xl:gap-5 gap-3">
                {/* <div className="groups">
                  <label>Name</label>
                  <input type="text" />
                </div> */}
                <div className="groups">
                  <label>Email Address</label>
                  <input type="email" />
                </div>
                <div className="groups">
                  <label>Password</label>
                  <input type="password" />
                </div>
                <button className="btn btn-primary bg-primary text-white rounded-md py-2 transition-all hover:bg-black cursor-pointer" >Login</button>
              </form>
              <p className="text-center text-gray-500 font-thin font-Anton mb-0 py-6 text-sm cursor-pointer">
                Or Register With
              </p>
              <div className="grid grid-cols-2 items-center gap-2">
                <button className="w-full flex justify-center items-center gap-3 text-base gray-300 rounded-md border border-gray-200 dark:border-gray-900 dark:text-slate-300 py-1.5 px-5 transition-all hover:bg-gray-100 cursor-pointer">
                  <img src="/img/c_logo/google.png" className="w-4.5" />
                  Google</button>
                <button className="full  flex justify-center items-center gap-3 text-base gray-300 rounded-md border border-gray-200 dark:border-gray-900 dark:text-slate-300 py-1.5 px-5 transition-all hover:bg-gray-100 cursor-pointer">
                  <img src="/img/c_logo/apple.png" className="w-4.5 bloack dark:hidden!" />
                      <img src="/img/c_logo/apple-darl.png" className="w-4.5 hidden dark:block!" />
                  Google</button>
              </div>
              <p className="text-center text-gray-500 font-thin font-Anton mb-0 py-6 text-sm">
                Don't Have An Account? <span className="text-primary font-medium" >Sign up</span>
              </p>
            </div>


          </div>
        </div>
      </div>
      <ThemeBox />
    </>
  );
}
