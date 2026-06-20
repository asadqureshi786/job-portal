import React from "react";
import { useState } from "react";
import Header from "../components/web/Header";
import Footer from "../components/web/Footer";
import Banner from "../components/web/Banner";
import Trusted from "../components/web/Trusted";
import OnePlatform from "../components/web/OnePlatform";
import JobCard from "../components/web/AllJobs/JobCard";
import Counter from "../components/web/Counter";
import JobByLoction from "../components/web/JobByLoction";
import Faqs from "../components/web/Faqs";
// icons
import { MdStar } from "react-icons/md";
import { MdNightsStay } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

export default function Landing() {


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
      <Banner />
      <div className="container my-15">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <p className="text-base">
              <span className="font-medium text-primary!">&gt;100K+</span>{" "}
              <span className="font-semibold text-black! dark:text-gray-200!">
                People Join
              </span>
            </p>
            <div className="flex items-center [&_img]:rounded-full [&_img]:size-10 mt-3">
              <img
                src="/img/users/user1.jpg"
                className="border-2 border-white dark:border-slate-700 hover:-translate-y-2 transition-all"
              />
              <img
                src="/img/users/user2.png"
                className="relative -left-3 border-2 border-white dark:border-slate-700 hover:-translate-y-2 transition-all"
              />
              <img
                src="/img/users/user3.png"
                className="relative -left-6 border-2 border-white  dark:border-slate-700 hover:-translate-y-2 transition-all"
              />
              <img
                src="/img/users/user4.png"
                className="relative -left-9 border-2 border-white  dark:border-slate-700 hover:-translate-y-2 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-black dark:text-gray-200! text-sm font-medium">
                5.0
              </span>
              <div className="flex items-center gap-1 text-yellow-500">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="bg-slate-100 dark:bg-darkbg1 dark:border-slate-700 border border-white rounded-md p-5 text-center">
              <p className="text-black! dark:text-gray-200! text-4xl font-medium">
                86 <span className="text-primary">M+</span>
              </p>
              <p className="text-base">Availbale Jobs</p>
            </div>
            <div>
              <h2 className="text-gray-780 dark:text-gray-200 text-xl font-medium">
                Where Diversity Aligns <br className="lg:block hidden" /> with
                Possibilites
              </h2>
              <a className="text-primary font-medium mt-1.5 inline-block">
                &gt;Browse your experties
              </a>
            </div>
            <img src="/img/users/user1.jpg" className="rounded-[30px]" />
          </div>
        </div>
      </div>
      <Trusted />
      <OnePlatform />
      {/* Trending Job Section Start */}
      <section className="web">
        <div className="container">
          <div className="w-8/12 mx-auto text-center">
            <h2 className="section-heading">
              <span className="g-text">Trending</span> Jobs
            </h2>
            <p className="section-desc">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 mt-10">
            <JobCard list={jobs} />
          </div>

          <div className="flex justify-center mt-15">
            <button className="btn btn-border">Find More Jobs</button>
          </div>
        </div>
      </section>
      {/* Trending Job Section End */}
      <Counter />
      <JobByLoction />
      <Faqs />
    </>
  );
}
