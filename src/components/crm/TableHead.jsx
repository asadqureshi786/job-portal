import React from 'react'

// icons
import { VscSearch } from "react-icons/vsc";


export default function TableHead({title,subText,children}) {
  return (
    <div className='flex justify-between items-center mb-3' >
        <div>
            <h2 className='dark:text-white text-xl mb-0 pb-0 font-bold font-Inter! leading-[22px]'>{title}</h2>
            <p className='text-[13px] dark:text-slate-400! text-slate-600' >{subText}</p>
        </div>
        <div className='flex items-center gap-5'>
          {children}
          <div>
            <div className='flex items-center flex-row-reverse gap-3 border-[2px] bg-crmDarkbg1 dark:text-gray-400 px-4 py-1.5 border-gray-800 rounded-lg' >
                <input className=" text-[15px]   focus:outline-0" placeholder='Search' />
                <span className='text-gray-600' ><VscSearch/></span>
            </div>
          </div>
        </div>
    </div>
  )
}
