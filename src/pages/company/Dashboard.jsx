import React from 'react'
import { useState } from 'react';
// icons
import { FaBriefcase } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";

export default function Dashboard() {

  const [topCard, setTopCards] = useState([
  {
    title: 'New Applications',
    icon: <FaBriefcase />,
    count: 12,
    iconColor: 'text-blue-500 bg-blue-100 dark:bg-gray-800'
  },
  {
    title: 'Under Review',
    icon: <FaBriefcase />,
    count: 18,
    iconColor: 'text-green-500 bg-green-100 dark:bg-gray-800'
  },
  {
    title: 'Shortlisted',
    icon: <FaRegClock />,
    count: 4,
    iconColor: 'text-orange-500 bg-orange-100 dark:bg-gray-800'
  },
  {
    title: 'Offers Sent',
    icon: <MdPeopleAlt />,
    count: 156,
    iconColor: 'text-purple-500 bg-purple-100 dark:bg-gray-800'
  },

])

  return (
    <div className='dark:text-white'>
      <div className=''>
        <ul className='grid lg:grid-cols-4 grid-cols-1 gap-5' >
          {
            topCard.map((item,index)=>(
              <li className='card relative flex items-center gap-5 border border-primary/15! px-5! pt-4! pb-4!' >
                {/* <div className='absolute top-0 left-0 w-[150px] h-[1px] bg-gradient-to-l from-transparent via-white to-transparent animate-border-beams' ></div> */}
              <div className='flex items-center gap-3'>
                  <div className={`flex gap-3  ${item.iconColor} ${item.iconColor} size-10 flex items-center justify-center rounded-full text-lg`}>
                {
                    item.icon
                  }
                  </div>
              </div>
              <div>
                <p className=' 4xl:text-3xl text-2xl font-medium ' >{item.count}+</p>
                <span className='text-gray-500 text-xs font-noraml whitespace-nowrap uppercase' >{item.title}</span>
              </div>
            </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
