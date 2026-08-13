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
  }
])

  return (
    <div className='dark:text-white'>
      <div className=''>
        <ul className='grid lg:grid-cols-4 grid-cols-1 gap-5' >
          {
            topCard.map((item,index)=>(
              <li className='flex items-center gap-5 border border-gray-200 dark:border-crmDarkbg1 bg-white dark:bg-crmDarkbg1  rounded-lg px-5 pt-2 pb-4' >
              <div className='flex items-center gap-3'>
                  <div className={`flex gap-3  ${item.iconColor} ${item.iconColor} size-10 flex items-center justify-center rounded-full text-lg`}>
                {
                    item.icon
                  }
                  </div>
              </div>
              <div>
                <p className=' 4xl:text-3xl text-2xl font-medium leading-normal' >{item.count}+</p>
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
