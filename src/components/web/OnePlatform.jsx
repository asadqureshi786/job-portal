import { useState } from "react";

// icons
import { GrAnnounce } from "react-icons/gr";
import { BiCodeAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { VscGoToSearch } from "react-icons/vsc";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

export default function OnePlatform() {
  const list = [
    {
      icon: <GrAnnounce />,
      title: "Marketing",
      count: "58",
    },
    {
      icon: <BiCodeAlt />,
      title: "Development",
      count: "45",
    },
    {
      icon: <MdDesignServices />,
      title: "UI/UX",
      count: "28",
    },
    {
      icon: <VscGoToSearch />,
      title: "Human Reserch",
      count: "120",
    },
    {
      icon: <MdOutlinePrivacyTip />,
      title: "Security",
      count: "29",
    },
    {
      icon: <LuBriefcaseBusiness />,
      title: "Business",
      count: "101",
    },
    {
      icon: <MdManageHistory />,
      title: "Management",
      count: "101",
    },
    {
      icon: <RiMoneyDollarCircleLine />,
      title: "Finance",
      count: "25",
    },
  ];

  return (
    <section className="web bg-slate-100">
      <div className="container">
        <div className="w-8/12 mx-auto text-center">
          <h2 className="section-heading">
            {" "}
            One Platform
            <span className="g-text"> Many Solutions</span>
          </h2>
          <p className="section-desc">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-5 mt-10">
          {list.map((item, index) => (
            <div className="flex items-center bg-white transition-all hover:bg-primary group rounded-full px-3 pe-5 py-2 justify-between w-full">
              <div className="flex items-center  gap-4">
                <div className="bg-gray-200 group-hover:bg-white transition-all rounded-full p-4 flex justify-center items-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-900 font-medium group-hover:text-white transition-all">
                    {item.title}
                  </p>
                  <span className="text-gray-600 group-hover:text-white transition-all">
                    {item.count}
                  </span>
                </div>
              </div>
              <a
                href=""
                className="text-[20px] group-hover:text-white transition-all"
              >
                <IoIosArrowForward />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
