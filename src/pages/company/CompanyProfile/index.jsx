import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

// icons
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { TbEdit } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";

export default function index() {
  return (
    <div className="compnay_profile_detail">
      <div className="mb-4">
        <h2 className="dark:text-white text-xl font-semibold mb-0 pb-0 leading-[14px]">
          Compnay Profile
        </h2>
        <span className="text-[13px] dark:text-slate-500">
          Manage your company information and profile details.
        </span>
      </div>
      <div className="card py-5 px-5 ">
        <div className="flex items-center justify-between border-b border-slate-900 pb-5 mb-5">
          <div className="flex items-center gap-5 ">
            <div className="bg-crmDarkbg2 rounded-xl w-18 h-18 flex p-4 justify-center items-center">
              <img src="/img/c_logo/slack.png" className="w-full" />
            </div>
            <div>
              <h2 className="dark:text-white text-[22px] font-semibold">
                Jeboz Solutoins
              </h2>
              <div className="flex items-center gap-1 ">
                <a href="#" className="text-primary/70 font-normal text-sm">
                  www.jebozsolutions.com
                </a>
                <span className="text-primary/50 text-lg relative bottom-[1px]">
                  <LiaExternalLinkAltSolid />
                </span>
              </div>
            </div>
          </div>
          <div className="dark:text-primary flex  items-center gap-2" >
            <TbEdit/>
            <span className="text-base font-Nunito!" >Edit Profile</span>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <div className="w-full">
            <div className="heading">Company Information</div>
            <ul>
              <li className="">
                <span className="font-light"> Company Name </span>
                <span className="font-semibold"> Company Name </span>
              </li>
              <li className="">
                <span className="font-light"> Industry </span>
                <span className="font-semibold"> Software Development </span>
              </li>
              <li className="">
                <span className="font-light"> Company Size </span>
                <span className="font-semibold"> 11–50 Employees </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <div className="heading">Contact Information</div>
            <ul>
              <li className="">
                <span className="font-light"> Email </span>
                <span className="font-semibold"> contact@gmail.com </span>
              </li>
              <li className="">
                <span className="font-light"> Phone </span>
                <span className="font-semibold"> +92 300 1234567 </span>
              </li>
              <li className="">
                <span className="font-light"> Website </span>
                <span className="font-semibold"> www.alphatech.com </span>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <div className="heading">Location</div>
            <ul className="">
              <li className="">
                <span className="font-light"> Country </span>
                <span className="font-semibold"> Pakistan </span>
              </li>
              <li className="">
                <span className="font-light"> City </span>
                <span className="font-semibold"> Karachi </span>
              </li>
              <li className="">
                <span className="font-light"> Address </span>
                <span className="font-semibold"> Shahrah-e-Faisal </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full">
          <div className="heading">About</div>
          <p className="dark:text-white! text-[14px] leading-6 font-light py-4 px-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc
          </p>
        </div>
        <div className="w-full">
          <div className="heading">Soicals Links</div>
          <div className="flex px-3 py-3 items-end gap-10">
            <a
              href="#"
              className="text-slate-400 text-sm flex items-center gap-2
            "
            >   
             <div className="dark:bg-primary/50 size-[6px] rounded-full"></div>
              www.facebook.com/compnayName
            </a>
            <a
              href="#"
              className="text-slate-400 text-sm
            "
            >
              www.instagram.com/compnayName
            </a>
            <a
              href="#"
              className="text-slate-400 text-sm
            "
            >
              www.x.com/compnayName
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
