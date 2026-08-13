import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

// icons
import { IoHomeOutline } from "react-icons/io5";
import { RiPhoneFindLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { PiCubeDuotone } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

import { SlArrowLeft } from "react-icons/sl";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function CRMSidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const sideItem = [
    {
      title: "Dashboard",
      icon: <IoHomeOutline />,
      url: "/dashboard",
    },
    {
      title: "Jobs",
      icon: <RiPhoneFindLine />,
      url: "/jobs",
    },
    {
      title: "Applicants",
      icon: <SlPeople />,
      url: "/applicants",
    },
    {
      title: "Company Porfile",
      icon: <PiCubeDuotone />,
      url: "/company-profile",
    },
    {
      title: "Settings",
      icon: <IoSettingsOutline />,
      url: "/settings",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 transition-all duration-300 ${isSidebarOpen ? "4xl:w-75 lg:w-65" : "4xl:w-20 lg:w-20"} z-99  bg-crmDarkbg1 border-r border-black dark:border-gray-900 `}
    >
      <div
        to="/company"
        className={`logo relative 4xl:text-[26px] text-3xl ${isSidebarOpen ? '4xl:px-7 px-4 justify-between' : 'text-center justify-center'}  h-16 flex items-center  border-b border-gray-900 w-full`}
      >
        {isSidebarOpen ? (
          <Link to="/company" className="font-bold text-white">
            Hire<span className="text-primary!">Akho.</span>
          </Link>
        ) : (
          <Link to="/company" className="font-bold text-white">
            H<span className="text-primary!">A</span>
          </Link>
        )}
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`absolute top-1/2 -translate-y-1/2 ${isSidebarOpen ? "right-[-5%]" : "right-[-18%]"} bg-primary/80 border border-primary  hover:bg-primary/60 transition-all duration-300 cursor-pointer flex items-center justify-center 4xl:size-7 size-6 rounded-full text-white`}
        >
          {!isSidebarOpen ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
        </div>
      </div>

      <div className="sideBar mt-7 px-4   ">
        <ul className="4xl:space-y-2 space-y-1.5">
          {sideItem.map((item, index) => (
            <li key={index} className={`${isSidebarOpen ? "" : "text-center"}`}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  `flex items-center ${isSidebarOpen ? "4xl:px-4 px-3" : "justify-center mx-auto 4xl:px-3 px-3 w-fit"} py-2  rounded-lg gap-3 4xl:text-base text-[14px] transition-all ${
                    isActive
                      ? "text-white bg-cHoverDbg"
                      : "text-white hover:text-white hover:bg-cHoverDbg"
                  }`
                }
              >
                <span className="text-sm">{item.icon}</span>
                {isSidebarOpen && <span className="text-sm">{item.title}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
