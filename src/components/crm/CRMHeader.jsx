import React from 'react'

export default function CRMHeader() {
  return (
    <div   style={{
    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
  }} className='bg-white dark:bg-crmBodyHeader border-b border-white dark:border-gray-900 h-16 flex items-center justify-between px-5'>
       <div className='flex flex-col gap-0' >
           <h1 className=' text-2xl font-bold' >Welcome Back</h1>
           <div className='text-[13px]' >Lets talent awaits, Let's hire smart!</div>
        </div>
    </div>
  )
}
