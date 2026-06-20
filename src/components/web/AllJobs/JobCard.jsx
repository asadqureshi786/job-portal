import React from "react";
import ApplySidebar from "./ApplySidebar";

import { FaStar } from "react-icons/fa6";
import { GoClock } from "react-icons/go";



export default function JobCard({ list }) {
  return (
    <>
      {list.map((item, index) => (
        <div key={index} className="border border-slate-200 group dark:border-slate-700 rounded-xl p-4 hover:bg-slate-100 dark:bg-darkbg1 dark:hover:bg-inherit transition-all">
          <div className="flex items-center gap-5">
            <div className="bg-gray-100 dark:bg-black dark:group-hover:bg-darkbg1 rounded-xl p-4 flex justify-center items-center">
              <img src={item.logo} className="company-logo w-10" />
            </div>
            <div>
              <p className="4xl:text-lg text-base font-semibold text-black! dark:text-darktext1!">
                {item.name}
              </p>
              <p className="lg:text-base font-normal text-slate-500! relative bottom-[1px] py-0.5">
                {item.location}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">
                  <FaStar />
                </span>
                <p className="lg:text-sm font-normal text-slate-500!">
                  {item.rating}K reviews
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="font-Rubik! 4xl:text-[22px] text-lg font-semibold text-gray-600 dark:text-darktext1">
              {item.title}
            </h3>
            <p className="lg:text-base font-normal text-slate-600! dark:text-darktext2! leading-5.5 mt-1.5">
              {item.desc.substr(0, 70)}...
            </p>
            <div className="flex items-center gap-2">
              <div className="border border-sky-300 dark:border-slate-700 dark:bg-darkbg1 rounded-md w-fit text-xs text-sky-600 mt-4 bg-sky-100 px-2 py-0.5">
                <span>Type :</span> {item.type}
              </div>
              <div className="flex items-center gap-2 border border-gray-300 dark:border-slate-700 dark:bg-darkbg1 rounded-md w-fit text-xs text-slate-500 mt-4 bg-gray-100 px-2 py-0.5">
                <span>
                  <GoClock />
                </span>
                {item.posted_time}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-2 ">
              <h3 className="font-Rubik! 4xl:text-[22px] text-lg font-semibold  text-black dark:text-darktext1">
                {item.starting_range}K
              </h3>
              <h3 className="font-Rubik! 4xl:text-[22px] text-lg font-semibold text-black dark:text-darktext1">
                {" "}
                -{" "}
              </h3>
              <h3 className="font-Rubik! 4xl:text-[22px] text-lg font-semibold text-black dark:text-darktext1">
                {item.end_range}K/m
              </h3>
            </div>
            <ApplySidebar data={item} />
          </div>
        </div>
      ))}
    </>
  );
}
