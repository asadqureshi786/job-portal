import React from "react";
import { useState } from "react";

import { FaPlay } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { GoCheck } from "react-icons/go";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

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

  const expLevel = [
    "Internship",
    "Entry level",
    "Associate",
    "Mid-Senior level",
    "Director",
    "Executive",
  ];

 const jobCategories = [
  { id: 1, name: "Software Development", slug: "software-development" },
  { id: 2, name: "Web Development", slug: "web-development" },
  { id: 3, name: "Mobile App Development", slug: "mobile-app-development" },
  { id: 4, name: "UI/UX Design", slug: "ui-ux-design" },
  { id: 5, name: "Graphic Design", slug: "graphic-design" },
  { id: 6, name: "Digital Marketing", slug: "digital-marketing" },
  { id: 7, name: "SEO Specialist", slug: "seo-specialist" },
  { id: 8, name: "Content Writing", slug: "content-writing" },
  { id: 9, name: "Data Science", slug: "data-science" },
  { id: 10, name: "Data Analyst", slug: "data-analyst" },
  { id: 11, name: "Cyber Security", slug: "cyber-security" },
  { id: 12, name: "DevOps Engineer", slug: "devops-engineer" },
  { id: 13, name: "Project Management", slug: "project-management" },
  { id: 14, name: "Customer Support", slug: "customer-support" },
  { id: 15, name: "Sales & Marketing", slug: "sales-marketing" },
  { id: 16, name: "Human Resources", slug: "human-resources" },
  { id: 17, name: "Finance & Accounting", slug: "finance-accounting" },
  { id: 18, name: "Business Analyst", slug: "business-analyst" },
  { id: 19, name: "AI / Machine Learning", slug: "ai-machine-learning" },
  { id: 20, name: "Quality Assurance (QA)", slug: "quality-assurance" }
];
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
      <div className="border-t border-slate-900 pt-15 pb-15">
        <div className="container">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3 text-white">
              <div className="h-full w-full bg-darkbg1 sticky top-0 rounded-xl p-4">
                <div className="flex justify-between items-center mb-7">
                  <p className="text-sm">Filters</p>
                  <a href="#" className="text-primary text-sm">
                    Clear All
                  </a>
                </div>

                <div className="side-filter">
                  <div className="parent">
                    <p className="p-head">Sort By</p>
                    <ul className="list">
                      <li className="item radio-to grid">
                        <label>
                          <input type="radio" name="sort by" />
                          <div></div>
                          Most recent
                        </label>
                        <label>
                          <input type="radio" name="sort by" />
                          <div></div>
                          Most relevant
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="parent">
                    <p className="p-head">Date Posted</p>
                    <ul className="list">
                      <li className="item radio-to grid">
                        <label>
                          <input type="radio" name="date-posted" />
                          <div></div>
                          Any Time
                        </label>
                        <label>
                          <input type="radio" name="date-posted" />
                          <div></div>
                          Past Month
                        </label>
                      </li>
                      <li className="item radio-to grid">
                        <label>
                          <input type="radio" name="date-posted" />
                          <div></div>
                          Past Week
                        </label>
                        <label>
                          <input type="radio" name="date-posted" />
                          <div></div>
                          Past 24 hours
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div className="parent">
                    <p className="p-head">Experience Level</p>
                    <ul className="list">
                      {expLevel.map((item, index) => (
                        <li className="item checkbox-to">
                          <label>
                            <input type="checkbox" name="date-posted" />
                            <div>
                              <GoCheck className="check" />
                            </div>
                            {item}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Job Category */}
                   <div className="parent">
                    <p className="p-head">Job Category</p>
                    <ul className="list webkit-scroll max-h-70 overflow-auto">
                      {jobCategories.map((item, index) => (
                        <li className="item checkbox-to">
                          <label>
                            <input type="checkbox" name="date-posted" />
                            <div>
                              <GoCheck className="check" />
                            </div>
                            {item.name}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-span-9 text-white">
              <div className="grid lg:grid-cols-3 gap-5">
                <JobCard list={jobs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
