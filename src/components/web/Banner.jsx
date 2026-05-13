import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";


export default function Banner() {
    return (
        <div className="4xl:min-h-[80vh] min-h-[calc(100dvh-86px)] relative flex items-center">
            <div className="container ">
            <div className="flex items-center justify-between">
                <div className="lg:w-6/12">
                    <div className="flex items-center gap-3 mb-6 ">
                        <div class="relative flex size-6">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 "></span>
                            <span class="relative inline-flex items-center justify-center size-6 rounded-full border border-amber-400 bg-amber-300">
                                <span className='text-amber-500 text-xs' ><FaPlay /></span>
                            </span>
                        </div>
                        <p className='text-[15px] font-semibold text-black' >Inclusive workplace for all.</p>
                    </div>

                    <h1 className='4xl:text-7xl lg:text-6xl font-semibold text-black' > <span className='g-text' >Find Jobs</span> Where <br className='lg:inline-block hidden' /> Diversity Thrives</h1>
                    <p className='4xl:text-lg text-base mt-4' >Search for roles in organizations that value diversity and <br className='lg:inline-block hidden' /> inclusion that align with your values.</p>

                    <div className="flex items-center mt-5 gap-2">
                        <div className="bg-slate-100 rounded-full px-5 pt-2.5 pb-3 w-[50%]">
                            <input type="text" placeholder='Enter Your Email' className='text-slate-800 border-0 focus:border-0 focus:outline-none focus:shadow-none'  />
                        </div>
                        <button className='bg-primary  hover:bg-secondary w-max whitespace-pre cursor-pointer text-white px-6 py-3 rounded-full transition-all flex items-center gap-1' >Get Started <span><FaCircleArrowRight /></span> </button>
                    </div>

                    <div className='mt-10' >
                        <p className='text-base' >Several companies are opening vacancies for diverse talent.</p>
                        <img src="/img/companies-group.png" alt="Diverse Talent" className='w-45 mt-4' />
                    </div>

                </div>
                {/* <div className="lg:w-5/12">
                    <div className='relative bg-red-600'>
                        <img src='/img/banner-man.png' className='w-[75%] absolute bottom-0 -left-25' />
                    </div>
                </div> */}
            </div>
        </div>
        </div>
    )
}
