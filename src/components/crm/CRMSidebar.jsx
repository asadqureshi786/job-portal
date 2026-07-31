import React from "react";
import { Link } from "react-router-dom";

// icons
import { IoHomeOutline } from "react-icons/io5";


export default function CRMSidebar() {
  const sideItem = [
    {
      title : 'Dashboard',
      icon : <IoHomeOutline/>,
      url : '/dashboard',
    },
    {
      title : 'Dashboard',
      icon : <IoHomeOutline/>,
      url : '/dashboard',
    },
    {
      title : 'Dashboard',
      icon : <IoHomeOutline/>,
      url : '/dashboard',
    },
    {
      title : 'Dashboard',
      icon : <IoHomeOutline/>,
      url : '/dashboard',
    },
    {
      title : 'Dashboard',
      icon : <IoHomeOutline/>,
      url : '/dashboard',
    },
    {
      title : 'Dashboard',
      icon : <IoHomeOutline/>,
      url : '/dashboard',
    },
    {
      title : 'Dashboard',
      icon : <IoHomeOutline/>,
      url : '/dashboard',
    },
  ]
  return (
    <div className="fixed top-0 left-0 bottom-0 w-65 bg-black px-7 py-4 border-r border-black dark:border-primary">
      <Link to="/company" className="logo text-[30px] ">
        <span className="font-bold text-white ">Hire</span>
        <span className="text-primary ">Akho.</span>
      </Link>

      <div className="sideBar mt-7">
        <ul className="space-y-4" >
          {
            sideItem.map((item,index)=>(
              <li className="text-white flex items-center gap-3 cursor-pointer transition-all hover:text-primary   ">
                <span>{item.icon}</span>
                {item.title}</li>
            ))
          }
        </ul>
      </div>

    </div>
  );
}
