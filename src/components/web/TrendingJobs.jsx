import React from "react";
import { useState } from "react";

// icons
import { FaStar } from "react-icons/fa6";

export default function TrendingJobs() {
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
        <div className="grid lg:grid-cols-4 gap-5 mt-10">
          {jobs.map((item, index) => (
            <div className="border border-slate-200 group dark:border-slate-700 rounded-xl p-4 hover:bg-slate-100 dark:bg-darkbg1 dark:hover:bg-inherit transition-all">
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
                <h3 className="font-Rubik! 4xl:text-[22px] text-lg font-semibold dark:text-darktext1">
                  {item.title}
                </h3>
                <p className="lg:text-base font-normal text-slate-600! dark:text-darktext2! leading-5.5 mt-1.5">
                  {item.desc.substr(0, 70)}...
                </p>
                <div className="border border-sky-300 rounded-md w-fit text-xs text-sky-600 mt-4 bg-sky-100 px-2 py-0.5">
                  {item.type}
                </div>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center gap-2 dark:text-darktext1">
                  <h3 className="font-Rubik! 4xl:text-[22px] text-lg font-semibold">
                    {item.starting_range}K
                  </h3>
                  <h3 className="font-Rubik! 4xl:text-[22px] text-lg font-semibold">
                    {" "}
                    -{" "}
                  </h3>
                  <h3 className="font-Rubik! 4xl:text-[22px] text-lg font-semibold">
                    {item.end_range}K/m
                  </h3>
                </div>
                <button className="btn bg-primary/30 dark:group-hover:bg-darkbg1 text-primary px-4 py-1.5 rounded-md hover:bg-primary transition-all hover:text-white cursor-pointer">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-15" >
          <button className="btn btn-border" >Find More Jobs</button>
        </div>

      </div>
    </section>
  );
}
