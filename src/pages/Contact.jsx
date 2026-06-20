import React from "react";
import { MdOutlineMailOutline, MdEmail, MdLocationOn } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { SlArrowLeft } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

export default function Contact() {
  const conactItem = [
    {
      icon: <MdEmail />,
      label: "Email",
      data: "info@hireakho.com",
    },
    {
      icon: <BiSolidPhoneCall />,
      label: "Phone",
      data: "+1 (800) 123-4567",
    },
    {
      icon: <MdLocationOn />,
      label: "Location",
      data: "Silicon Valley, CA 94043 United States",
    },
  ];

  return (
    <>
      <div className="other-web-banner mb-0!">
        <div className="container">
          <div className="lg:w-10/12 mx-auto flex flex-col items-center">
            <h1 className="section-heading o-banner-heading ">Contact Us</h1>
            <p className="section-desc  text-center">
              Have questions or need assistance? Get in touch with our team and
              we'll be happy to help.
            </p>
          </div>
        </div>
        <div className="border-b dark:border-slate-900 border-slate-200 pt-15 pb-15"></div>
      </div>
      <div className="pt-10 pb-14">
        <div className="container">
          <div className="grid grid-cols-12 mt-5 ">
            <div className="lg:col-span-5 col-span-12">
              <span className="text-sm text-black dark:text-darktext2 flex items-center gap-2">
                {" "}
                <span>
                  <MdOutlineMailOutline />
                </span>{" "}
                Contact
              </span>
              <h2 className="text-[clamp(32px,3vw,60px)] leading-[1.1] text-black dark:text-darktext1 font-Rubik mb-4.5 mt-3">
                How can we help you today?
              </h2>
              <p className="pe-30">
                Our dedicated customer support teams is just a message or call
                away.
              </p>
              <ul className="space-y-5 mt-5">
                {conactItem.map((item, index) => (
                  <li className="text-white flex items-center gap-4">
                    <span className="relative text-primary text-xl">
                      {item.icon}
                    </span>
                    <div className="flex flex-col ">
                      <p className="text-darkbg1 text-sm">{item.label}</p>
                      <p className="dark:text-darktext1 text-base font-medium">
                        {item.data}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 col-span-12">
              <div className="lg:w-[90%] ms-auto lg:mt-0 mt-8">
                <div className="border border-slate-200 dark:border-slate-900 rounded-xl p-4  ">
                  <form className="md:py-6 py-1 md:px-4 px-1">
                    <div className="group">
                      <label>Full Name</label>
                      <input type="text" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="group">
                        <label>Email Address</label>
                        <input type="text" />
                      </div>
                      <div className="group">
                        <label>Phone Number</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="group">
                      <label>Subject</label>
                      <div className="relative" >
                         <select name="subject" className="w-full" id="subject">
                        <option value="">Select Subject</option>
                        <option value="general_inquiry">General Inquiry</option>
                        <option value="job_application_issue">
                          Job Application Issue
                        </option>
                        <option value="employer_support">
                          Employer Support
                        </option>
                        <option value="account_issue">Account Issue</option>
                        <option value="report_a_job">Report a Job</option>
                        <option value="technical_support">
                          Technical Support
                        </option>
                        <option value="other">Other</option>
                      </select>
                        <span className="absolute top-1/2 -translate-1/2 right-2 -rotate-90 text-sm dark:text-darktext1" >
                          <SlArrowLeft/>
                        </span>
                      </div>
                     
                    </div>
                    <div className="group mb-0!">
                      <label>Message</label>
                      <textarea className="" rows={5}></textarea>
                    </div>
                    <div className="flex justify-end mt-5">
                      <button className="text-center md:w-fit w-full transition-all hover:bg-primary/60 cursor-pointer px-10 py-2.5 bg-primary font-normal text-white rounded-lg">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
