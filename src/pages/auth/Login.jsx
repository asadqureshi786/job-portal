import React from "react";
import { useState } from "react";
import { NavLink } from "react-router";

import ThemeBox from "../../components/ThemeBox";
import SocialButton from "../../components/SocialButton";
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
                Enter your details to login account
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
                <NavLink to="" className="btn btn-primary bg-primary text-center text-white rounded-md py-2 transition-all hover:bg-black dark:hover:bg-white/10 cursor-pointer" >Login</NavLink>
              </form>
              <p className="text-center text-gray-500 font-thin font-Anton mb-0 py-6 text-sm cursor-pointer">
                Or 
              </p>
             

                <SocialButton/>


              <p className="text-center text-gray-500 font-thin font-Anton mb-0 py-6 text-sm">
                Don't Have An Account? <NavLink to="/register" className="text-primary font-medium" >Sign up</NavLink>
              </p>
            </div>


          </div>
        </div>
      </div>
      <ThemeBox />
    </>
  );
}
