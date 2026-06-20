import React from "react";
import { useState } from "react";
import OtherWebBanner from "../components/web/OtherWebBanner";
export default function Blogs() {
 const [blogs, setBlogs] = useState([
  {
    img_path: "/img/blogs/1.jpg",
    name: "Olivia Rhye",
    date: "20 Jan 2020",
    title: "Top 10 Remote Jobs You Can Apply Today",
    desc: "Discover high-paying remote job opportunities across tech, marketing, and design fields that you can apply for instantly.",
    tags: ["design", "research", "interviews"],
  },
  {
    img_path: "/img/blogs/2.jpg",
    name: "Olivia Rhye",
    date: "20 Jan 2020",
    title: "How to Write a Resume That Gets Noticed",
    desc: "Learn how to create a professional resume that stands out and increases your chances of landing interviews.",
    tags: ["design", "research", "interviews"],
  },
  {
    img_path: "/img/blogs/3.jpg",
    name: "Olivia Rhye",
    date: "20 Jan 2020",
    title: "Interview Tips to Land Your Dream Job",
    desc: "Prepare for your next interview with proven strategies and common question breakdowns from industry experts.",
    tags: ["design", "research", "interviews"],
  },
  {
    img_path: "/img/blogs/4.jpg",
    name: "Olivia Rhye",
    date: "20 Jan 2020",
    title: "Freelancing vs Full-Time Jobs: What to Choose?",
    desc: "Understand the pros and cons of freelancing and full-time employment to make the right career decision.",
    tags: ["design", "research", "interviews"],
  },
  {
    img_path: "/img/blogs/5.jpg",
    name: "Olivia Rhye",
    date: "20 Jan 2020",
    title: "Top Skills Employers Look for in 2026",
    desc: "Stay ahead in the job market by learning the most in-demand skills companies are actively hiring for.",
    tags: ["design", "research", "interviews"],
  },
  {
    img_path: "/img/blogs/6.jpg",
    name: "Olivia Rhye",
    date: "20 Jan 2020",
    title: "How to Crack Your First Tech Job",
    desc: "A step-by-step guide for fresh graduates to land their first job in the tech industry with confidence.",
    tags: ["design", "research", "interviews"],
  },
]);
  return (
    <>
      <OtherWebBanner
        heading="Blogs"
        desc=" Explore career tips, job market insights, and hiring updates to boost your growth."
      />

      <div className="my-20" >
        <div className="container">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-5 gap-y-10">
            {blogs.map((item, index) => (
              <div className="group">
                <img src={item.img_path } className="rounded-xl w-full 4xl:h-80 h-70 object-cover transition-all group-hover:grayscale-100" />
                <div className="flex items-center gap-2 text-gray-600 dark:text-darktext2 text-[13px] lg:mt-6 mt-4 lg:mb-4 mb-2">
                    <span>{item.name}</span> 
                    <div className="size-1.25 rounded-full bg-gray-300"></div>
                    <span>{item.date}</span>
                </div>
                <h3 className="text-black dark:text-darktext1 text-lg mb-2 font-Rubik! cursor-pointer leading-5.75 transition-all hover:underline font-medium" >{item.title.slice(0,50)}</h3>
                <p className="text-sm dark:text-darktext2!" >{item.desc}</p>
                <ul className="flex items-center gap-2 mt-6" >
                    {
                        item.tags.map((tag,index)=>(
                            <li>
                                <p className="dark:text-white text-xs border dark:border-slate-800 border-slate-300 rounded-full min-w-20 text-center py-1 pb-1 capitalize w-fit" >{tag}</p>
                            </li>
                        ))
                    }
                    <li></li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
