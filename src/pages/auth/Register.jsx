import React from "react";
import { useState } from "react";
import ThemeBox from "../../components/ThemeBox";
import SocialButton from "../../components/SocialButton";

export default function Register() {

  const [tabs,setTabs] = useState('seeker')

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
                Create Your <span className="g-text" >Account</span>   
              </h2>
              <p className="4xl:text-base text-sm mt-3 dark:text-white">
                Enter your details to create an account
              </p>
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              <label>
                <input
                  type="radio"
                  className="hidden peer"
                  name="account-type"
                  defaultChecked
                />
                <div onClick={()=>setTabs('seeker')} className="4xl:text-[15px] text-sm transition-all border border-gray-300 dark:border-gray-800 dark:hover:bg-primary bg-transparent text-black dark:text-slate-300   rounded-lg flex items-center justify-center px-5 py-1.5 cursor-pointer peer-checked:bg-black peer-checked:text-white dark:peer-checked:border-primary transition-all hover:bg-gray-100 cursor-pointer peer-checked:hover:bg-black">
                  Job Seeker
                </div>
              </label>
              <label>
                <input
                  type="radio"
                  className="hidden peer"
                  name="account-type"
                />
                <div onClick={()=>setTabs('poster')} className="4xl:text-[15px] text-sm transition-all border border-gray-300 dark:border-gray-800 dark:hover:bg-primary bg-transparent text-black dark:text-slate-300   rounded-lg flex items-center justify-center px-5 py-1.5 cursor-pointer peer-checked:bg-black peer-checked:text-white dark:peer-checked:border-primary transition-all hover:bg-gray-100 cursor-pointer peer-checked:hover:bg-black">
                  Job Poster
                </div>
              </label>
            </div>

            {/* Job Seeker */}
            <div className={`job_seeker 4xl:px-5 ${tabs == 'seeker' ? 'opacity-100 block visible max-h-full' : 'opacity-0 hidden invisible max-h-0'}`}>
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
                  <label>Phone Number</label>
                  <input type="text" />
                </div>
                <div className="groups">
                  <label>Password</label>
                  <input type="password" />
                </div>
                <div className="groups">
                  <label>Confrim Password</label>
                  <input type="password" />
                </div>
                <button className="btn btn-primary bg-primary text-white rounded-md py-2 transition-all hover:bg-black cursor-pointer" >Register</button>
              </form>
              <p className="text-center text-gray-500 font-thin font-Anton mb-0 py-6 text-sm cursor-pointer">
                Or Register With
              </p>
             <SocialButton/>
              <p className="text-center text-gray-500 font-thin font-Anton mb-0 py-6 text-sm">
                Already Have An Account? <span className="text-primary font-medium" >Sign in</span>
              </p>
            </div>


            {/* Job Poster */}
            <div className={`job_seeker 4xl:px-5 ${tabs == 'poster' ? 'opacity-100 block visible max-h-full' : 'opacity-0 hidden invisible max-h-0'}`}>
              <form className="w-full  mt-7 flex flex-col 4xl:gap-5 gap-3">
                <div className="groups">
                  <label>Company Name</label>
                  <input type="text" />
                </div>
                <div className="groups">
                  <label>Email Address</label>
                  <input type="email" />
                </div>
                <div className="groups">
                  <label>Phone Number</label>
                  <input type="text" />
                </div>
                <div className="groups">
                  <label>Password</label>
                  <input type="password" />
                </div>
                <div className="groups">
                  <label>Confrim Password</label>
                  <input type="password" />
                </div>
                <button className="btn btn-primary bg-primary text-white rounded-md py-2 transition-all hover:bg-black cursor-pointer" >Register</button>
              </form>
              <p className="text-center text-gray-500 font-thin font-Anton mb-0 py-6 text-sm cursor-pointer">
                Or Register With
              </p>
            
              <SocialButton/>

              <p className="text-center text-gray-500 font-thin font-Anton mb-0 py-6 text-sm">
                Already Have An Account? <span className="text-primary font-medium" >Sign in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ThemeBox />
    </>
  );
}
