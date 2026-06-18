import React from "react";
import { useState } from "react";

import { FaPlay } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

// component
import JobCard from "../components/web/JobCard";

export default function FindJob() {
  const [jobs, setJobs] = useState([
    {
      logo: "/img/c_logo/google.png",
      name: "Microsoft",
      location: "New York, USA",
      rating: "2.5",
      title: "Dot Net Core",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      type: "Fulltime",
      posted_time: "10 hours ago",
      starting_range: "35",
      end_range: "55",
    },
    {
      logo: "/img/c_logo/slack.png",
      name: "Microsoft",
      location: "New York, USA",
      rating: "2.5",
      title: "Frontend Developer",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      type: "Fulltime",
      posted_time: "10 hours ago",
      starting_range: "35",
      end_range: "55",
    },
    {
      logo: "/img/c_logo/microsoft.png",
      name: "Microsoft",
      location: "New York, USA",
      rating: "2.5",
      title: "Dot Net Core",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      type: "Fulltime",
      posted_time: "10 hours ago",
      starting_range: "35",
      end_range: "55",
    },
    {
      logo: "/img/c_logo/figma.png",
      name: "Microsoft",
      location: "New York, USA",
      rating: "2.5",
      title: "Dot Net Core",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      type: "Fulltime",
      posted_time: "10 hours ago",
      starting_range: "35",
      end_range: "55",
    },
    {
      logo: "/img/c_logo/slack.png",
      name: "Microsoft",
      location: "New York, USA",
      rating: "2.5",
      title: "Frontend Developer",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      type: "Fulltime",
      posted_time: "10 hours ago",
      starting_range: "35",
      end_range: "55",
    },
    {
      logo: "/img/c_logo/google.png",
      name: "Microsoft",
      location: "New York, USA",
      rating: "2.5",
      title: "Dot Net Core",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      type: "Fulltime",
      posted_time: "10 hours ago",
      starting_range: "35",
      end_range: "55",
    },
    {
      logo: "/img/c_logo/figma.png",
      name: "Microsoft",
      location: "New York, USA",
      rating: "2.5",
      title: "Dot Net Core",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      type: "Fulltime",
      posted_time: "10 hours ago",
      starting_range: "35",
      end_range: "55",
    },
    {
      logo: "/img/c_logo/microsoft.png",
      name: "Microsoft",
      location: "New York, USA",
      rating: "2.5",
      title: "Dot Net Core",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      type: "Fulltime",
      posted_time: "10 hours ago",
      starting_range: "35",
      end_range: "55",
    },
  ]);

  return (
    <>
      <div className="other-web-banner mt-40 mb-30">
        <div className="container">
          <div className="lg:w-10/12 mx-auto flex flex-col items-center">
            <h1 className="section-heading text-6xl! pb-3 ">Browse All Jobs</h1>
            <p className="section-desc">
              Explore all available job's openings across Pakistan.
            </p>

            {/* Job Search Section Start */}
            <div className="grid grid-cols-12 mt-10 gap-2 w-full">
              <div className="lg:col-span-10 col-span-12 bg-slate-100 dark:bg-darkbg1 rounded-full text-slate-800 dark:text-slate-300 px-5 pt-4 pb-4.5  w-full grid grid-cols-2 gap-4">
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
              <div className="lg:col-span-2 col-span-12 h-full">
                <button className="bg-primary  hover:bg-secondary w-full h-full   justify-center  whitespace-pre cursor-pointer text-white px-6 py-2.5 rounded-full transition-all flex items-center gap-1">
                  Search{" "}
                  <span>
                    <FaCircleArrowRight />
                  </span>{" "}
                </button>
              </div>
            </div>
            {/* Job Search Section End */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 text-white">
            <div className="h-fit w-full bg-darkbg1 sticky top-0 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <p>Filters</p>
                <a href="#" className="text-primary" >Clear All</a>
              </div>
            </div>
          </div>
          <div className="col-span-9 text-white">
            <div className="grid lg:grid-cols-2 gap-5">
              <JobCard list={jobs} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
