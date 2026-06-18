import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

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
                  <span className="text-amber-500 text-xs">
                    <FaPlay />
                  </span>
                </span>
              </div>
              <p className="text-[15px] font-semibold text-black">
                Inclusive workplace for all.
              </p>
            </div>

            <h1 className="4xl:text-7xl lg:text-6xl font-semibold text-black dark:text-white">
              {" "}
              <span className="g-text">Find Jobs</span> Where{" "}
              <br className="lg:inline-block hidden" /> Diversity Thrives
            </h1>
            <p className="4xl:text-lg text-base mt-4">
              Search for roles in organizations that value diversity and{" "}
              <br className="lg:inline-block hidden" /> inclusion that align
              with your values.
            </p>

            <div className="flex items-center mt-5 gap-2 lg:flex-row flex-col">
              <div className="bg-slate-100 dark:bg-darkbg1 rounded-full text-slate-800 dark:text-slate-300 px-5 pt-2.5 pb-3  w-full grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-[20px]! text-gray-600">
                    <FiSearch />
                  </span>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className="relative left-2 border-0 focus:border-0 focus:outline-none focus:shadow-none w-[95%]"
                  />
                </div>
                <div className="flex items-center relative">
                  <span className="text-[20px]! text-gray-600">
                    <IoLocationOutline />
                  </span>
                  <input
                    type="text"
                    placeholder="Location"
                    className="relative left-2 text-slate-800 dark:text-slate-300 border-0 focus:border-0 focus:outline-none focus:shadow-none w-[85%] pe-4"
                  />
                  <div className="text-[20px]! text-gray-600">
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
              <button className="bg-primary  hover:bg-secondary w-max  whitespace-pre cursor-pointer text-white px-6 py-2.5 rounded-full transition-all flex items-center gap-1">
                Search{" "}
                <span>
                  <FaCircleArrowRight />
                </span>{" "}
              </button>
            </div>

            <div className="mt-10">
              <p className="text-base">
                Several companies are opening vacancies for diverse talent.
              </p>
              <img
                src="/img/companies-group.png"
                alt="Diverse Talent"
                className="w-45 mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
