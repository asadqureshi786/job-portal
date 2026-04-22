import React from 'react'

export default function Header() {
  return (
   <header className="py-5" >
     <div className='container'>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-30">
                <a href="" className="logo text-2xl">
                    <span className='font-bold' >Hire</span>
                    <span className='text-primary' >Akho.</span>
                </a>
                <ul className='flex items-center gap-5 [&_a]:text-base [&_a]:hover:text-primary font-normal text-slate-800 [&_a]:transition-all ' >
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Find Job</a>
                    </li>
                    <li>
                        <a href="">Resources</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   </header>
  )
}
